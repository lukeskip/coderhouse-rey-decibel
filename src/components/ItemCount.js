import React, {useEffect, useState} from 'react';

export default function ItemCount({stock,initial}){

    const [counter,setCounter] = useState(initial);

    function add(){  
        if(stock > counter){
            setCounter (counter + 1);
        }
    }

    function subs(){
        if(counter > 0){
            setCounter (counter - 1);
        }
    }
    return(
        <div className="counterContainer">
            <button onClick={subs}>-</button>
            <div className="counter">
                {counter}
            </div>
            <button onClick={add}>+</button>
        </div>
    );
}