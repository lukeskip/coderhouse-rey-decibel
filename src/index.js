import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';


import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';

ReactDOM.render(
  <React.StrictMode>
    <NavBar/>
    <ItemListContainer greeting="Aqui va el prop ItemListContainer"></ItemListContainer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
