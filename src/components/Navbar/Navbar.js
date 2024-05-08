import './Navbar.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import LogoTI from '../../assets/LogoTI.png'
import profileImg from "../../assets/profileImage.png"
import logout from "../../assets/logout.png"
import { getAuth, signOut } from "firebase/auth";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { db } from "../../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { useContext, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'
import Context from '../../context';
import Swal from "sweetalert2"
let arrayIdiomas = []
let seleccionIdiomas = "";

const Navbar = () => {
  const { logged } = useContext(Context);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const auth = getAuth()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const nombreChange = (e) => {
    setNombre(e.target.value)
  }
  const apellidoChange = (e) => {
    setApellido(e.target.value)
  }
  const nacionalidadChange = (e) => {
    setNacionalidad(e.target.value)
  }
  const idiomasChange = (e) => {
    arrayIdiomas.push(e.target.value)
    setIdiomas(arrayIdiomas)
    seleccionIdiomas = idiomas.length === 0 ? "Selecciona al menos una opción" : idiomas.join(', ')
  };



  const logoutCuenta = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      console.error("Error en Logout", error);
    });
  }
  const navigate = useNavigate();
  const { setLogged, setLoggedEmail } = useContext(Context);
  const { setLoggedNombre, setLoggedApellido, setLoggedNacionalidad, setLoggedIdiomas } = useContext(Context)
  const [contraseña, setContraseña] = useState("")
  const [correo, setCorreo] = useState("")
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [nacionalidad, setNacionalidad] = useState("")
  const [idiomas, setIdiomas] = useState([])


  const contraseñaChange = (e) => {
    setContraseña(e.target.value)
  }
  const correoChange = (e) => {
    setCorreo(e.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault(); // Es buena práctica llamar esto al principio para evitar efectos secundarios inesperados.
    signInWithEmailAndPassword(auth, correo, contraseña)
      .then((userCredential) => {
        setLogged(true);
        setLoggedEmail(correo);
        Swal.fire({
          title: "Sesión Iniciada",
          text: "Bienvenido/a",
          icon: "success",
        });
        navigate("/"); // Navegar después de actualizar el estado
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error"
        });
        console.log(error.code, error.message);
      });
    setShow(false);
  };


  const onSubmit2 = async (event) => {
    setLoggedApellido(apellido)
    setLoggedEmail(correo)
    setLoggedNombre(nombre)
    setLoggedNacionalidad(nacionalidad)
    setLoggedIdiomas(idiomas)
    event.preventDefault();


    if (correo && contraseña && nombre && apellido && nacionalidad && idiomas) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, correo, contraseña);
        const user = userCredential.user;
        await addDoc(collection(db, 'Usuarios'), {
          nombre: nombre,
          apellido: apellido,
          correo: correo,
          nacionalidad: nacionalidad,
          idiomas: idiomas,
          fotoURL: "",
          conversaciones: {
            conversacion1: [],
            conversacion2: [],
            conversacion3: [],
            conversacion4: []
          }
        });
        Swal.fire({
          title: "Usuario Registrado",
          text: "Ya podes Iniciar Sesión!",
          icon: "success"
        });
        navigate("/")
      } catch (error) {
        console.log(error.code, error.message);
        Swal.fire({
          icon: "error",
          title: "Error al registrarte",
          text: error.message,
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Error al registrarte",
        text: "Completa todos los campos",
      });
    }
  }



  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="iniciaSesionTitle">Iniciar Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput correo" onChange={correoChange} value={correo} name="correo" placeholder="name@example.com" />
            <label for="floatingInput">Correo Electronico</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword contraseña" onChange={contraseñaChange} value={contraseña} name="contraseña" placeholder="Password" />
            <label for="floatingPassword">Contraseña</label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" type='submit' onClick={onSubmit}>
            Iniciar Sesión
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Registrate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input placeholder="Nombre" type="text" id="nombre" onChange={nombreChange} name="nombre" />
          <input placeholder="Apellido" type="text" id="apellido" onChange={apellidoChange} name="apellido" />
          <input placeholder="Nacionalidad" type="text" id="nacionalidad" onChange={nacionalidadChange} name="nacionalidad" />
          <input placeholder="Correo Electronico" type="text" id="correo" onChange={correoChange} value={correo} name="correo" />
          <input placeholder="Contraseña" type="text" id="contraseña" onChange={contraseñaChange} value={contraseña} name="contraseña" />
          <select value={idiomas} onChange={idiomasChange} multiple>
            <option value="">Selecciona un idioma</option>
            <option value="Español">Español</option>
            <option value="Ingles">Inglés</option>
            <option value="Aleman">Alemán</option>
            <option value="Frances">Francés</option>
            <option value="Ruso">Ruso</option>
            <option value="Chino">Chino</option>
            <option value="Italiano">Italiano</option>
            <option value="Sueco">Sueco</option>
          </select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>Cerrar</Button>
          <Button variant="primary" onClick={onSubmit2}>Registrarse</Button>
        </Modal.Footer>
      </Modal>

      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img className='logo' src={LogoTI} width="80px" alt='logo' />
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
                logged === true ? <li className="nav-item"> <Link className="nav-link navSobre" to="/Chat">CHAT</Link> </li> : null
              }
              {
                logged === true ? <li className="nav-item"> <Link className="nav-link navSobre" to="/Conectar">CONECTAR</Link> </li> : null
              }
            </ul>
            <form className="d-flex" role="search">
              {logged === false ? (
                <>
                  <Button className='btn btn-outline-success' variant="primary" onClick={handleShow}>Iniciar Sesión</Button>
                  <Button className='btn btn-outline-success2' variant="primary" onClick={handleShow2}>Registrate</Button>
                </>
              ) : <><button className='buttonLogout'><img src={logout} onClick={logoutCuenta} width="30px" alt='logout logo' /></button><Link to="/Perfil"><img alt='imagen de perfil' src={profileImg} width="50px" /></Link></>}

            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar