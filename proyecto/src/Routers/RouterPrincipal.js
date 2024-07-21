import React from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Login from "../Componentes/Login";
import Principal from "../Componentes/Principal";
import Formulario from "../Componentes/Formulario";
import Historial from "../Componentes/Historial";
import Graficos from "../Componentes/Graficos";


export const RouterPrincipal = () => {
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login></Login>}></Route>
                <Route path="/principal/*" element={<Principal></Principal>}>
                    <Route path="formulario" element={<Formulario></Formulario>}></Route>
                    <Route path="historial" element={<Historial></Historial>}></Route>
                    <Route path="graficos" element={<Graficos></Graficos>}></Route>
                </Route>
                <Route path="*" element={(<div>
                    <h1>ERROR 404</h1>
                    <strong>Esta página no existe</strong>
                </div>)}></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}