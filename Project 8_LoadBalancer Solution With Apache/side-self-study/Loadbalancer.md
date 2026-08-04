
# Load Balancing Concepts

## 1. What is Load Balancing?

**Load balancing** is the process of distributing incoming network traffic across multiple servers or resources.

The main goals are:

- **High availability** — if one server fails, traffic can go to another.
- **Scalability** — distribute traffic as the number of users increases.
- **Performance** — prevent one server from becoming overloaded.
- **Reliability** — continuously monitor servers and avoid unhealthy ones.

### Example

```text
                Users
                  |
                  v
          +---------------+
          | Load Balancer |
          +---------------+
            /      |      \
           v       v       v
       Server 1 Server 2 Server 3
```

Instead of all users connecting directly to Server 1, the load balancer distributes requests across all three servers.

---

## 2. Common Load Balancing Concepts

### Round Robin

Requests are distributed sequentially between servers.

```text
Request 1 -> Server 1
Request 2 -> Server 2
Request 3 -> Server 3
Request 4 -> Server 1
```

Useful when servers have similar capacity.

### Least Connections

The load balancer sends the new request to the server with the fewest active connections.

```text
Server 1 -> 20 connections
Server 2 -> 5 connections
Server 3 -> 12 connections

New request -> Server 2
```

Useful when requests have different processing times.

### Health Checks

A load balancer regularly checks whether backend servers are healthy.

```text
Load Balancer
     |
     +---- Server 1 -> Healthy
     |
     +---- Server 2 -> Unhealthy
     |
     +---- Server 3 -> Healthy
```

If Server 2 fails its health check, the load balancer stops sending traffic to it.

### Session Persistence

Also called **sticky sessions**.

The load balancer can keep a user's requests going to the same backend server.

```text
User A
  |
  v
Load Balancer
  |
  v
Server 1

User A's next request
  |
  v
Server 1
```

This can be useful for applications that store session information locally on the server.

---

## 3. Layer 4 Load Balancing (L4)

**Layer 4 load balancing** operates at the **Transport Layer** of the OSI model.

It primarily uses information such as:

- Source IP address
- Destination IP address
- Source port
- Destination port
- TCP/UDP protocol

It does **not** need to understand the actual application request.

### Example

A client connects to:

```text
10.0.1.10:443
```

An L4 load balancer can examine the TCP connection and forward it to one of several backend servers.

```text
             Client
                |
             TCP :443
                |
                v
        +---------------+
        |   L4 Network  |
        | Load Balancer |
        +---------------+
          /     |     \
         v      v      v
      Web 1   Web 2   Web 3
```

### Advantages

- Very fast
- Low latency
- Handles large amounts of traffic
- Can support TCP and UDP
- Does not need to inspect application content

### Limitation

Because it operates at Layer 4, it generally cannot make routing decisions based on HTTP information such as:

```text
URL: /api/users
Host: api.example.com
Cookie: session123
```

---

## 4. Layer 7 Load Balancing (L7)

**Layer 7 load balancing** operates at the **Application Layer**.

For web applications, it can understand protocols such as **HTTP and HTTPS**.

It can inspect application-level information such as:

- HTTP method
- URL/path
- Hostname
- HTTP headers
- Cookies
- Query parameters

### Example

A user requests:

```text
https://example.com/api/users
```

An L7 load balancer can route the request based on the URL:

```text
                    Client
                       |
                       v
               +---------------+
               | L7 Application|
               | Load Balancer |
               +---------------+
                  /         \
                 /           \
                v             v
        /api/* -> API       /web/* -> Web
                  servers       servers
```

For example:

```text
/api/users     -> API servers
/api/orders    -> API servers
/images/*      -> Image servers
/              -> Web servers
```

### Advantages

- Understands HTTP/HTTPS
- Can route based on URLs
- Can route based on hostnames
- Can use HTTP headers and cookies
- Supports application-aware routing

### Limitation

L7 processing requires more work than L4 because the load balancer must inspect application traffic.

---

## 5. L4 Network Load Balancer vs L7 Application Load Balancer

| Feature | L4 Network LB | L7 Application LB |
|---|---|---|
| OSI Layer | Layer 4 | Layer 7 |
| Main protocols | TCP/UDP | HTTP/HTTPS |
| Understands HTTP | No | Yes |
| URL-based routing | No | Yes |
| Host-based routing | No | Yes |
| Cookie-based routing | No | Yes |
| Performance | Very high | High |
| Latency | Very low | Higher than L4 |
| Application awareness | Low | High |
| Typical use | TCP/UDP workloads | Web applications |

---

## 6. AWS Example

AWS provides different types of Elastic Load Balancers.

### Network Load Balancer (NLB)

**Network Load Balancer (NLB)** operates primarily at **Layer 4**.

Example:

```text
Internet
   |
   v
NLB :443
   |
   +------ EC2 Web Server 1
   |
   +------ EC2 Web Server 2
   |
   +------ EC2 Web Server 3
```

It is suitable when you need high-performance TCP/UDP load balancing.

### Application Load Balancer (ALB)

**Application Load Balancer (ALB)** operates at **Layer 7**.

Example:

```text
Internet
    |
    v
ALB
    |
    +---- /api/* ------> API Servers
    |
    +---- /admin/* ----> Admin Servers
    |
    +---- /* ----------> Web Servers
```

This is useful for HTTP/HTTPS applications that require intelligent routing.

---

## 7. Simple Real-World Example

Suppose you operate an online store.

You have:

```text
Web Servers:
    Web-01
    Web-02

API Servers:
    API-01
    API-02
```

An **L7 Application Load Balancer** can inspect the URL:

```text
https://shop.example.com/
```

and send it to the web servers.

For:

```text
https://shop.example.com/api/products
```

it can route the request to the API servers.

```text
                         Users
                           |
                           v
                    +-------------+
                    | L7 ALB      |
                    +-------------+
                     /           \
                    /             \
              /*   v               v  /api/*
              Web Servers        API Servers
              /       \          /       \
           Web-01   Web-02    API-01   API-02
```

An L4 NLB would not normally make the `/api/products` decision because it does not inspect the HTTP URL at the application layer.

---

## 8. Key Difference to Remember

The easiest way to remember the difference:

> **L4 asks: "Where should this network connection go?"**

> **L7 asks: "What is this application request, and where should it go?"**

### L4

```text
TCP/UDP
   |
   v
Load Balancer
   |
   +---- Server 1
   +---- Server 2
   +---- Server 3
```

### L7

```text
HTTP Request
     |
     v
Load Balancer
     |
     +---- /api/* ----> API servers
     |
     +---- /images/* -> Image servers
     |
     +---- /* -------> Web servers
```

---

## 9. When Should You Use Each?

### Use L4 when:

- You need extremely high performance.
- You are balancing TCP or UDP traffic.
- The load balancer does not need to understand the application.
- You need low latency.
- You are running non-HTTP workloads.

**Example:** TCP database connections, gaming traffic, or other high-throughput TCP/UDP services.

### Use L7 when:

- You are running HTTP/HTTPS applications.
- You need URL-based routing.
- You need hostname-based routing.
- You need cookie/header-based routing.
- You want application-aware traffic management.

**Example:** A web application with separate frontend, API, and admin services.

---

## 10. Quick Summary

```text
                    LOAD BALANCING
                          |
             +------------+------------+
             |                         |
            L4                        L7
       Network Layer             Application Layer
             |                         |
        TCP / UDP                 HTTP / HTTPS
             |                         |
       Fast & simple            Application aware
             |                         |
       IP + Port routing       URL / Host / Header
             |                  / Cookie routing
             |
          NLB                  ALB
```

### Remember

**L4 = Connection-based**

**L7 = Application/request-based**

The choice depends on whether you need simple, high-performance network-level distribution or intelligent application-level routing.
