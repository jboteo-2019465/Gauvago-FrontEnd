import { useState, useEffect } from "react";
import { getHoteles } from "../../services/api.js";

export const useHotel = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [hotel, setHotel] = useState([]);

    const fetchHotels = async () => {
        try {
            const response = await getHoteles();
            if (response.error) {
                console.error('Error al obtener los Hoteles:', response.error);
                return;
            }
            console.log('Hotel data:', response.data); // Verificar los datos obtenidos
            setHotel(response.data);
        } catch (error) {
            console.error("Error al obtener los Hoteles:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchHotels();
    }, []);

    return { hotel, isLoading };
};
