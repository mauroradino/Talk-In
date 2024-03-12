import Context from '../../context'
import './Profile.css'
import { useContext } from 'react'
const Profile = () =>{
  const { loggedEmail, loggedNombre, loggedApellido, loggedNacionalidad, loggedIdiomas, loggedImagen } = useContext(Context)
    return(
        <main>
        <div className='infoDiv'>
         <img class="inicioSesionImg" src={loggedImagen} alt="Foto de perfil" width="72" height="57"/>
         <h1 class="infoPerfilTitle">Información del Perfil</h1>
         <div className="divContenidoInfo">
           <p className='textoInfo'><b>Correo:</b> {loggedEmail}</p>
           <p className='textoInfo'><b>Nombre:</b> {loggedNombre}</p>
           <p className='textoInfo'><b>Apellido:</b> {loggedApellido}</p>
           <p className='textoInfo'><b>Nacionalidad:</b> {loggedNacionalidad}</p>
           <p className='textoInfo'><b>Idiomas:</b> {loggedIdiomas}</p>
          </div> 
       </div>
     </main>
    )
}

export default Profile