import { Showcase } from "./Showcase/Showcase"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Fotter } from "./Fotter/Fotter";
import { NavBar } from "./NavBar/NavBar";

export const HomePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = localStorage.getItem('authToken');
        if (!storedToken) {
            navigate('/login'); // Redirigir a login si no hay token
        }
    }, [navigate]);

    return (
        <div>
            <NavBar />           
            <Showcase/>
            <Fotter />
        </div>
    );
}
