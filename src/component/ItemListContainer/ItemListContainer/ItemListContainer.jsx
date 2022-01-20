import React, {useState, useEffect} from 'react'
import { traerProductos } from '../products/products'
import ItemList from '../itemlist/ItemList'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'


const ItemListContainer = (greetings) => {

    //ListaProductos como valor y setListaProductos lo cambia
    const [ListaProductos, setListaProductos] = useState([]);
    const[Loading, setLoading] = useState(true);
    const {categoriaId}=useParams();


    useEffect(() => {
        if(categoriaId){
            traerProductos
            .then(answer => setListaProductos(answer.filter(product => product.category === categoriaId)))
            .finally(() => setLoading(false))
        }else{
            traerProductos
            .then(answer => setListaProductos(answer))
            .finally(() => setLoading(false))
        }
        
    }, [categoriaId]);



    return (

        <div>
            <h2 className='text-center'>{ greetings.titulo }</h2>
            <Container>
            {Loading ? <h2>Cargando</h2> : <ItemList productos={ListaProductos    } />}
            </Container>
            
        </div>
    )
}

export default ItemListContainer
