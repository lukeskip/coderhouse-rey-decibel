import { useEffect,useState } from "react";
import { getItem } from "../api";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer ({key,title,image}){
    const [item,setItem] = useState([]);
    const { itemId } = useParams();
    useEffect(()=>{
        getItem(itemId).then(product => setItem(product))
        
    },[itemId])

    return (
        <div className="product-detail" id={key}>
            {
                item ? 
                <ItemDetail key="product" item={item}></ItemDetail>:
                "No existe el producto"
            }
            
        </div>
    );
}