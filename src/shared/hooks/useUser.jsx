import { useState, useEffect } from 'react';
import { getLoggedUser, uploadImageRequest, updateUserRequest, deleteUserRequest } from "../../services/api.js"


export const useUser = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [user, setUser] = useState(null)

    const handleUploadImage = async (imageFile) => {
        setLoading(true);
        setError(null);
        
        try {
            const response = await uploadImageRequest(imageFile); 
            setImageUrl(response.data.imageUrl); 
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error.response?.data?.message || 'Error uploading image'); 
        }
    };

    const handleUpdateUser = async (userData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await updateUserRequest(userData);
            console.log(userData)
            console.log(response)
            setUser(response.updatedUser);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error(error)
            setError(error.response?.data?.message || 'Error updating user');
        }
    };

    const handleDeleteUser = async (confirmation) => {
        setLoading(true);
        setError(null);
        try {
            const response = await deleteUserRequest(confirmation);
            setUser(null);
            setLoading(false);
            return response;
        } catch (error) {
            setLoading(false);
            console.error(error)
            setError(error.response?.data?.message || 'Error deleting user');
        }
    };

    const fetchUser = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await getLoggedUser();
            if (response.error) {
                console.error('Error al obtener el usuario:', response.error)
                setError('Error al obtener el usuario');
            } else {
                setUser(response.data);
            }
        } catch (error) {
            setError("Error al obtener el usuario");
            console.error("Error al obtener el usuario:", error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);

    return { 
        handleUploadImage, 
        handleUpdateUser,
        handleDeleteUser,
        loading,
        user,
        error, 
        imageUrl,
        fetchUser
        
    }
};
