import { useState,useEffect } from "react";
import { getItems } from "../api";
import ListItems from "./ListItems";
import '../css/products.css';
import { useParams } from "react-router-dom";

export default function ItemListContainer ({greetings}){
    const [itemsList,setItemsList] = useState([]);
    const { categoryName } = useParams();
    
    useEffect(() => {

      getItems(categoryName).then( snapshot => {
  
      const products = snapshot.docs.map((doc)=>{
  
       return {id:doc.id,...doc.data()}
  
      });
  
      setItemsList(products);
  
     }).catch(error => error);
  
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