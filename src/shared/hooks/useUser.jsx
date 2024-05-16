import { useState } from 'react';
import { uploadImageRequest } from "../../services/api.js"

export const useUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

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

    return { 
      handleUploadImage, 
      loading, 
      error, 
      imageUrl 
    }
};
