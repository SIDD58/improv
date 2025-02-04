import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import HomePage from './pages/HomePage.jsx'
import GamePage from './pages/GamePage.jsx'
import EventPage from './pages/EventPage.jsx'
import AdminPage from './pages/AdminPage.jsx'

import NotFoundPage from './pages/NotFoundPage.jsx'
import NameGamePage from './pages/NameGamePage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import LoginPage from './pages/LoginPage.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<HomePage/>,
    errorElement:<NotFoundPage/>
  },
  {
    path:'/admin',
    element:<AdminPage/>
  }
  ,
  {
    path:'/games',
    element:<GamePage/>
  }
  ,
  {
    path:'/events',
    element:<EventPage/>
  }
  ,
  {
    path:'/name-game',
    element:<NameGamePage/>
  }
  ,
  {
    path:'/register',
    element:<RegisterPage/>
  }
  ,
  {
    path:'/login',
    element:<LoginPage/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
