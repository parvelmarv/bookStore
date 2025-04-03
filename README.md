# Bookstore API

## Overview

**Bookstore API** is a full-stack web application for managing a bookstore's inventory, customers, and orders. It includes both a frontend and a backend, designed to provide an intuitive interface for browsing books, managing customer information, and processing book orders.

## Features

- **Book Management**: Add, view, update, and delete books in the inventory with details such as title, author, and release year.
- **Customer Management**: Register and manage customer information including names, emails, and addresses.
- **Order Processing**: Create orders for customers or guest users with multiple books per order.
- **Filtering & Sorting**: Search and filter books by author, title, or release year with customizable sorting options.
- **Pagination**: Browse through large collections of books efficiently with paginated results.

## Technologies Used

### Frontend

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

### Backend

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (Atlas or local installation)

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/bookstore-api.git
   cd bookstore-api
   ```

2. **Install dependencies**:

   - **Frontend**:
     ```bash
     cd frontend
     npm install
     ```

   - **Backend**:
     ```bash
     cd backend
     npm install
     ```

3. **Environment Variables**:
   - Create a `.env` file in the `backend` directory and add your environment variables:
     ```
     MONGODB_URI=your_mongodb_uri
     PORT=3000
     ```

## Usage

### Running the Application

- **Frontend**:
  ```bash
  cd frontend
  npm run dev
  ```

- **Backend**:
  ```bash
  cd backend
  node server.js
  ```

- **Seeding the Database**:
  ```bash
  cd backend
  node Seed/seed.js
  ```

### Accessing the Application

- Open your browser and go to `http://localhost:5173` for the frontend.
- The backend API is accessible at `http://localhost:3000`.
- API endpoints:
  - `GET /books` - Browse books (with filtering, sorting, pagination)
  - `POST /books` - Add a new book
  - `GET /customers` - View customers
  - `POST /orders` - Create a new order

## Contributing

Contributions are welcome! Please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Your Name** - [your.email@example.com](mailto:your.email@example.com)
- **Project Link**: [https://github.com/yourusername/bookstore-api](https://github.com/yourusername/bookstore-api)