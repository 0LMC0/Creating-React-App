
import Item from '../item/Item.jsx'
import { memo } from 'react';

const ItemList = memo( ({ productos }) => {
     return (
       <div className='d-flex flex-wrap justify-content-around'>
         {productos.map((producto) => {
           return <Item key={producto.id} product={producto}></Item>;
         })}
       </div>
     );
   }
   )

  export default ItemList;

 