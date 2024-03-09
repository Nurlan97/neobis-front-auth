import React, { useState } from 'react';
import './Login.scss';
import eyeOn from '../../../public/assets/images/loginPage/eyeOn.png'
import eyeOff from '../../../public/assets/images/loginPage/eyeOff.png'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [userLoginInput, setUserLoginInput] = useState('')
    const [userPasswordInput, setUserPasswordInput] = useState('')
    const [active, setActive] = useState(true)

    const navigate = useNavigate()

    const handleUserLoginInput = (e) => {
        setUserLoginInput(e.target.value)
    }

    const handleUserPasswordInput = (e) => {
        setUserPasswordInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/homePage')
    }

    const handleEyeToggle = () => {
        setActive(!active)


    }

    return (
        <div className='login'>
            <h2 className='login__title'>Вэлком Бэк!</h2>
            <form className='login__form' onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="login__form_login_input"
                    placeholder='Введи туда-сюда логин'
                    value={userLoginInput}
                    onChange={handleUserLoginInput}
                />
                <input
                    type={active ? 'text' : 'password'}
                    className="login__form_password_input"
                    placeholder='Пароль (тоже введи)' 
                    value={userPasswordInput}
                    onChange={handleUserPasswordInput}
                />
                <span
                    className='login__form_password_input_eyeToggle'
                    onClick={handleEyeToggle}
                >
                    {active ? <img src={eyeOn} alt="eyeOn" /> : <img src={eyeOff} />}
                   
                </span>
                <button
                    type='submit'
                    className="login__form_btn">
                    Войти
                </button>
                


            </form>
            <Link to="/registration" className='registration__link'>У меня еще нет аккаунта</Link>
        </div>
    )
}

export default Login
