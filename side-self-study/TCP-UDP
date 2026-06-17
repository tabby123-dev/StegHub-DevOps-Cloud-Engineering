# Networking Protocols Overview

## Introduction

Networking protocols are standardized rules that enable devices to communicate over a network. Different protocols are designed for different purposes, such as web browsing, file transfers, remote access, and data transmission.

This document provides an overview of the following protocols:

* TCP
* UDP
* FTP
* SSH
* HTTP
* HTTPS
* SFTP
* Telnet

---

# 1. TCP (Transmission Control Protocol)

## How It Works

TCP is a connection-oriented protocol that establishes a connection between a sender and receiver before data is transmitted. It ensures that data arrives correctly and in the proper order.

## Characteristics

* Connection-oriented
* Reliable data delivery
* Error checking and correction
* Data packets are delivered in sequence
* Retransmits lost packets
* Slower than UDP due to reliability mechanisms

## Common Uses

* Web browsing
* Email
* File transfers
* Remote administration

## Default Port

TCP itself does not use a specific port. Applications using TCP define their own ports.

---

# 2. UDP (User Datagram Protocol)

## How It Works

UDP is a connectionless protocol that sends data without establishing a connection or confirming delivery.

## Characteristics

* Connectionless
* Faster than TCP
* No guarantee of delivery
* No packet ordering
* Low overhead
* Suitable for real-time communication

## Common Uses

* Video streaming
* Voice over IP (VoIP)
* Online gaming
* DNS queries

## Default Port

UDP itself does not use a specific port. Applications define their own UDP ports.

---

# 3. FTP (File Transfer Protocol)

## How It Works

FTP enables file transfers between a client and a server. Users authenticate using a username and password before transferring files.

## Characteristics

* Uses TCP
* Supports file uploads and downloads
* Credentials and data are transmitted in plain text
* Not secure for sensitive data

## Common Uses

* Website file uploads
* Internal file sharing

## Default Ports

| Port | Purpose            |
| ---- | ------------------ |
| 21   | Control Connection |
| 20   | Data Transfer      |

---

# 4. SSH (Secure Shell)

## How It Works

SSH provides a secure, encrypted connection between a client and a remote server for command-line access and administration.

## Characteristics

* Encrypted communication
* Secure authentication
* Supports public/private key authentication
* Protects against eavesdropping

## Common Uses

* Remote server administration
* Secure file transfers
* Automation scripts

## Default Port

| Port |
| ---- |
| 22   |

---

# 5. HTTP (HyperText Transfer Protocol)

## How It Works

HTTP is the protocol used for communication between web browsers and web servers.

## Characteristics

* Stateless protocol
* Uses TCP
* Data transmitted in plain text
* No encryption

## Common Uses

* Websites
* APIs
* Web applications

## Default Port

| Port |
| ---- |
| 80   |

---

# 6. HTTPS (HyperText Transfer Protocol Secure)

## How It Works

HTTPS is HTTP combined with SSL/TLS encryption to secure communication between browsers and servers.

## Characteristics

* Encrypted communication
* Uses SSL/TLS certificates
* Protects data confidentiality and integrity
* More secure than HTTP

## Common Uses

* Secure websites
* Online banking
* E-commerce platforms

## Default Port

| Port |
| ---- |
| 443  |

---

# 7. SFTP (Secure File Transfer Protocol)

## How It Works

SFTP is a secure file transfer protocol that operates over an SSH connection.

## Characteristics

* Encrypted file transfers
* Secure authentication
* Uses a single connection
* More secure than FTP

## Common Uses

* Secure file sharing
* Backup systems
* Data exchange between organizations

## Default Port

| Port |
| ---- |
| 22   |

---

# 8. Telnet

## How It Works

Telnet allows users to remotely access devices and servers through a command-line interface.

## Characteristics

* No encryption
* Sends credentials in plain text
* Considered insecure
* Largely replaced by SSH

## Common Uses

* Legacy systems
* Network device troubleshooting

## Default Port

| Port |
| ---- |
| 23   |

---

# Protocol Comparison Table

| Protocol | Full Name                          | Transport Protocol | Default Port | Encrypted | Reliable | Primary Use                |
| -------- | ---------------------------------- | ------------------ | ------------ | --------- | -------- | -------------------------- |
| TCP      | Transmission Control Protocol      | N/A                | N/A          | No        | Yes      | Reliable data transmission |
| UDP      | User Datagram Protocol             | N/A                | N/A          | No        | No       | Fast data transmission     |
| FTP      | File Transfer Protocol             | TCP                | 20, 21       | No        | Yes      | File transfer              |
| SSH      | Secure Shell                       | TCP                | 22           | Yes       | Yes      | Secure remote access       |
| HTTP     | HyperText Transfer Protocol        | TCP                | 80           | No        | Yes      | Web communication          |
| HTTPS    | HyperText Transfer Protocol Secure | TCP                | 443          | Yes       | Yes      | Secure web communication   |
| SFTP     | SSH File Transfer Protocol         | TCP                | 22           | Yes       | Yes      | Secure file transfer       |
| Telnet   | Telecommunication Network Protocol | TCP                | 23           | No        | Yes      | Remote terminal access     |

---

# TCP vs UDP Comparison

| Feature           | TCP                 | UDP                     |
| ----------------- | ------------------- | ----------------------- |
| Connection Type   | Connection-Oriented | Connectionless          |
| Reliability       | High                | Low                     |
| Error Checking    | Yes                 | Basic                   |
| Packet Ordering   | Guaranteed          | Not Guaranteed          |
| Speed             | Slower              | Faster                  |
| Retransmission    | Yes                 | No                      |
| Streaming Support | Moderate            | Excellent               |
| Typical Uses      | Web, Email, SSH     | Gaming, VoIP, Streaming |

---

# Summary

* **TCP** prioritizes reliability and accuracy.
* **UDP** prioritizes speed and low latency.
* **FTP** transfers files but lacks encryption.
* **SSH** provides secure remote access.
* **HTTP** powers web communication without encryption.
* **HTTPS** secures web communication using SSL/TLS.
* **SFTP** provides secure file transfer over SSH.
* **Telnet** enables remote access but is insecure and largely obsolete.

Understanding these protocols is fundamental for network administration, cybersecurity, cloud computing, and DevOps engineering.

