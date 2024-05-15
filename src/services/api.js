import axios from "axios"

const apiClient = axios.create({
    baseURL: 'http://localhost:2622',
    timeout: 1000
})

export const registerRequest = async(user)=>{
    try{
        return await apiClient.post('/user/register', user)
    }catch(err){
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