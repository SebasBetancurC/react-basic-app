import React from 'react';
import ArticulosDeportivos from '../articulos-deportivos/articulos-deportivos';
import Basquetbol from '../articulos-deportivos/basquetbol/basquetbol';
import Beisbol from '../articulos-deportivos/beisbol/beisbol';
import Futbol from '../articulos-deportivos/futbol/futbol';
import ArticulosElectronicos from '../articulos-electronicos/articulos-electronicos';
import IPhoneCinco from '../articulos-electronicos/iphone-5/iphone';
import TouchiPod from '../articulos-electronicos/ipod-touch/ipod';
import NexusSiete from '../articulos-electronicos/nexus/nexus';
import './tabla-productos.css';

const TablaDeProductos = () =>{
    return (

        <div className = "tabla-productos-contenedor">
            <div className ="texto-tabla-productos"> 
            Nombre &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Precio
            </div>
            

            <ArticulosDeportivos/>
            <Futbol/>
            <Beisbol/>
            <Basquetbol/>
            <ArticulosElectronicos/>
            <TouchiPod/>
            <IPhoneCinco/>
            <NexusSiete/>
        </div>
    );
}

export default TablaDeProductos;