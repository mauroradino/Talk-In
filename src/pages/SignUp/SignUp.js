import { useState } from "react"
import "./SignUp.css"
const SignUp = () => {
    const [contraseña, setContraseña] = useState("")
    const [correo, setCorreo] = useState("")

    const contraseñaChange = (e) =>{
        setContraseña(e.target.value)
    }
    const correoChange = (e) =>{
        setCorreo(e.target.value)
    }

    const onSubmit = (event) => {
        const usuario = {
            nombre:"",
            apellido:"",
            nacionalidad:"",
            correo: correo,
            contraseña: contraseña,
            idiomas:"",
        }


        event.preventDefault()
        console.log("mail: ", correo)
        console.log("contraseña: ", contraseña)
        console.log(usuario)
    }


    return(
        <main>
            <div className="UpDiv">
            <form className="form" id="form">
                <h2 className="registroTitle">Registro</h2>
                <input placeholder="Nombre" type="text" id="nombre" name="nombre"/>
                <input placeholder="Apellido" type="text" id="apellido" name="apellido" />
                <input placeholder="Nacionalidad" type="text" id="nacionalidad" name="nacionalidad" />
                <input placeholder="Correo Electronico" type="text" id="correo" onChange={correoChange} value={correo} name="correo" />
                <input placeholder="Contraseña" type="text" id="contraseña" onChange={contraseñaChange} value={contraseña} name="contraseña" />
                <input placeholder="Idiomas" type="text" id="idiomas" name="idiomas" />    
                <input className="inputImg" type="file" id="imagen" name="imagen" />
                <button className="registroBtn" onClick={onSubmit} type="submit">Enviar</button>
            </form>
            </div>
        </main>
    )
}

export default SignUp