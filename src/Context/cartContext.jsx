import { useContext } from "react";
import { createContext, useState } from "react";

//creacion del contexto
const cartContext = createContext([]);

//funcion para no estar haciendo doble importacion de el contexto
//osea que el useContext ya esta pasado aca adentro y solamente habria que llamar a la funcion haciendo
export function useCartContext (){
    return useContext(cartContext)
}

//creacion dl componente de contexto
export const CartContextProvider = ({ children }) =>{
    //estados y funciones globales
    const [CartList, setCartList] = useState([]);



    //funcion que agrega los items al carrito sin sacar los anteriores
    function AgregarAlCarrito(items) {   
        setCartList([ ...CartList, items ]) 
    }

    function borrarItem (id) {
        const newCart = CartList.filter((items) => items.id !== id)
        setCartList([ ...newCart ])
    }


    //funcion de setear a objeto vacio el carrito osea sin productos
    function vaciarCarrito (){
        setCartList([]);
    }
    

    const nCantidad = Object.values(CartList).reduce(( acc, {cantidad}) => acc + cantidad, 0)
    const nPrecio = Object.values(CartList).reduce(( acc, {cantidad, price}) => acc + cantidad * price, 0)

    //se retorna la creacion de contexto y de value todos los estados y funciones que yo quiero que sean globales a los children en app.js
    return(
        <cartContext.Provider value={{
            CartList,
            AgregarAlCarrito,
            vaciarCarrito,
            useCartContext,
            borrarItem,
            nPrecio,
            nCantidad
        }} >
            { children }
        </cartContext.Provider>
    )
}

