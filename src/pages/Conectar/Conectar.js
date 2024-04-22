import { useState } from "react"
import "./Conectar.css"
import conectarJSON from "../../conectar.json"
import fotoUsuario from "../../assets/profileImage.png"
import argentinaImg from "../../assets/argentina.png"
import alemaniaImg from "../../assets/alemania.png"
import australiaImg from "../../assets/australia.png"
import brasilImg from "../../assets/brasil.png"
import belgicaImg from "../../assets/belgica.png"
import austriaImg from "../../assets/austria.png"
import colombiaImg from "../../assets/colombia.png"
import dinamarcaImg from "../../assets/dinamarca.png"
import canadaImg from "../../assets/canada.png"


const Conectar = () => {
    const [argentina, setArgentina] = useState(false)
    const [alemania, setAlemania] = useState(false)
    const [australia, setAustralia] = useState(false)
    const [austria, setAustria] = useState(false)
    const [brasil, setBrasil] = useState(false)
    const [belgica, setBelgica] = useState(false)
    const [canada, setCanada] = useState(false)
    const [colombia, setColombia] = useState(false)
    const [dinamarca, setDinamarca] = useState(false)

    const argentinaChange = () => {
        setArgentina(!argentina)
    }

    const alemaniaChange = () => {
        setAlemania(!alemania)
    }
    const australiaChange = () => {
        setAustralia(!australia)
    }

    const austriaChange = () => {
        setAustria(!austria)
    }
    const brasilChange = () => {
        setBrasil(!brasil)
    }
    const belgicaChange = () => {
        setBelgica(!belgica)
    }
    const canadaChange = () => {
        setCanada(!canada)
    }
    const colombiaChange = () => {
        setColombia(!colombia)
    }
    const dinamarcaChange = () => {
        setDinamarca(!dinamarca)
    }

    const mostrarPersonas = !argentina && !alemania && !australia && !austria && !brasil && !belgica && !canada && !colombia && !dinamarca;
    const banderas = {
        argentina: argentinaImg,
        alemania: alemaniaImg,
        australia: australiaImg,
        austria: austriaImg,
        brasil: brasilImg,
        belgica: belgicaImg,
        canada: canadaImg,
        colombia: colombiaImg,
        dinamarca: dinamarcaImg,
    };


    return (
        <div className="divConectar">
            <div>
                <input type="text" id="buscador" placeholder="Busca por Nombre" />
                <div className="filtro">Argentina<input type="checkbox" onChange={argentinaChange} id="filtroArgentina" /></div>
                <div className="filtro">Alemania<input type="checkbox" onChange={alemaniaChange} id="filtroAlemania" /></div>
                <div className="filtro">Australia<input type="checkbox" onChange={australiaChange} id="filtroAustralia" /></div>
                <div className="filtro">Austria<input type="checkbox" onChange={austriaChange} id="filtroAustria" /></div>
                <div className="filtro">Brasil<input type="checkbox" onChange={brasilChange} id="filtroBrasil" /></div>
                <div className="filtro">Belgica<input type="checkbox" onChange={belgicaChange} id="filtroBelgica" /></div>
                <div className="filtro">Canadá<input type="checkbox" onChange={canadaChange} id="filtroCanada" /></div>
                <div className="filtro">Colombia<input type="checkbox" onChange={colombiaChange} id="filtroColombia" /></div>
                <div className="filtro">Dinamarca<input type="checkbox" onChange={dinamarcaChange} id="filtroDinamarca" /></div>
            </div>
            <div className="resultados">
                {mostrarPersonas && conectarJSON.map(usuario => {
                    return (
                        <div className="resultadoUsuario"><img src={fotoUsuario} width="50px" alt="imagen pais" /><p className="nombreUsuario">{usuario.title}</p><img alt="imagen bandera" className="bandera" src={banderas[usuario.pais.toLowerCase()]} width="30px" /><button className="añadirBtn">Añadir Contacto</button></div>
                    )
                })}
                {argentina && (
                    conectarJSON.filter(usuario => usuario.pais === "argentina").map((usuarioFiltrado) => <div className="resultadoUsuario"><img src={fotoUsuario} alt="imagen pais" width="50px" /><p className="nombreUsuario">{usuarioFiltrado.title}</p><img className="bandera" width="30px" src={argentinaImg} alt="imagen bandera" /><button className="añadirBtn">Añadir Contacto</button></div>)
                )}

                {alemania && (
                    conectarJSON.filter(usuario => usuario.pais === "alemania").map((usuarioFiltrado) => <div className="resultadoUsuario"><img src={fotoUsuario} alt="imagen pais" width="50px" /><p className="nombreUsuario">{usuarioFiltrado.title}</p><img className="bandera" width="30px" src={alemaniaImg} alt="imagen bandera" /><button className="añadirBtn">Añadir Contacto</button></div>)
                )}

                {australia && (
                    conectarJSON.filter(usuario => usuario.pais === "australia").map((usuarioFiltrado) => <div className="resultadoUsuario"><img src={fotoUsuario} alt="imagen pais" width="50px" /><p className="nombreUsuario">{usuarioFiltrado.title}</p><img className="bandera" width="30px" src={australiaImg} alt="imagen bandera" /><button className="añadirBtn">Añadir Contacto</button></div>)
                )}

                {austria && (
                    conectarJSON.filter(usuario => usuario.pais === "austria").map((usuarioFiltrado) => <div className="resultadoUsuario"><img src={fotoUsuario} alt="imagen pais" width="50px" /><p className="nombreUsuario">{usuarioFiltrado.title}</p><img className="bandera" width="30px" src={austriaImg} alt="imagen bandera" /><button className="añadirBtn">Añadir Contacto</button></div>)
                )}

                {brasil && (
                    conectarJSON.filter(usuario => usuario.pais === "brasil").map((usuarioFiltrado) => <div className="resultadoUsuario"><img src={fotoUsuario} alt="imagen pais" width="50px" /><p className="nombreUsuario">{usuarioFiltrado.title}</p><img className="bandera" width="30px" src={brasilImg} alt="imagen bandera" /><button className="añadirBtn">Añadir Contacto</button></div>)
                )}

                {belgica && (
                    conectarJSON.filter(usuario => usuario.pais === "belgica").map((usuarioFiltrado) => <div className="resultadoUsuario"><img src={fotoUsuario} alt="imagen pais" width="50px" /><p className="nombreUsuario">{usuarioFiltrado.title}</p><img className="bandera" width="30px" src={belgicaImg} alt="imagen bandera" /><button className="añadirBtn">Añadir Contacto</button></div>)
                )}

                {canada && (
                    conectarJSON.filter(usuario => usuario.pais === "canada").map((usuarioFiltrado) => <div className="resultadoUsuario"><img src={fotoUsuario} alt="imagen pais" width="50px" /><p className="nombreUsuario">{usuarioFiltrado.title}</p><img className="bandera" width="30px" src={canadaImg} alt="imagen bandera" /><button className="añadirBtn">Añadir Contacto</button></div>)
                )}


                {colombia && (
                    conectarJSON.filter(usuario => usuario.pais === "colombia").map((usuarioFiltrado) => <div className="resultadoUsuario"><img src={fotoUsuario} alt="imagen pais" width="50px" /><p className="nombreUsuario">{usuarioFiltrado.title}</p><img className="bandera" width="30px" src={colombiaImg} alt="imagen bandera" /><button className="añadirBtn">Añadir Contacto</button></div>)
                )}


                {dinamarca && (
                    conectarJSON.filter(usuario => usuario.pais === "dinamarca").map((usuarioFiltrado) => <div className="resultadoUsuario"><img src={fotoUsuario} alt="imagen pais" width="50px" /><p className="nombreUsuario">{usuarioFiltrado.title}</p><img className="bandera" width="30px" src={dinamarcaImg} alt="imagen bandera" /><button className="añadirBtn">Añadir Contacto</button></div>)
                )}
            </div>
        </div>
    )
}

export default Conectar