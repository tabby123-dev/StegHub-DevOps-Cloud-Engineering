# Tooling Website Deployment Automation with CI/CD and Jenkins

Imagine a company releases software 10 times a day. Manually deploying every change could take hours and introduce mistakes. Jenkins automates this process so releases can happen faster and more reliably, saving time and improving efficiency.

Adding to what we have been building on:

This repository documents the design and implementation of a highly available, load-balanced web infrastructure deployed on AWS. In this project, I will demonstrate how to build a similar architecture using two web servers, a database server, an Apache load balancer, an NFS server for shared storage, and a Jenkins server to host and automate the CI/CD pipeline.

The project focuses on combining high availability, load balancing, shared storage, and automated software delivery to create a reliable and scalable web application infrastructure.

![Architecture Diagram](images/archi.png)

---

## Overview

This project implements a classic **3-tier web architecture** on AWS:

- **Presentation tier** – Two web servers behind a load balancer, serving client HTTP traffic.
- **Data tier** – A centralized MySQL/MariaDB database server.
- **Shared storage tier** – An NFS server providing shared file storage (e.g. `/var/www`, log directories) so both web servers stay stateless and in sync.

Deployments are automated using **Jenkins**, which listens for a GitHub webhook, pulls the latest code from the repository, and deploys it to the web servers.

**Repository:** `https://github.com/tabbydev123/tooling`

---

## Architecture Components

| Component | Role | Instance Type (example) |
|---|---|---|
| **Client** | End user accessing the website over HTTP | — |
| **Load Balancer** | Distributes incoming TCP/80 traffic across Web-Server 1 and Web-Server 2 | Classic/Application Load Balancer |
| **Web-Server 1 / Web-Server 2** | Apache/Nginx servers hosting the tooling website | EC2 (e.g. t2.micro / t3.small) |
| **DB Server** | Centralized MySQL/MariaDB database used by both web servers | EC2 (e.g. t3.medium) |
| **NFS Server** | Shares application files/logs across both web servers via NFS | EC2 (e.g. t2.micro) |
| **Jenkins Server** | CI/CD automation server; triggered by GitHub webhook | EC2 (e.g. t2.medium) |
| **GitHub Repository** | Source of truth for application code; triggers Jenkins via webhook | `https://github.com/tabbydev123/tooling` |

---

## Traffic Flow

The diagram uses four traffic types (color-coded):

| Color | Traffic Type | Description |
|---|---|---|
| ⚫ Black | **Client traffic** | Client ↔ Load Balancer over `TCP 80` |
| 🔵 Blue | **DB traffic** | Web servers ↔ DB Server over `TCP 3306` |
| 🟠 Orange | **NFS traffic** | Web servers & NFS Server communicate over `TCP/UDP 2049 & 111` (NFS + rpcbind) |
| 🟢 Green | **Deploy traffic** | GitHub → Jenkins (webhook) → Web/NFS servers (`TCP 22`, SSH deploy) |

**Flow summary:**

1. A developer pushes code to the GitHub repository.
2. GitHub sends a **webhook** to the Jenkins server.
3. Jenkins pulls the latest code and deploys it over **SSH (TCP 22)** to the shared NFS storage.
4. Clients hit the **Load Balancer** on **TCP 80**, which forwards requests to Web-Server 1 or Web-Server 2.
5. Both web servers read/write shared files via **NFS (TCP/UDP 2049 & 111)** and query the **DB Server** over **TCP 3306**.

---

## Network & Security Group Rules

| Source | Destination | Port(s) | Protocol | Purpose |
|---|---|---|---|---|
| Client | Load Balancer | 80 | TCP | HTTP requests |
| Load Balancer | Web-Server 1 & 2 | 80 | TCP | Forward client requests |
| Web-Server 1 & 2 | DB Server | 3306 | TCP | MySQL/MariaDB queries |
| Web-Server 1 & 2 | NFS Server | 2049, 111 | TCP & UDP | NFS mounts (nfsd, rpcbind) |
| Jenkins Server | NFS Server | 22 | TCP | Deploy code via SSH |
| GitHub | Jenkins Server | 443 (webhook) | HTTPS | Trigger build on push |

![SG Diagram](images/sgw2.png)

---

## Infrastructure Setup

### 1. NFS Server

- This was already configured in the previous Project 8.

### 2. Database Server

- This was already configured in the previous Project 8.

### 3. Web Servers

- This was already configured in the previous Project 8.

### 4. Load Balancer

- This was already configured in the previous Project 8.

### 5. Jenkins Server (CI/CD)

- Launch an EC2 instance (`jenkins-server`) and install Jenkins.

![Jenkins Server Setup](images/jenkinserver.png)

#### Install Jenkins

```bash
sudo apt update
sudo apt install default-jdk-headless
curl -fsSL https://pkg.origin.jenkins.io/debian//jenkins.io.key | sudo tee \ /usr/share/keyrings/jenkins-keyring.asc > /dev/null
sudo apt install jenkins -y
```

![Jenkins Server Setup](images/jdk.png)

![Jenkins Server Setup](images/jenkinsrepo.png)

![Jenkins Server Setup](images/installjenkins.png)

- Check if Jenkins is installed and running.

```bash
sudo systemctl enabled jenkins
sudo systemctl start jenkins
sudo systemctl status jenkins
```

![Jenkins Server Setup](images/startjenkins.png)

- Test if Jenkins is accessible in the browser using the public IP of the instance.
- Open port `8080` in the security group, as Jenkins uses that port to run.

![Open port](images/sg.png)

- Test from the browser if Jenkins is accessible.

![Jenkins Server Setup](images/jenkinsbrowser.png)

- Retrieve the original password for Jenkins, enter it in the prompt section, and click **Continue**.

```bash
cat /var/lib/jenkins/secrets/initialdminPassword
```

- Create the First Admin User.

In this step, you will create the first admin user for your system, granting initial administrative privileges to manage and configure the platform.

![Jenkins Server Setup](images/adminuser.png)

- Install Suggested Plugins.

After setting up the administrator password, click the **Install suggested plugins** button in the Jenkins web interface. This action initiates the installation of the recommended plugins, which are essential for Jenkins functionality and features.

![Jenkins Server Setup](images/plugin.png)

![Jenkins Server Setup](images/plugins.png)

- Jenkins Setup Completion.

With the installation and configuration completed, Jenkins is now ready for use. Navigate to the Jenkins dashboard and click **New Item** to create a new job.

![Jenkins Server Setup](images/dash.png)

## Configure Your First Job in Jenkins to Retrieve Source Code from GitHub

### 1. Enable the Webhook on Your Repository

- A GitHub webhook is a way for GitHub to automatically notify another system when something happens in a repository.
- In the payload URL, put the URL of the Jenkins server followed by `gitwebhook`.

```bash
http://public-ip-of-jenkins-server:8080/jenkinserver/github-webhook/
```

![Webhook Setup](images/webhook.png)

### 2. Create Your First Job in Jenkins Using the Freestyle Project

![Webhook Setup](images/newitem.png)

- Confirm that the pipeline is up.

![Webhook Setup](images/pipeline.png)

### 3. Connect Your Job to the GitHub Repository

For this step, you will need the GitHub repository URL and a personal access token to successfully connect to your GitHub repository. Save the configurations.

![Git SCM](images/scm.png)

![Git SCM](images/scmgit.png)

- On the GitHub repository, edit the README file and commit the changes. Then, monitor your job for the new build that will be triggered by the Git commit.
- Under **Post Build Actions**, configure the job to archive build artifacts. Artifacts are files that result from a build.

![Artifacts](images/artifact.png)

![Artifacts](images/artifact2.png)

- After editing the README file in GitHub and committing the changes, the run completes successfully in the Jenkins job, indicating that Jenkins was able to connect successfully to GitHub and automatically detect any changes pushed to the repository, which then triggers the build job to run without any manual intervention.

- Confirm on the server that the artifacts are saved there.

![Artifacts](images/artifact3.png)

### 4. Configure Jenkins to Copy Files to the NFS Server via SSH

- For this setup, we need to install the **Publish Over SSH** plugin on Jenkins.

![SSH](images/publishssh.png)

- Configure the job to copy the files to the NFS server.

First, I need to ensure that the Jenkins server can access the NFS server on port `22`. I also configured SSH access to the NFS server from the Jenkins server.

- On the **Manage Jenkins** page, navigate to **System Configure** and, in the **Publish Over SSH** plugin configuration section, add the details of the NFS server.

![NFS](images/publishssh.png)

- Provide a private key for connecting to the NFS server from the Jenkins server.
- Provide an arbitrary name.
- Provide the hostname or IP address of the NFS server (private IP).
- Provide the username for connecting to the server — `ec2-user`, as our NFS server was hosted on RHEL 8.
- Provide the remote directory where the file should be copied/written — `/mnt/apps`.

- Test the configuration and make sure it returns success.

![NFS](images/testpublish.png)

---

### 5. Configure the Post-Build Action

- Open the Jenkins job and, in the **Post Build Actions** section, add another post-build action: **Send Build Artifacts over SSH**.
- Configure the build action to copy all files produced by this build to the remote directory. Use `**` in the source file field.
- Save the configuration, then go to the GitHub page, change something in the README file, and commit the changes.
- The webhook will trigger a new job in Jenkins. It should return **Success** in the console output of the new job.

![NFS](images/nfs1.png)

![NFS](images/nfs2.png)

- Confirm on the NFS server that the logs are added there.

![NFS](images/nfs3.png)

---

## Challenges

### Jenkins SSH Authentication

- Configuring Jenkins to connect to the NFS server over SSH.
- Setting up and troubleshooting SSH private/public key authentication.
- Understanding that the private key belongs in Jenkins, while the corresponding public key must exist in `/home/ec2-user/.ssh/authorized_keys`.
- Testing SSH connections manually from the Jenkins server.

### Jenkins Artifact Publishing

- Initially receiving:

```text
ERROR: Exception when publishing, exception message [Permission denied]
Build step 'Send build artifacts over SSH' changed build result to UNSTABLE
```

- Determining that the artifacts were actually being copied despite Jenkins reporting **UNSTABLE**.
- Enabling verbose output to trace the SFTP process.
- Identifying that Jenkins successfully uploaded the root-level files but failed when entering `/mnt/apps/html`.
- Understanding that a Jenkins build can become **UNSTABLE** even after some artifacts have successfully transferred.

## Conclusion

All the issues were resolved, and the project was completed successfully.
