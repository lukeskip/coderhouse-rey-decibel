import ItemCount from './ItemCount';

export default function  ItemListContainer({greeting}){
    return(
        <div className="item-list-container">
           {greeting}
           <ItemCount stock={10} initial={1}/>
        </div>
        
        
    );
}