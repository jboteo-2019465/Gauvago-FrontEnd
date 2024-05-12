import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthPage } from './src/Pages/Auth/AuthPage.jsx';
import { HomePage } from './src/components/HomePage.jsx';

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<AuthPage />} />
                <Route path="/register" element={<AuthPage />} />
                <Route path="/HomePage" element={<HomePage />} />
                <Route path="/" element={<Navigate to="/login" />} />{/*Redirigue a la pagina de login si no hay ruta especificada */}
            </Routes>
        </Router>
    );
};


