import React from 'react'
import PersonalTutorImage from '../../components/PersonalTutorImage'
import GoBack from '../../components/GoBack/GoBack'
import EmailVerificationMessage from '../../components/EmailVerificationMessage'
import './EmailVerification.scss'

const EmailVerification = () => {
  return (
    <div className='emailVerification'>
      <div className="container">
        <div className="emailVerification__wrapper">
          <PersonalTutorImage />
          <EmailVerificationMessage/>

        </div>
      </div>

    </div>
  )
}

export default EmailVerification
