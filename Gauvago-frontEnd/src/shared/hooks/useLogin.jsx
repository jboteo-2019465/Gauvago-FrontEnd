import { useState } from "react"
import toast from 'react-hot-toast'
import { loginRequest } from "../../services/api.js"
import { validateIdentifier } from "../validators/validator.js"

export const useLogin = () => {
    const [isRegister, setIsRegister] = useState(false)

    const login = async(identifier, password) => {
        setIsRegister(true)
        try {
            const isEmail = identifier.includes('@')

            const userLogin = {
                [isEmail ? 'email' : 'username']: identifier,
                password
            }

            const response = await loginRequest(userLogin)
            if (response.error) {
                toast.error(
                    response?.e?.response?.data ||
                    'Email o contraseña incorrectos. Inténtalo de nuevo.'
                )
            } else {
                toast.success('¡Has iniciado sesión!')
            }
            console.log(response)
        } catch (error) {
            console.error('Error al iniciar sesión:', error)
            toast.error('Se produjo un error al iniciar sesión. Inténtalo de nuevo más tarde.')
        } finally {
            setIsRegister(false)
        }
    }

    return {
        login,
        isRegister
    }
}
