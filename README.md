
# Student Management System

This project is a **Student Management System** built using **Angular 14**.
It allows users to add, update, delete, and view student records using a clean and modular structure.

## Project Overview

This application is designed using a **feature-based architecture**.
Each feature is separated into components and services to ensure scalability and maintainability.

##  Folder Structure
src/
└── app/
└── student/
├── components/
│ ├── std-dashboard/
│ ├── std-form/
│ └── std-table/
│
├── services/
│ └── std.service.ts
│
├── models/
│ └── student.model.ts
│
├── student.module.ts
└── student-routing.module.ts

##  Component Responsibilities

### 🔹 Student Dashboard
- Acts as a container component  
- Handles communication between child components  

### 🔹 Student Form
- Used for adding and editing students  
- Sends form data to the dashboard  

### 🔹 Student Table
- Displays the list of students  
- Handles edit and delete actions  

## Data Flow
Student Form → Dashboard → Service

##  Technologies Used

- Angular 14
- TypeScript
- Angular Material
- HTML5
- SCSS

##  Features

- Add student
- Update student
- Delete student
- Reusable components
- Clean UI

## How to Run the Project

```bash
npm install
ng serve




