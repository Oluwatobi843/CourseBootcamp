# CourseBootcamp API

> A backend API for a course/bootcamp discovery platform, demonstrating REST API development, MongoDB persistence, authentication and layered API security.

## Overview

CourseBootcamp is a Node.js/Express backend project for managing bootcamp-style course data and related user workflows. It demonstrates practical API engineering with MongoDB, authentication, validation, security middleware, file handling, email and geolocation capabilities.

## Technology Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Express Validator
- Helmet
- CORS
- Rate limiting
- HPP protection
- XSS protection
- NoSQL injection sanitization
- File upload
- Email delivery
- Geocoding

## Security

The API applies multiple defensive middleware layers, including security headers, rate limiting, validation and protection against common web/API attacks.

## Architecture

```text
Client
  |
  v
Express REST API
  |
  +--> Authentication
  +--> Course / Bootcamp workflows
  +--> Validation
  +--> File / Email services
  +--> Geolocation
  |
  v
MongoDB / Mongoose
```

## Local Development

```bash
git clone https://github.com/Oluwatobi843/CourseBootcamp.git
cd CourseBootcamp
npm install
```

Configure the environment variables expected by the project, then run its development/start script.

## Engineering Value

This project demonstrates **REST API architecture, MongoDB, JWT authentication, backend security, middleware design, file uploads, email integration and geolocation**.

## Future Improvements

- OpenAPI/Swagger documentation
- Automated integration tests
- Docker
- CI/CD
- Advanced authorization policies
- Production observability

## Author

**Oluwatobi843**  
https://github.com/Oluwatobi843
