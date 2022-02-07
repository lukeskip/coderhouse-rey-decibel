import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
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
        </Routes>
        
      </main>
    </div>
  );
}

export default App;
