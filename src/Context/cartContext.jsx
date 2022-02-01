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
    const data = new Set(CartList);

        setCartList([ ...data, items ])
    }

    console.log(CartList)

    //funcion de setear a objeto vacio el carrito osea sin productos
    function vaciarCarrito (){
        setCartList([]);
    }

    //se retorna la creacion de contexto y de value todos los estados y funciones que yo quiero que sean globales a los children en app.js
    return(
        <cartContext.Provider value={{
            CartList,
            AgregarAlCarrito,
            vaciarCarrito,
            useCartContext
        }} >
            { children }
        </cartContext.Provider>
    )
}

