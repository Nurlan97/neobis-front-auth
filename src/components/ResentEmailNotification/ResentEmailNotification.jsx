import React from 'react';
import './ResentEmailNotification.scss';

const ResentEmailNotification = ({ modalPopUp, onClose }) => {
  const showHideClassName = modalPopUp ? 'display-block' : 'display-none';

  const onWrapperClick = (event) => {
    if (event.target.classList.contains('resentEmailNotification__wrapper')) onClose();
  }

  return (
    <div
      className={`resentEmailNotification ${showHideClassName}`} onClick={onWrapperClick}

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
