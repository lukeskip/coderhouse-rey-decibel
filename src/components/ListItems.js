import Item from "./Item"
export default function ListItems({items}){
    return (
      items.map((item)=>(
          <Item key={item.id} title={item.title} image={item.image} ></Item>
      ))  
    );

}