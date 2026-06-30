# Database Management Systems (DBMS) & Web Development Fundamentals

## Overview

This repository contains notes covering the fundamental concepts of **Database Management Systems (DBMS)**, **Web Application Frameworks**, **Frontend and Backend Development**, **RESTful APIs**, and **CSS**.

These concepts form the foundation of modern web application development and provide an understanding of how data is stored, processed, and presented to users.

---

# What is a Database Management System (DBMS)?

A **Database Management System (DBMS)** is software that enables users and applications to create, store, retrieve, modify, and manage data efficiently within a database.

### Benefits of a DBMS

- Organized data storage
- Efficient data retrieval
- Data security
- Reduced data redundancy
- Data integrity
- Multi-user access
- Backup and recovery support

---

# Types of Database Management Systems

## 1. Hierarchical DBMS

A Hierarchical DBMS organizes data in a **tree-like structure** consisting of parent-child relationships.

### Characteristics

- One parent can have many children.
- A child has only one parent.
- Navigation follows predefined paths.

### Example

```
GET /employees/123/projects/456
```

---

## 2. Network DBMS

A Network DBMS allows records to have multiple parent records, creating more flexible relationships.

### Characteristics

- Many-to-many relationships
- Uses sets and records
- Faster navigation between connected data

### Example

```
FIND owner OF project 456
```

---

## 3. Relational Database Management System (RDBMS)

An RDBMS stores data in **tables** made up of rows and columns.

Relationships between tables are maintained using:

- Primary Keys
- Foreign Keys

Data is accessed using **Structured Query Language (SQL).**

### Example

```sql
SELECT *
FROM employees
WHERE salary > 50000;
```

Popular RDBMS include:

- MySQL
- PostgreSQL
- Microsoft SQL Server
- Oracle Database

---

## 4. NoSQL DBMS

NoSQL databases are designed to handle large volumes of structured, semi-structured, and unstructured data.

### Types of NoSQL Databases

- Document databases
- Key-value stores
- Column-family stores
- Graph databases

### Example (MongoDB)

```javascript
db.inventory.find({
    status: "A"
})
```

---

## 5. Graph Database

Graph databases store information using:

- Nodes (Entities)
- Edges (Relationships)

These databases are ideal for highly connected data.

### Query Languages

- SPARQL
- Gremlin

### Common Use Cases

- Social networks
- Recommendation systems
- Fraud detection

---

## 6. Document Database

A document database stores data as flexible documents instead of tables.

Common document formats include:

- JSON
- BSON
- XML

### Example Database

- MongoDB

---

# Web Application Frameworks

A **Web Application Framework** provides developers with tools, libraries, and reusable components for building web applications quickly and efficiently.

## Advantages

- Faster development
- Code reusability
- Improved security
- Easier maintenance
- Built-in routing and authentication

## Popular Frameworks

- Node.js
- Spring Boot
- React
- Vue.js
- Django
- ASP.NET
- JavaScript Frameworks

---

# Frontend Development (Client Side)

The frontend is the part of the application that users directly interact with in their web browser.

## Responsibilities

- User Interface (UI)
- Responsive Design
- User Experience (UX)
- Interactive Elements
- Cross-browser Compatibility

## Frontend Technologies

- HTML
- CSS
- JavaScript
- React
- Angular
- Bootstrap
- Vue.js

---

# Backend Development (Server Side)

The backend is responsible for processing requests, business logic, and database communication.

## Responsibilities

- Server-side logic
- Database management
- Authentication
- API development
- Data storage and retrieval

## Backend Technologies

- PHP
- Python
- Ruby
- Node.js
- MySQL
- MongoDB
- Apache
- Nginx
- Mongoose
- Socket.io

---

# RESTful APIs

REST (Representational State Transfer) APIs allow communication between clients and servers over HTTP or HTTPS.

REST APIs commonly exchange data in:

- JSON
- XML
- HTML
- Images

REST follows standard HTTP methods that map to CRUD operations.

| HTTP Method | CRUD Operation | Purpose |
|------------|---------------|----------|
| GET | Read | Retrieve data |
| POST | Create | Create new resources |
| PUT | Update | Replace an existing resource |
| PATCH | Update | Partially modify a resource |
| DELETE | Delete | Remove a resource |

---

## GET Method

Retrieves data from the server.

### Successful Response

```
200 OK
```

### Possible Errors

```
400 Bad Request
404 Not Found
```

---

## POST Method

Creates a new resource.

### Successful Response

```
201 Created
```

The response usually contains the location of the newly created resource.

---

## PUT Method

Creates or completely replaces an existing resource.

The client sends the entire resource in the request body.

---

## PATCH Method

Partially updates an existing resource.

Only the fields that need modification are sent.

---

## DELETE Method

Deletes a resource identified by its URI.

### Successful Response

```
200 OK
```

---

# Cascading Style Sheets (CSS)

CSS (Cascading Style Sheets) is used to control the appearance and layout of web pages.

CSS allows developers to:

- Style HTML elements
- Control colors
- Set fonts
- Create layouts
- Build responsive designs
- Add animations and transitions

### Example

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
}

h1 {
    color: #2c3e50;
}
```

---

# Summary

This document introduces the core concepts required for modern web development, including:

- Database Management Systems (DBMS)
- Types of Databases
- Relational and NoSQL Databases
- Document and Graph Databases
- Web Application Frameworks
- Frontend Development
- Backend Development
- RESTful APIs
- HTTP Methods
- Cascading Style Sheets (CSS)

Together, these technologies provide the foundation for designing, developing, and deploying scalable web applications.

---
