import ItemDetail from './ItemDetail';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import data from '../data.json';


const ItemDetailContainer = () => {
    const {id} = useParams ();
    const [articulos, setArticulos] = useState([]);
    const getDatos = () => {
        return new Promise((resolve, reject) => {
            if (data.length === 0) {
                reject (new Error("No hay Datos"));
            }

            setTimeout(() => {
                const articuloFiltrado = data.filter ((articulo) => articulo.id == id);
                resolve(articuloFiltrado)
            }, 2000);
        });
    };

    async function fetchingData() {
        try {
            const datosFetched = await getDatos();
            setArticulos(datosFetched);            
        } catch (error) {
            console.log(err);
        };
    };

    fetchingData();

  return <ItemDetail articulos = {data}/>


}

export default ItemDetailContainer;