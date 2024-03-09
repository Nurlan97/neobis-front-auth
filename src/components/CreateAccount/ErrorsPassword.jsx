import React from 'react'

const ErrorsPassword = ({ formik }) => {


    const validatePassword = (password) => {

        return {
            validLength: password.length > 7 && password.length < 16,
            hasUpperAndLowerCase: /(?=.*[a-z])(?=.*[A-Z])/.test(password),
            hasNumber: /[0-9]/.test(password),
            hasChar: /[!"#$.]/.test(password),
        }

    }

    const passwordValidation = validatePassword(formik.values.password__input);
    // console.log(formik.values.password__input)
    // console.log(formik.errors)
    // console.log(formik.errors.password__input_hasLowerCaseAndUpperCase)
    // console.log(!!)
    return (
        <div>
            <div className={!passwordValidation.validLength ? 'createAccount__form_error_message ' : 'createAccount__form_isValid_message'}>
                От 8 до 15 символов
                {!passwordValidation.validLength ? " ❌" : " ✅"}

            </div>
            <div className={!passwordValidation.hasUpperAndLowerCase ? 'createAccount__form_error_message ' : 'createAccount__form_isValid_message'}>
                Строчные и прописные буквы
                {!passwordValidation.hasUpperAndLowerCase ? " ❌" : " ✅"}

            </div>
            <div className={!passwordValidation.hasNumber ? 'createAccount__form_error_message ' : 'createAccount__form_isValid_message'}>
                Минимум 1 цифра
                {!passwordValidation.hasNumber ? " ❌" : " ✅"}

            </div>
            <div className={!passwordValidation.hasChar ? 'createAccount__form_error_message ' : 'createAccount__form_isValid_message'}>
                Минимум 1 спецсимвол (!, ", #, $...)
                {!passwordValidation.hasChar ? " ❌" : " ✅"}

            </div>

        </div>
    )
}

export default ErrorsPassword
