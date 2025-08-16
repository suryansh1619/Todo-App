# Todo App

This is a full-stack Todo application with a React frontend and a Node.js (Express) backend.

## Features

*   User authentication (signup and login)
*   Create, read, update, and delete todos
*   Filter and sort todos
*   Responsive design with Tailwind CSS
*   Dark and light theme support

## Technologies Used

**Frontend:**

*   React
*   Vite
*   React Router
*   Axios
*   Tailwind CSS
*   Headless UI

**Backend:**

*   Node.js
*   Express.js
*   MongoDB with Mongoose
*   JSON Web Tokens (JWT) for authentication
*   bcrypt for password hashing

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js and npm
*   MongoDB

The application should now be running on `http://localhost:3000`.

## Folder Structure

```
.
├── Backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middlewares
│   │   ├── models
│   │   ├── routes
│   │   └── utils
│   └── ...
└── Frontend
    ├── src
    │   ├── api
    │   ├── components
    │   ├── contexts
    │   ├── hooks
    │   ├── pages
    │   └── routes
    └── ...
```

## API Endpoints

The backend provides the following API endpoints:

*   **Auth:**
    *   `POST /api/auth/register` - Register a new user
    *   `POST /api/auth/login` - Login a user
*   **Todos:**
    *   `GET /api/todos` - Get all todos for the logged-in user
    *   `POST /api/todos` - Create a new todo
    *   `GET /api/todos/:id` - Get a single todo by ID
    *   `PUT /api/todos/:id` - Update a todo by ID
    *   `DELETE /api/todos/:id` - Delete a todo by ID

