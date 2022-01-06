import React, {useState, useEffect} from 'react'
import { traerProductos } from './products'
import ItemList from './itemlist/ItemList'


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
            <ItemList productos={ListaProductos} />
        </div>
    )
}

export default ItemListContainer
