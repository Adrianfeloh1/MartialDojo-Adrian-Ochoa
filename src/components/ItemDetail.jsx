import articulo from "../assets/guantes.jpg"

const ItemDetail = ({ id, nombre, descripcion, categoria, precio, stock }) => {
    

  return (
    <>
            <div className='container__cards'>
                <section className='card'>
                    <div className='cover__card'>
                        <img src={articulo} alt="GUANTES" />
                    </div>
                    <h4>{nombre}</h4>
                    <p>{descripcion}</p>
                    <hr />
                    <div className='footer__Card'>
                        <h4 className='precio'>{precio}</h4>
                        <h4>{stock}stock</h4>
                    </div>
                </section>
            </div>

        </>
  )
}

export default ItemDetail