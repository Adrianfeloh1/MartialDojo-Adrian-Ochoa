import ItemDetail from "./ItemDetail";
import React, { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";


const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const articulosCollection = collection(db, "MartialDojo");
    getDocs(articulosCollection).then((Snapshot) => {
      const articulos = Snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(articulos);
    });
  }, []);
  
  return <ItemDetail articulos={data} />;
};

export default ItemDetailContainer;
