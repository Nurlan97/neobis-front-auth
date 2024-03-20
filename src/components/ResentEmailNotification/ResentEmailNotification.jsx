import React, { useEffect } from 'react';
import './ResentEmailNotification.scss';
import { useDispatch, useSelector } from 'react-redux';
import { userConfirmation } from '../../api/userAPI';

import { ToastContainer, toast } from 'react-toastify';

const ResentEmailNotification = ({ modalPopUp, onClose }) => {
  // const showHideClassName = modalPopUp ? 'display-block' : 'display-none';


  const { user } = useSelector((state) => state.userSlice)
  console.log(user)

  const dispatch = useDispatch()

  const onWrapperClick = (event) => {
    if (event.target.classList.contains('resentEmailNotification__wrapper')) onClose();
  }

  useEffect(() => {

    const resentEmail = () => {
      try {
        const response = dispatch(userConfirmation(user))
        console.log(response)
        
      } catch (error) {
        console.log(error)
        toast.error('Failed to resend the message')
      }
    }

    resentEmail()
  }, [])

  return (
    <div
      className={`resentEmailNotification `} onClick={onWrapperClick}

    >
      <div
        className="resentEmailNotification__wrapper"

      >
        <div className="resentEmailNotification__modal">
          <h1 className="resentEmailNotification__modal_title">Мы выслали еще одно письмо на указанную тобой почту example@gmail.com</h1>
          <p className="resentEmailNotification__modal_text">
            Не забудь проверить <br />
            ящик “Спам”!
          </p>
          <button
            className="resentEmailNotification__modal_button"
            onClick={onClose}
          >
            Понятно!!!
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResentEmailNotification
