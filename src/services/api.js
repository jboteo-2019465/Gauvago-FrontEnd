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