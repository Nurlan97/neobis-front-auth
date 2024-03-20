import React, { useEffect, useState } from 'react';
import './Login.scss';
import eyeOn from '../../../public/assets/images/loginPage/eyeOn.png'
import eyeOff from '../../../public/assets/images/loginPage/eyeOff.png'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../api/userAPI';
import { isAuthUser } from '../../api/userAPI';
import { getAccessToken } from '../../api/userAPI';
import userSlice from './../../api/userAPI'


const Login = () => {
    const [userLoginInput, setUserLoginInput] = useState('')
    const [userPasswordInput, setUserPasswordInput] = useState('')
    const [active, setActive] = useState(true)

    const {status} = useSelector(state => state.userSlice)
    console.log(status)
    
    


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleUserLoginInput = (e) => {
        setUserLoginInput(e.target.value)
    }

    const handleUserPasswordInput = (e) => {
        setUserPasswordInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newData = {
            username: userLoginInput,
            password: userPasswordInput
        }
        // try {
        //     const response = dispatch(userLogin(newData))
        //     toast.success('Success!')
        //     console.log(response)

        //     dispatch(isAuthUser(true))
        //     navigate('/homePage')
        //     // localStorage.setItem('accessToken', response.data.access)
        //     // localStorage.setItem('refreshToken', response.data.refreshToken)
        // } catch (error) {
        //     console.log(error)
        //     toast.error('Неверный логин или пароль')
        // }

        dispatch(userLogin(newData))
            .then(response => {
                // Обработка успешного ответа
                console.log(response);
                if (response.payload.access) {
                    toast.success('Success!');
                    dispatch(isAuthUser(true));
                    navigate('/homePage');
                    localStorage.setItem('accessToken', response.payload.access)
                    localStorage.setItem('refreshToken', response.payload.refresh)
                    localStorage.setItem('user_id', response.payload.user_id)
                    return
                }
                throw new Error('Неважно чё!')

            })
            .catch(error => {
                // Обработка ошибки
                console.log(error);
                toast.error('Неверный логин или пароль');
            });

    }

    const handleEyeToggle = () => {
        setActive(!active)


    }

    const isTokenExpired = (token) => {
        const expiry = JSON.parse(atob(token.split('.')[1])).exp;
        console.log(expiry-Math.floor(new Date().getTime() / 1000))
        return Math.floor(new Date().getTime() / 1000) >= expiry;
    };

    const accessToken = localStorage.getItem('accessToken')
    const refreshToken = localStorage.getItem('refreshToken')

    
    useEffect(() => {


        const isAuthFn = async () => {
            if (accessToken && refreshToken) {  // Проверяем есть ли access  и refresh токены в localStorage (Логинился ли пользователь в прошлом или нет. Если логинился, логика дает вохможность без повторного логина войти в профиль)

                const isExpired = isTokenExpired(accessToken) // Првоеряем истек ли access токен


                if (isExpired) { // Если true, истек

                    const response = await dispatch(getAccessToken(refreshToken)) // Делаем запрос на получения нового access токена
                    // localStorage.setItem('accessToken', response.data.access) // Сохраняем в localStorage полученный access токен.
                   

                    // const isExpiredNewToken = isTokenExpired(accessToken)  // Снова проверяем access токен
                    if (response?.data?.access) { // Если токен есть, 
                       
                        dispatch(isAuthUser(true)) // открываем доступ в Профиль (Смотреть App.jsx)
                        navigate('/homePage')
                            
                    }

                } else { // если false, access token ещщё действителен и мы перенаправляем пользователя в профиль
                    dispatch(isAuthUser(true))
                    navigate('/homePage')
                }

            }
        }
        isAuthFn()

    }, [accessToken])


    return (
        <div className='login'>
            {
                status === 'loading' ? <div>Loading...</div> 
                
                : 
                
                <>
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
                
                </>
            }
        </div>
    )
}

export default Login
