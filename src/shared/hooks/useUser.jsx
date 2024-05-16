import { useState, useEffect } from 'react';
import { getLoggedUser, uploadImageRequest } from "../../services/api.js"

export const useUser = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [user, setUser] = useState()

    const handleUploadImage = async (imageFile) => {
        setLoading(true);
        setError(null);

        try {
            const response = await uploadImageRequest(imageFile); 
            setLoading(false);
            setImageUrl(response.data.imageUrl); 
            console.log(imageUrl);
        } catch (error) {
          console.error(error.response);
            setLoading(false);
            setError(error.response.data.message); 
        }
    };

    const fetcUser = async () => {
      try {
          const response = await getLoggedUser();
          if (response.error) {
              console.error('Error al obtener el usuario:', response.error)
              return
          }
          console.log('user data:', response.data);
          setUser(response.data)
      } catch (error) {
          console.error("Error al obtener el usuario:", error)
      } finally {
          setLoading(false)
      }
  }

  useEffect(() => {
      fetcUser()
  }, [])

    return { 
      handleUploadImage, 
      loading,
      user,
      error, 
      imageUrl 
    }
};
