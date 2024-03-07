import React, { useState } from 'react';
import './LogoutConfirmation.scss';
import { Link } from 'react-router-dom';

const LogoutConfirmation = ({popup, onClose}) => {
    const [activeBtn, setActiveBtn] = useState('logoutConfirmation__modal_logout-cancel-button');

    const handleMouseOver = (buttonName) => {
        setActiveBtn(buttonName);
    }


    const showPopup = popup ? 'active' : 'disabled';

    return (
        <div
            className={`logoutConfirmation ${showPopup}`}
        >
            
            <div className="logoutConfirmation__wrapper">
                <div className="logoutConfirmation__modal">
                    <h1 className="logoutConfirmation__modal_title">
                        Выйти?
                    </h1>
                    <h2 className="logoutConfirmation__modal_subtitle">
                        Точно выйти?
                    </h2>
                    <Link
                        to='/'
                        className={`logoutConfirmation__modal_logout-confirm-button ${activeBtn === 'logoutConfirmation__modal_logout-confirm-button' ? 'activeBtn' : ''}`}
                        onMouseOver={() => handleMouseOver('logoutConfirmation__modal_logout-confirm-button')}
                        // onClick={handleLeavePage}
                    >
                        Да, точно
                    </Link>
                    <button
                        className={`logoutConfirmation__modal_logout-cancel-button ${activeBtn === 'logoutConfirmation__modal_logout-cancel-button' ? 'activeBtn' : ''}`}
                        onMouseOver={() => handleMouseOver('logoutConfirmation__modal_logout-cancel-button')}
                        onClick={onClose}
                    >
                        Нет, остаться
                    </button>
                </div>
            </div>

        </div>
    )
}

export default LogoutConfirmation
