import React from 'react'
import { Card, ListGroup, ListGroupItem  } from 'react-bootstrap';

const ItemDetail = ({product}) => {
    return (
        <div>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="left" src={product.img} />
            <Card.Body>
                <Card.Title></Card.Title>
                    <Card.Text>
                    {product.description}
                    </Card.Text>        
                </Card.Body>
                <ListGroup className="list-group-flush">  
                    <ListGroupItem>Marca || {product.marca}</ListGroupItem>
                    <ListGroupItem>Modelo || {product.modelo}</ListGroupItem>
                </ListGroup>
                <Card.Body>   
                    
                 </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail
