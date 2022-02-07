

export default function Item ({key,title,image}){
    return (
        <div className="product" id={key}>
            <div className="image" style={{ backgroundImage: `url(${image})` }}>
              
            </div>
            <h3 className="title">
                {title}
            </h3>
            <button>Agregar al carrito</button>
        </div>
    );
}