import { useState, useContext } from "react"
import Swal from "sweetalert2"
import "./SignUp.css"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { collection, addDoc } from "firebase/firestore";
import { auth } from "../../firebase"
import { db } from "../../firebase"
import Context from '../../context';
import { useNavigate } from "react-router-dom";
let arrayIdiomas = []
let seleccionIdiomas = "";

const SignUp = () => {
    const navigate = useNavigate()
    const {setLoggedNombre, setLoggedApellido, setLoggedNacionalidad, setLoggedIdiomas, setLoggedEmail} = useContext(Context)
    const [contraseña, setContraseña] = useState("")
    const [correo, setCorreo] = useState("")
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [nacionalidad, setNacionalidad] = useState("")
    const [idiomas, setIdiomas] = useState([])
    const contraseñaChange = (e) =>{
        setContraseña(e.target.value)
    }
    const correoChange = (e) =>{
        setCorreo(e.target.value)
    }
    const nombreChange = (e) =>{
        setNombre(e.target.value)
    }
    const apellidoChange = (e) =>{
        setApellido(e.target.value)
    }
    const nacionalidadChange = (e) =>{
        setNacionalidad(e.target.value)
    }
    const idiomasChange = (e) => {
        arrayIdiomas.push(e.target.value)
        setIdiomas(arrayIdiomas)
        seleccionIdiomas = idiomas.length === 0 ? "Selecciona al menos una opción" : idiomas.join(', ')
        console.log(arrayIdiomas)
      };
    
    const onSubmit = async (event) => {
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
                console.log(user);

                await addDoc(collection(db, 'Usuarios'), {
                    nombre: nombre,
                    apellido: apellido,
                    correo: correo,
                    nacionalidad: nacionalidad,
                    idiomas: idiomas,
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
    


    return(
        <main>
            <div className="UpDiv">
            <form className="form" id="form">
                <h2 className="registroTitle">Registro</h2>
                <input placeholder="Nombre" type="text" id="nombre" onChange={nombreChange} name="nombre"/>
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
                <input className="inputImg" type="file" id="imagen" name="imagen" />
                <button className="registroBtn" onClick={onSubmit} type="submit">Enviar</button>
            </form>
            </div>
        </main>
    )
}


export default SignUp