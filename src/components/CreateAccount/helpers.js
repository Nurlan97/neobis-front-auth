export const initialValues = {
    email: '',
    username: '',
    password: '',
    password_confirm: '',
}

export const validate = values => {

    let errors = {};

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}$/i;
    const hasLowerAndUpperCase = /(?=.*[a-z])(?=.*[A-Z])/;


    // EMAIL
    if (!values.email) {
        errors.email = 'Required'
    } else if (!emailPattern.test(values.email)) {
        errors.email = 'Invalid Email'
    }

    // LOGIN
    if (!values.username) {
        errors.username = 'Required'
    }

    // PASSWORD

    // От 8 до 15 символов
    if (values.password.length < 8 || values.password.length > 15) {
        errors.password__input_length = 'От 8 до 15 символов ❌' // здесь пользователю неважно что получать, главное что было ключ имел какое-то значение
    } 

    //Строчные и прописные буквы
    if (!hasLowerAndUpperCase.test(values.password)) {
        errors.password__input_hasLowerCaseAndUpperCase = 'Строчные и прописные буквы ❌'
    } 

    // Минимум 1 цифра
    if (!/[0-9]/.test(values.password)) {
        errors.password__input_missingNumber = 'Минимум 1 цифра ❌'
    } 

    // Минимум 1 спецсимвол (!, ", #, $...)
    if (!/[!"#$.]/.test(values.password)) {
        errors.password__input_missingChar = 'Минимум 1 спецсимвол (!, ", #, $...) ❌'
    } 


    // PASSWORD CONFIRMATION
    if (values.password_confirm !== values.password) {
        errors.password_confirm = 'Пароли не совпадают'
    }

    return errors // Чтобы formik работал правильно, он всегда должен возващать пустой объект (Т.е. validate должен быть пустым) Мы прописали точно такую же логику в ErrorsPassword для визуализации пользователю 
    
}