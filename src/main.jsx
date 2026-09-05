import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
// import MainPage from './MainPage.jsx'
// import Players from './PlayerPage.jsx'
// import Teams from './TeamsPage.jsx'
// import Cups from './CupsPage.jsx'
// import News from './NewsPage.jsx'
// import Statistics from './StatisticsPage.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
)
