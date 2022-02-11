import './css/app.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from "./components/Cart"
import { Routes,Route } from 'react-router-dom';



function App() {
  return (
    <div className="container">
      <header >
        <NavBar/>
      </header>
      <main>

        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/producto/:itemId" element={<ItemDetailContainer />}/>
          <Route path="/categoria/:categoryName" element={<ItemListContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        
      </main>
    </div>
  );
}

export default App;
