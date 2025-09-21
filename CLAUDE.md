# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cinema Management System - A full-stack application for managing cinema operations including halls, movies, schedules, and employee authentication. Built with .NET API backend and React frontend.

## Development Setup

### Prerequisites
- .NET 8.0 SDK
- Node.js and npm
- Docker (for PostgreSQL)
- PostgreSQL database

### Backend Setup (API folder)
```bash
cd backend/CinemaManager.API
docker compose up  # Start PostgreSQL container
dotnet restore     # Install dependencies
dotnet ef database update  # Create database tables
dotnet run         # Start API server
```

### Frontend Setup
```bash
cd frontend
npm install        # Install dependencies
npm run dev        # Start development server (Vite)
```

## Common Commands

### Backend (.NET API)
- `dotnet restore` - Install/restore NuGet packages
- `dotnet build` - Build the project
- `dotnet run` - Run the API server
- `dotnet ef database update` - Apply database migrations
- `dotnet ef migrations add <MigrationName>` - Create new migration

### Frontend (React)
- `npm install` - Install dependencies
- `npm run dev` - Start development server (Vite on port 5173)
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Database
- `docker compose up` - Start PostgreSQL container (from backend/CinemaManager.API/)
- Connection: Host=localhost;Port=5432;Database=cinema_manager_db;Username=admin;Password=pass

## Architecture Overview

### Backend Structure (ASP.NET Core)
- **Controllers/**: API endpoints for different entities (Movies, CinemaHalls, Schedule, Login, etc.)
- **Models/**: Entity models (Movie, CinemaHall, Schedule, Account, Employee, etc.)
- **Services/**: Business logic layer (MovieService, CinemaHallService, ScheduleService, AccountsService, JwtService)
- **Data/**: Entity Framework DbContext and database configuration
- **Authorization/**: Custom authorization attributes and features
- **Migrations/**: Entity Framework database migrations

### Frontend Structure (React + Redux)
- **src/components/**: Reusable UI components (Layout, Sidebar)
- **src/pages/**: Page components (MoviesPage, CinemaHallsPage, LoginPage, SchedulePage)
- **src/features/**: Redux Toolkit Query API slices and state management
  - `movies/`: Movie-related API and state
  - `halls/`: Cinema hall API and state  
  - `schedule/`: Schedule API and state
  - `login/`: Authentication API and state
  - `availableFeatures/`: Employee features/permissions API
  - `base/`: Base RTK Query configuration
- **src/store/**: Redux store configuration

### Key Technologies
- **Backend**: ASP.NET Core 8.0, Entity Framework, PostgreSQL, JWT Authentication
- **Frontend**: React 19, Redux Toolkit + RTK Query, React Router, Tailwind CSS v4, Vite

### Authentication System
- PIN-based login system with JWT token issuance
- Role-based access control with employee features/permissions
- Custom authorization attributes for feature-based access control
- CORS configured for frontend (localhost:5173)

### Database Design
- **BaseEntity**: Base class for entities with common properties
- **Account**: Employee authentication credentials (PIN-based)
- **Employee**: Employee information with role-based features
- **Movie**: Movie details (title, duration, genre, etc.)
- **CinemaHall**: Cinema hall configuration and seating
- **Schedule**: Movie scheduling for specific halls and time slots
- **Features/EmployeeFeatures**: Role-based permission system

## Development Notes

- API runs on standard ASP.NET ports, frontend on port 5173 (Vite default)
- Database migrations are managed through Entity Framework
- JWT configuration uses symmetric key encryption
- Frontend uses Redux Toolkit Query for API state management
- Responsive design implemented with Tailwind CSS
- No existing test frameworks configured
- PIN authentication is simplified for MVP (hardcoded in codebase)

## Project Structure Conventions

- Backend follows standard ASP.NET Core project structure
- Frontend uses feature-based organization for Redux slices
- Components are functional React components with hooks
- API endpoints follow RESTful conventions
- Services encapsulate business logic and data access