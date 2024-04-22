import './Navbar.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import LogoTI from '../../assets/LogoTI.png'
import profileImg from "../../assets/profileImage.png"
import logout from "../../assets/logout.png"
import { getAuth, signOut } from "firebase/auth";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../../context';
const Navbar = () =>{
  const { logged } = useContext(Context);
  const auth = getAuth()

  const logoutCuenta = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      console.error("Error en Logout", error);
    });
  }

    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <img className='logo' src={LogoTI} width="80px" alt='logo'/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                 <Link className="nav-link" aria-current="page" to="/">INICIO</Link>
                </li>
                {
                logged === false ? <li className="nav-item"><Link className="nav-link navSobre" to="/">¿QUE ES TALK-IN?</Link></li> : null
                }
                {
                 logged === true ?<li className="nav-item"> <Link className="nav-link navSobre" to="/Chat">CHAT</Link> </li> : null 
                }
                {
                 logged === true ?<li className="nav-item"> <Link className="nav-link navSobre" to="/Conectar">CONECTAR</Link> </li> : null 
                }
              </ul>
      <form className="d-flex" role="search">
      {logged === false ? (
    <>
    <Link className='btn btn-outline-success' to="/InicioSesion">Iniciar Sesion</Link>
    <Link className='btn2 btn-outline-success2' to="/Registro">Registrate</Link>
     </>
    ) : <><button className='buttonLogout'><img src={logout} onClick={logoutCuenta} width="30px" alt='logout logo'/></button><Link to="/Perfil"><img alt='imagen de perfil' src={profileImg} width="50px"/></Link></>}
            

      </form>
    </div>
  </div>
</nav>
    )
}

export default Navbar