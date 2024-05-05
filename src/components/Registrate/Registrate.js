import "./Registrate.css"
import { Link } from "react-router-dom"

const Registrate = () => {
    return (
        <div className="registrateDiv">
            <h2 className="textoRegistrate">Registrate ahora y empezá a aprender!</h2>
            <Link className='btnRegistro2 btn-outline-success2' to="/Registro">Registrate</Link>
        </div>
    )
}

export default Registrate