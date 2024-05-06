import { useState } from "react";
import { Input } from "./Input.jsx";
import { emailValidationMessage, passConfirmValidationMessage, passwordValidationMessage, usernameValidationMessage,nameValidationMessage, surnameValidationMessage, validateEmail, validatePassConfirm, validatePassword, validateUsername, validateName, validateSurname } from "../shared/validators/validator.js";
import { useRegister } from "../shared/hooks/useRegister.jsx";
import logo from '../assets/img/logoss.svg'
import hotelLogin from '../assets/img/hotelLogin.jpg'

export const Register = ({ switchAuthAndler }) => {
    const { register, isLoading } = useRegister()

    const [formData, setFormData] = useState(
        {   
            name: {
                value: '',
                isValid: false,
                showError: false
            },
            surname: {
                value: '',
                isValid: false,
                showError: false
            },
            email: {
                value: '',
                isValid: false,
                showError: false
            },
            username: {
                value: '',
                isValid: false,
                showError: false
            },
            password: {
                value: '',
                isValid: false,
                showError: false
            },
            passwordConfirm: {
                value: '',
                isValid: false,
                showError: false
            }
        }
    )

    const isSubmitButtonDisable = 
        !formData.name.isValid ||
        !formData.surname.isValid ||
        !formData.email.isValid ||
        !formData.username.isValid ||
        !formData.password.isValid ||
        !formData.passwordConfirm.isValid

    const handleValueChange = (value, field) => {
        setFormData((prevData) => (
            {
                ...prevData,
                [field]: {
                    ...prevData[field],
                    value
                }
            }
        ))
    }

    const handleValidationOnBlur = (value, field) => {
        let isValid = false
        switch (field) {
            case 'name':
                isValid = validateName(value)
                break
            case 'surname':
                isValid = validateSurname(value)
                break
            case 'email':
                isValid = validateEmail(value)
                break
            case 'username':
                isValid = validateUsername(value)
                break
            case 'password':
                isValid = validatePassword(value)
                break
            case 'passwordConfirm':
                isValid = validatePassConfirm(formData.password.value, value)
                break
            default:
                break
        }
        setFormData((prevData) => (
            {
                ...prevData,
                [field]: {
                    ...prevData[field],
                    isValid,
                    showError: !isValid
                }
            }
        ))
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        register(
            formData.name.value,
            formData.surname.value,
            formData.email.value,
            formData.username.value,
            formData.password.value
            
            
        )
    }
    return (
        
        <div className="register-container">
            <form
                className="auth-form"
                onSubmit={handleRegister}
            >
                <img src={logo} alt="logo" className="auth-form-logo-container" />
                <h1 className="title">REGISTER</h1>
                <Input
                    field='name'
                    label='Name'
                    value={formData.name.value}
                    onChangeHandler={handleValueChange}
                    type='text'
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.name.showError}
                    validationMessage={nameValidationMessage}
                />

                <Input
                    field='surname'
                    label='Surname'
                    value={formData.surname.value}
                    onChangeHandler={handleValueChange}
                    type='text'
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.surname.showError}
                    validationMessage={surnameValidationMessage}
                />

                <Input
                    field='email'
                    label='Email'
                    value={formData.email.value}
                    onChangeHandler={handleValueChange}
                    type='email'
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.email.showError}
                    validationMessage={emailValidationMessage}
                />

                <Input
                    field='username'
                    label='Username'
                    value={formData.username.value}
                    onChangeHandler={handleValueChange}
                    type='text'
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.username.showError}
                    validationMessage={usernameValidationMessage}
                />

                <Input
                    field='password'
                    label='Password'
                    value={formData.password.value}
                    onChangeHandler={handleValueChange}
                    type='password'
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.password.showError}
                    validationMessage={passwordValidationMessage}
                />

                <Input
                    field='passwordConfirm'
                    label='Password Confirmation'
                    value={formData.passwordConfirm.value}
                    onChangeHandler={handleValueChange}
                    type='password'
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.passwordConfirm.showError}
                    validationMessage={passConfirmValidationMessage}
                />
                <button
                    disabled={isSubmitButtonDisable}
                >
                    Register
                </button>
            </form>
            <span className="btn-link" onClick={switchAuthAndler}>
                ¿Ya tienes una cuenta? ¡Inicia sesión acá!
            </span>
        </div>
    )
}
