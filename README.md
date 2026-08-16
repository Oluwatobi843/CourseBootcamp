# CourseBootcamp API

> REST API for discovering and managing bootcamp-style courses, built with Node.js, Express and MongoDB.

## Overview

CourseBootcamp is a backend API project that demonstrates practical REST API engineering around course/bootcamp resources and related user workflows. It combines MongoDB persistence with authentication, request validation, security middleware, file handling, email delivery and geolocation capabilities.

## Key features

- Course/bootcamp resource management
- User authentication and authorization foundations
- JWT-based authentication
- Password hashing with bcrypt
- Request validation
- File upload support
- Email integration
- Geolocation/geocoding capabilities
- Security middleware and API hardening
- MongoDB persistence through Mongoose

## Technology stack

| Area | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB |
| ODM | Mongoose |
| Authentication | JWT |
| Password security | bcrypt |
| Validation | Express Validator |
| Security | Helmet, rate limiting, HPP, XSS/NoSQL protections |
| Integrations | File upload, email, geocoding |

## Architecture

```text
Client
  |
  v
Express REST API
  |
  +--> Authentication
  +--> Bootcamp/Course workflows
  +--> Validation
  +--> File services
  +--> Email services
  +--> Geolocation
  |
  v
Mongoose
  |
  v
MongoDB
```

The project uses middleware to keep cross-cutting concerns such as authentication, validation and security separate from route handlers and business workflows.

## Security

The API demonstrates a defense-in-depth approach using:

- HTTP security headers
- Rate limiting
- Request validation
- HPP protection
- XSS protection
- NoSQL-injection sanitization
- Password hashing
- JWT authentication
- CORS configuration

Production deployments should additionally use secure secrets management, HTTPS, restricted database access and environment-specific configuration.

## Installation

```bash
git clone https://github.com/Oluwatobi843/CourseBootcamp.git
cd CourseBootcamp
npm install
```

Configure the environment variables expected by the application before starting the API. Keep credentials and private configuration out of source control.

## Running locally

Use the development/start command configured by the project:

```bash
npm run dev
```

or:

```bash
npm start
```

## API development approach

A typical request follows this path:

```text
HTTP request
   |
   v
Security middleware
   |
   v
Validation / authentication
   |
   v
Route controller
   |
   v
Business logic
   |
   v
Mongoose model
   |
   v
MongoDB
```

This structure makes the API easier to reason about and provides clear boundaries for future testing and feature expansion.

## Engineering value

CourseBootcamp demonstrates a strong foundation in **Node.js backend development, REST API design, MongoDB, authentication, security middleware and third-party service integration**.

It also represents useful progression toward the more modular NestJS architecture used in newer backend projects.

## Roadmap

- OpenAPI/Swagger documentation
- Automated unit and integration tests
- Docker support
- CI/CD pipeline
- More granular authorization policies
- Production logging and observability
- Improved API versioning

## Author

**Oluwatobi843**

GitHub: https://github.com/Oluwatobi843
