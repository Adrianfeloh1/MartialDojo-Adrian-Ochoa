import React from 'react'
import Item from './Item'
import {memo} from 'react';


const ItemList = memo(({ articulos }) => {   
  //
  console.log("renderizando los artículos");
  return (
    <>
      <main className='main-catalogue'>
        {articulos.map((articulo) => (
          <Item 
            key={articulo.id}
            id={articulo.id}
            nombre={articulo.nombre}
            img={articulo.img}
            descripcion={articulo.descripcion}
            categoria={articulo.categoria}
            precio={articulo.precio}
            stock={articulo.stock}            
          />
        ))}

      </main>
    </>
  )
})

export default ItemList;
