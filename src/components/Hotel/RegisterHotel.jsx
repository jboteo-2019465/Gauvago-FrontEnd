import "./RegisterHotel.css"
import { useState } from "react";
import { Input } from "../../components/Input.jsx";
import {
    emailValidationMessage,
    nameValidationMessage,
    descriptionValidationMessage,
    addressValidationMessage,
    phoneValidationMessage,
    starsValidationMessage,
    validateEmail,
    validateName,
    validatePhone,
    validateAddress,
    validateDescription,
    validateStars,
} from "../../shared/validators/validator.js"
import { useRegisterHotel } from "../../shared/hooks/useRegisterHotel.jsx"
import logo from "../../assets/img/logoss.svg"
import { NavBar } from "../NavBar/NavBar.jsx";
import { Fotter } from "../Fotter/Fotter.jsx";

export const RegisterHotel = ({ switchHandler }) => {
    const { registerHotel, isLoading } = useRegisterHotel();

    const [formData, setFormData] = useState({
        nameHotel: {
            value: '',
            isValid: false,
            showError: false
        },
        description: {
            value: '',
            isValid: false,
            showError: false
        },
        address: {
            value: '',
            isValid: false,
            showError: false
        },
        phoneHotel: {
            value: '',
            isValid: false,
            showError: false
        },
        email: {
            value: '',
            isValid: false,
            showError: false
        },
        stars: {
            value: '',
            isValid: false,
            showError: false
        }
    });

    const isSubmitButtonDisabled = 
        !formData.nameHotel.isValid ||
        !formData.description.isValid ||
        !formData.address.isValid ||
        !formData.phoneHotel.isValid ||
        !formData.email.isValid ||
        !formData.stars.isValid;

    const handleValueChange = (value, field) => {
        setFormData(prevData => ({
            ...prevData,
            [field]: {
                ...prevData[field],
                value
            }
        }));
    };

    const handleValidationOnBlur = (value, field) => {
        let isValid = false;
        switch (field) {
            case 'nameHotel':
                isValid = validateName(value);
                break;
            case 'description':
                isValid = validateDescription(value);
                break;
            case 'address':
                isValid = validateAddress(value);
                break;
            case 'phoneHotel':
                isValid = validatePhone(value);
                break;
            case 'email':
                isValid = validateEmail(value);
                break;
            case 'stars':
                isValid = validateStars(value);
                break;
            default:
                break;
        }
        setFormData(prevData => ({
            ...prevData,
            [field]: {
                ...prevData[field],
                isValid,
                showError: !isValid
            }
        }));
    };

    const handleRegisterHotel = async (e) => {
        e.preventDefault();
        const adminToken = localStorage.getItem('authToken'); // Assumes token is the admin token
        await registerHotel(
            formData.nameHotel.value,
            formData.description.value,
            formData.address.value,
            formData.phoneHotel.value,
            formData.email.value,
            formData.stars.value,
            adminToken
        );
    };

    return (
        <div className="boddddy">
            <NavBar />
        <div className="register-hotel-container">
            <form className="auth-form" onSubmit={handleRegisterHotel}>
                <img src={logo} alt="logo" className="auth-form-logo-container" />
                <h1 className="title">Register Hotel</h1>
                <Input
                    field='nameHotel'
                    label='Hotel Name'
                    value={formData.nameHotel.value}
                    onChangeHandler={handleValueChange}
                    type='text'
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.nameHotel.showError}
                    validationMessage={nameValidationMessage}
                />

                <Input
                    field='description'
                    label='Description'
                    value={formData.description.value}
                    onChangeHandler={handleValueChange}
                    type='text'
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.description.showError}
                    validationMessage={descriptionValidationMessage}
                />

                <Input
                    field='address'
                    label='Address'
                    value={formData.address.value}
                    onChangeHandler={handleValueChange}
                    type='text'
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.address.showError}
                    validationMessage={addressValidationMessage}
                />

                <Input
                    field='phoneHotel'
                    label='Phone'
                    value={formData.phoneHotel.value}
                    onChangeHandler={handleValueChange}
                    type='text'
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.phoneHotel.showError}
                    validationMessage={phoneValidationMessage}
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
                    field='stars'
                    label='Stars'
                    value={formData.stars.value}
                    onChangeHandler={handleValueChange}
                    type='number'
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.stars.showError}
                    validationMessage={starsValidationMessage}
                />

                <button
                    type="submit"
                    disabled={isSubmitButtonDisabled || isLoading}
                >
                    Register Hotel
                </button>
                <span className="btn-link" onClick={switchHandler}>
                    Want to register a user instead? Click here!
                </span>
            </form>
        </div>
        <Fotter />
        </div>
    );
};