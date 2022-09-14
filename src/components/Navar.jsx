import React from "react";
import '../styles/Navar.css'
function Navar()  {
    return(
        <nav>
            <ul>
                <img  img className="logo-amazon" src="../../assets/icons/Amazon_logo.svg" alt=""></img>
                <li>Inicio</li>
                <li>Tienda</li>
                <li>Canales</li>
                <li>Categorias <span>v</span></li>
                <li>Mi espacio</li>
            </ul>
            <ul>
                <li>lupa</li>
                <li>username</li>
            </ul>
        </nav>
    )
}

export default Navar;