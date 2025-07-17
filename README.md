# <p align="center">Blog Platform Backend</p>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"></a>
  <a href="#"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"></a>
  <a href="#"><img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" alt="JWT"></a>
</p>

## Introduction

This project provides a simplified backend for a blog application, built using Node.js. It offers functionalities for managing users, blog posts, and comments, providing the necessary API endpoints for a complete blog platform. This backend is intended for developers looking to build a modern blog application.

## Table of Contents

1.  [Key Features](#key-features)
2.  [Installation Guide](#installation-guide)
3.  [Usage](#usage)
4.  [Environment Variables](#environment-variables)
5.  [Project Structure](#project-structure)
6.  [Technologies Used](#technologies-used)
7.  [License](#license)

## Key Features

*   **User Management:** Create, retrieve, update, and delete user accounts. Authentication via JWT.
*   **Blog Management:** Create, retrieve, update, and delete blog posts. Supports searching and retrieving popular blogs.
*   **Comment Management:** Add, retrieve, update, and delete comments on blog posts.
*   **Data Validation:** Middleware for validating user, blog post, and comment data.
*   **Error Handling:** Centralized error handling middleware for consistent error responses.
*   **Utilities:** Includes various utility functions for data formatting, validation, and more.

## Installation Guide

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure environment variables:**

    Create a `.env` file in the root directory and set the following environment variables:

    ```
    DATABASE_URL=<your_database_url>
    JWT_SECRET=<your_jwt_secret>
    PORT=<port_number> (e.g., 3000)
    ```

4.  **Run the server:**

    ```bash
    npm start
    ```

## Usage

The backend provides REST API endpoints for managing users, blogs, and comments. You can interact with these endpoints using tools like `curl`, Postman, or by integrating them into a frontend application.

**Example Endpoints:**

*   `POST /users/register`: Register a new user.
*   `POST /users/login`: Login with an existing user to get JWT token.
*   `GET /blogs`: Retrieve all blog posts.
*   `GET /blogs/:id`: Retrieve a specific blog post by ID.
*   `POST /blogs`: Create a new blog post.
*   `POST /blogs/:blogId/comments`: Add a comment to a blog post.

## Environment Variables

The following environment variables are required for the application to run correctly:

*   `DATABASE_URL`: The URL of the database.
*   `JWT_SECRET`: A secret key used to sign JWT tokens.  **Important: Use a strong, randomly generated string.**
*   `PORT`: The port the server will listen on.

## Project Structure

```
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── config
│   │   ├── app.js
│   │   ├── constants.js
│   │   ├── database.js
│   │   ├── index.js
│   │   └── secrets.js
│   ├── index.js
│   ├── middleware
│   │   ├── authMiddleware.js
│   │   ├── errorHandler.js
│   │   └── validationMiddleware.js
│   ├── models
│   │   ├── Blog.js
│   │   ├── Comment.js
│   │   └── User.js
│   ├── routes
│   │   ├── blogRoutes.js
│   │   ├── commentRoutes.js
│   │   └── userRoutes.js
│   ├── services
│   │   ├── blogService.js
│   │   ├── commentService.js
│   │   └── userService.js
│   └── utils
│       ├── encryption.js
│       ├── formatting.js
│       ├── helpers.js
│       ├── index.js
│       ├── logger.js
│       └── validation.js
```

## Technologies Used

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"></a>
  <a href="#"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"></a>
  <a href="#"><img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" alt="JWT"></a>
</p>

*   **Backend:** Node.js
*   **Authentication:** JWT (JSON Web Tokens)
*   **Other:** See `package.json` for a full list of dependencies.

## License

MIT License