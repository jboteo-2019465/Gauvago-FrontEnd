import axios from "axios"

const apiClient = axios.create({
    baseURL: 'http://localhost:2622',
    timeout: 30000
})

export const registerRequest = async (user) => {
    try {
        return await apiClient.post('/user/register', user)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const loginRequest = async (userLogin) => {
    try {
        return await apiClient.post('/user/login', userLogin)
    } catch (error) {
        return {
            error: true,
            errorDetails: error
        }
    }
}

export const registerCategoryRequest = async (category) => {
    try {
        return await apiClient.post('/user/login', userLogin)
    } catch (error) {
        return {
            error: true,
            errorDetails: error
        }
    }
}

export const getHoteles = async () => {
    try {
        const response = await apiClient.get('/hotel/obtener')
        return response.data
        
    } catch (err) {
        return {
            error: true,
            errorDetails: err
        }
    }
} 

export const uploadImageRequest = async (formData) => {
    try {
        const response = await apiClient.post('/user/upload-image', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': localStorage.getItem('authToken') // Obtener el token del localStorage
            }
            
        });
        return response; // Devolver solo la URL de la imagen
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error; 
    }
};

export const registerHotelRequest = async (hotel) => {
    try {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) throw new Error('Unauthorized: Missing Token');
        
        // Paso 1: Verificar el token de autenticación
        console.log("AuthToken:", authToken);

        const response = await apiClient.post('/hotel/request/register', hotel, {
            headers: {
                Authorization: authToken
            }
        });

        return response.data;
    } catch (error) {
        // Paso 3: Manejo de errores
        console.error("Error:", error);

        if (error.response && error.response.data) {
            // Si hay una respuesta del servidor con datos de error, devolvemos esos datos
            return {
                error: true,
                errorDetails: error.response.data
            };
        } else {
            // Si no hay una respuesta del servidor o datos de error, devolvemos un mensaje genérico
            return {
                error: true,
                errorDetails: 'Error al intentar registrar el hotel. Inténtalo de nuevo más tarde.'
            };
        }
    }
};

export const getLoggedUser = async () => {
    try {
        const response = await apiClient.get('/user/getLogeed')
        return response.data
        
    } catch (err) {
        return {
            error: true,
            errorDetails: err
        }
    }
}
