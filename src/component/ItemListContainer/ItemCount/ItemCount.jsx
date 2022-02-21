import React , {useState} from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'


const ItemCount = ({stock, onAdd}) => {

const [counter, setCounter] = useState(1)

//funcion para incrementar el valor
    const handleIncrement = ()=> {
        //prev => prev toma el valor anteior y lo modifica por uno nuevo
        counter < stock ? setCounter(prev => prev + 1) : alert('Stock maximo alcanzado')
    }
//funcion para decrementar el valor
    const handleDecrement= ()=> {
        counter > 1 ? setCounter(prev => prev - 1) : alert('Cantidad minima de compra')
    }

    return (
        <div>
            <div className="row">
                <div className="d-flex flex-row">
                <button className='m-2 btn btn-secondary ' onClick={handleDecrement}><AiOutlineMinus /></button>
                <p className='h1 mx-4'>{ counter } </p>
                <button className='m-2 btn btn-dark'  onClick={handleIncrement}><AiOutlinePlus /></button>
                </div>
            </div>
            <div className="row">

            <button className='mt-3 btn btn-primary' onClick={() => onAdd(counter)} >Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount

//exporta a ItemListcontainer