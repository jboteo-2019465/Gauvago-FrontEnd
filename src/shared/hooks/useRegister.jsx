import { useState } from "react";
import toast from 'react-hot-toast'
import { registerRequest } from "../../services/api.js";

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false)

    const register = async(name, surname, email, username, password)=> {
        setIsLoading(true)
        const user = {
          name,
          surname,
          email,
          username,
          password
        }
        const response = await registerRequest(user)
        setIsLoading(false)
    
        if(response.error){
            return toast.error(
                response?.e?.response?.data ||
                'Error general al intentar registrar el usuario. Intenta de nuevo.'
            )
        }else{
          toast.success('¡Te haz registrado ahora inicia sesion!')
        }
        console.log(response)
    }

  return {
    register, 
    isLoading
  }
}
