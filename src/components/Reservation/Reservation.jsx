import React from 'react';
import './Reservation.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { NavBar } from '../NavBar/NavBar';
import { Fotter } from '../Fotter/Fotter';
import {jwtDecode} from 'jwt-decode';
import Swal from 'sweetalert2';
import { useReservation } from '../../shared/hooks/useReservation';

export const Reservation = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const token = localStorage.getItem('authToken');
    const decodedToken = jwtDecode(token);
    const { createNewReservation } = useReservation();

    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');

    const handleReservation = async () => {
        const reservationData = {
            userId: decodedToken.uid,
            roomId: id,
            checkIn: checkInDate,
            checkOut: checkOutDate,
        };
        console.log(reservationData)
        console.log(decodedToken.uid)
        try {
            await createNewReservation(reservationData);
            Swal.fire('Success', 'Reservation created successfully!', 'success');
        } catch (error) {
            Swal.fire('Error', 'Failed to create reservation', 'error');
        }
    };

    return (
        <div className='fondiko'>
            <NavBar />
            <div className="master-container">
                <div className="cardR cart">
                    <label className="title">Reservation</label>
                    <div className="products">
                        <span className='simon-text'>Nombre</span>
                        <label>
                            {decodedToken.name} {decodedToken.surname}
                        </label>
                        <div className='fechas'>
                            <div>
                                <span className='simon-text'>Fecha de ingreso</span>
                                <label>
                                    <input 
                                        type="date" 
                                        value={checkInDate} 
                                        onChange={(e) => setCheckInDate(e.target.value)} 
                                    />
                                </label>
                            </div>
                            <div>
                                <span className='simon-text'>Fecha de salida</span>
                                <label>
                                    <input 
                                        type="date" 
                                        value={checkOutDate} 
                                        onChange={(e) => setCheckOutDate(e.target.value)} 
                                    />
                                </label>
                            </div>
                        </div>
                        <div className='checkbtn'>
                            <button className="checkout-btn" onClick={handleReservation}>Reservar</button>
                        </div>
                    </div>
                </div>
                <div className="cardR checkout">
                    <label className="title">Checkout</label>
                    <div className="details">
                        <span>Room:</span>
                        <span>Q10000000000</span>
                        <span>Total:</span>
                        <span>Q1000000000</span>
                        <div className='checkbtn'>
                            <button className="checkout-btn">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <Fotter />
        </div>
    );
};
