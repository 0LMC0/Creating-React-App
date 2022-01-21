import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const Item = ({ product }) => {
    return (
      <>
            <div className='px-2 pb-5'>
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
             <Link to={`/Item/${product.id}`}>
                <Button variant="primary" className='w-100'>Ver detalle</Button>
             </Link>
           </Card.Body>
          </Card>
            </div>
      </>
    );
  };
  export default Item;
