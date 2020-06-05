## Pre-requisite
    MongoDB (Database Solution)
    React.js (Browser-side javascript library)
    Express (node.js framework)
    Node.js (Server-side javascript library)

## Setup mongoDB
    Create account on mongo Atlas and create a cluster.
    Create models for users and exercises.

## Frontend
    npm start
    http://localhost:3000/

## Backend
    nodemon server.js
    Server is running on port: 5000

| Users API  | |
| ------------- | ------------- |
| GET  | /users     |
| POST | /users/add |

| Exercises API  | |
| ------------- | ------------- |
| GET    | /exercises     |
| POST   | /exercises/add |
| GET    | /exercises/:id |
| DELETE | /exercises/:id |
| POST   | /exercises/update/:id |

![Alt text](screenshot/createUser.png?raw=true "Create User")

![Alt text](screenshot/createLog.png?raw=true "Create Exercise Log")

![Alt text](screenshot/exercises.png?raw=true "Logged Exercises")
