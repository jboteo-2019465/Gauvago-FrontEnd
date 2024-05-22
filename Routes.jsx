import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthPage } from './src/Pages/Auth/AuthPage.jsx';
import { HomePage } from './src/components/HomePage.jsx';
import { UserProfile } from './src/components/userProfile/UserProfile.jsx';
import {RegisterHotel} from './src/components/Hotel/RegisterHotel.jsx'
import {HotelView} from './src/components/Hotel/HotelViev.jsx';
import { InfoHotel } from './src/components/Hotel/InfoHotel.jsx';
import { HotelRequest } from './src/components/hotelRequest/HotelRequest.jsx';

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<AuthPage />} />
                <Route path="/register" element={<AuthPage />} />
                <Route path="/HomePage" element={<HomePage />} />
                <Route path="/UserProfile" element={<UserProfile />} />
                <Route path='/HotelView' element={<HotelView/>}/>
                <Route path='/InfoHotel/:id' element={<InfoHotel/>}/>
                <Route path="/register-hotel" element={<RegisterHotel/>} />
                <Route path="/hotelsRequests" element={<HotelRequest/>} />
                <Route path="/" element={<Navigate to="/login" />} />{/*Redirigue a la pagina de login si no hay ruta especificada */}
            </Routes>
        </Router>
    );
};


