import React from 'react'
import './Item.css'

const Item = ({ product }) => {
    return (
      <>
            <div>
              <img className="image" alt="ImageNotFound" src={product.image} />
              <h3>{product.name}</h3>
              <p>Precio: ${product.prize}</p>
              <p>Stock: {product.stocks}</p>
            </div>
      </>
    );
  };
  export default Item;
