# Linux File Permissions: `chmod` and `chown`

## Introduction

Linux uses a permission-based security model to control who can access files and directories. Two of the most commonly used commands for managing file ownership and permissions are:

* `chmod` — Change file permissions
* `chown` — Change file ownership

Understanding these commands is essential for Linux system administration, DevOps, cloud computing, and cybersecurity.

---

# Understanding Linux File Permissions

Every file and directory in Linux has:

1. **Owner (User)** – The user who owns the file.
2. **Group** – A group of users with shared permissions.
3. **Others** – All other users on the system.

You can view permissions using:

```bash
ls -l
```

Example output:

```bash
-rw-r--r-- 1 ubuntu developers 1200 Jun 15 10:00 notes.txt
```

Breakdown:

```text
-rw-r--r--
││ │ │
││ │ └── Others: Read
││ └──── Group: Read
│└────── Owner: Read and Write
└──────── File Type
```

---

# The `chmod` Command

## Purpose

The `chmod` (Change Mode) command is used to modify the permissions of a file or directory.

## What It Does

`chmod` controls what users are allowed to do with a file:

* Read a file
* Modify a file
* Execute a file as a program

It does **not** change ownership; it only changes permissions.

---

## Permission Values

| Permission | Symbol | Numeric Value |
| ---------- | ------ | ------------- |
| Read       | r      | 4             |
| Write      | w      | 2             |
| Execute    | x      | 1             |

---

## Numeric Permission Examples

| Number | Permission |
| ------ | ---------- |
| 7      | rwx        |
| 6      | rw-        |
| 5      | r-x        |
| 4      | r--        |
| 0      | ---        |

---

## Syntax

```bash
chmod [permissions] filename
```

---

## Examples

### Give Owner Full Access, Others Read-Only

```bash
chmod 744 file.txt
```

Result:

```text
Owner  : rwx
Group  : r--
Others : r--
```

---

### Give Everyone Full Access

```bash
chmod 777 file.txt
```

Result:

```text
Owner  : rwx
Group  : rwx
Others : rwx
```

⚠️ Use with caution because anyone can modify the file.

---

### Make a Script Executable

```bash
chmod +x script.sh
```

Before:

```text
-rw-r--r--
```

After:

```text
-rwxr-xr-x
```

---

## Effect on a File

Before:

```text
-rw-r--r-- notes.txt
```

Command:

```bash
chmod 600 notes.txt
```

After:

```text
-rw-------
```

Only the owner can read and modify the file.

---

# The `chown` Command

## Purpose

The `chown` (Change Owner) command changes the ownership of a file or directory.

## What It Does

`chown` determines:

* Which user owns the file
* Which group is associated with the file

It does **not** change permissions.

---

## Syntax

```bash
chown user filename
```

Or:

```bash
chown user:group filename
```

---

## Examples

### Change File Owner

```bash
sudo chown john report.txt
```

Before:

```text
ubuntu ubuntu report.txt
```

After:

```text
john ubuntu report.txt
```

---

### Change Owner and Group

```bash
sudo chown john:developers report.txt
```

Before:

```text
ubuntu ubuntu report.txt
```

After:

```text
john developers report.txt
```

---

### Change Ownership Recursively

```bash
sudo chown -R john:developers project/
```

The `-R` flag applies the change to all files and subdirectories.

---

## Effect on a File

Before:

```text
-rw-r--r-- ubuntu ubuntu report.txt
```

Command:

```bash
sudo chown john:developers report.txt
```

After:

```text
-rw-r--r-- john developers report.txt
```

Ownership changes, but permissions remain the same.

---

# `chmod` vs `chown`

| Feature               | chmod                    | chown              |
| --------------------- | ------------------------ | ------------------ |
| Full Name             | Change Mode              | Change Owner       |
| Purpose               | Change permissions       | Change ownership   |
| Modifies Owner        | No                       | Yes                |
| Modifies Group        | No                       | Yes                |
| Modifies Permissions  | Yes                      | No                 |
| Requires sudo         | Sometimes                | Usually            |
| Affects Access Rights | Yes                      | Indirectly         |
| Common Usage          | Restrict or allow access | Transfer ownership |

---

# Common Permission Settings

| Permission | Numeric Value | Meaning                      |
| ---------- | ------------- | ---------------------------- |
| rwx------  | 700           | Owner has full access        |
| rw-r-----  | 640           | Owner read/write, group read |
| rw-r--r--  | 644           | Common file permission       |
| rwxr-xr-x  | 755           | Common script permission     |
| rwxrwxrwx  | 777           | Full access for everyone     |

---

# Best Practices

### Recommended File Permissions

Regular files:

```bash
chmod 644 filename
```

Scripts:

```bash
chmod 755 script.sh
```

Sensitive files:

```bash
chmod 600 secret.txt
```

---

### Avoid Excessive Permissions

Avoid:

```bash
chmod 777 filename
```

unless absolutely necessary, as it allows any user to read, modify, and execute the file.

---

# Summary

## `chmod`

* Changes file or directory permissions.
* Controls read, write, and execute access.
* Uses symbolic or numeric values.

Example:

```bash
chmod 755 script.sh
```

---

## `chown`

* Changes file or directory ownership.
* Assigns files to different users and groups.
* Often requires administrative privileges.

Example:

```bash
sudo chown john:developers report.txt
```

Together, `chmod` and `chown` provide the foundation for managing security and access control in Linux systems.
