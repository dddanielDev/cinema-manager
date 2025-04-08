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

## 📋 Description

The Cinema Management System is an application designed to help manage a cinema. It allows administrators to define cinema halls, add movies, and create schedules (repertoires) based on this data. Each hall can have different seating configurations. Movies include basic information such as title, duration, and genre. The schedule feature lets users assign movies to specific halls and time slots, making it easy to plan daily or weekly screenings. The system improves organization and helps automate cinema operations.

Inheritance – each class inherits from the base entity class to have a unique ID.
Encapsulation – is used in classes that work with the DbContext.
Abstraction and Polymorphism – the Employee and Manager classes inherit from the Person class and implement the getRole method according to their specific needs.

## ✅ Implemented Features

- Ability to add cinema rooms
- Ability to add movies
- Schedule creation based on rooms and available movies
- Responsive UI (RWD)

## 🚧 To Be Done

- System-wide description and documentation
- Remaining functionalities (to be specified)
- UML diagram (text + image)
- Verification of full use of object-oriented programming concepts
- PIN-based login (hardcoded in MVP version)

## 🧩 Technologies

- C# .net
- entity framework
- In cache memory db
- js
- react
- tailwind
- redux + rtk query

## 📌 Notes

- PIN login will be simplified for MVP and hardcoded in the codebase
- Further refinements will follow after core functionality is in place
