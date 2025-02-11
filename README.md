# Clot_UserRead_Service Microservice

## Overview
The **Clot_UserRead_Service** microservice is responsible for retrieving user information from the database. It supports fetching a single user by ID or retrieving all registered users. This microservice follows the **Singleton** design pattern for database connection management.

---

## Features
- Retrieves a single user based on their ID.
- Fetches all users stored in the database.
- Uses MySQL as the primary database.
- Implements the Singleton pattern for optimized database connections.
- Fully containerized using Docker.

---

## Technologies Used
- **Node.js**: JavaScript runtime for backend development.
- **Express.js**: Lightweight framework for building APIs.
- **MySQL**: Relational database for storing user data.
- **Docker**: Containerization of the microservice.
- **dotenv**: Manages environment variables.
- **Body-parser**: Parses incoming request bodies.

---

## API Endpoints
### Get a Single User
**Endpoint**: `/api/users/:id`

**Method**: `GET`

**Request Example**:
```
GET http://localhost:3001/api/users/1
```

**Response Examples**:
- **200 OK**:
  ```json
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
  ```
- **404 Not Found**:
  ```json
  {
    "message": "User not found"
  }
  ```
- **500 Internal Server Error**:
  ```json
  {
    "message": "Error retrieving user"
  }
  ```

### Get All Users
**Endpoint**: `/api/users`

**Method**: `GET`

**Request Example**:
```
GET http://localhost:3001/api/users
```

**Response Examples**:
- **200 OK**:
  ```json
  [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com"
    },
    {
      "id": 2,
      "name": "Maria Smith",
      "email": "maria.smith@example.com"
    }
  ]
  ```
- **500 Internal Server Error**:
  ```json
  {
    "message": "Error retrieving users"
  }
  ```

---

## Environment Variables
The service requires a `.env` file in the root directory with the following variables:

```env
PORT=3001
DB_HOST=clot_usercreate_service-db-1
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=clot_users
```

---

## Project Structure
```
clot_userRead_service
├── src/
│   ├── app.js                # Main application file
│   ├── routes/
│   │   └── index.js          # API routes
│   ├── controllers/
│   │   └── userController.js # Business logic for user retrieval
│   ├── models/
│   │   └── userModel.js      # Database queries
├── .env                      # Environment variables
├── Dockerfile                # Docker build file
├── docker-compose.yml        # Docker Compose configuration
├── README.md                 # Documentation
└── package.json              # Node.js dependencies
```

---

## Docker Setup
1. **Build the Docker Image**:
   ```bash
   docker build -t clot_userread_service:latest .
   ```
2. **Run the Docker Container**:
   ```bash
   docker run -p 3001:3001 --env-file .env clot_userread_service:latest
   ```
3. **Using Docker Compose**:
   ```bash
   docker-compose up --build
   ```

---

## Testing the API
Use **Postman** or **curl** to test the API.

Example using `curl` to fetch all users:
```bash
curl -X GET http://localhost:3001/api/users
```

Expected Response:
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
]
```

---

## Notes
- Ensure `clot_userCreate_service` is running before starting this microservice.
- This service **does not create users**, it only retrieves them.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

