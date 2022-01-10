import React from 'react'
import { Button, Card } from 'react-bootstrap';

const Item = ({ product }) => {
    return (
      <>
            {/* <div>
              <img className="image" alt="ImageNotFound" src={product.img} />
              <h3>{product.name}</h3>
              <p>Precio: ${product.price}</p>
              <p>Stock: {product.stock}</p>
            </div> */}
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={product.img} />
               <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                  ${product.price}
             </Card.Text>
             <Card.Text>
                  Stock Disponible= Ultimas {product.stock} Unidades!
             </Card.Text>
            <Button variant="primary" className=''>ver detalle</Button>
           </Card.Body>
          </Card>
      </>
    );
  };
  export default Item;
