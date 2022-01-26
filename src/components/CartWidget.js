import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';

export default function  CartWidget(){
    return(
        <div className="cart-widget">
           <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> 4
        </div>
        
        
    );
}