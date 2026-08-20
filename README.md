# 💼 Jobify — MERN Job Management Application

Jobify is a full-stack **MERN job management application** designed to help users create accounts, manage their profiles, browse job opportunities, and manage job-related data through a modern React frontend and Node.js/Express backend.

The repository uses a separated client/server architecture: the backend is organized into controllers, routers, models, middleware, utilities, and error handling, while the frontend is a Vite-powered React application. The repository also includes a deployed backend reference on Render. citeturn0view0

## ✨ Features

- 🔐 User authentication and authorization
- 👤 User profile management
- 💼 Job creation and management
- 🔎 Job browsing and filtering workflows
- 🛡️ Protected API routes
- 🔑 JWT-based authentication
- 🔒 Password hashing with bcrypt
- 🗄️ MongoDB database integration through Mongoose
- ☁️ Cloudinary integration for uploaded media
- ✅ Request validation
- ⚠️ Centralized error handling
- 🚦 API rate limiting
- 🛡️ HTTP security headers with Helmet
- 🧹 MongoDB query sanitization
- 🍪 Cookie parsing and authentication support
- 📊 Frontend data visualization with Recharts
- 🔄 React Query for server-state management
- 🔔 Toast notifications
- 📱 Responsive React frontend

The backend package includes Express, Mongoose, JWT, bcrypt, Cloudinary, validation, security, rate limiting, and related middleware packages. citeturn1view0 The frontend uses React 18, Vite, React Router, TanStack React Query, Axios, Styled Components, React Icons, React Toastify, Day.js, and Recharts. citeturn2view0

---

# 🛠️ Tech Stack

## Frontend

- **React 18**
- **Vite**
- **React Router DOM**
- **TanStack React Query**
- **Axios**
- **Styled Components**
- **React Icons**
- **React Toastify**
- **Recharts**
- **Day.js**

## Backend

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- \*\*JWT (JSON Web Tokens)"
- **bcryptjs**
- **Cloudinary**
- **Multer / Data URI**
- **Express Validator**
- **Helmet**
- **Express Rate Limit**
- **Express Mongo Sanitize**
- **Morgan**

The exact dependency configuration is defined in the root and client `package.json` files. citeturn1view0turn2view0

---

# 🏗️ Architecture

Jobify follows a standard full-stack client/server architecture:

```text
                    ┌────────────────────┐
                    │      React UI       │
                    │       Vite          │
                    └─────────┬──────────┘
                              │
                              │ HTTP / Axios
                              ▼
                    ┌────────────────────┐
                    │   Express Server    │
                    │     REST API       │
                    └─────────┬──────────┘
                              │
              ┌───────────────┼────────────────┐
              │               │                │
              ▼               ▼                ▼
        Authentication      Jobs          User Data
              │               │                │
              └───────────────┼────────────────┘
                              ▼
                    ┌────────────────────┐
                    │      MongoDB        │
                    │     Mongoose        │
                    └────────────────────┘
```

The repository separates frontend code under `client/` from the backend's controllers, routers, models, middleware, utilities, and server entry point. citeturn0view0

---

# 🔄 How It Works

A typical request flows through the application like this:

```text
User interacts with React application
                │
                ▼
        React component / page
                │
                ▼
          Axios request
                │
                ▼
        Express API Router
                │
                ▼
        Authentication / Validation
                │
                ▼
           Controller
                │
                ▼
            Mongoose
                │
                ▼
             MongoDB
                │
                ▼
          API Response
                │
                ▼
        React Query / UI
```

This structure keeps presentation, API routing, business logic, persistence, and middleware concerns separated.

---

# 📁 Project Structure

```text
jobify-application/
│
├── client/                    # React + Vite frontend
│   ├── public/                # Public frontend assets
│   ├── src/                   # React application source
│   ├── package.json           # Frontend dependencies/scripts
│   ├── vite.config.js         # Vite configuration
│   └── index.html
│
├── controllers/               # Request/business logic
│   ├── authController.js
│   ├── jobController.js
│   └── userController.js
│
├── errors/                    # Custom application errors
│
├── middleware/                # Express middleware
│   ├── authMiddleware.js
│   ├── errorHandlerMiddleware.js
│   └── validationMiddleware.js
│
├── models/                    # Mongoose data models
│
├── public/                    # Backend/public resources
│
├── routers/                   # Express API routes
│   ├── authRouter.js
│   ├── jobRouter.js
│   └── userRouter.js
│
├── utils/                     # Reusable backend utilities
│
├── server.js                  # Backend entry point
├── package.json               # Backend dependencies/scripts
├── package-lock.json
└── README.md
```

The current repository structure includes dedicated `client`, `controllers`, `errors`, `middleware`, `models`, `public`, `routers`, and `utils` directories, with `server.js` as the backend entry point. citeturn0view0 The controller and router layers currently include authentication, job, and user modules. citeturn1view2turn2view1

---

# 🔐 Authentication Flow

Authentication is handled on the backend using JSON Web Tokens.

A simplified flow is:

```text
Register / Login
      │
      ▼
Validate request
      │
      ▼
Verify / hash password
      │
      ▼
Create JWT
      │
      ▼
Return authentication state
      │
      ▼
Authenticated requests
      │
      ▼
Auth middleware
      │
      ▼
Protected controller
```

The project includes dedicated authentication routing, authentication controllers, and authentication middleware. citeturn1view2turn2view1turn2view2

---

# 💼 Job Management

Job-related functionality is handled through a dedicated controller and router layer.

The general workflow is:

```text
Create Job
    │
    ▼
Validate Request
    │
    ▼
Authenticated API Route
    │
    ▼
Job Controller
    │
    ▼
Mongoose Model
    │
    ▼
MongoDB
```

This separation makes it easier to extend the application with additional job fields, filtering, pagination, application workflows, employer features, or analytics.

---

# 🗄️ Database

Jobify uses **MongoDB** with **Mongoose** as its object data modeling layer.

The backend dependency configuration includes Mongoose, while the application structure provides a dedicated `models/` directory for database models. citeturn1view0turn0view0

A typical production setup can use a MongoDB Atlas connection string through an environment variable.

Example:

```env
MONGO_URL=your_mongodb_connection_string
```

Use the variable names expected by the current server configuration when creating your local `.env` file.

---

# ☁️ Cloudinary

Cloudinary is included as a backend dependency for cloud-based media handling. The project also includes Multer and Data URI utilities that can be used as part of file-upload processing. citeturn1view0

Typical flow:

```text
Frontend Upload
      │
      ▼
Express / Multer
      │
      ▼
Upload Processing
      │
      ▼
Cloudinary
      │
      ▼
Stored Media URL
      │
      ▼
MongoDB / Application Data
```

---

# 🛡️ Backend Security

The backend includes several security-oriented packages and middleware:

- **Helmet** — security-related HTTP headers
- **Express Rate Limit** — limits excessive requests
- **Express Mongo Sanitize** — helps protect against MongoDB operator injection
- **Express Validator** — request validation
- **JWT** — authenticated API access
- **bcryptjs** — password hashing
- **Cookie Parser** — cookie handling

These dependencies are part of the current backend package configuration. citeturn1view0

> Security middleware improves the application's baseline security, but production deployments should still use HTTPS, strong secrets, secure cookie settings, proper CORS configuration, secret management, and database access controls.

---

# ⚛️ Frontend Architecture

The frontend is a Vite-powered React application. citeturn1view1

The frontend dependencies show a combination of:

- React for UI
- React Router for navigation
- Axios for API communication
- TanStack React Query for server state
- Styled Components for styling
- Recharts for data visualization
- React Toastify for user feedback
- Day.js for date handling

citeturn2view0

A simplified frontend flow looks like:

```text
React Page
    │
    ├── Form / UI
    │
    ▼
React Query / Axios
    │
    ▼
Express API
    │
    ▼
MongoDB
    │
    ▼
API Response
    │
    ▼
React Query Cache
    │
    ▼
UI Update
```

---

# 🚀 Getting Started

## Prerequisites

Install the following before running the project:

- **Node.js**
- **npm**
- **MongoDB** or MongoDB Atlas
- **Git**

---

## 1. Clone the Repository

```bash
git clone https://github.com/sahilkhanolkar18/jobify-application.git
cd jobify-application
```

---

## 2. Install Backend Dependencies

From the project root:

```bash
npm install
```

---

## 3. Install Frontend Dependencies

```bash
cd client
npm install
cd ..
```

The root project also provides a `setup-project` script intended to install root and client dependencies. citeturn1view0

---

# 🔑 Environment Variables

Create the appropriate `.env` file for the backend configuration.

A typical configuration may look like:

```env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=your_jwt_expiration
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

The exact environment variable names should match those referenced by the backend source code.

### Important

Never commit secrets such as:

- MongoDB credentials
- JWT secrets
- Cloudinary API secrets
- Production credentials

Make sure `.env` is included in `.gitignore`.

---

# ▶️ Running the Project

## Option 1 — Run Backend and Frontend Together

The root `package.json` defines a `dev` script using `concurrently` to run the server and client together. citeturn1view0

```bash
npm run dev
```

---

## Option 2 — Run Backend Separately

```bash
npm run server
```

The repository's original setup instructions also indicate that the backend can be started directly with:

```bash
node server.js
```

citeturn0view0

---

## Option 3 — Run Frontend Separately

```bash
npm run client
```

Or:

```bash
cd client
npm run dev
```

The client package uses Vite's development server. citeturn2view0

---

# 🏭 Production Build

Build the React frontend with:

```bash
cd client
npm run build
```

Preview the production build locally with:

```bash
npm run preview
```

The frontend package defines both `build` and `preview` scripts. citeturn2view0

---

# 🧪 Linting

The frontend includes an ESLint script:

```bash
cd client
npm run lint
```

This runs ESLint against the JavaScript and JSX source files. citeturn2view0

---

# 🌐 Deployment

The repository currently references a deployed Render application in its GitHub About section. citeturn0view0

For a typical deployment:

```text
GitHub Repository
       │
       ├──────────────► Backend Hosting
       │                    │
       │                    ▼
       │                 Express
       │                    │
       │                    ▼
       │                 MongoDB
       │
       └──────────────► Frontend Hosting
                            │
                            ▼
                         React/Vite
```

When deploying, configure production environment variables and make sure the frontend API URL points to the deployed backend rather than localhost.

---

# 🔌 API Layer

The backend uses Express routers to organize API functionality.

Current router modules include:

```text
routers/
├── authRouter.js
├── jobRouter.js
└── userRouter.js
```

citeturn2view1

Controllers are separated into:

```text
controllers/
├── authController.js
├── jobController.js
└── userController.js
```

citeturn1view2

Middleware is separated into:

```text
middleware/
├── authMiddleware.js
├── errorHandlerMiddleware.js
└── validationMiddleware.js
```

citeturn2view2

This structure makes the API easier to maintain as new resources and features are added.

---

# 📈 Data & Analytics

The frontend includes **Recharts**, which provides the foundation for presenting job-related statistics and analytics in the UI. citeturn2view0

Possible analytics include:

- Total jobs
- Job status distribution
- Applications over time
- Job category distribution
- User activity
- Hiring/application trends

Example concept:

```text
Job Applications

Applied       ███████████████
Interview     ████████
Rejected      ████
Selected      ███
```

---

# 🔄 Error Handling

The backend includes a dedicated `errors/` directory and an `errorHandlerMiddleware.js` middleware module. citeturn0view0turn2view2

The intended request lifecycle is:

```text
Request
  │
  ▼
Router
  │
  ▼
Middleware
  │
  ▼
Controller
  │
  ├── Success ───────► Response
  │
  └── Error ─────────► Error Handler
                           │
                           ▼
                       API Response
```

This avoids duplicating error-response logic throughout individual controllers.

---

# 🧩 Why This Architecture?

The project follows a modular full-stack architecture instead of putting all application logic into a single server file.

### Controllers

Handle application/business logic.

### Routers

Define API endpoints and connect requests to controllers.

### Middleware

Handle cross-cutting concerns such as authentication, validation, and errors.

### Models

Define MongoDB data structures through Mongoose.

### Utils

Contain reusable helper functionality.

### Client

Contains the React/Vite user interface.

This separation makes it easier to maintain, debug, test, and extend the application.

---

# 🚧 Current Limitations

Depending on how you intend to evolve the project, potential improvements include:

- More comprehensive automated tests
- API documentation with Swagger/OpenAPI
- More granular role-based authorization
- Advanced job search and filtering
- Job application tracking
- Email notifications
- Saved jobs
- Resume management
- Employer/recruiter dashboard
- Candidate application workflow
- Advanced analytics
- Pagination improvements
- Automated CI/CD pipeline
- Production monitoring and logging

---

# 🔮 Future Improvements

### Job Seekers

- Save/bookmark jobs
- Track applications
- Upload resumes
- Application status history
- Personalized job recommendations
- Job alerts

### Recruiters

- Employer accounts
- Company profiles
- Candidate management
- Applicant filtering
- Recruitment analytics

### Platform

- Email notifications
- Advanced search
- Full-text search
- Role-based dashboards
- Admin panel
- API documentation
- Automated tests
- CI/CD
- Better observability and monitoring

---

# 🎯 Learning Outcomes

This project demonstrates practical full-stack development concepts including:

- Building REST APIs with Express
- Structuring a Node.js backend
- MongoDB/Mongoose integration
- JWT authentication
- Password hashing
- React application development
- Vite-based frontend tooling
- Client/server communication with Axios
- Server-state management with React Query
- Form validation
- Error handling
- API security middleware
- File/media upload workflows
- Cloudinary integration
- Data visualization
- Full-stack development and deployment

---

# 🔗 Repository

**GitHub:**

https://github.com/sahilkhanolkar18/jobify-application

**Deployment reference:**

The repository currently lists a Render deployment in its GitHub About section. citeturn0view0

---

# 👨‍💻 Author

**Sahil Khanolkar**

GitHub:

https://github.com/sahilkhanolkar18

---

# 📜 License

This project currently specifies the **ISC License** in its root `package.json`. citeturn1view0

---

# ⭐ Project Summary

Jobify is a full-stack MERN application that combines a React/Vite frontend with a Node.js/Express backend and MongoDB persistence.

The project demonstrates how a modern web application can be structured into reusable layers:

```text
React + Vite
     │
     ▼
React Query / Axios
     │
     ▼
Express REST API
     │
     ├── Authentication
     ├── Validation
     ├── Job Management
     ├── User Management
     └── Error Handling
     │
     ▼
Mongoose
     │
     ▼
MongoDB
```

It provides a solid foundation for expanding a basic job management application into a more complete recruitment and job-search platform.
