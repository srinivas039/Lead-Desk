# LeadDesk - Enterprise SaaS Lead Management System

LeadDesk is a modern, production-quality Full Stack SaaS application built with **React 19**, **TypeScript**, **Tailwind CSS**, and **Spring Boot 3 REST API** backed by **PostgreSQL** persistence and **JWT Authentication**.

---

## 🌟 Key Features

- **Public Landing Page**: Hero section, Features breakdown, SaaS performance metrics, and interactive Lead Capture Form.
- **Client & Server Validation**: Form validation with React Hook Form + Zod schema on frontend and Spring `@Valid` Bean Validation on backend.
- **JWT Admin Authentication**: BCrypt password hashing and stateless Spring Security JWT authentication guard.
- **Admin Lead Management Dashboard**:
  - Live search filtering by Name, Email, or Status (`NEW`, `CONTACTED`, `CLOSED`).
  - Automatic Newest-First ordering.
  - One-click instant Lead Status updates with visual color coding:
    - 🔵 `NEW` (Blue badge)
    - 🟧 `CONTACTED` (Orange/Amber badge)
    - 🟢 `CLOSED` (Green badge)
  - Interactive metric stats overview (Total, New, Contacted, Closed).
- **Production Resilience**: Global Exception Handler with clean JSON error payloads (400, 401, 404, 500) and zero stack trace exposure.
- **Required Footer Integration**: Built for Digital Heroes Training Task linked to [digitalheroesco.com](https://digitalheroesco.com).

---

## 🏗️ System Architecture

```
                               ┌────────────────────────────────────────┐
                               │           React 19 Frontend            │
                               │   (Vite, TypeScript, Tailwind CSS)     │
                               └──────────────────┬─────────────────────┘
                                                  │
                                                  │ HTTP / REST (Axios + JWT)
                                                  ▼
                               ┌────────────────────────────────────────┐
                               │           Spring Boot 3 REST API       │
                               │  (Spring Security, Data JPA, Validation)│
                               └──────────────────┬─────────────────────┘
                                                  │
                                                  │ JDBC / Hibernate
                                                  ▼
                               ┌────────────────────────────────────────┐
                               │           PostgreSQL Database          │
                               │             (digitalHerodb)            │
                               └────────────────────────────────────────┘
```

---

## 💻 Tech Stack

### Frontend
- **Framework**: React 19 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM v6
- **Form Management**: React Hook Form + Zod Validation
- **State & Data Fetching**: TanStack Query (v5) & Axios
- **Notifications**: Sonner (Toast Notifications)
- **Icons**: Lucide React

### Backend
- **Framework**: Spring Boot 3.2.5 (Java 17)
- **Security**: Spring Security 6 with JWT Token Authentication & BCrypt Password Encoding
- **Persistence**: Spring Data JPA & Hibernate ORM
- **Validation**: Spring Boot Starter Validation (Bean Validation)
- **Database**: PostgreSQL (Driver `org.postgresql.Driver`)
- **Build Tool**: Maven

---

## 📁 Repository Folder Structure

```
Digital_hero_project/
├── backend/
│   ├── pom.xml
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/leaddesk/
│   │   │   │   ├── config/             # CorsConfig, SecurityConfig
│   │   │   │   ├── controller/         # LeadController, AdminLeadController, AuthController
│   │   │   │   ├── dto/                # Request/Response Data Transfer Objects
│   │   │   │   ├── entity/             # Lead, User, LeadStatus Enums
│   │   │   │   ├── exception/          # GlobalExceptionHandler, ResourceNotFoundException
│   │   │   │   ├── repository/         # LeadRepository, UserRepository
│   │   │   │   ├── security/           # JwtUtils, JwtAuthenticationFilter, UserDetailsServiceImpl
│   │   │   │   ├── service/            # LeadService, AuthService & Implementations
│   │   │   │   ├── util/               # AdminDataLoader (Automatic Seed)
│   │   │   │   └── LeadDeskApplication.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/                       # JUnit 5 & Mockito Unit Tests
│   └── mvnw / mvnw.cmd
├── frontend/
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── vercel.json
│   └── src/
│       ├── components/         # Navbar, Footer, Hero, Features, WhyChooseUs, LeadForm, LeadTable, StatusBadge
│       ├── context/            # AuthContext & AuthProvider
│       ├── pages/              # LandingPage, LoginPage, AdminDashboard
│       ├── services/           # api.ts, authService.ts, leadService.ts
│       ├── types/              # lead.ts, auth.ts
│       └── App.tsx & main.tsx
└── README.md
```

---

## ⚙️ Environment Variables

### Backend Configuration (`application.properties`)

Set the following environment variables in your environment or deployment platform (e.g. Render / Railway):

```env
PORT=8080
DB_HOST=your-postgresql-host.neon.tech
DB_PORT=5432
DB_NAME=digitalHerodb
DB_USERNAME=your_db_user
DB_PASSWORD=your_database_password
JWT_SECRET=your-jwt-secret
CORS_ALLOWED_ORIGINS=http://localhost:5173,https://your-frontend.vercel.app
```

### Frontend Configuration (`.env`)

```env
VITE_API_BASE_URL=http://localhost:8080/api
```

---

## 🔑 Default Admin Account

Upon initial application startup, `AdminDataLoader` automatically seeds the required administrative account:

- **Username**: `admin@digitalheroes.com`
- **Password**: `Admin@123`


Note:
These credentials are intended for demonstration purposes only. In production, create administrators securely and rotate credentials after deployment.
---

## 🚀 REST API Documentation

### 1. Authentication

#### `POST /api/auth/login`
Authenticates the admin user and returns a signed JWT token.

**Request Body**:
```json
{
  "username": "admin@digitalheroes.com",
  "password": "Admin@123"
}
```

**Response (200 OK)**:
```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9...",
  "tokenType": "Bearer",
  "username": "admin@digitalheroes.com",
  "role": "ROLE_ADMIN"
}
```

---

### 2. Lead Operations

#### `POST /api/leads` (Public)
Submits a new lead capture request.

**Request Body**:
```json
{
  "name": "Sarah Connor",
  "email": "sarah@cyberdyne.com",
  "budget": "$5000–10000",
  "message": "Interested in custom AI-driven SaaS dashboard development."
}
```

**Response (201 Created)**:
```json
{
  "id": 1,
  "name": "Sarah Connor",
  "email": "sarah@cyberdyne.com",
  "budget": "$5000–10000",
  "message": "Interested in custom AI-driven SaaS dashboard development.",
  "status": "NEW",
  "createdAt": "2026-07-25T09:20:00",
  "updatedAt": "2026-07-25T09:20:00"
}
```

---

#### `GET /api/admin/leads` (Protected - Requires JWT)
Retrieves all submitted leads sorted newest first.

**Headers**:
`Authorization: Bearer <JWT_TOKEN>`

---

#### `PATCH /api/admin/leads/{id}/status` (Protected - Requires JWT)
Updates the status of a specific lead (`NEW`, `CONTACTED`, `CLOSED`).

**Request Body**:
```json
{
  "status": "CONTACTED"
}
```

---

#### `GET /api/admin/leads/search?query={query}` (Protected - Requires JWT)
Searches leads matching `query` across Name, Email, or Status.

---

## 🛠️ Local Development Guide

### 1. Running Backend Locally
```bash
cd backend
./mvnw clean spring-boot:run
```
Backend will start on `http://localhost:8080`.

### 2. Running Frontend Locally
```bash
cd frontend
npm install
npm run dev
```
Frontend dev server will launch at `http://localhost:5173`.

---

## 🌐 Deployment Steps (NO DOCKER)

### 1. Database Deployment (Neon PostgreSQL)
1. Create a free PostgreSQL database instance on [Neon.tech](https://neon.tech).
2. Create database named `digitalHerodb`.
3. Obtain connection parameters (`DB_HOST`, `DB_PORT`, `DB_USERNAME`, `DB_PASSWORD`).

### 2. Backend Deployment (Railway / Render)
1. Push repository to GitHub.
2. Connect repository to Railway or Render web service.
3. Set root directory to `backend/`.
4. **Build Command**: `chmod +x mvnw && ./mvnw clean package -DskipTests`.
5. Set start command: `java -jar target/leaddesk-backend-0.0.1-SNAPSHOT.jar`.
6. Add environment variables: `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USERNAME`, `DB_PASSWORD`, `JWT_SECRET`, `CORS_ALLOWED_ORIGINS`.

### 3. Frontend Deployment (Vercel)
1. Import repository in [Vercel](https://vercel.com).
2. Set Root Directory to `frontend`.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.
5. Environment Variable: `VITE_API_BASE_URL=https://your-backend.up.railway.app/api`.

---

## 🚀 Future Improvements
- Multi-user role management (Sales Rep vs Admin manager).
- Email notification webhooks on new lead capture.
- Export lead data to CSV/Excel formats.
