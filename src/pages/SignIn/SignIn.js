import { useState, useContext } from 'react'
import './SignIn.css'
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logoIS.png'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import Context from '../../context'
import Swal from "sweetalert2"
const SignIn = () =>{
  const navigate = useNavigate();
  const { setLogged, setLoggedEmail, setLoggedId} = useContext(Context);
  const [contraseña, setContraseña] = useState("")
  const [correo, setCorreo] = useState("")


  const contraseñaChange = (e) =>{
      setContraseña(e.target.value)
  }
  const correoChange = (e) =>{
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
        console.log(error.code, error.message);
      });
  };
  

    return(
        <main class="form-signin w-60 m-auto">
   <form className='formInicioSesion'>
    <img class="mb-4 inicioSesionImg" src={logo} alt="Logo" width="72" height="57"/>
    <h1 class="h3 mb-3 fw-normal iniciaSesionTitle">Inicia Sesión</h1>
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput correo" onChange={correoChange} value={correo} name="correo" placeholder="name@example.com" />
      <label for="floatingInput">Correo Electronico</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword contraseña" onChange={contraseñaChange} value={contraseña} name="contraseña" placeholder="Password" />
      <label for="floatingPassword">Contraseña</label>
    </div>
    <button class="btn btn-primary w-100 py-2 my-4" type="submit" onClick={onSubmit}>Iniciar Sesión</button>
  </form>
</main>
    )
}

export default SignIn