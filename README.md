# Bookstore API
Demo for a very simple book store. 

## Technologies Used

### Frontend

- [React]
- [Vite]
- [CSS]

### Backend

- [Node.js]
- [Express]
- [MongoDB]
- [Mongoose]
- [Dotenv]

## Installation

### Prerequisites

- [Node.js]
- [MongoDB](Atlas or local installation)

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
  - `POST /books` - Add a new` book
  - `PUT /books/:id/decrement`- Decrease stock
  - `DELETE /books/:id` - Remove Book from stock

  - `GET /customers` - View customers
  - `GET /customers/:id` - Get specific customer
  - `POST /customers` - Add new customer

  - `Get /orders` - Get all orders and attached customers (might return no empty on customer ID if not a prior/current customer) 
  - `POST /orders` - Create a new order with or without customer ID. 


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
