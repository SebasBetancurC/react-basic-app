import React from 'react';
import './barra-busqueda.css';

const BarraDeBusqueda = () =>{
    return (

        <div className = "barra-busqueda-contenedor">

            <div className = "buscar-input">
                <input type = "text" placeholder= "Buscar..."/> <br/>
            </div>

            <div>
                <input type = "checkbox"/> Solo mostrar productos disponibles
            </div> 
            
            
        </div>
    );
}

export default BarraDeBusqueda;