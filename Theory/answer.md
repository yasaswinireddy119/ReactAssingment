Q1. Role of Frontend (FE)

The Frontend (FE) is the part of a web application that users directly interact with. It focuses on presenting data and handling user interactions.

1. User Interface (UI)

Responsible for designing and displaying the layout of the application.

Includes buttons, forms, navigation bars, images, text, and animations.

Ensures the application looks visually appealing and user-friendly.

2. User Interaction

Handles user actions such as clicks, typing, scrolling, and form submissions.

Provides instant feedback to users (e.g., validation messages, loaders).

Improves user experience through smooth interactions and responsiveness.

3. Communication with Backend

Sends requests to the backend using APIs (HTTP/HTTPS).

Receives data from the backend and displays it to the user.

Converts backend responses (JSON/XML) into meaningful UI content.

Q2. Role of Backend (BE)

The Backend (BE) is the server-side part of a web application that manages logic, data, and security.

1. Server-Side Processing

Handles incoming requests from the frontend.

Processes business logic and returns appropriate responses.

Ensures correct workflows are followed.

2. Database Handling

Stores, retrieves, updates, and deletes data.

Manages data consistency and integrity.

Acts as a bridge between application logic and database systems.

3. Security and Authentication

Handles user authentication and authorization.

Protects sensitive data using encryption and access controls.

Prevents unauthorized access and security attacks.

Q3. Business Logic
What is Business Logic?

Business Logic refers to the rules, calculations, and workflows that define how a business operates within an application. It decides what should happen when a specific action is performed.

Business logic sits between the frontend and database and ensures the application behaves according to real-world business rules.

Real-World Examples

E-commerce Application

Applying discounts only if cart value exceeds a certain amount.

Calculating final price after tax and shipping charges.

Banking Application

Allowing withdrawals only if sufficient balance is available.

Blocking transactions after multiple failed login attempts.

Online Examination System

Preventing students from submitting answers after the time limit.

Automatically calculating scores based on correct answers.

Q4. Client–Server Model

The Client–Server Model is an architecture where tasks are divided between clients and servers.

Client

The client is the frontend application or browser.

Sends requests and displays responses.

Examples: Web browser, mobile app.

Server

The server is the backend system.

Processes requests, applies business logic, and manages data.

Examples: Node.js server, Java Spring server.

Communication

Communication happens using HTTP/HTTPS protocols.

Client sends a request → Server processes → Server sends a response.

Data is usually exchanged in JSON format.

Q5. Three-Tier Architecture

Three-Tier Architecture divides a web application into three separate layers.

1. Presentation Layer

The frontend layer.

Handles UI and user interactions.

Examples: React, Angular, HTML/CSS.

2. Application (Business) Layer

Contains business logic.

Processes requests and enforces rules.

Examples: Node.js, Spring Boot.

3. Data Layer

Handles data storage and retrieval.

Manages databases.

Examples: MySQL, MongoDB, PostgreSQL.

Why This Architecture Is Used

Improves scalability and maintainability.

Allows independent development of layers.

Enhances security by isolating data access.

Q6. JavaScript as a Backend Language

JavaScript is widely used as a backend language due to several advantages.

1. Performance

Uses non-blocking, event-driven architecture.

Handles multiple requests efficiently.

Suitable for real-time applications.

2. Ecosystem

Large collection of libraries and packages (npm).

Faster development using ready-made tools.

Strong community support.

3. Popular Backend Frameworks

Node.js – Runtime for executing JavaScript on the server.

Express.js – Lightweight web framework.

NestJS – Scalable, enterprise-grade framework.