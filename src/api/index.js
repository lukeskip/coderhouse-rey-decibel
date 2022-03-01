import {  getDocs, getDoc , collection, query, where, doc } from 'firebase/firestore';
import { db } from '../firebase-config';

// Función que va a llamar al Backend
function getItems(categoryName = false) {

  let itemsCollection;

  if(!categoryName){
   
   itemsCollection = collection(db,'products');

  }else{

   itemsCollection = query(collection(db,'products'),where('category','==',categoryName));

  }

  return getDocs(itemsCollection)

}



function getItem(id){
  const itemRef = doc(db,'products',id);
    return new Promise ((resolve,reject)=>{
      getDoc(itemRef)
      .then( snapshot => {
          if(snapshot.exists()){
            const product = {id:snapshot.id,...snapshot.data()}
            console.log(product);
            resolve( product ); 
          }else{
            reject("No existe el producto");
          }
        
      }).catch(error =>{
        reject(error);
      });
    })
  
}
// Exportar las funciones que necesito
export {
  getItems,
  getItem,
}
  