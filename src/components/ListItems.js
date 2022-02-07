import Item from "./Item"
export default function ListItems({items}){
    return (
      items.map((item)=>(
          <Item item={item} ></Item>
      ))  
    );

}