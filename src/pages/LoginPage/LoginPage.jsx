import React from 'react'
import PersonalTutorImage from '../../components/PersonalTutorImage'
import Login from '../../components/Login'
import './LoginPage.scss'

const LoginPage = () => {
  return (
    <div className='loginPage'>
      <div className="container">
        <div className="loginPage__wrapper">
          <PersonalTutorImage />
          <Login/>
        </div>
      </div>

    </div>
  )
}

export default LoginPage
