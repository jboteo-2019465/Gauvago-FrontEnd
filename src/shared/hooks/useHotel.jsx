import { useState, useEffect } from "react";
import { getHoteles, getHotelById, uploadImageRequestHotel, getRooms, acceptHotelRequest, denyHotelRequest, getHotelRequests } from "../../services/api.js";

export const useHotel = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [hotel, setHotel] = useState([]);
    const [selectedHotel, setSelectedHotel] = useState([]);
    const [hotelRequests, setHotelRequests] = useState([]);
    const [room, setRoom] = useState([])
    const [error, setError] = useState(null);

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
            const response = await getHotelById(hotelId)
            if (response.error) {
                console.error('Error al obtener el Hotel:', response.error);
                return;
            }
            setSelectedHotel(response)
        } catch (err) {
            console.error("Error obteniendo el hotel", err)
            
        } finally {
            setIsLoading(false);
        }
    }

    const uploadHotelImages = async (hotelId, files) => {
        setIsLoading(true);
        const formData = new FormData();
        files.forEach(file => {
            formData.append('image', file);
        });
    
        try {
            const response = await uploadImageRequestHotel(hotelId, formData);
            if (response.error) {
                console.error('Error al subir imágenes:', response.error);
                return;
            }
            console.log('Imágenes subidas con éxito:', response);
        } catch (error) {
            console.error("Error subiendo imágenes", error);
        } finally {
            setIsLoading(false);
        }
    };

    const getRoomsHotel = async (hotelId) => {
        setIsLoading(true);
        try {
            const response = await getRooms(hotelId);
            console.log(response.data.rooms)
            if (response.error) {
                console.error('Error al obtener las habitaciones:', response);
                return;
            }
            setRoom(response.data.rooms);
        } catch (err) {
            console.error("Error obteniendo las habitaciones", err);
        } finally {
            setIsLoading(false);
        }
    };

    const acceptRequest = async (nameHotel) => { // Modificar para aceptar el nombre del hotel
        try {
          setIsLoading(true);
          await acceptHotelRequest(nameHotel); // Pasar el nombre del hotel
          // Realizar alguna acción adicional si es necesario, como actualizar la lista de solicitudes de hotel
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };
      
      const denyRequest = async (nameHotel) => { // Modificar para aceptar el nombre del hotel
        try {
          setIsLoading(true);
          await denyHotelRequest(nameHotel); // Pasar el nombre del hotel
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };
    
      

      const fetchHotelRequests = async () => {
        try {
          setIsLoading(true);
          const data = await getHotelRequests();
          setHotelRequests(data);
        } catch (error) {
            console.error(error)
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };
      
    useEffect(() => {
        fetchHotels();
        fetchHotelRequests()
    }, []);

    return { hotel, isLoading, getHotel, selectedHotel, uploadHotelImages, getRoomsHotel, room, error, acceptRequest, denyRequest, hotelRequests, fetchHotelRequests };
};




