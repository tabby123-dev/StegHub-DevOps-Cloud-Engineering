# The OSI Model

## What is the OSI Model?

OSI stands for Open Systems Interconnection Model. It is a guide that explains how computer networks work and how data is transmitted across a network using a standard seven-layer architecture.

---

### 1. Physical Layer

This layer deals with the transmission of individual bitstreams. Devices found in this layer include hubs, modems, and cables.

This layer does the following:

- Bit synchronization
- Bit rate control
- Transmission mode selection

### 2. Data Link Layer

This layer serves as a bridge between the physical and the logical network, ensuring reliable delivery of data. It ensures data is transferred error-free across physical mediums. Devices in this layer are switches and bridges.

This layer does the following:

- Framing
- Physical addressing
- Error control
- Flow control
- Access control

### 3. Network Layer

Manages data transmission between hosts across different networks by handling logical addressing and path finding. Devices in this layer include switches and routers.

This layer does the following:

- Logical addressing
- Routing
- Hardware
- Inter-networking
- Encapsulation of data segments

### 4. Transport Layer

This layer ensures end-to-end delivery of packets/messages. It acts as a liaison, providing services to the application layer while utilizing infrastructure from the network layer.

This layer does the following:

- Service point addressing
- Segmentation and reassembly

### 5. Session Layer

This layer acts as a dialogue manager, governing the opening, closing, and security of communication channels between two devices.

It does the following:

- Session lifecycle
- Authentication and security
- Synchronization
- Dialog control

### 6. Presentation Layer

This layer ensures data is formatted, secured, and compressed so that the receiving application can correctly interpret it.

It does the following:

- Translation
- Standardization and formatting
- Encryption and decryption
- Compression

### 7. Application Layer

This layer sits at the top of the OSI stack and serves as the direct interface between the software user and the network.

---

## Load Balancing

Load balancing is the process of distributing incoming network traffic across multiple servers to ensure no single server becomes overloaded. It helps improve application performance, reliability, and availability by efficiently utilizing server resources.

A load balancer distributes user requests across multiple servers so that no single server becomes overwhelmed.

### How Load Balancing Works

A load balancer receives incoming requests, checks server health, and routes each request to the most suitable available server to ensure high availability and optimal performance.

### Types of Load Balancers

1. **Hardware Load Balancer** — A dedicated physical device used in large data centers to distribute traffic across multiple servers. It is designed for high performance and can handle a large volume of network requests efficiently.

2. **Software Load Balancer** — Runs as an application on a server and distributes traffic among backend servers. It is flexible, cost-effective, and widely used in modern web applications.

3. **Cloud Load Balancer** — A managed service provided by cloud platforms to automatically distribute incoming traffic across multiple cloud servers. It helps scale applications easily without managing the underlying infrastructure.

4. **Layer 4 (Transport Layer) Load Balancer** — Operates at the transport layer of the OSI model and distributes traffic based on network information such as IP addresses and TCP/UDP port numbers. It does not inspect the actual content of the request, which makes it fast and efficient for handling large volumes of traffic.

5. **Layer 7 (Application Layer) Load Balancer** — Operates at the application layer and distributes traffic based on application-level information such as HTTP headers, URLs, cookies, or request content. This allows more intelligent routing decisions based on the type of request.

### Techniques/Algorithms for Traffic Load Balancing

**Static**

- **Round Robin** — Distributes incoming requests to servers in a fixed sequential or rotational order. It is commonly used due to its ease of implementation.
- **Weighted Round Robin** — A technique similar to Round Robin, but it distributes requests based on assigned weight values that represent each server's capacity.
- **Source IP Hash** — Distributes incoming requests by computing a hash of the client's source IP address. This approach helps route requests from the same client to the same backend server consistently.

**Dynamic**

- **Least Connection Load Balancing** — Routes new requests to the server with the fewest active connections. It focuses on balancing workload by considering the current load on each server.
- **Least Response Time Load Balancing** — Aims to minimize response times by directing new requests to the server with the quickest response time.
- **Resource-Based Load Balancing** — Assigns incoming requests to servers based on their current resource availability, such as CPU usage, memory, or bandwidth, ensuring efficient and balanced system performance.
