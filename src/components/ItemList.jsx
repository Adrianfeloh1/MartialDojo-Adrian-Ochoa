import React from 'react'
import Item from './Item'


const ItemList = ({ data }) => {
  console.log(data);

  return (
    <>
      <main className='main-catalogue'>
        {data.map((articulo) => (
          <Item 
            key={articulo.id}
            id={articulo.id}
            nombre={articulo.nombre}
            descripcion={articulo.descripcion}
            categoria={articulo.categoria}
            precio={articulo.precio}
          />
        ))}

      </main>


    </>

  )
}

export default ItemList