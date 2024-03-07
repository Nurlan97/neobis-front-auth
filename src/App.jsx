import { useState } from 'react'
import './App.css'
import LoginPage from './pages/LoginPage'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Registration from './pages/Registration'
import HomePage from './pages/HomePage'
import EmailVerification from './pages/EmailVerification'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/homePage' element={<HomePage />} />
          <Route path='/emailVerification' element={<EmailVerification />} />
        </Routes>

      </Router>

    </>
  )
}

export default App
