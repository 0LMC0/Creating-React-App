import './App.css';
import { BrowserRouter as Ruta, Route, Routes} from 'react-router-dom'
import ItemCount from './component/ItemListContainer/ItemCount/ItemCount';
import ItemListContainer from './component/ItemListContainer/ItemListContainer/ItemListContainer';
import NavBar from './component/Navbar/NavBar';
import Cart from './component/cart/Cart';
import { products } from './component/ItemListContainer/products/products';

function App() {
  return (
    //browserRoute as Ruta genera las rutas para todos los componentes asi es una SPA(Single Page App)
    <Ruta>
      <NavBar />
      {/* routes encierra el enrutado de los componentes */}
      <Routes>ç
        {/* y route ees la ruta a cada componente*/}
      <Route exact path='/' element={<ItemListContainer titulo="Este es el contenedor para el futuro catalogo" />}/>
       <Route exact path='/' element={<ItemCount minStock={1} maxStock={products.stock}/>}/>
       <Route exact path='/cart' element={<Cart />}/>
      </Routes> 
    </Ruta>
  );
}

export default App;
