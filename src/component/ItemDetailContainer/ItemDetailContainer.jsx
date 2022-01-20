import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { products, traerProductos } from '../ItemListContainer/products/products';
import ItemDetail from './itemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [Producto, setProducto] = useState({})
    const {id}=useParams()

    useEffect((IdCategory) => {
        traerProductos
            .then(answer => setProducto(answer.filter(product => product.category ===IdCategory)))
    }, [id])
    


    return (

        <div>
            <h2 className='text-center'>{ products.name }</h2>
    	        {<ItemDetail product={Producto} />}     
        </div>
    )
}

export default ItemDetailContainer