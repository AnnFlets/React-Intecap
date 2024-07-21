import React, { useState } from "react";
import "../Estilos/styles.css";

const Login = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("usuario", JSON.stringify(name));
        window.open("/principal", "_self");
    };

    return (
        <div className="fondo login">
            <div className="contenedor login">
                <h2 className="titulo1">Inicio de sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grupo-form">
                        <label htmlFor="name" className="label-form">Nombre:</label>
                        <input required type="text" id="name" className="input-form" value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="grupo-login">
                        <label htmlFor="password" className="label-form">Contraseña:</label>
                        <input required type="password" id="password" className="input-form" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <br></br>
                    <button type="submit" className="boton login">Iniciar sesión</button>
                </form>
            </div>
        </div>
    );
};

export default Login;