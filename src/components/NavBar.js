import '../css/nav-bar.css';
import CartWidget from './CartWidget.js';
import { Link } from 'react-router-dom';


export default function   NavBar(){
    return(
        <div className="main-menu">
            <Link to="/"><img className='logo' src={require("../img/logo.png")} alt="" /></Link>
            <ul>
            
                <li><Link to="/categoria/bajos"> Bajos</Link></li>
                <li><Link to="/categoria/guitarras">Guitarras</Link></li>
                <li><Link to="/categoria/pedales">Pedales</Link></li>
                <li><CartWidget /></li>
            </ul>
        </div>
        
        
    );
}