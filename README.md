# Task Management Application

A full-stack task management web application with React frontend and Node.js/Express backend.

## 📦 Architecture Overview

```
task-manager/
├── backend/               # Node.js/Express server
│   ├── models/           # MongoDB models
│   ├── .env              # Environment variables
│   └── server.js         # Main server file
├── frontend/             # React application
│   ├── public/           # Static assets
│   ├── src/
│   │   ├── actions/      # Redux actions
│   │   ├── components/   # React components
│   │   ├── reducers/     # Redux reducers
│   │   ├── styles/       # CSS files
│   │   ├── App.js        # Main App component
│   │   └── store.js      # Redux store
│   └── package.json      # Frontend dependencies
└── README.md             # Project documentation
```

## 🛠️ Tools & Technologies

### Frontend
- **React** (v18) - JavaScript library for building user interfaces
- **Redux** - State management
- **React Router** (v6) - Client-side routing
- **Bootstrap** (v5) - Responsive styling
- **Font Awesome** - Icons
- **Axios** - HTTP client

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/csomkar24/taskflow.git
   cd taskflow
   ```

2. **Set up the backend**
   ```bash
   cd backend
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the backend directory:
   ```
   MONGODB_URI=mongodb://localhost:27017/taskmanager
   PORT=5000
   ```

4. **Set up the frontend**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd ../backend
   node server.js
   ```
   Server will run on `http://localhost:5000`

2. **Start the frontend development server**
   ```bash
   cd ../frontend
   npm start
   ```
   Application will open in browser at `http://localhost:3000`

## 🏗️ Project Structure Details

### Backend Architecture
- **RESTful API** with CRUD endpoints
- **Mongoose models** for data validation
- **Middleware** for error handling and CORS

### Frontend Architecture
- **Component-based** UI structure
- **Redux** for centralized state management
- **React Router** for navigation
- **Container/Presentational** component pattern

## 🌐 API Endpoints

| Method | Endpoint       | Description                  |
|--------|----------------|------------------------------|
| GET    | /api/tasks     | Get all tasks                |
| POST   | /api/tasks     | Create new task              |
| GET    | /api/tasks/:id | Get single task              |
| PUT    | /api/tasks/:id | Update task                  |
| DELETE | /api/tasks/:id | Delete task                  |

## 🧪 Testing the Application

To manually test the application:
1. Add new tasks using the "Add Task" page
2. View all tasks on the Dashboard
3. Click on a task to view/edit details
4. Mark tasks as complete/in-progress
5. Delete tasks when no longer needed

## 🚀 Deployment

For production deployment:
1. Set up a MongoDB Atlas cluster
2. Configure proper environment variables
3. Build the React app (`npm run build`)
4. Deploy backend to services like Heroku, Render, or AWS
5. Deploy frontend to Netlify, Vercel, or static hosting
