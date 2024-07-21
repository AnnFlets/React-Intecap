import React, { useState, useEffect } from "react";
import "../Estilos/historialStyles.css";

const Historial = () => {

    const [listaActividades, setListaActividades] = useState([]);

    useEffect(() => {
        const actividadesGuardadas = JSON.parse(localStorage.getItem("actividades"));
        if (actividadesGuardadas) {
            setListaActividades(actividadesGuardadas);
        }
    }, []);

    return (
        <div className="historial">
            <h2 className="titulo-historial">Lista de actividades</h2>
            <div className="tabla-actividades">
                <table className="table table-bordered border-secondary">
                    <thead>
                        <tr>
                            <th>NOMBRE</th>
                            <th>DESCRIPCIÓN</th>
                            <th>DURACIÓN (min)</th>
                            <th>DISTANCIA (mt)</th>
                            <th>TIEMPO (veces por semana)</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {listaActividades.map((actividad, index) => (
                            <tr key={index}>
                                <td>{actividad.nombre}</td>
                                <td>{actividad.descripcion}</td>
                                <td>{actividad.duracion}</td>
                                <td>{actividad.distancia}</td>
                                <td>{actividad.tiempo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default Historial;