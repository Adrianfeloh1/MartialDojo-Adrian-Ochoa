import React, { useState } from 'react'

const ItemDetailContainer = () => {

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

  return (
    <div>ItemDetailContainer</div>
  )
}

export default ItemDetailContainer;