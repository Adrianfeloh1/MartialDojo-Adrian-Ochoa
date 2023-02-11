import React from 'react'
import ItemList from './ItemList';
import data from "../data.json"

const ItemListContainer = ({ gretting }) => {
    //console.log(data)) verifico que traiga el json
    const getDatos = () => {
        return new Promise((resolve, reject) => {
            if (data.length === 0) {
                reject(new Error("No hay datos"));
            }
            setTimeout(() => {
                resolve(data);
            }, 2000);
        });
    };

    async function fetchingData() {
        try {
            const datosFetched = await getDatos();
            console.log(datosFetched)
        } catch (err) {
            console.log(err);            
        }
    }
    fetchingData();    

    return (
        <>
            <h3>{gretting}</h3>
            <ItemList data = {data}/>
        </>
    )
}

export default ItemListContainer;