import React from 'react';
import { Link } from "react-router-dom";

const Item = ({ id, nombre, img, categoria, precio }) => {

    return (
        <>
            <div key={id} className='container__cards'>
                <section className='card'>
                    <div className='cover__card'>
                        <img src={img} alt="imagen" />
                    </div>
                    <h3 className='titulo-articulo'>{nombre}</h3>
                    <h4>{categoria}</h4>
                    
                    <div className='footer__Card'>
                        <h4 className='precio'>$ {precio} COP</h4>
                    </div>                    
                    <button className='btn'>
                        <Link to={`/item/${id}`}>Detalle</Link>
                    </button>
                </section>
            </div>
        </>
    )
}

export default Item