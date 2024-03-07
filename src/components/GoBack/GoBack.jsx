import React from 'react'
import goBackBtn from '../../../public/assets/images/registration/goBack_img.png';
import './GoBack.scss'

const GoBack = () => {
  const goBack = () => {
    window.history.back()
  }
  return (
    <button className='goBack' onClick={goBack}>
      <div className="goBack__wrapper">
        <img src={goBackBtn} alt="Go Back Button" className='goBack__icon' />
        <p className="goBack__text">Назад</p>
      </div>
    </button>


  )
}

export default GoBack
