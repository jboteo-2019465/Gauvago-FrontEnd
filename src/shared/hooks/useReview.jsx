// shared/hooks/useReview.jsx
import { useState } from 'react';
import { registerReview } from '../../services/api';

export const useReview = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const submitReview = async (reviewData, token) => {
        setIsLoading(true);
        setError(null);
        setSuccessMessage(null);

        try {
            const response = await registerReview(reviewData, token);
            setSuccessMessage(response.message);
        } catch (err) {
            setError(err.response?.data?.message || 'Error registrando la reseña');
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        error,
        successMessage,
        submitReview
    };
};
