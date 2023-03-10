import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetail = ({ articulos }) => {
  const { id } = useParams();

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const articulosRef = doc(db, "MartialDojo", `${id}` );

    getDoc(articulosRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto(snapshot.data());
      } else {
        console.log("No está ese documento!");
      }
    });

  },[]);

  const articulosFiltrados = articulos.filter((articulo) => articulo.id === id);

  return (
    <>
      {articulosFiltrados.map((articulo) => (
        <div key={articulo.id} className="container__cards">
          <section className="card">
            <div className="cover__card">
              <img src={articulo.img} alt="saco" />
            </div>
            <h3>{articulo.nombre}</h3>
            <hr />
            <p>{articulo.descripcion}</p>
            <hr />
            <div className="footer__Card">
              <h4 className="precio">$ {articulo.precio} COP</h4>
              <h3>Máximo {articulo.stock} en stock</h3>
              <ItemCount
                id={articulo.id}
                stock={articulo.stock}
                precio={articulo.precio}
                nombre={articulo.nombre}
              />
            </div>
          </section>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
