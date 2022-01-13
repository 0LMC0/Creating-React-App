import React, {useState, useEffect} from 'react'
import { traerProductos } from '../products/products'
import ItemList from '../itemlist/ItemList'
import { Container } from 'react-bootstrap'



const ItemListContainer = (greetings) => {

    //ListaProductos como valor y setListaProductos lo cambia
     const [ListaProductos, setListaProductos] = useState([])

    useEffect(() => {
        traerProductos.then((res)=>{
            setListaProductos(res);

        }).catch((error)=>{
            console.error(error)
        })
        
    },[])

    return (

        <div>
            <h2 className='text-center'>{ greetings.titulo }</h2>
            <Container>
            {<ItemList productos={ListaProductos    } />}
            </Container>
            
        </div>
    )
}

export default ItemListContainer
