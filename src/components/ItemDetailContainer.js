import { useEffect,useState } from "react";
import { getItems } from "../api";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer ({key,title,image}){
    const [item,setItem] = useState([]);
    const { itemId } = useParams();
    useEffect(()=>{
        getItems().then((items)=>{
            const item = items.find((i)=> i.id.toString() === itemId)
            setItem(item);
        }).catch((error)=>{
            console.log(error)
        })
    },[itemId])
    return (
        <div className="product-detail" id={key}>
            <ItemDetail key="product" item={item}></ItemDetail>
        </div>
    );
}