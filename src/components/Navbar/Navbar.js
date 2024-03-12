import './Navbar.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import LogoTI from '../../assets/LogoTI.png'
import profileImg from "../../assets/profileImage.png"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../../context';
const Navbar = () =>{
  const { logged } = useContext(Context);
    return(
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <img className='logo' src={LogoTI} width="80px" alt='logo'/>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                 <Link class="nav-link" aria-current="page" to="/">INICIO</Link>
                </li>
                <li class="nav-item">
                 <Link class="nav-link navSobre" to="/">¿QUE ES TALK-IN?</Link>
                </li>
                {
                 logged === true ?<li class="nav-item"> <Link class="nav-link navSobre" to="/Chat">CHAT</Link> </li> : null 
                }
                {
                 logged === true ?<li class="nav-item"> <Link class="nav-link navSobre" to="/Conectar">CONECTAR</Link> </li> : null 
                }
              </ul>
      <form class="d-flex" role="search">
      {logged === false ? (
    <>
    <Link className='btn btn-outline-success' to="/InicioSesion">Iniciar Sesion</Link>
    <Link className='btn2 btn-outline-success2' to="/Registro">Registrate</Link>
     </>
    ) : <Link to="/Perfil"><img alt='imagen de perfil' src={profileImg} width="50px"/></Link>}
        

      </form>
    </div>
  </div>
</nav>
    )
}

export default Navbar