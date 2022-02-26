import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './itemDetail/ItemDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import PacmanLoader from "react-spinners/PacmanLoader";
import { css } from "@emotion/react";
import {doc, getDoc, getFirestore } from 'firebase/firestore'



const override = css`
display: flex;
justify-content: center;
align-items: center;
margin-left:500px;
margin-top:250px;
`;

const ItemDetailContainer = () => {
    const [Producto, setProducto] = useState({})
    const [Loading, setLoading] = useState(true)
    const {Id}=useParams()
    let color = ("#0D6EFD");

    useEffect(() => {
        //conexiom con la base de datos
        const dataBase = getFirestore();

        const queryProd = doc(dataBase, 'productos', Id)

        getDoc(queryProd)
        //promesa asi que se tiene que setear la respuesta
        .then(res => setProducto({id: res.id, ...res.data()}))
        .catch(err => err)
        .finally(() =>setLoading(false))
                
            }, [Id]);
    return (
        
        <div>
            <h2 className='text-center display-1 mb-5'>{ Producto.marca }</h2>
    	        {Loading ? <PacmanLoader color={color} loading={Loading} css={override} size={70} /> :  <ItemDetail product={Producto} />}     
        </div>
    )
}

export default ItemDetailContainer