import React, {useState, useEffect} from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../Estilos/principalStyles.css";

const Principal = () => {

    const [name, setName] = useState("");

    useEffect(() => {
        const savedName = JSON.parse(localStorage.getItem("usuario"));
        if (savedName){
            setName(savedName);
        }
    }, []);

    const CerrarSesion = () => {
        localStorage.setItem("usuario", JSON.stringify(null));
        localStorage.setItem("actividades", JSON.stringify([]));
    };

    return (
        <div>
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <form className="container-fluid" id="contenedor-botones">
                    <NavLink to="/principal/formulario" className="link azul"><button className="btn btn-outline-primary">Insertar actividad</button></NavLink>
                    <NavLink to="/principal/historial" className="link amarillo"><button className="btn btn-outline-warning">Ver actividades</button></NavLink>
                    <NavLink to="/principal/graficos" className="link verde"><button className="btn btn-outline-success">Ver gráficos</button></NavLink>
                    <NavLink to="/" className="link rojo"><button className="btn btn-outline-danger" onClick={CerrarSesion}>Cerrar sesión</button></NavLink>
                </form>
            </nav>
            <h1 className="titulo-principal">BIENVENIDO {name}</h1>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Principal;