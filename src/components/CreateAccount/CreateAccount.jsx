import React, { useState } from 'react';
import passwordEyeOn from '../../../public/assets/images/loginPage/eyeOn.png';
import passwordEyeOff from '../../../public/assets/images/loginPage/eyeOff.png';
import passwordConfirmEyeOn from '../../../public/assets/images/loginPage/eyeOn.png';
import passwordConfirmEyeOff from '../../../public/assets/images/loginPage/eyeOff.png';
import backHomeIcon from '../../../public/assets/images/registration/goBack_img.png'

import './CreateAccount.scss';
import { Link, useNavigate } from 'react-router-dom';
import GoBack from '../GoBack/GoBack';
import { useFormik } from 'formik';
import { initialValues, validate } from './helpers.js'
import ErrorsPassword from './ErrorsPassword.jsx';


const CreateAccount = () => {

    const navigate = useNavigate();

    const onSubmit = values => {
        // console.log('Form data', values)
        navigate('/emailVerification')
        console.log(1)

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

    // console.log(formik.values.password__input)
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
                                name="email__input"
                                value={formik.values.email__input}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.email__input ? <div className='createAccount__form_error_message'>{formik.errors.email__input}</div> : null}

                        </div>

                        <div>
                            <input
                                type="text"
                                className="createAccount__form_login_input"
                                placeholder='Придумай логин'
                                name="login__input"
                                value={formik.values.login__input}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.login__input ? <div className='createAccount__form_error_message'>{formik.errors.login__input}</div> : null}
                        </div>

                        {/* PASSWORD */}

                        <div className="createAccount__form_password_input-wrapper">
                            <input
                                type={passwordActive ? 'text' : 'password'}
                                className="createAccount__form_password_input"
                                placeholder='Создай пароль'
                                name='password__input'
                                value={formik.values.password__input}
                                onChange={formik.handleChange}
                            />
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

                            <span
                                className='createAccount__form_password_input_eyeToggle'
                                onClick={handlePasswordEyeToggle}
                            >
                                {passwordActive ? <img src={passwordEyeOn} alt="eyeOn" /> : <img src={passwordEyeOff} />}
                            </span>
                        </div>
                        <div className="createAccount__form_password_input_confirm-wrapper">
                            <input
                                type={passwordConfirmActive ? 'text' : 'password'}
                                className="createAccount__form_password_input_confirm"
                                placeholder='Повтори пароль'
                                name='passwordConfirm__input'
                                value={formik.values.passwordConfirm__input}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.passwordConfirm__input ? <div className='createAccount__form_error_message'>
                                {formik.errors.passwordConfirm__input}
                            </div> : null}

                            <span
                                className='createAccount__form_passwordConfirm_input_eyeToggle'
                                onClick={handlePasswordConfirmEyeToggle}
                            >
                                {passwordConfirmActive ? <img src={passwordConfirmEyeOn} alt="eyeOn" /> : <img src={passwordConfirmEyeOff} />}

                            </span>
                        </div>
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
