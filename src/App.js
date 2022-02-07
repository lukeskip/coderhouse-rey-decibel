import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <div className="container">
      <header >
        <NavBar/>
      </header>
      <main>
        <ItemListContainer greetings="Aqui va el prop ItemListContainer"></ItemListContainer>
      </main>
    </div>
  );
}

export default App;
