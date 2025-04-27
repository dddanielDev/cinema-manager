# cinema-manager

## Getting started

To run entire solution:

1. Go to api folder and run `docker compose up` - it will create container with postgress db, db will be empty
2. in new console window go to api folder and run `dotnet restore` to install dontet dependencies
3. then in the same ditectory as in step number two type `dotnet ef database update` it will run migration and create necessary tables
4. in the same directory run `dotnet run`
5. go to the frontend directory and run `npm install`
6. still in the frontend directory run `npm run dev`

Enjoy your time with this awesome app!!!

![diagram](diagram.svg)

## Oject-Oriented Programming Pillars in the Cinema Management System
Based on the code I can see, here are examples of the four main OOP pillars:

Inheritance
Account class inherits from BaseEntity, gaining its properties (likely an ID)
From previous information, Employee and Manager classes inherit from a common Person base class
Encapsulation
Account class encapsulates PIN and employee relationship data with properties
Service classes (like AccountsService, MovieService) encapsulate database operations and business logic behind clean interfaces
Data access is controlled through getters/setters rather than direct field access
Abstraction
Service layer provides abstraction by hiding implementation details of operations
The relationship between Account and Employee abstracts authentication from user identity
EmployeeFeaturesService likely abstracts role-based capabilities
Polymorphism
Different employee types (Manager, Regular Employee) implement the getRole() method according to their specific needs
Authentication and authorization mechanisms likely use polymorphic behavior to handle different account types
These principles work together to create a modular, maintainable system with clear separation of concerns and proper domain modeling.


## 📋 Description

The Cinema Management System is an application designed to help manage a cinema. It allows administrators to define cinema halls, add movies, and create schedules (repertoires) based on this data. Each hall can have different seating configurations. Movies include basic information such as title, duration, and genre. The schedule feature lets users assign movies to specific halls and time slots, making it easy to plan daily or weekly screenings. The system improves organization and helps automate cinema operations.

### Additional System Features
The system also includes:

Employee Management: Different types of employees (regular employees and managers) with specific roles and permissions.
Authentication System: Secure PIN-based login system for employees with JWT token issuance for authorized access.
Account Management: Creation and management of employee accounts with associated credentials.
Role-Based Access Control: Different features are accessible based on employee roles.
Architecture Design Principles
Inheritance: Each class inherits from the base entity class to have a unique ID.
Encapsulation: Used in service classes that work with the DbContext to hide implementation details and provide clean interfaces.
Abstraction and Polymorphism: The Employee and Manager classes inherit from the Person class and implement the getRole method according to their specific needs.
Service Layer: Dedicated services handle specific domain operations (CinemaHallService, MovieService, ScheduleService, EmployeeFeaturesService, AccountsService, JwtService).
Repository Pattern: Services encapsulate data access and manipulation operations.
The system provides a comprehensive solution for cinema operations management with proper separation of concerns and well-defined responsibilities for each component.

## ✅ Implemented Features

- System-wide description and documentation
- Ability to add cinema rooms
- Ability to add movies
- Schedule creation based on rooms and available movies
- Responsive UI (RWD)
- PIN-based login

## 🧩 Technologies

- C# .net
- entity framework
- postgressql
- jwt
- js
- react
- tailwind
- redux + rtk query

## 📌 Notes

- PIN login will be simplified for MVP and hardcoded in the codebase
