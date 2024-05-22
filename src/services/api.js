import axios from "axios"
import { getToken } from "../utils/auth"

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

        // Devuelve la URL de la imagen desde la respuesta del backend
        return response.data.imageUrl;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error; 
    }
};

export const registerHotelRequest = async (hotel) => {
    try {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) throw new Error('Unauthorized: Missing Token');

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
        const tokenUser = getToken()
        const response = await apiClient.get('/user/getLogeed', {
            headers: {
                Authorization: tokenUser
            }
        })
        return response
        
    } catch (err) {
        return {
            error: true,
            errorDetails: err
        }
    }
}

export const updateUserRequest = async (userData) => {
    try {
      return response = await apiClient.put('/user/update', userData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': localStorage.getItem('authToken') // Obtener el token del localStorage
        }
    });
      
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  };

  export const deleteUserRequest = async (confirmation) => {
    try {
        const authToken = localStorage.getItem('authToken')
        if (!authToken) throw new Error('Unauthorized: Missing Token')

        const response = await apiClient.delete('/user/delete', {
            headers: {
                Authorization: authToken
            },
            data: {
                confirmation: confirmation
            }
        })

        return response.data;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

//Obtener los departamentos
export const getDepartments = async () => {
    try {
        const response = await apiClient.get('/department/obtener')
        return response.data
        
    } catch (err) {
        console.error(err)
        return {
            error: true,
            
        }
    }
} 

//Datos de un solo hotel
export const getHotelById = async (hotelId) => {
    try {
        const response = await apiClient.post('/hotel/search', {searchId: hotelId});
        return response.data.hotels
    } catch (error) {
        console.error('Error obteniendo los detalles del hotel:', error);
        return {
            error: true,
            errorDetails: error
        };
    }
};

//Imagenes para hotel
export const uploadImageRequestHotel = async (hotelId, formData) => {
    try {
        const response = await apiClient.post(`/hotel/imagenes/${hotelId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': localStorage.getItem('authToken') // Obtener el token del localStorage
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
};

//Obtener rooms de un hotel
export const getRooms = async (hotelId) => {
    try {
        console.log(hotelId)
        const response = await apiClient.post('/room/searchR', {searchId: hotelId});
        console.log(response)
        return response
        
        
    } catch (error) {
        console.error('Error getting rooms', error);
        throw error
        
    }
}

//Generar reservacion
export const createReservation = async () => {
    try {
        const response = await apiClient.post('/reservation/new')
    } catch (error) {
        console.error('Error creating reservation', error);
        throw error
    }
}

//Hacer una review
export const registerReview = async (reviewData, token) => {
    try {
        const response = await apiClient.post('/review/register', reviewData, {
            headers: {
                'Authorization': localStorage.getItem('authToken')
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error registrando la reseña:', error);
        throw error;
    }
};

//Aceptar denegar un hotel
export const acceptHotelRequest = async (nameHotel) => {
    console.log(nameHotel)
    try {
      const response = await apiClient.post(
        '/hotel/register',
        { nameHotel: nameHotel }, // Pasar el nombre del hotel directamente en el cuerpo de la solicitud
        {
          headers: {
            'Authorization': localStorage.getItem('authToken')
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error accepting hotel request:', error);
      throw error;
    }
  };
  
  export const denyHotelRequest = async (nameHotel) => {
    console.log(nameHotel)
    try {
      const response = await apiClient.delete(
        '/hotel/request/delete',
        {
          data: { nameHotel: nameHotel }, // Pasar el nombre del hotel como parte del cuerpo de la solicitud
          headers: {
            'Authorization': localStorage.getItem('authToken')
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error denying hotel request:', error);
      throw error;
    }
  };

  export const getHotelRequests = async () => {
    try {
      const response = await apiClient.get('/hotel/request/view', {
        headers: {
            'Authorization': localStorage.getItem('authToken')
        }
    });
      return response.data.hotelRequest;
    } catch (error) {
      console.error('Error getting hotel requests:', error);
      throw error;
    }
  };
