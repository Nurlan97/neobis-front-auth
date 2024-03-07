import React, { useState } from 'react';
import passwordEyeOn from '../../../public/assets/images/loginPage/eyeOn.png';
import passwordEyeOff from '../../../public/assets/images/loginPage/eyeOff.png';
import passwordConfirmEyeOn from '../../../public/assets/images/loginPage/eyeOn.png';
import passwordConfirmEyeOff from '../../../public/assets/images/loginPage/eyeOff.png';
import backHomeIcon from '../../../public/assets/images/registration/goBack_img.png'

import './CreateAccount.scss';
import { Link } from 'react-router-dom';
import GoBack from '../GoBack/GoBack';
import { useFormik } from 'formik';


const CreateAccount = () => {

    // const [userEmailInput, setUserEmailInput] = useState('')
    // const [userCreateLoginInput, setUserCreateLoginInput] = useState('')
    // const [userCreatePasswordInput, setUserCreatePasswordInput] = useState('')
    const [passwordActive, setPasswordActive] = useState(true)
    const [passwordConfirmActive, setPasswordConfirmActive] = useState(true)

    // const handleUserEmailInput = (e) => {
    //     setUserEmailInput(e.target.value)
    // }

    // const handleUserCreateLoginInput = (e) => {
    //     setUserCreateLoginInput(e.target.value)
    // }

    // const handleUserCreatePasswordInput = (e) => {
    //     setUserCreatePasswordInput(e.target.value)
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     // {<Link to="/emailVerification"/>}
    // }

    const handlePasswordEyeToggle = () => {
        setPasswordActive(!passwordActive)
    }

    const handlePasswordConfirmEyeToggle = () => {
        setPasswordConfirmActive(!passwordConfirmActive)
    }


    const formik = useFormik({
        initialValues: {
            email__input: '',
            login__input: '',
            password__input: '',
            passwordConfirm__input: '',

        },

        onSubmit: values => {
            console.log('Submit Values', values)
        }


    })

    return (
        <>
            <GoBack />
            <div className='createAccount'>

                <h2 className='createAccount__title'>
                    Создать аккаунт <br />
                    Lorby
                </h2>
                <form
                    className='createAccount__form'
                    // onSubmit={handleSubmit}
                    onSubmit={formik.handleSubmit}

                >
                    <div className='createAccount__form_input_container'>
                        <input
                            type="email"
                            className="createAccount__form_email_input"
                            placeholder='Введи адрес почты'
                            name="email__input"
                            // value={userEmailInput}
                            // onChange={handleUserEmailInput}
                            value={formik.values.email__input}
                            onChange={formik.handleChange}
                        />
                        <input
                            type="text"
                            className="createAccount__form_login_input"
                            placeholder='Придумай логин'
                            name="login__input"
                            // value={userCreateLoginInput}
                            // onChange={handleUserCreateLoginInput}
                            value={formik.values.login__input}
                            onChange={formik.handleChange}
                        />
                        <input
                            type={passwordActive ? 'text' : 'password'}
                            className="createAccount__form_password_input"
                            placeholder='Создай пароль'
                            name='password__input'
                            // value={userCreatePasswordInput}
                            // onChange={handleUserCreatePasswordInput}
                            value={formik.values.password__input}
                            onChange={formik.handleChange}
                        />

                        <span
                            className='createAccount__form_password_input_eyeToggle'
                            onClick={handlePasswordEyeToggle}
                        >
                            {passwordActive ? <img src={passwordEyeOn} alt="eyeOn" /> : <img src={passwordEyeOff} />}
                        </span>
                        <input
                            type={passwordConfirmActive ? 'text' : 'password'}
                            className="createAccount__form_password_input_confirm"
                            placeholder='Повтори пароль'
                            name='passwordConfirm__input'
                            value={formik.values.passwordConfirm__input}
                            onChange={formik.handleChange}
                        />

                        <span
                            className='createAccount__form_passwordConfirm_input_eyeToggle'
                            onClick={handlePasswordConfirmEyeToggle}
                        >
                            {passwordConfirmActive ? <img src={passwordConfirmEyeOn} alt="eyeOn" /> : <img src={passwordConfirmEyeOff} />}

                        </span>
                    </div>
                    <button
                        type='submit'
                        className="login__form_btn">
                        Далее
                    </button>
                    {/* <Link
                        to="/emailVerification"
                        className="login__form_btn">
                        Далее
                    </Link> */}


                </form>


            </div>
        </>
    )
}

export default CreateAccount
