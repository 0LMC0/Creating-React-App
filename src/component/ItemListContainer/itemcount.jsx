import React , {useState} from 'react'

const ItemCount = ({minStock, maxStock}) => {

const [counter, setCounter] = useState(minStock)

//funcion para incrementar el valor
    const handleIncrement = ()=> {
        //prev => prev toma el valor anteior y lo modifica por uno nuevo
        counter < maxStock ? setCounter(prev => prev + 1) : alert('Stock maximo alcanzado')
    }
//funcion para decrementar el valor
    const handleDecrement= ()=> {
        counter > minStock ? setCounter(prev => prev - 1) : alert('Cantidad minima de compra')
    }

    const reset = ()=>{
        setCounter(minStock)
    }

    return (
        <div className='counter'>
            
            <h1>{ counter } </h1>

            <button className='m-2' onClick={handleDecrement}>-</button>
            <button className='m-3' onClick={reset} >Agregar al carrito</button>
            <button className='m-2' onClick={handleIncrement}>+</button>
        </div>
    )
}

export default ItemCount
