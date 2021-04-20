import React from 'react';
import BarraDeBusqueda from '../barra-busqueda/barra-busqueda';
import TablaDeProductos from '../tabla-productos/tabla-productos';
import './tabla-productos-filtrables.style.css';

const TablaProductosFiltrables = () =>{
    return (
        <div className = "tabla-productos-filtrables-contenedor">
            <BarraDeBusqueda/>
            <TablaDeProductos/>
        </div>
    );
}

export default TablaProductosFiltrables;