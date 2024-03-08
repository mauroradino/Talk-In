import './SignIn.css'
import logo from '../../assets/logoIS.png'

const SignIn = () =>{
    return(
        <main class="form-signin w-60 m-auto">
   <form className='formInicioSesion'>
    <img class="mb-4 inicioSesionImg" src={logo} alt="Logo" width="72" height="57"/>
    <h1 class="h3 mb-3 fw-normal iniciaSesionTitle">Inicia Sesión</h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
      <label for="floatingInput">Correo Electronico</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
      <label for="floatingPassword">Contraseña</label>
    </div>
    <button class="btn btn-primary w-100 py-2 my-4" type="submit">Iniciar Sesión</button>
  </form>
</main>
    )
}

export default SignIn