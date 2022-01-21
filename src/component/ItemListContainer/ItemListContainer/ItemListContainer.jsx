import React, {useState, useEffect} from 'react'
import { traerProductos } from '../products/products'
import ItemList from '../itemlist/ItemList'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import PacmanLoader from "react-spinners/PacmanLoader";
import { css } from "@emotion/react";

const override = css`
display: flex;
justify-content: center;
align-items: center;
margin-left:500px;
margin-top:250px;
margin: 2;
`;


const ItemListContainer = (greetings) => {

    //ListaProductos como valor y setListaProductos lo cambia
    const [ListaProductos, setListaProductos] = useState([]);
    const[Loading, setLoading] = useState(true);
    let color = ("#0D6EFD");
    const {categoriaId}=useParams();


    useEffect(() => {
        if(categoriaId){
            traerProductos
            .then(answer => setListaProductos(answer.filter(product => product.category === categoriaId)))
            .finally(() => setLoading(false))
        }else{
            traerProductos
            .then(answer => setListaProductos(answer))
            .finally(() => setLoading(false))
        }
        
    }, [categoriaId]);



    return (

        <div>
            <h2 className='text-center'>{ greetings.titulo }</h2>
            <Container>
            {Loading ? <PacmanLoader color={color} loading={Loading} css={override} size={70} /> : <ItemList productos={ListaProductos    } />}
            </Container>
            
        </div>
    )
}

export default ItemListContainer
