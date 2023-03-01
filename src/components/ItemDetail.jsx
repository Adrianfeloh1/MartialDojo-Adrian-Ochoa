import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ articulos }) => {
  const { id } = useParams();

  const articulosFiltrados = articulos.filter((articulo) => articulo.id == id);

  return (
    <>
      {articulosFiltrados.map((articulo) => (
        <div key={articulo.id} className="container__cards">
          <section className="card">
            <div className="cover__card">
              <img src={articulo.img} alt="saco" />
            </div>
            <h4>{articulo.nombre}</h4>
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
