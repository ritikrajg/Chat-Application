# Chat Application

A real-time chat application built with React, Node.js, Express, and Socket.IO.

## Features

- Real-time messaging using Socket.IO
- User authentication and authorization
- Private and group chat capabilities
- Modern and responsive UI with Tailwind CSS
- MongoDB database for data persistence

## Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Socket.IO Client
- Axios for API calls

### Backend
- Node.js
- Express.js
- MongoDB
- Socket.IO
- JWT for authentication
- Cookie-parser for session management

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chat-application
```

2. Install backend dependencies:
```bash
cd Backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../Frontend
npm install
```

4. Create a `.env` file in the Backend directory:
```env
PORT=4001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

5. Create a `.env` file in the Frontend directory:
```env
VITE_API_URL=http://localhost:4001
```

## Running the Application

1. Start the backend server:
```bash
cd Backend
npm start
```

2. Start the frontend development server:
```bash
cd Frontend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:4001

## Project Structure

```
chat-application/
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── hooks/
│   │   └── utils/
│   ├── public/
│   └── package.json
└── Backend/
    ├── routes/
    ├── models/
    ├── controllers/
    ├── middleware/
    ├── SocketIO/
    └── package.json
```

## API Endpoints

### Authentication
- POST /api/user/register - Register a new user
- POST /api/user/login - Login user
- GET /api/user/logout - Logout user

### Messages
- GET /api/message - Get messages
- POST /api/message - Send a message

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Project Link: [https://github.com/ritikrajg/chat-application](https://github.com/ritikrajg/chat-application)
