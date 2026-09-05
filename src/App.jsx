import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import MainPage from './MainPage'
import Players from './PlayerPage.jsx'
import Teams from './TeamsPage.jsx'
import Cups from './CupsPage.jsx'
import News from './NewsPage.jsx'
import Statistics from './StatisticsPage.jsx'
import PlayerDetailsPage from "./PlayerDetailsPage";
import {  Routes, Route } from 'react-router-dom';
import Matches from './Matches.jsx'
import Register from './Register.jsx'
import Login from './Login.jsx'
import Favorites from './Favorites.jsx'
import Profile from './Profile.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'
function App() {

  return (
    <div className="App">
         <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/players" element={<Players />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/cups" element={<Cups />} />
        <Route path="/news" element={<News />} />
        <Route path="/statistics" element={<Statistics />} />
         <Route path="/matches" element={<Matches />} />
          <Route path="/players/:id" element={<PlayerDetailsPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/favorites" element={<ProtectedRoute><Favorites /></ProtectedRoute>} />


          <Route path="/profile" element={  <ProtectedRoute><Profile /></ProtectedRoute> } />


      </Routes>
    </div>
  )
}

export default App
