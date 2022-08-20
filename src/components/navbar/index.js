import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"


export default function Navbar(){
    return(
        <div className="navbar">
            <div className="img">                
            </div>
            <ul>
            <Link className="link" to='/'>Home</Link>
            <Link className="link" to='/novo-produto'>Adicionar produto</Link>
            </ul>
            {/* <div className="redes-sociais">
                    <img className="logoRedesSociais" src="https://logosmarcas.net/wp-content/uploads/2020/12/GitHub-Logo.png"></img>            
                    <img className="logoRedesSociais" src="https://cdn-icons-png.flaticon.com/512/145/145807.png"></img>
            </div> */}
        </div>

        
    )
}