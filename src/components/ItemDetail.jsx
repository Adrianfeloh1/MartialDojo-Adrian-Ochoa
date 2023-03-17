import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

const ItemDetail = ({ articulos }) => {
  const { id } = useParams();

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const articulosRef = doc(db, "MartialDojo", `${id}`);

    getDoc(articulosRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto(snapshot.data());
      } else {
        console.log("No está ese documento!");
      }
    });
  }, []);

  const articulosFiltrados = articulos.filter((articulo) => articulo.id === id);

  return (
    <>
      {articulosFiltrados.map((articulo) => (
        <div key={articulo.id} className="container__cards-detail">
          <section className="card-detail">
            <div className="cover__card-detail">
              <img src={articulo.img} alt="imagen artículos" />
            </div>
            <h3>{articulo.nombre}</h3>
            <hr />
            <p>{articulo.descripcion}</p>
            <hr />
            <div className="footer__Card-detail">
              <h3 className="precio-detail">$ {articulo.precio} COP</h3>
              <h3>Máximo {articulo.stock} en stock</h3>
              <ItemCount
                id={articulo.id}
                stock={articulo.stock}
                precio={articulo.precio}
                nombre={articulo.nombre}
                img={articulo.img}
              />
            </div>
          </section>
        </div>
      ))}

      <button className="volver-tienda animate__animated animate__fadeInUp">
        <Link to={"/"}>Volver a la tienda</Link>
      </button>
    </>
  );
};

export default ItemDetail;
