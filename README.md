# Project README

## Table of Contents
- [Introduction](#introduction)
- [Repository Link](#repository-link)
- [Setup Instructions](#setup-instructions)
- [Approach](#approach)
- [Challenges Faced](#challenges-faced)
- [Improvements](#improvements)

---

## Introduction
This project contains two services:
1. A **Next.js app** located in the `client` folder (frontend).
2. An **Express app** located in the `server` folder (backend).

Both services are containerized using Docker and can be run together using `docker-compose up` for simplicity.

---

## Repository Link
[GitHub Repository](https://github.com/Richey24/kuyua-test)

---

## Live Link
[Live Link](https://kuyua-test-frontend.vercel.app)

---

## Setup Instructions

### Steps to Run the Application
1. Clone the repository:
   ```bash
   git clone https://github.com/Richey24/kuyua-test.git
   cd kuyua-test
   ```
2. Run the application:
   ```bash
   docker-compose up
   ```
3. Access the application:
   - **Frontend (Next.js):** `http://localhost:3000`
   - **Backend (Express):** `http://localhost:4000`

---

## Approach
### Why Docker?
Docker simplifies the development and deployment process by creating isolated environments for each service. This ensures consistency across different environments and reduces "it works on my machine" issues.

### Why Docker Compose?
Docker Compose is used to manage multi-container applications. With a single command (`docker-compose up`), both the Next.js app and the Express app can be built, started, and networked together seamlessly.

### Architectural Decisions
1. **Frontend (Next.js):**
   - Selected for its server-side rendering (SSR) capabilities and seamless integration with React.
   - Provides excellent performance and SEO benefits.

2. **Backend (Express):**
   - Chosen for its lightweight and fast implementation of RESTful APIs.
   - Scalable and easily integrates with a variety of databases and services.
---

## Challenges Faced
1. **Map Integration:**
   - Configuring the map provided my Mapbox to match my desired design.
   - Solution: Research and found i can create my own cuztomize style using mapbox platform

2. **Styling Accuracy**
   - It was difficult to get the accurate font and color from the design as it was just a PDF
   - Solution: Used what-the-font picture search to find a font close to the design, manipulated hex code till i get a color same with the design

---

## Improvements

2. **CI/CD Pipeline:**
   - Implementing a CI/CD pipeline (e.g., GitHub Actions) to automate testing and deployment.

3. **Responsiveness:**
   - Configuring the frontend to be responsive on all screen size

4. **Testing:**
   - Add unit tests for client and server for improved reliability.

---

