import "bootstrap/dist/css/bootstrap.min.css";
import './Footer.css'
import logoBlanco from '../../assets/logoBlanco.png'
const Footer = () =>{
    return(
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
    <p class="col-md-4 mb-0">© 2024 Talk-In</p>

    <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <img src={logoBlanco} class="bi me-2" width="50" height="40" alt="logo"/>
    </a>

    <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item"><a href="#" class="nav-link px-2">Inicio</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2">SobreTalk</a></li>
    </ul>
  </footer>
    )
}

export default Footer;