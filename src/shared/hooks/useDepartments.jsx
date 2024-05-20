import { useState, useEffect } from "react";
import { getDepartments } from "../../services/api.js";

export const useDepartment = () => {
    const [isLoadingDepa, setLoadingDepa] = useState(false);
    const [department, setDepartment] = useState([]);

    const fetchDepartments = async () => {
        try {
            const response = await getDepartments();
            if (response.error) {
                console.error('Error al obtener los departamentos:', response.error);
                return;
            }
            setDepartment(response);
        } catch (error) {
            console.error("Error al obtener los departamentos:", error);
        } finally {
            setLoadingDepa(false);
        }
    };

    useEffect(() => {
        fetchDepartments();
    }, []);

    return { department, isLoadingDepa };
};
