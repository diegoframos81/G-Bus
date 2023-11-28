import "./Navbar.css"
import {default as expandMore} from "./icons/expand_more.png"

function Navbar() {

    return (
      <nav id="navbar">
            <h1>
                <span>G-bus</span>
            </h1>
            <h2>
                <a href="">Inicio</a>
            </h2>
            <h2>
                <a href="">Perfil</a>
            </h2>
            <h2>
                <a href="">Documentos</a>
            </h2>
            <h2>
                <span>Luciano Lucas</span>
            </h2>   
            <span><img src={expandMore} alt="" /></span>  
      </nav>
    )
  }
  
  export default Navbar
  