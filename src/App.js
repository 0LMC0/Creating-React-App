import './App.css';
import { BrowserRouter as Ruta, Route, Routes} from 'react-router-dom'
import ItemListContainer from './component/ItemListContainer/ItemListContainer/ItemListContainer';
import NavBar from './component/Navbar/NavBar';
import Cart from './component/cart/Cart';
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './Context/cartContext';





function App() {
  return (
    //browserRoute as Ruta genera las rutas para todos los componentes asi es una SPA(Single Page App)
      <CartContextProvider>
        <Ruta>
          <NavBar />
            <Routes>
              <Route exact path='/' element={<ItemListContainer titulo="E-Commerce React.JS by Lautaro Caceres" />}/>
              <Route exact path='/category/:categoriaId' element={<ItemListContainer titulo="Resultados filtrados por categoria" />}/>
              <Route exact path='/Item/:Id' element={<ItemDetailContainer/>}/>
              <Route exact path='/cart' element={<Cart />}/>
            </Routes> 
        </Ruta>
      </CartContextProvider>
  

      
  );
}
export default App;
