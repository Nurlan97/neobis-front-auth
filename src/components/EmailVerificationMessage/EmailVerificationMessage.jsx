import React, { useState } from 'react';
import './EmailVerificationMessage.scss';
import GoBack from '../GoBack/GoBack';
import ResentEmailNotification from '../ResentEmailNotification/ResentEmailNotification';

const EmailVerificationMessage = () => {

    const [showResentEmailModal, setShowResentEmailModal] = useState(false);
    

    const handleResentEmailNotification = () => {
        setShowResentEmailModal(true)
    

    }

    const handleCLoseResentEmailModal = () => {
        setShowResentEmailModal(false)
    }

    return (
        <>
            <GoBack />
            <div className='emailVerificationMessage'>
                <h1 className="emailVerificationMessage__title">
                    Выслали письмо со ссылкой для <br />завершения регистрации на <br /> example@gmail.com
                </h1>
                <p className="emailVerificationMessage__subtitle">
                    Если письмо не пришло, не <br />спеши ждать совиную почту - <br />лучше

                    <span>
                        проверь ящик “Спам”
                    </span>
                    <br />

                    <span className='emailVerificationMessage__subtitle_decoration'>
                        (´｡• ω •｡`)
                    </span>
                </p>


                <button
                    className='emailVerificationMessage__btn' 
                    onClick={handleResentEmailNotification}
                >
                    Письмо не пришло
                </button>
                
                <ResentEmailNotification
                    modalPopUp={showResentEmailModal}
                    onClose={handleCLoseResentEmailModal}

                />
            </div>

        </>
    )
}

export default EmailVerificationMessage
