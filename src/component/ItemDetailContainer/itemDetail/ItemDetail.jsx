import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const ItemDetail = ({Producto}) => {
    return (
        <div>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="left" src={Producto.img} />
            <Card.Body>
                <Card.Title></Card.Title>
                    <Card.Text>
                    {Producto.description}
                    </Card.Text>        
                </Card.Body>
                <ListGroup className="list-group-flush">  
                    <ListGroupItem>Marca || {Producto.marca}</ListGroupItem>
                    <ListGroupItem>Modelo || {Producto.modelo}</ListGroupItem>
                </ListGroup>
                <Card.Body>   
                    
                 </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail
