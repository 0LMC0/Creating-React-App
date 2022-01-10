import React from 'react'
import Item from '../item/Item.jsx'

const ItemList = ({ productos }) => {
    return (
      <div className="grilla">
          
        {productos.map((producto) => {
          return <Item key={producto.id} product={producto}></Item>;
        })}
      </div>
    );
  };
  export default ItemList;
