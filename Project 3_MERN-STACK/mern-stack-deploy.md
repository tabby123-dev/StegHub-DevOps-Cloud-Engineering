# MERN Web Stack Implementation on AWS EC2 (Ubuntu)

## Project Overview

This project demonstrates how to deploy a **MERN (MongoDB, Express.js, React.js, Node.js)** web application on an **AWS EC2 Ubuntu Server**. The deployment covers the installation and configuration of all required components, connecting the application to MongoDB Atlas, and running both the backend and frontend services.

The objective of this project is to gain hands-on experience deploying a full-stack JavaScript application in a cloud environment while following industry best practices.

---

---

# Introduction

The MERN stack is one of the most popular technologies for building modern web applications.

It consists of four JavaScript technologies:

- **MongoDB** – A NoSQL document database used to store application data.
- **Express.js** – A lightweight backend web framework built on Node.js.
- **React.js** – A JavaScript library for building dynamic and responsive user interfaces.
- **Node.js** – A JavaScript runtime environment used to execute server-side code.

Together, these technologies enable developers to build scalable, full-stack applications using a single programming language JavaScript.

---

# Architecture

```
                Users
                  │
                  │
             React Frontend
                  │
        HTTP Requests (REST API)
                  │
          Express.js + Node.js
                  │
          MongoDB Atlas Database
```

---

# Prerequisites

Before starting, ensure you have:

- AWS Account
- EC2 Ubuntu Instance
- SSH Key Pair
- MongoDB Atlas Account
- Node.js
- npm
- Postman


---

# Technologies Used

- AWS EC2 (Ubuntu 24.04 LTS)
- Node.js
- npm
- Express.js
- React.js
- MongoDB Atlas
- Git
- GitHub
- Postman
- VS Code

---

# Project Structure

```
mern-app/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── client/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js (or React config)
│
├── images/
│
└── README.md
```

---

# Step 1: Launch AWS EC2 Instance

Create an Ubuntu EC2 instance.

Configure:

- Security Group
- Key Pair
- Public IP

### Screenshot



![EC2 Instance](images/server.png)


---

# Step 2: Connect to the Server

SSH into the instance.

```bash
ssh -i key.pem ubuntu@your-public-ip
```
---

# Step 3: Update the Ubuntu Server

```bash
sudo apt update
sudo apt upgrade -y
```

### Screenshot


![System Update](images/upgrade.png)


---

# Step 4: Install Node.js and npm

```bash
sudo apt install nodejs npm -y
```

Verify installation:

```bash
node -v
npm -v
```

### Screenshot


![Node Installation](images/nodeversion.png)


---
# Step 5: Configure MongoDB Atlas

Create:

- Cluster
- Database User
- Network Access
- Connection String

Example:

```
mongodb+srv://username:password@cluster.mongodb.net/database
```

### Screenshot


![MongoDB Atlas](images/db.png)


---

# Step 6: Configure Environment Variables

Create a `.env` file.

Example:

```env
PORT=5000

DB=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

### Screenshot


![Environment Variables](images/env.png)


---

# Step 7: Install Backend Dependencies

```bash
cd backend

npm install
```

### Screenshot


![Backend Installation](images/runningindex.png)


---

# Step 8: Start the Backend Server

```bash
npm start
```

or

```bash
npm run dev
```

Expected output:

```
Server running on port 5000
Database Connected
```

### Screenshot


![Backend Running](images/npmrundev.png)


---

# Step 9: Install Frontend Dependencies

```bash
cd client

npm install
```

---

# Step 10: Start the React Application

```bash
npm start
```

or

```bash
npm run dev
```

### Screenshot


![React Running](images/expressapp.png)


---

# Step 11: API Testing Using Postman

Test API endpoints such as:

- GET
- POST
- PUT
- DELETE

Verify successful responses.

### Screenshot


![Postman Testing](images/get.png)
![Postman Testing](images/post.png)
![Postman Testing](images/delete2.png)


---

# Step 12: Verify Application in Browser

Access:

```
http://your-public-ip
```

Verify:

- Homepage
- CRUD operations
- Backend communication
- Database updates

### Screenshot


![Application Homepage](images/expressapp.png)
![Application Homepage](images/dataindb.png)


---

# Challenges Encountered

Some challenges experienced during deployment included:

- Security Group configuration
- MongoDB Atlas IP whitelisting
- Environment variable configuration
- Port conflicts
- Node.js version compatibility
- CORS configuration
- Backend API connection errors

---

# Lessons Learned

During this project, I gained practical experience in:

- Deploying cloud infrastructure using AWS EC2
- Configuring Ubuntu servers
- Installing and managing Node.js applications
- Connecting applications to MongoDB Atlas
- Managing environment variables securely
- Using Git and GitHub for version control
- Testing REST APIs with Postman
- Deploying and troubleshooting MERN applications

---

# Conclusion

This project successfully demonstrates the deployment of a complete MERN web application on an AWS Ubuntu EC2 instance. It highlights the integration of React, Express, Node.js, and MongoDB Atlas into a scalable cloud-hosted solution while reinforcing practical cloud deployment, backend configuration, API development, and database management skills.

---

