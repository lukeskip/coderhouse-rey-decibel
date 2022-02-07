
import { useState,useEffect } from "react";
import ItemDetailContainer from './ItemDetailContainer';
import { getItems } from "../api";
import ListItems from "./ListItems";
import '../css/product-detail.css';

export default function ItemListContainer ({greetings}){
    const [itemsList,setItemsList] = useState([]);
    
    useEffect(() => {
        getItems().then((items) => {
          setItemsList(items);
        }).catch((error) => {
          console.log(error);
        });
      }, []);

    return (
        
        <div className="product-list">
            {
                itemsList.length === 0 ? 
                <p>Cargando productos</p> :
                <ListItems items = {itemsList}></ListItems> 
            
            }

            
            
        </div>

        
        
    );

}