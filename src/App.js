import './App.css';
import { BrowserRouter as Ruta, Route, Routes} from 'react-router-dom'
import ItemListContainer from './component/ItemListContainer/ItemListContainer/ItemListContainer';
import NavBar from './component/Navbar/NavBar';
import Cart from './component/cart/Cart';
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    //browserRoute as Ruta genera las rutas para todos los componentes asi es una SPA(Single Page App)
    <Ruta>
      {/* <cartContext.Provider /> */}
      <NavBar />
      <Routes>
       <Route exact path='/' element={<ItemListContainer titulo="E-Commerce React.JS" />}/>
       <Route exact path='/category/:id' element={<ItemListContainer titulo="E-Commerce React.JS" />}/>
       <Route exact path='/Item/:id' element={<ItemDetailContainer/>}/>
       <Route exact path='/cart' element={<Cart />}/>
      </Routes> 
    </Ruta>
  );
}
export default App;
