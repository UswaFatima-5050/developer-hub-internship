
#  Cybersecurity Internship — Developers Hub Corporation

**Intern:** Uswa Fatima  
**University:** University of Engineering & Technology (UET) Lahore  
**Organization:** Developers Hub Corporation  
**Duration:** April 2026  
**Deadline:** 28 April, 2026

---

##  Project Overview

This repository contains all work completed during the Developers Hub Corporation Cybersecurity Internship. The task involved analyzing a Node.js User Management web application for vulnerabilities, implementing security fixes, and performing penetration testing using industry-standard tools.

---

##  Repository Structure

```
developer-hub-internship/
│
├── Week1-Security-Assessment/
│   ├── app.js              → Node.js web application
│   ├── package.json        → Project dependencies
│   ├── security.log        → Winston log file
│   ├── zap-report.html     → OWASP ZAP scan report
│   └── README.md           → Week 1 documentation
│
├── Week2-Security-Implementation/
│   ├── app.js              → App with all security fixes applied
│   ├── package.json        → Updated dependencies
│   └── README.md           → Week 2 documentation
│
├── Week3-Advanced-Testing/
│   ├── app.js              → Final secured application
│   ├── package.json        → Final dependencies
│   └── README.md           → Week 3 documentation
│
├── report.pdf              → Final internship report
└── README.md               → This file
```



##  Week-by-Week Summary

###  Week 1 — Security Assessment
- Set up Node.js User Management application
- Performed automated vulnerability scan using **OWASP ZAP 2.17.0**
- Manually tested **XSS (Cross-Site Scripting)** attacks → Blocked 
- Manually tested **SQL Injection** attacks → Blocked 
- Verified **Winston security logs** are recording events

###  Week 2 — Implementing Security Measures
- Added **input validation** using `validator.js`
- Implemented **password hashing** using `bcrypt` (salt rounds: 10)
- Added **JWT token authentication** using `jsonwebtoken`
- Secured HTTP headers using **Helmet.js**

###  Week 3 — Advanced Testing & Reporting
- Performed **Nmap port scanning** from Kali Linux (VMware)
- Reviewed and verified security logs
- Created final security checklist
- Generated complete internship report with all proofs

---

##  Tools & Technologies Used

| Tool | Purpose |
|------|---------|
| Node.js + Express | Web application framework |
| OWASP ZAP 2.17.0 | Automated vulnerability scanning |
| Nmap | Network penetration testing |
| Kali Linux (VMware) | Penetration testing environment |
| bcrypt | Password hashing |
| jsonwebtoken | JWT authentication |
| helmet | HTTP security headers |
| validator.js | Input validation |
| winston | Security logging |

---

##  Security Checklist

| Security Measure | Status |
|-----------------|--------|
| Input Validation (validator.js) | Done |
| Password Hashing (bcrypt) |  Done |
| JWT Token Authentication |  Done |
| Helmet.js Security Headers |  Done |
| Winston Logging |  Done |
| XSS Attack Protection |  Tested & Blocked |
| SQL Injection Protection | Tested & Blocked |
| OWASP ZAP Automated Scan |  Done |
| Nmap Penetration Test from Kali |  Done |

---

##  How to Run the Application

```bash
# Clone the repository
git clone https://github.com/UswaFatima-5050/developer-hub-internship.git

# Go to any week's folder
cd Week1-Security-Assessment

# Install dependencies
npm install

# Start the application
npm start

# App runs at http://localhost:3000
```

---

##  Submission

-  **GitHub Repository** — this repo
-  **Report** — `report.pdf` in root folder
  

---

*Cybersecurity Internship | Developers Hub Corporation | April 2026*
