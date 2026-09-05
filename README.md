# ⚽ KickIQ

KickIQ is a full-stack football web application that allows users to explore players, teams, tournaments, statistics, football news, and personalized favorites.

The project was built as a full-stack development portfolio project using React, Node.js, Express, and PostgreSQL, with data provided through external football and news APIs.

> **UI Disclosure:** The visual UI design of KickIQ was created with AI assistance. The interface was then implemented in code and integrated with the application's frontend, backend, database, authentication system, and external APIs.

---

## 🚀 About the Project

KickIQ was created to practice and demonstrate the complete process of building a modern full-stack web application.

Rather than focusing only on a frontend interface, the project includes a complete application architecture:

- React frontend
- Express REST API
- PostgreSQL database
- JWT authentication
- Protected routes
- User-specific data
- External API integration
- Football statistics and data
- Football news
- Favorites system

The project focuses primarily on full-stack development and connecting multiple parts of a web application into one functional system.

---

## ✨ Features

### 🔐 Authentication

KickIQ includes a complete authentication flow that allows users to create and access their own accounts.

- User registration
- User login
- Password hashing
- JWT authentication
- Authentication middleware
- Protected frontend routes
- Persistent login using local storage

---

### 👤 User Profile

Authenticated users can access their own protected profile area.

The profile system demonstrates how frontend routes can communicate with authenticated backend endpoints using JWT tokens.

---

### ⚽ Players

Users can explore football players and access individual player information.

Features include:

- Player browsing
- Player information
- Player detail pages
- Dynamic player routes
- Real football data retrieved from API-Football

---

### ❤️ Favorites

Authenticated users can create their own collection of favorite players.

Users can:

- Add players to favorites
- View saved players
- Remove players from favorites

Favorites are stored in PostgreSQL and associated with the authenticated user's ID, meaning each user has their own independent favorites list.

---

### 🛡️ Teams

KickIQ provides a teams section using real football data.

Features include:

- Browse football clubs
- Search teams
- Display team logos
- Display country information
- Navigate to individual teams
- Retrieve team data through the backend

---

### 🏆 Tournaments

Users can explore football cup competitions and tournaments.

Tournament information includes:

- Competition name
- Competition logo
- Country or region
- Available seasons
- Dynamic tournament data

Tournament data is retrieved from API-Football and processed by the Express backend before being displayed by React.

---

### 📊 Statistics

KickIQ includes a football statistics section for presenting competition data.

The statistics system works with football API endpoints such as:

- League standings
- Top scorers
- Fixtures
- Team performance
- Competition statistics

This section demonstrates handling multiple external API requests and transforming the returned data for frontend presentation.

---

### 📰 Football News

KickIQ also includes dynamically retrieved football news.

Users can browse categories such as:

- All
- Premier League
- Champions League
- Players
- Analysis

News data is retrieved through SerpApi and processed by the backend before being sent to the React frontend.

External news articles can be opened from the application.

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- JavaScript
- React Router
- Tailwind CSS
- Fetch API

### Backend

- Node.js
- Express.js
- REST API architecture

### Database

- PostgreSQL

### Authentication & Security

- JSON Web Tokens (JWT)
- bcrypt
- Authentication middleware
- Protected API routes
- Environment variables

### External APIs

- API-Football
- SerpApi

---

## 🤖 AI-Assisted UI

The visual UI design of KickIQ was created with the assistance of AI-generated design concepts.

AI was used as a design assistance tool for creating and refining interface concepts, layouts, visual hierarchy, and styling ideas.

The generated concepts were then translated into functional React components and implemented using Tailwind CSS.

The full-stack development work includes connecting these interfaces to:

- React state and effects
- Application routing
- Backend REST endpoints
- Authentication
- PostgreSQL
- User-specific data
- API-Football
- SerpApi
- Loading and error states

This distinction is included to clearly represent the role of AI in the project and the development work demonstrated by KickIQ.

---

## 🏗️ Project Structure

```text
KickIQ/
│
├── src/
│   ├── Components/
│   ├── Images/
│   ├── App.jsx
│   └── ...
│
├── Server/
│   │
│   ├── controllers/
│   │   └── authController.js
│   │
│   ├── middleware/
│   │   └── authenticateToken.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── cupRoutes.js
│   │   ├── favoriteRoutes.js
│   │   ├── newsRoutes.js
│   │   ├── playerRoutes.js
│   │   ├── statisticsRoutes.js
│   │   └── teamRoutes.js
│   │
│   ├── db.js
│   ├── server.js
│   └── package.json
│
├── package.json
├── vite.config.js
└── README.md
```

---

## 🔌 Backend API

The React frontend communicates with an Express REST API.

Some of the main endpoints include:

```text
/api/players
/api/teams
/api/cups
/api/favorites
/api/statistics
/api/news
```

Authentication endpoints are also available for registration, login, and authenticated user functionality.

---

## 🔐 Authentication Flow

KickIQ uses JWT authentication.

The basic authentication flow is:

```text
User Login
    ↓
React sends credentials
    ↓
Express authentication endpoint
    ↓
User verified using PostgreSQL
    ↓
JWT generated
    ↓
Token returned to frontend
    ↓
Token stored locally
    ↓
Token sent with protected requests
    ↓
Authentication middleware verifies token
    ↓
Protected resource returned
```

This authentication system is also used to identify which favorites belong to each user.

---

## 🗄️ Database

PostgreSQL is used to store application data that needs to persist independently from the external football APIs.

This includes data such as:

- Users
- Authentication-related user information
- Favorite players
- Relationships between users and their favorites

External football information does not need to be duplicated in the database when it can be retrieved dynamically through the football API.

---

## 🌐 External Data

### API-Football

API-Football is used to retrieve football-related information such as:

- Players
- Teams
- Competitions
- Standings
- Top scorers
- Fixtures
- Football statistics

### SerpApi

SerpApi is used to retrieve current football news that can be displayed inside the News section.

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

Enter the project:

```bash
cd KickIQ
```

---

### 2. Install frontend dependencies

From the main project directory:

```bash
npm install
```

---

### 3. Install backend dependencies

Move into the Server directory:

```bash
cd Server
```

Install the backend dependencies:

```bash
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `Server` directory.

Example:

```env
API_FOOTBALL_KEY=your_api_football_key
SERP_API_KEY=your_serpapi_key

JWT_SECRET=your_jwt_secret

DB_USER=your_database_user
DB_HOST=localhost
DB_NAME=your_database_name
DB_PASSWORD=your_database_password
DB_PORT=5432
```

The actual `.env` file is excluded from Git using `.gitignore`.

> Never commit API keys, database passwords, JWT secrets, or other credentials to a public repository.

---

## ▶️ Running the Project

### Start the backend

Inside the `Server` directory:

```bash
node server.js
```

The backend runs locally on:

```text
http://localhost:3000
```

---

### Start the frontend

Open another terminal in the main project directory:

```bash
npm run dev
```

Vite will start the React development server.

---

## 📚 What This Project Demonstrates

KickIQ was built primarily as a learning and portfolio project for full-stack web development.

The project demonstrates practical experience with:

- React
- React Hooks
- Component-based frontend development
- React Router
- Tailwind CSS implementation
- Responsive interfaces
- Fetch API
- Asynchronous JavaScript
- REST APIs
- Node.js
- Express.js
- Express routing
- Middleware
- PostgreSQL
- SQL queries
- JWT authentication
- Password hashing
- Protected routes
- User-specific database records
- External API integration
- Environment variables
- Loading states
- Error handling
- Frontend/backend communication

---

## 🎯 Project Goal

The main goal of KickIQ is to demonstrate the ability to take a web application beyond a static frontend.

The project connects:

```text
UI
 ↓
React
 ↓
REST API
 ↓
Express
 ↓
Authentication
 ↓
PostgreSQL
 ↓
External APIs
```

This creates a functional full-stack application where data flows between the frontend, backend, database, and third-party services.

---

## 🔮 Future Improvements

Possible future improvements include:

- More advanced football analytics
- Detailed team pages
- Detailed tournament pages
- Player comparison tools
- Interactive statistical charts
- Favorite teams and tournaments
- More advanced search and filtering
- Improved caching of external API responses
- Pagination
- Improved mobile responsiveness
- Additional account settings
- Production deployment

---

## 📸 Screenshots

Screenshots of the application interface can be added here to demonstrate the main pages and features of KickIQ.

Suggested screenshots:

- Home page
- Players page
- Player details
- Teams
- Tournaments
- Statistics
- News
- Favorites
- Profile

---

## 👨‍💻 Development

KickIQ was developed as a full-stack web development portfolio project.

The UI design was created with AI assistance, while the project was implemented as a functional web application using React, Tailwind CSS, Node.js, Express, PostgreSQL, authentication, and external API integrations.

---

## 📄 License

This project was created for educational and portfolio purposes.
