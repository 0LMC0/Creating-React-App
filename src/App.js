import './App.css';
import ItemCount from './component/ItemListContainer/itemcount';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import NavBar from './component/Navbar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
        <ItemListContainer titulo="Este es el contenedor para el futuro catalogo" />
      <ItemCount minStock={1} maxStock={5}/>
    </div>
  );
}

export default App;
