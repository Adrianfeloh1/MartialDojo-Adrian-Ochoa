import React from 'react'
import ItemList from './ItemList';

const ItemListContainer = ({ gretting }) => {



    return (
        <div>
            <h3>{gretting}</h3>            
            <ItemList />
        </div>
    )
}

export default ItemListContainer;