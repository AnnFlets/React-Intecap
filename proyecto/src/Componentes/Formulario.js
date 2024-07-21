import React, {useState, useEffect} from "react";
import "../Estilos/styles.css";

const Formulario = () => {

    const [listaActividades, setListaActividades] = useState([]);
    const [nombreActividad, setNombreActividad] = useState("");
    const [descripcionActividad, setDescripcionActividad] = useState("");
    const [duracionActividad, setDuracionActividad] = useState("");
    const [distanciaActividad, setDistanciaActividad] = useState("");
    const [tiempoActividad, setTiempoActividad] = useState("");

    useEffect(() => {
        const actividadesGuardadas = JSON.parse(localStorage.getItem("actividades"));
        if (actividadesGuardadas) {
            setListaActividades(actividadesGuardadas);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("actividades", JSON.stringify(listaActividades));
    }, [listaActividades]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let actividad = {
            nombre: e.target.nombre.value,
            descripcion: e.target.descripcion.value,
            duracion: Number(e.target.duracion.value),
            distancia: Number(e.target.distancia.value),
            tiempo: Number(e.target.tiempo.value)
        };
        setListaActividades([...listaActividades, actividad]);
        alert("Actividad insertada con éxito")
        setNombreActividad("");
        setDescripcionActividad("");
        setDuracionActividad("");
        setDistanciaActividad("");
        setTiempoActividad("");
    };

    return (
        <div className="fondo form">
            <div className="contenedor form">
                <h2 className="titulo1">Ingresar actividad</h2>
                <form onSubmit={handleSubmit} className="formulario">
                    <div className="grupo-form">
                        <label htmlFor="nombre" className="label-form">Nombre de la actividad:</label>
                        <input required type="text" id="nombre" className="input-form" value={nombreActividad}
                        onChange={(e) => setNombreActividad(e.target.value)}
                        />
                    </div>
                    <div className="grupo-form">
                        <label htmlFor="descripcion" className="label-form">Descripción de la actividad:</label>
                        <input required type="text" id="descripcion" className="input-form" value={descripcionActividad}
                        onChange={(e) => setDescripcionActividad(e.target.value)}
                        />
                    </div>
                    <div className="grupo-form">
                        <label htmlFor="duracion" className="label-form">Duración de la actividad (en minutos):</label>
                        <input required type="number" id="duracion" className="input-form" value={duracionActividad}
                        onChange={(e) => setDuracionActividad(e.target.value)}
                        />
                    </div>
                    <div className="grupo-form">
                        <label htmlFor="distancia" className="label-form">Distancia de la actividad (en metros):</label>
                        <input required type="number" id="distancia" className="input-form" value={distanciaActividad}
                        onChange={(e) => setDistanciaActividad(e.target.value)}
                        />
                    </div>
                    <div className="grupo-form">
                        <label htmlFor="tiempo" className="label-form">Número de veces a la semana que se realiza la actividad:</label>
                        <input required type="number" id="tiempo" className="input-form" value={tiempoActividad}
                        onChange={(e) => setTiempoActividad(e.target.value)}
                        />
                    </div>
                    <br></br>
                    <button type="submit" className="boton form">Insertar</button>
                </form>
            </div>
        </div>
    );
};

export default Formulario;