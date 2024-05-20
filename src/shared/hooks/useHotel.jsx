import { useState, useEffect } from "react";
import { getHoteles, getHotelById } from "../../services/api.js";

export const useHotel = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [hotel, setHotel] = useState([]);
    const [selectedHotel, setSelectedHotel] = useState([]);

    const fetchHotels = async () => {
        try {
            const response = await getHoteles();
            if (response.error) {
                console.error('Error al obtener los Hoteles:', response.error);
                return;
            }
            setHotel(response.data);
        } catch (error) {
            console.error("Error al obtener los Hoteles:", error);
        } finally {
            setIsLoading(false);
        }
    };
    

    const getHotel = async (hotelId)=>{
        try {
            console.log(hotelId)
            const response = await getHotelById(hotelId)
            console.log(response.hotel)
            if (response.error) {
                console.error('Error al obtener el Hotel:', response.error);
                return;
            }
            setSelectedHotel(response.hotel)
            console.log(selectedHotel)
        } catch (err) {
            console.error("Error obteniendo el hotel", err)
            
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        if (selectedHotel) {
          console.log(selectedHotel);
        }
      }, [selectedHotel]);

    useEffect(() => {
        fetchHotels();
    }, []);

    return { hotel, isLoading, getHotel, selectedHotel };
};
