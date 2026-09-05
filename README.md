# ⚽ KickIQ

KickIQ is a full-stack football analytics web application designed to provide football fans with an organized way to explore players, teams, tournaments, statistics, and football news.

The project combines a modern React interface with an Express backend, PostgreSQL database, authentication system, and external football APIs.

---

## ✨ Features

### 🔐 Authentication
- User registration
- User login
- JWT-based authentication
- Protected routes
- Persistent authentication using local storage

### 👤 User Profile
- Personalized user profile
- Protected profile access
- User-specific data

### ⚽ Players
- Browse football players
- View player information
- Dedicated player details pages
- Player data retrieved from API-Football

### ❤️ Favorites
- Add players to favorites
- View saved players
- Remove players from favorites
- Favorites are stored separately for each authenticated user

### 🛡️ Teams
- Browse football teams
- Search teams
- View team information
- Real football data from API-Football

### 🏆 Tournaments
- Browse football tournaments and cup competitions
- Tournament logos and regions
- Competition information retrieved dynamically

### 📊 Statistics
- League standings
- Top scorers
- Match and competition statistics
- Football data retrieved from external APIs

### 📰 Football News
- Latest football news
- Multiple football news categories
- External article links
- News retrieved dynamically through SerpApi

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- React Router
- Tailwind CSS
- JavaScript

### Backend

- Node.js
- Express.js
- REST API

### Database

- PostgreSQL

### Authentication

- JSON Web Tokens (JWT)
- bcrypt

### External APIs

- API-Football
- SerpApi

---

## 🏗️ Project Structure

```text
KickIQ/
│
├── src/                    # React frontend
│   ├── Components/
│   ├── Images/
│   └── ...
│
├── Server/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── playerRoutes.js
│   │   ├── teamRoutes.js
│   │   ├── favoriteRoutes.js
│   │   ├── statisticsRoutes.js
│   │   ├── newsRoutes.js
│   │   └── cupRoutes.js
│   │
│   ├── db.js
│   └── server.js
│
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

Then enter the project directory:

```bash
cd KickIQ
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Install backend dependencies

```bash
cd Server
npm install
```

### 4. Configure environment variables

Create a `.env` file inside the `Server` directory.

Example:

```env
API_FOOTBALL_KEY=your_api_key
SERP_API_KEY=your_serpapi_key
JWT_SECRET=your_jwt_secret

DB_USER=your_database_user
DB_HOST=localhost
DB_NAME=your_database_name
DB_PASSWORD=your_database_password
DB_PORT=5432
```

> Never commit your `.env` file or API keys to GitHub.

### 5. Start the backend

From the `Server` directory:

```bash
node server.js
```

The API runs locally on:

```text
http://localhost:3000
```

### 6. Start the frontend

Open another terminal from the main project directory:

```bash
npm run dev
```

---

## 🔌 API Routes

Some of the main backend routes used by KickIQ include:

```text
/api/players
/api/teams
/api/cups
/api/favorites
/api/statistics
/api/news
```

Authentication routes are also provided for user registration and login.

---

## 🔒 Security

KickIQ uses JWT authentication to protect user-specific routes and resources.

Sensitive information such as API keys, database credentials, and JWT secrets is stored using environment variables and excluded from version control.

---

## 🎯 Project Purpose

KickIQ was created as a full-stack portfolio project combining UI/UX design with web development.

The project demonstrates practical experience with:

- Responsive frontend development
- React component architecture
- REST API development
- Backend routing
- Authentication and authorization
- PostgreSQL database integration
- External API integration
- Asynchronous data fetching
- Protected routes
- User-specific application data
- Error and loading state handling

---

## 🔮 Future Improvements

Potential future improvements include:

- More advanced football analytics
- Team detail pages
- Tournament detail pages
- Improved statistical visualizations
- Favorite teams and tournaments
- Advanced player comparisons
- Search and filtering improvements
- Additional responsive optimizations

---

## 📸 Screenshots

Project screenshots will be added here.

---

## 👨‍💻 Author

Designed and developed as a full-stack web development and UI/UX portfolio project.

---

## 📄 License

This project is intended for educational and portfolio purposes.
