import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { Input } from "./Input"
import { identifierValidationMessage, passwordValidationMessage, validateIdentifier, validatePassword } from "../shared/validators/validator"
import { useLogin } from "../shared/hooks/useLogin"
import logo from '../assets/img/logoss.svg'

export const Login = ({ switchHandler }) => {
    const { login, isLoading } = useLogin()
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        identifier: {
            value: "",
            isValid: false,
            showError: false
        },
        password: {
            value: "",
            isValid: false,
            showError: false
        }
    })

    const isSubmitButtonDisabled = !formData.identifier.isValid || !formData.password.isValid

    const handleValueChange = (value, field) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: {
                ...prevData[field],
                value
            }
        }))
    }

    const handleValidationOnBlur = (value, field) => {
        let isValid = false
        switch (field) {
            case "identifier":
                isValid = validateIdentifier(value) 
                break
            case "password":
                isValid = validatePassword(value)
                break
            default:
                break
        }
        setFormData((prevData) => ({
            ...prevData,
            [field]: {
                ...prevData[field],
                isValid,
                showError: !isValid
            }
        }))
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        login(formData.identifier.value,
             formData.password.value)
             navigate('/HomePage');
    }

    return (
        <div className="login-container">
            <form className="auth-form" onSubmit={handleLogin}>
            <img src={logo} alt="logo" className="auth-form-logo-container" />
            <h1 className="title">LOGIN</h1>
                <Input
                    field="identifier"
                    label="Email or Username"
                    value={formData.identifier.value}
                    onChangeHandler={handleValueChange}
                    type="text"
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.identifier.showError}
                    validationMessage={identifierValidationMessage}
                />

                <Input
                    field="password"
                    label="Password"
                    value={formData.password.value}
                    onChangeHandler={handleValueChange}
                    type="password"
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.password.showError}
                    validationMessage={passwordValidationMessage}
                />

                <button disabled={isSubmitButtonDisabled}>
                    Login
                </button>
            </form>
            <span className="btn-link" onClick={switchHandler}>
                ¿No tienes una cuenta? ¡Registrate aqui!
            </span>
        </div>
    )
}
