import React from 'react';
import articulo from "../assets/saco.jpg";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, categoria, precio }) => {

    return (
        <>
            <div key={id} className='container__cards'>
                <section className='card'>
                    <div className='cover__card'>
                        <img src={articulo} alt="saco" />
                    </div>
                    <h4>{nombre}</h4>
                    <h4>{categoria}</h4>
                    <hr />
                    <div className='footer__Card'>
                        <h4 className='precio'>{precio}</h4>
                    </div>
                    <hr />
                    <button className='btn'>
                        <Link to={`/item/${id}`}>Detalle</Link>
                    </button>
                </section>
            </div>
        </>
    )
}

export default Item