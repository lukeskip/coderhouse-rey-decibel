import '../css/menu.css'

export default function   Menu(){
    return(
        <div className="main-menu">
            <img className='logo' src={require("../img/logo.png")} alt="" />
            <ul>
                <li><a href="#">Bajos</a></li>
                <li><a href="#">Guitarras</a></li>
                <li><a href="#">Baterías</a></li>
            </ul>
        </div>
        
        
    );
}