import './css/app.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from "./components/Cart"
import { Routes,Route } from 'react-router-dom';
import CartContextProvider from './contexts/CartContext';




function App() {

  return (
    
    <CartContextProvider>
    <div className="container">
      <header >
        <NavBar/>
      </header>
      <main>

        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/producto/:itemId" element={<ItemDetailContainer />}/>
          <Route path="/categoria/:categoryName" element={<ItemListContainer/>}/>
          <Route path="/carrito" element={<Cart/>}/>
        </Routes>
        
      </main>
    </div>
    </CartContextProvider>
  );
}

export default App;
