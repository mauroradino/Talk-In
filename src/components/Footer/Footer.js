import "bootstrap/dist/css/bootstrap.min.css";
import './Footer.css'
import { Link } from "react-router-dom";
import logoBlanco from '../../assets/logoBlanco.png'
const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
      <p className="col-md-4 mb-0">© 2024 Talk-In</p>

      <Link href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <img src={logoBlanco} className="bi me-2" width="50" height="40" alt="logo" />
      </Link>

      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item"><Link href="#" className="nav-link px-2">Inicio</Link></li>
        <li className="nav-item"><Link href="#" className="nav-link px-2">SobreTalk</Link></li>
      </ul>
    </footer>
  );

}

export default Footer;