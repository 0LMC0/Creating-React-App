import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { traerProductos } from '../ItemListContainer/products/products';
import ItemDetail from './itemDetail/ItemDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemDetailContainer = () => {
    const [Producto, setProducto] = useState({})
    const {id}=useParams()

    useEffect(() => {
        traerProductos
            .then(answer => setProducto(answer.find(product => product.id === parseInt(id))))
    }, [id])
    


    return (

        <div>
            <h2 className='text-center'>{ Producto.name }</h2>
    	        {<ItemDetail product={Producto} />}     
        </div>
    )
}

export default ItemDetailContainer