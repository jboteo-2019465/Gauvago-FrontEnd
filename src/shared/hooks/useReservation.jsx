import { useState } from 'react';
import { createReservation } from '../../services/api.js'

export const useReservation = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const createNewReservation = async (reservationData) => {
        setIsLoading(true);
        try {
            const response = await createReservation(reservationData);
            setSuccessMessage(response.message);
            setIsLoading(false);
        } catch (error) {
            setError(error.response.data.message || 'Something went wrong');
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        error,
        successMessage,
        createNewReservation,
    };
};
