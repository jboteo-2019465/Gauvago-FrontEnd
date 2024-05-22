import React, { useEffect } from 'react';
import { useHotel } from '../../shared/hooks/useHotel.jsx';

export const HotelRequest = () => {
  const { hotelRequests, loading, error, fetchHotelRequests, acceptRequest, denyRequest } = useHotel();

  
  const handleAccept = async (nameHotel) => { 
    try {
      await acceptRequest(nameHotel); // Pasar el nombre del hotel
    } catch (error) {
      console.error('Error al aceptar la solicitud de hotel:', error);
    }
  };

  const handleDeny = async (nameHotel) => { 
    try {
      await denyRequest(nameHotel); // Pasar el nombre del hotel
    } catch (error) {
      console.error('Error al denegar la solicitud de hotel:', error);
    }
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Solicitudes de Hotel</h1>
      <ul>
        {hotelRequests.map((request) => (
          <li key={request._id}>
            <div>
              <h3>{request.nameHotel}</h3>
              <p>{request.description}</p>
              <p>Dirección: {request.address}</p>
              <p>Teléfono: {request.phoneHotel}</p>
              <p>Correo electrónico: {request.email}</p>
              <button onClick={() => handleAccept(request._id)}>Aceptar</button>
              <button onClick={() => handleDeny(request._id)}>Denegar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

