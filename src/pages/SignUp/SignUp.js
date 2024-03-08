import "./SignUp.css"
const SignUp = () => {
    return(
        <main>
            <div className="UpDiv">
            <form className="form" id="form">
                <h2 className="registroTitle">Registro</h2>
                <input placeholder="Nombre" type="text" id="nombre" name="nombre"/>
                <input placeholder="Apellido" type="text" id="apellido" name="apellido" />
                <input placeholder="Nacionalidad" type="text" id="nacionalidad" name="nacionalidad" />
                <input placeholder="Idiomas" type="text" id="idiomas" name="idiomas" />    
                <input className="inputImg" type="file" id="imagen" name="imagen" />
                <button className="registroBtn" type="submit">Enviar</button>
            </form>
            </div>
        </main>
    )
}

export default SignUp