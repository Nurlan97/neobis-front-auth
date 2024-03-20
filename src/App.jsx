import { useState } from 'react'
import './App.css'
import LoginPage from './pages/LoginPage'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import Registration from './pages/Registration'
import HomePage from './pages/HomePage'
import EmailVerification from './pages/EmailVerification'
import { useSelector } from 'react-redux'


function App() {
  const { isAuth } = useSelector((state) => state.userSlice)
  return (
    <>
      <Router>
        <Routes>
          {isAuth ?
            <>
              <Route path='/homePage' element={<HomePage />} />
              <Route path='*' element={<Navigate to='/homePage'/>} />
            </>
            :
            
            <>

              <Route path='/' element={<LoginPage />} />
              <Route path='/registration' element={<Registration />} />
              <Route path='/confirmation' element={<EmailVerification />} />
              <Route path='*' element={<Navigate to='/' />} />
            </>}

        </Routes>

      </Router>

    </>
  )
}

export default App
