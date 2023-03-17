import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";


const ItemListContainer = ({ gretting }) => {
    
    const [articulos, setArticulos] = useState([]);
    const {categoria} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const articulosCollection = collection(db, "MartialDojo");
        getDocs(articulosCollection).then((Snapshot) => {
          const articulos = Snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setArticulos(articulos);
        });
      }, []);    

    const categoriaFiltrada = articulos.filter((articulo) => articulo.categoria === categoria)
    return (
        <>
            <h3 className='gretting'>{gretting}</h3>
            {categoria ? <ItemList articulos = {categoriaFiltrada} /> : <ItemList articulos= {articulos}/>}            
        </>
    )
}

export default ItemListContainer;