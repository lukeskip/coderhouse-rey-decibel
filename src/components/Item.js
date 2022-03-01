
import { Link } from "react-router-dom";

export default function Item ({item,key}){
    return (
        <div className="product" id={key}>
            <Link to={`/producto/${item.id}`}>
                <div className="image" style={{ backgroundImage: `url(${item.image})` }}>
                
                </div>
                <h3 className="title">
                    {item.title}
                </h3>
            </Link>
        </div>
    );
}