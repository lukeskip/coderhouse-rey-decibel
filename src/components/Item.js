
import { Link } from "react-router-dom";

export default function Item ({item}){
    return (
        <div className="product" id={item.id}>
            <Link to={`/producto/${item.id}`}>
                <div className="image" style={{ backgroundImage: `url(${item.image})` }}>
                
                </div>
                <h3 className="title">
                    {item.title}
                </h3>
                <button>Agregar al carrito</button>
            </Link>
        </div>
    );
}