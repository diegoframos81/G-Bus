
import'./Card.css'
import FotoPerfil from './perfil 1.svg'
function Card(){
    return(
        
        <body className='card'>
            <div className='card1'>
                <img className='foto' src= {FotoPerfil} alt='foto perfil'/>
                <h1 className="Nome">Luciano Lucas</h1>
                <h2 className="NomeFaculdade">Uninassau</h2>
            
            </div>  
        </body>
            
    )
}
export default Card