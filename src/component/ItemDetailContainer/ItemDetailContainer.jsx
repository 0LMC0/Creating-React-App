import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { products, traerProductos } from '../ItemListContainer/products/products';
import ItemDetail from './itemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [Producto, setProducto] = useState({})
    const {id}=useParams

    useEffect(() => {
       const Producto = traerProductos.then(resp => (resp.find(products.id=== {id})))
       setProducto(Producto)
    },[])
    

    return (

        <div>
            <h2 className='text-center'>{ Producto.name }</h2>
    	        {<ItemDetail producto={Producto} />}     
        </div>
    )
}

export default ItemDetailContainer