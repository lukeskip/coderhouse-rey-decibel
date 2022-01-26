import '../css/nav-bar.css';
import CartWidget from './CartWidget.js';

export default function   NavBar(){
    return(
        <div className="main-menu">
            <img className='logo' src={require("../img/logo.png")} alt="" />
            <ul>
                <li><a href="/">Bajos</a></li>
                <li><a href="/">Guitarras</a></li>
                <li><a href="/">Baterías</a></li>
                <li><CartWidget /></li>
            </ul>
        </div>
        
        
    );
}