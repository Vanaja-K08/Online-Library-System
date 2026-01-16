# 📚 Online Library System (React)

An **Online Library System** built using **React** that allows users to browse books by category, view book details, search books, and add new books.  
The application uses **React Router for navigation**, **dummy data**, and **form validation**.

## ✨ Features

### 🏠 Home Page
- Welcome message
- Display book categories (Fiction, Non-Fiction, Sci-Fi, etc.)
- Display popular books as cards
- Navigation bar with links to:
  - Home
  - Browse Books
  - Add Book

### 📚 Browse Books Page
- Display books filtered by category
- Dynamic routing using `/books/:category`
- Search books by title or author
- "View Details" link for each book


### 📖 Book Details Page
- Dynamic routing using `/book/:id`
- Displays:
  - Book Title
  - Author
  - Description
  - Rating
- "Back to Browse" button to return to Browse Books page


### ➕ Add Book Page
- Form to add a new book
- Form validation for all fields
- Newly added book appears at the top of the list
- Redirects to Browse Books page after submission

### ❌ 404 Page
- Handles undefined routes
- Displays invalid URL
- Does **not** include Header/Navbar
- Includes a link back to Home page



## 🧩 Technologies Used
- React
- React Router DOM
- JavaScript (ES6)
- HTML5
- CSS3


## ▶️ How to Run the Application
cd online-library
npm install
npm start
http://localhost:3000