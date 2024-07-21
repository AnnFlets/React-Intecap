import React, {useState, useEffect} from "react";
import "../Estilos/graficosStyles.css";
import {Bar, Pie} from 'react-chartjs-2';
import {Chart as Chartjs, BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend} from 'chart.js';
Chartjs.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

const Graficos = () => {

    const [listaActividades, setListaActividades] = useState([]);

    useEffect(() => {
        const actividadesGuardadas = JSON.parse(localStorage.getItem("actividades"));
        if (actividadesGuardadas) {
            setListaActividades(actividadesGuardadas);
        }
    }, []);

    const barData = {
        labels: listaActividades.map(actividad => actividad.nombre),
        datasets: [
            {
                label: 'Duración (min)',
                data: listaActividades.map(actividad => actividad.duracion),
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
            {
                label: 'Tiempo (veces por semana)',
                data: listaActividades.map(actividad => actividad.tiempo),
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
            }
        ]
    };

    const pieData = {
        labels: listaActividades.map(actividad => actividad.nombre),
        datasets: [
            {
                label: 'Duración',
                data: listaActividades.map(actividad => actividad.duracion),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(186, 98, 255, 0.6)',
                    'rgba(255, 224, 98, 0.6)',
                    'rgba(98, 255, 110, 0.6)',
                    'rgba(218, 99, 73, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                ],
            }
        ]
    }

    return (
        <div className="graficos">
            <h3>Gráfico de barras</h3>
            <div className="contenedor-grafico">
                <Bar data={barData}></Bar>
            </div>
            <br></br>
            <h3>Gráfico de sectores</h3>
            <p>Duración de cada actividad</p>
            <div className="contenedor-grafico">
                <Pie data={pieData}></Pie>
            </div>        
        </div>
    );
};

export default Graficos;