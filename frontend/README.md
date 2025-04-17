# Chat Application

A real-time chat application built with a **frontend** and **backend** architecture.

## Features

- Real-time messaging
- User authentication
- Responsive design
- Scalable backend

## Project Structure

```
Chat Application/
├── backend/   # Backend code (Node.js, Express, etc.)
├── frontend/  # Frontend code (React, etc.)
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/chat-application.git
   cd chat-application
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

## Usage

### Running the Backend
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Start the server:
   ```bash
   npm start
   ```

### Running the Frontend
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`.

## Environment Variables

Create a `.env` file in both the `backend` and `frontend` directories and configure the required environment variables.

### Backend `.env` Example:
```
PORT=5000
DATABASE_URL=your-database-url
JWT_SECRET=your-jwt-secret
```

### Frontend `.env` Example:
```
REACT_APP_API_URL=http://localhost:5000
```

## Scripts

### Backend
- `npm start`: Start the backend server
- `npm run dev`: Start the backend server in development mode

### Frontend
- `npm start`: Start the frontend development server
- `npm run build`: Build the frontend for production

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Socket.IO](https://socket.io/)
