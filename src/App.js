import './App.css';
import { BrowserRouter as Ruta, Route, Routes} from 'react-router-dom'
import ItemListContainer from './component/ItemListContainer/ItemListContainer/ItemListContainer';
import NavBar from './component/Navbar/NavBar';
import Cart from './component/cart/Cart';

function App() {
  return (
    //browserRoute as Ruta genera las rutas para todos los componentes asi es una SPA(Single Page App)
    <Ruta>
      <NavBar />
      {/* routes encierra el enrutado de los componentes */}
      <Routes>
        {/* y route ees la ruta a cada componente*/}
       <Route exact path='/' element={<ItemListContainer titulo="E-Commerce React.JS" />}/>
       <Route exact path='/Item/:id' element={<ItemListContainer titulo="E-Commerce React.JS" />}/>
       <Route exact path='/cart' element={<Cart />}/>
      </Routes> 
    </Ruta>
  );
}
export default App;
