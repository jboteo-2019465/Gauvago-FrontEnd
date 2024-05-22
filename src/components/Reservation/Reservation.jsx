import React from 'react'
import './Reservation.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { NavBar } from '../NavBar/NavBar'
import { Fotter } from '../Fotter/Fotter'


export const Reservation = () => {
    const navigate = useNavigate()

    const handleInfoHotel = (id) => {
        navigate(`/InfoHotel/${id}`)
    }

    return (
        <div className='fondiko'>
            <NavBar />
            <div class="master-container">
            
                <div class="cardR cart">
                    <label class="title">Reservation</label>
                    <div class="products">
                        <span className='simon-text'>Nombre</span>
                        <label>
                            <input type="text" />
                        </label>
                        <div className='fechas'>
                            <div>
                                <span className='simon-text'>Fecha de ingreso</span>
                                <label>
                                    <input type="date" />
                                </label>
                            </div>
                            <div>
                                <span className='simon-text'>Fecha de salida</span>
                                <label>
                                    <input type="date" />
                                </label>
                            </div>
                        </div>
                        <div className='checkbtn'>
                            <button class="checkout-btn">Reservar</button>
                        </div>
                    </div>
                </div>

                <div class="cardR checkout">
                    <label class="title">Checkout</label>
                    <div class="details">
                        <span>Room:</span>
                        <span>Q10000000000</span>
                        <span>Total:</span>
                        <span>Q1000000000</span>
                        <div className='checkbtn'>
                            <button class="checkout-btn">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <Fotter />
        </div>
    )
}
