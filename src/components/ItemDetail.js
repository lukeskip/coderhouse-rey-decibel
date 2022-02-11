import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom";

export default function ItemDetail({item}){
    const [itemCount,SetItemCount] = useState(0);
    function onAddItem (count) {
        SetItemCount(count);
        
    };
    useEffect(()=>{
        console.log(itemCount);
    },[itemCount])
    return(
        <div className="product-detail">
            <div className="image">
                <img src={item.image} alt="" />
            </div>
            <div className="description">
                <h1>{item.title}</h1>
                <div className="price">${item.price}</div>
                {
                    !itemCount ? 
                    <ItemCount stock={5} initial={0} onAddItem={onAddItem}></ItemCount> :
                    <Link className="button" to="/cart">Ir al carrito</Link>
                }
                
                
            </div>
        </div>
    )
}