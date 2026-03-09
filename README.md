# Online Course Management Dashboard

## 📚 Project Overview

The **Online Course Management Dashboard** is a web-based application built using **Angular** that allows administrators or instructors to manage courses, students, and enrollments through a simple and interactive dashboard.

The system provides features to view available courses, register students, enroll students into courses, and view basic analytics such as total courses, students, and enrollments.

A **mock backend** is implemented using **JSON Server**, allowing the application to simulate real REST API interactions.

---

## 🚀 Features

* Dashboard analytics showing:

  * Total Courses
  * Total Students
  * Total Enrollments
* View and manage courses
* View registered students
* Enroll students in courses
* Responsive UI using **Angular Material**
* REST API communication using **Angular HttpClient**
* Reactive and Template-driven forms with validation
* Custom pipes and directives
* Error handling using HTTP interceptors

---

## 🛠️ Tech Stack

* **Frontend:** Angular (Standalone Components)
* **Language:** TypeScript
* **UI Framework:** Angular Material
* **Backend (Mock API):** JSON Server
* **Package Manager:** Node.js / npm
* **Version Control:** Git & GitHub

---

## 📂 Project Structure

```
online-course-dashboard
│
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── dashboard
│   │   │   ├── course-list
│   │   │   ├── course-detail
│   │   │   ├── student-list
│   │   │   └── enrollment
│   │   │
│   │   ├── services
│   │   │   ├── course.service.ts
│   │   │   ├── student.service.ts
│   │   │   └── enrollment.service.ts
│   │   │
│   │   ├── models
│   │   ├── pipes
│   │   └── directives
│
├── db.json
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/Stacydsouza/Online-course-management-dashboard.git
```

```
cd Online-course-management-dashboard
```

---

### 2️⃣ Install Dependencies

```
npm install
```

---

### 3️⃣ Start JSON Server (Mock Backend)

```
npx json-server --watch db.json --port 3000
```

Backend will run at:

```
http://localhost:3000
```

Example endpoints:

```
http://localhost:3000/courses
http://localhost:3000/students
http://localhost:3000/enrollments
```

---

### 4️⃣ Start Angular Application

```
npm start
```

or

```
ng serve
```

Angular will run at:

```
http://localhost:4200
```

---

## 📊 Dashboard Functionalities

### Course Management

* View course list
* View course details
* Filter courses by category or level

### Student Management

* Register students
* View student list

### Enrollment System

* Enroll students into courses
* Store enrollment records

### Dashboard Analytics

* Total courses
* Total students
* Total enrollments

---

## 🔗 API Endpoints (JSON Server)

| Method | Endpoint     | Description        |
| ------ | ------------ | ------------------ |
| GET    | /courses     | Fetch all courses  |
| POST   | /courses     | Add a course       |
| GET    | /students    | Fetch all students |
| POST   | /students    | Add a student      |
| GET    | /enrollments | Fetch enrollments  |
| POST   | /enrollments | Enroll a student   |

---

## 📌 Future Improvements

* Authentication and login system
* Role-based admin access
* Charts for dashboard analytics
* Real backend integration (Node.js / Express)
* Course progress tracking

---

## 👩‍💻 Author

**Stacy Dsouza**

GitHub:
https://github.com/Stacydsouza

---

## 📄 License

This project is created for **academic and learning purposes**.
