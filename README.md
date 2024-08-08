

# user-auth-full-stack

A full-stack user authentication system using Node.js, Express, MongoDB, and JSON Web Tokens (JWT). This application allows users to sign up, log in, and manage authentication securely.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [API Endpoints](#api-endpoints)
- [Configuration](#configuration)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd user-auth-full-stack
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Ensure you have a `.env` file with the following variables:

   ```
   PORT=5000
   SECRET=your_jwt_secret_key
   MONGO_URI=your_mongodb_connection_string
   ```

2. Start the server:

   ```bash
   npm start
   ```

   The server will run on the port specified in your `.env` file.

## File Structure

### `server.js`

- **Purpose**: Sets up and configures the Express server, connects to the MongoDB database, and defines middleware and routes.
- **Key Dependencies**: `express`, `morgan`, `dotenv`, `express-jwt`
- **Functions**:
  - Configures middleware (JSON parsing, logging)
  - Connects to the database
  - Defines API routes
  - Handles errors

### `models/user.js`

- **Purpose**: Defines the `User` schema and model for MongoDB.
- **Key Dependencies**: `mongoose`, `bcryptjs`
- **Schema**:
  - `username`: String, unique, required
  - `email`: String, unique, required
  - `password`: String, required
  - `isAdmin`: Boolean, default: false
  - `memberSince`: Date, default: Date.now
- **Methods**:
  - `pre-save hook`: Hashes password before saving
  - `checkPassword()`: Compares provided password with hashed password
  - `withoutPassword()`: Removes the password field from user object

### `controllers/authController.js`

- **Purpose**: Handles user authentication-related logic for signup and login.
- **Key Dependencies**: `jsonwebtoken`, `User` model
- **Functions**:
  - `signup(req, res, next)`: Registers a new user and returns a JWT token
  - `login(req, res, next)`: Authenticates user and returns a JWT token

### `routes/authRoutes.js`

- **Purpose**: Defines authentication routes and connects them with the appropriate controller functions.
- **Key Dependencies**: `express`, `authController`
- **Routes**:
  - `POST /signup`: Registers a new user
  - `POST /login`: Authenticates a user

### `config/db.js`

- **Purpose**: Connects to the MongoDB database using Mongoose.
- **Key Dependencies**: `mongoose`
- **Function**:
  - `connectToDb()`: Establishes connection to the database and handles errors

## API Endpoints

### `POST /api/auth/signup`

- **Description**: Registers a new user.
- **Request Body**:
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response**:
  ```json
  {
    "user": {
      "username": "string",
      "email": "string",
      "isAdmin": "boolean",
      "memberSince": "ISODate"
    },
    "token": "jwt_token"
  }
  ```

### `POST /api/auth/login`

- **Description**: Authenticates a user and returns a JWT token.
- **Request Body**:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response**:
  ```json
  {
    "user": {
      "username": "string",
      "email": "string",
      "isAdmin": "boolean",
      "memberSince": "ISODate"
    },
    "token": "jwt_token"
  }
  ```

## Configuration

- **PORT**: Port number for the server to listen on (e.g., `5000`)
- **SECRET**: Secret key for signing JWT tokens
- **MONGO_URI**: Connection string for MongoDB

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

---

