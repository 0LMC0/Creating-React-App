import React, {useState, useEffect} from 'react'
import ItemList from '../itemlist/ItemList'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import PacmanLoader from "react-spinners/PacmanLoader";
import { css } from "@emotion/react";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const override = css`
display: flex;
justify-content: center;
align-items: center;
margin-left:500px;
margin-top:250px;
`;

const ItemListContainer = (greetings) => {

    //ListaProductos como valor y setListaProductos lo cambia
    const [ListaProductos, setListaProductos] = useState([]);
    const[Loading, setLoading] = useState(true);
    let color = ("#0D6EFD");
    const {categoriaId}=useParams();


    useEffect(() => {
        //conexiom con la base de datos
        const dataBase = getFirestore();

        // //funcion por si quiero traer solo un elemento de la coleccion
        // const queryProd = doc(dataBase, 'productos', '7VbkSA2ZCVmxO4L3wxLI')

        // //funcion que trae a un solo elemento de la coleccion
        // getDoc(queryProd)
        // //promesa asi que se tiene que setear la respuesta
        // .then(res => setListaProductos({id: res.id, ...res.data()}))

        

        const queryCollection = (categoriaId) ? query(collection(dataBase, 'productos'), where('category', '==', categoriaId)) : query(collection(dataBase, 'productos'))

        getDocs(queryCollection)
        .then(res => setListaProductos(res.docs.map(prod => ({id: prod.id, ...prod.data()}) ) ) )
        .catch(err => err)
        .finally(() =>setLoading(false))
                
            }, [categoriaId]);
            
            
            return (
                
                <div>
            <h2 className='text-center'>{ greetings.titulo }</h2>
            <Container>
            {Loading ? <PacmanLoader color={color} loading={Loading} css={override} size={70} /> : <ItemList productos={ListaProductos   } />}
            </Container>
            
        </div>
    )
}

export default ItemListContainer

