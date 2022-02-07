
import { useState,useEffect } from "react";
import ItemDetailContainer from './ItemDetailContainer';
import { getItems } from "../api";
import ListItems from "./ListItems";
import '../css/product-detail.css';
import { useParams } from "react-router-dom";

export default function ItemListContainer ({greetings}){
    const [itemsList,setItemsList] = useState([]);
    const { categoryName } = useParams();
    
    useEffect(() => {
        getItems().then((items) => {
          if(!categoryName){
            setItemsList(items);
          }else{
            const filterItems = items.filter((item)=> {
              return item.category === categoryName
            });
            setItemsList(filterItems);
          }
          
        }).catch((error) => {
          console.log(error);
        });
      }, [categoryName]);

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