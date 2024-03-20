import React, { useState } from 'react';
import './HomePage.scss';
import TutorImage from '../../../public/assets/images/main_img.png'
import { Link, useSearchParams } from 'react-router-dom';
import LogoutConfirmation from '../../components/LogoutConfirmation/LogoutConfirmation';
import { useDispatch } from 'react-redux';
import { isAuthUser } from '../../api/userAPI';


const HomePage = () => {
    const [modalPopup, setModalPopup] = useState(false)
    const dispatch = useDispatch()

    const handleModaPopup = () => {
        dispatch(isAuthUser(false));
        setModalPopup(true)

    }

    const handleModalPopout = () => {
        setModalPopup(false)
    }

    return (
        <div className='homePage'>
            <div className="homePage__container">
                <div className="homePage__wrapper">
                    <div className="homePage__greetings">
                        <h1 className="homePage__title">С Возвращением!</h1>
                        <p className="homePage__subtitle">
                            Lorby - твой личный репетитор
                        </p>
                    </div>
                    <img src={TutorImage} alt="IMAGE" className='homePage__img' />
                    <button
                        className='homePage__logOut'
                        onClick={handleModaPopup}
                    >
                        Выйти
                    </button>
                    <LogoutConfirmation
                        popup={modalPopup}
                        onClose={handleModalPopout}
                    />
                </div>
            </div>
        </div>
    )
}

export default HomePage
