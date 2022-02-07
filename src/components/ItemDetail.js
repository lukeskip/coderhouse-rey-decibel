export default function ItemDetail({item}){
    return(
        <div>
            <div className="image">
                <img src={item.image} alt="" />
            </div>
            <div className="description">
                <h1>{item.title}</h1>
                <div className="price">${item.price}</div>
                <button>Agregar al carrito</button>
            </div>
        </div>
    )
}