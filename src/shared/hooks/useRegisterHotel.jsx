import { useState } from "react";
import toast from 'react-hot-toast';
import { registerHotelRequest } from "../../services/api.js";

// Función para almacenar el token en localStorage después del inicio de sesión
const storeAuthToken = (token) => {
    localStorage.setItem('authToken', token);
};

// Función para obtener el token de localStorage
const getAuthToken = () => {
    return localStorage.getItem('authToken');
};

// Función para eliminar el token de localStorage al cerrar sesión
const removeAuthToken = () => {
    localStorage.removeItem('authToken');
};

export const useRegisterHotel = () => {
    const [isLoading, setIsLoading] = useState(false);

    const registerHotel = async (nameHotel, slogan, description, address, phoneHotel, email) => {
        setIsLoading(true);
        const hotel = {
            nameHotel,
            slogan,
            description,
            address,
            phoneHotel,
            email
        };
        const response = await registerHotelRequest(hotel);
        setIsLoading(false);

        if (response.error) {
            return toast.error(
                response?.errorDetails?.response?.data ||
                'Error general al intentar registrar el hotel. Intenta de nuevo.'
            );
        } else {
            toast.success('¡Hotel registrado con éxito!');
        }
        console.log(response);
    };

    return {
        registerHotel,
        isLoading
    };
};
