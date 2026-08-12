# CI/CD — Continuous Integration, Continuous Delivery & Continuous Deployment

##  Introduction

**CI/CD** is a set of practices used in DevOps to automate the process of building, testing, and releasing software.

The goal is simple:

> **Make software changes frequently, test them automatically, and deliver them to users safely and quickly.**

CI/CD has three main concepts:

1. **Continuous Integration (CI)**
2. **Continuous Delivery (CD)**
3. **Continuous Deployment (CD)**

---

# 1. Continuous Integration (CI)

**Continuous Integration** means developers frequently merge their code into a shared repository.

Every time code is pushed, an automated process can:

* Build the application
* Run tests
* Check the code
* Detect errors early

### Example

Imagine three developers working on an application:

```text
Developer A ──┐
Developer B ──┼──> GitHub ──> CI Pipeline ──> Build + Test
Developer C ──┘
```

Developer A pushes code to GitHub.

The CI pipeline automatically:

```text
Code Push
   ↓
Build Application
   ↓
Run Tests
   ↓
Tests Pass?
   ├── No  → Notify Developer 
   └── Yes → Continue 
```

### Why CI is important

Without CI, developers might work for days or weeks before combining their code. This can create large and difficult-to-fix conflicts.

**CI helps us find problems early.**

---

# 2. Continuous Delivery

**Continuous Delivery** builds on Continuous Integration.

After the application has been successfully built and tested, it is automatically prepared and made **ready for release**.

However, the actual production release usually requires a **manual approval**.

```text
Developer
   ↓
Git Push
   ↓
Build
   ↓
Test
   ↓
Package
   ↓
Ready for Production
   ↓
Manual Approval
   ↓
Production
```

### Example

A company may have:

```text
Development → Testing → Staging → Production
```

The pipeline automatically moves the application through development, testing, and staging.

A person then approves the final production release.

### Key idea

> **Continuous Delivery means the software is always in a releasable state.**

---

# 3. Continuous Deployment

**Continuous Deployment** goes one step further.

If the code passes all automated checks, it is **automatically deployed to production** without waiting for manual approval.

```text
Developer
   ↓
Git Push
   ↓
Build
   ↓
Test
   ↓
All Tests Pass?
   ├── No  → Stop 
   └── Yes
        ↓
   Automatically Deploy
        ↓
    Production 
```

### Key idea

> **Continuous Deployment automatically releases successful changes to production.**

---

# CI vs Continuous Delivery vs Continuous Deployment

| Concept                   | Build | Test | Ready for Release | Production       |
| ------------------------- | ----- | ---- | ----------------- | ---------------- |
| **CI**                    | ✅     | ✅    | ❌                 | ❌                |
| **Continuous Delivery**   | ✅     | ✅    | ✅                 | Manual approval  |
| **Continuous Deployment** | ✅     | ✅    | ✅                 | Automatically  |

### Easy way to remember

Think about ordering food:

**Continious Integration:**

> "I prepared the food and checked that it is good."

**Continuous Delivery:**

> "The food is prepared, checked, packaged, and ready to deliver. Someone decides when to send it."

**Continuous Deployment:**

> "The food is prepared, checked, packaged, and automatically sent to the customer."

---

# 4. What is a CI/CD Pipeline?

A **pipeline** is the automated sequence of steps that takes code from a developer's computer toward production.

A simple pipeline might look like:

```text
Git Push
   ↓
Build
   ↓
Test
   ↓
Security Checks
   ↓
Package
   ↓
Deploy to Staging
   ↓
Approval (Delivery)
   ↓
Production
```

With Continuous Deployment:

```text
Git Push
   ↓
Build
   ↓
Test
   ↓
Security Checks
   ↓
Deploy to Production 
```

---

# 5. Common CI/CD Tools

Some popular tools include:

* **GitHub Actions**
* **Jenkins**
* **GitLab CI/CD**
* **AWS CodePipeline**
* **Azure DevOps**
* **CircleCI**

For example, **Jenkins** can watch a Git repository and automatically start a pipeline whenever new code is pushed.

---

# 6. Simple Real-World Example

Imagine you have a PHP website running on an AWS server.

You make a change to `index.php` and push it to GitHub:

```bash
git add .
git commit -m "Update homepage"
git push
```

Your CI/CD pipeline could then:

```text
GitHub
   ↓
Jenkins / GitHub Actions
   ↓
Run Tests
   ↓
Build Application
   ↓
Deploy to Web Server
   ↓
Website Updated
```

Instead of manually logging into the server and copying files every time, the pipeline automates the process.

---

# 7. The Main Difference

The easiest way to remember the three concepts is:

```text
Continuous Integration
        ↓
   Build + Test
        ↓
Continuous Delivery
        ↓
   Ready to Release
        ↓
Continuous Deployment
        ↓
 Automatically Released
```

### In one sentence:

* **CI:** Automatically **build and test** code changes.
* **Continuous Delivery:** Automatically **prepare changes for release**, with a manual production approval.
* **Continuous Deployment:** Automatically **release successful changes to production**.

---

#  Key Takeaway

CI/CD is about **automating the software delivery process**.

The overall goal is to move from:

```text
Code → Manual Testing → Manual Deployment
```

to:

```text
Code → Automated Build → Automated Tests → Automated Deployment
```

This allows DevOps teams to release software **faster, more reliably, and with fewer human errors**.
