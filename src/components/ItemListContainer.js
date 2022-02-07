
import { useState,useEffect } from "react";
import ItemDetailContainer from './ItemDetailContainer';
import { getItems } from "../api";

export default function ItemListContainer ({greetings}){
    const [itemsList,setItemsList] = useState();
    
    useEffect(() => {
        // En el montaje del componente voy a traer los productos del archivo api
        getItems().then((items) => {
          setItemsList(items);
          console.log(itemsList);
        }).catch((error) => {
          console.log(error);
        });
      }, []);

    return (
        
        <div className="product-list">
            {
               itemsList.map(function(item){
                   <ItemDetailContainer title={item.title}/>
               })
            }
            
        </div>

        
        
    );

}