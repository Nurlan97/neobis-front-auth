import React, { useState } from 'react';
import passwordEyeOn from '../../../public/assets/images/loginPage/eyeOn.png';
import passwordEyeOff from '../../../public/assets/images/loginPage/eyeOff.png';
import passwordConfirmEyeOn from '../../../public/assets/images/loginPage/eyeOn.png';
import passwordConfirmEyeOff from '../../../public/assets/images/loginPage/eyeOff.png';
import backHomeIcon from '../../../public/assets/images/registration/goBack_img.png'

import './CreateAccount.scss';
import { useNavigate } from 'react-router-dom';
import GoBack from '../GoBack/GoBack';
import { useFormik } from 'formik';
import { initialValues, validate } from './helpers.js'
import ErrorsPassword from './ErrorsPassword.jsx';
import { useSelector, useDispatch } from 'react-redux'
import { userRegister, Login } from '../../api/userAPI.js'


const CreateAccount = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const onSubmit = async (values) => {
        // console.log('Form data', values)
        try {
            const response = await dispatch(userRegister(values))
            dispatch(Login(values.email))
            console.log(response)
            navigate('/confirmation')
        } catch (error) {
            console.log(error)
        }

    }

    const [passwordActive, setPasswordActive] = useState(true)
    const [passwordConfirmActive, setPasswordConfirmActive] = useState(true)



    const handlePasswordEyeToggle = () => {
        setPasswordActive(!passwordActive)
    }

    const handlePasswordConfirmEyeToggle = () => {
        setPasswordConfirmActive(!passwordConfirmActive)
    }


    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    // console.log(formik.values.password)
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

                    onSubmit={formik.handleSubmit}
                >
                    <div className='createAccount__form_input_container'>
                        <div>

                            <input
                                type="email"
                                className="createAccount__form_email_input"
                                placeholder='Введи адрес почты'
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.email ? <div className='createAccount__form_error_message'>{formik.errors.email}</div> : null}

                        </div>

                        <div>
                            <input
                                type="text"
                                className="createAccount__form_login_input"
                                placeholder='Придумай логин'
                                name="username"
                                value={formik.values.username}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.username ? <div className='createAccount__form_error_message'>{formik.errors.username}</div> : null}
                        </div>

                        {/* PASSWORD */}

                        <div className="createAccount__form_password_input-wrapper">
                            <div className="createAccount__form_password_input-container">
                                <input
                                    type={passwordActive ? 'text' : 'password'}
                                    className="createAccount__form_password_input"
                                    placeholder='Создай пароль'
                                    name='password'
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                />

                                <span
                                    className='createAccount__form_password_input_eyeToggle'
                                    onClick={handlePasswordEyeToggle}
                                >
                                    {passwordActive ? <img src={passwordEyeOn} alt="eyeOn" /> : <img src={passwordEyeOff} />}
                                </span>
                            </div>
                            <ErrorsPassword
                                formik={formik}
                            />

                            {/* {formik.errors.password__input_length ? <div className='createAccount__form_error_message'>
                                {formik.errors.password__input_length}
                            </div> : null}
                            {formik.errors.password__input_length_isValid ? <div className='createAccount__form_isValid_message'>
                                {formik.errors.password__input_length_isValid}
                            </div> : null}

                            {formik.errors.password__input_hasLowerCaseAndUpperCase ? <div className='createAccount__form_error_message'>
                                {formik.errors.password__input_hasLowerCaseAndUpperCase}
                            </div> : null}
                            {formik.errors.password__input_hasLowerCaseAndUpperCase_isValid ? <div className='createAccount__form_isValid_message'>
                                {formik.errors.password__input_hasLowerCaseAndUpperCase_isValid}
                            </div> : null}

                            {formik.errors.password__input_missingNumber ? <div className='createAccount__form_error_message'>
                                {formik.errors.password__input_missingNumber}
                            </div> : null}
                            {formik.errors.password__input_missingNumber_isValid ? <div className='createAccount__form_isValid_message'>
                                {formik.errors.password__input_missingNumber_isValid}
                            </div> : null}

                            {formik.errors.password__input_missingChar ? <div className='createAccount__form_error_message'>
                                {formik.errors.password__input_missingChar}
                            </div> : null}
                            {formik.errors.password__input_missingChar_isValid ? <div className='createAccount__form_isValid_message'>
                                {formik.errors.password__input_missingChar_isValid}
                            </div> : null} */}

                            {/* <span
                                className='createAccount__form_password_input_eyeToggle'
                                onClick={handlePasswordEyeToggle}
                            >
                                {passwordActive ? <img src={passwordEyeOn} alt="eyeOn" /> : <img src={passwordEyeOff} />}
                            </span> */}
                        </div>
                        <div className="createAccount__form_password_input_confirm-wrapper">
                            <div className="createAccount__form_password_input_confirm-container">
                                <input
                                    type={passwordConfirmActive ? 'text' : 'password'}
                                    className="createAccount__form_password_input_confirm"
                                    placeholder='Повтори пароль'
                                    name='password_confirm'
                                    value={formik.values.password_confirm}
                                    onChange={formik.handleChange}
                                />

                                <span
                                    className='createAccount__form_passwordConfirm_input_eyeToggle'
                                    onClick={handlePasswordConfirmEyeToggle}
                                >
                                    {passwordConfirmActive ? <img src={passwordConfirmEyeOn} alt="eyeOn" /> : <img src={passwordConfirmEyeOff} />}

                                </span>
                            </div>
                            {formik.errors.password_confirm ? <div className='createAccount__form_error_message'>
                                {formik.errors.password_confirm}
                            </div> : null}


                        </div>
                    </div>
                    <button
                        type='submit'
                        className="login__form_btn">
                        Далее
                    </button>



                </form>


            </div>
        </>
    )
}

export default CreateAccount
