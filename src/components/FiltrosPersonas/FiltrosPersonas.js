import "./FiltrosPersonas.css"
import { useState } from "react"

const FiltrosPersonajes = () => {

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
    return(
            <div>
                <input type="text" id="buscador" placeholder="Busca por Nombre"/>
                <div className="filtro">Argentina<input type="checkbox" onChange={argentinaChange} id="filtroArgentina"/></div>
                <div className="filtro">Alemania<input type="checkbox" onChange={alemaniaChange} id="filtroAlemania"/></div>
                <div className="filtro">Australia<input type="checkbox" onChange={australiaChange} id="filtroAustralia"/></div>
                <div className="filtro">Austria<input type="checkbox" onChange={austriaChange} id="filtroAustria"/></div>
                <div className="filtro">Brasil<input type="checkbox" onChange={brasilChange} id="filtroBrasil"/></div>
                <div className="filtro">Belgica<input type="checkbox" onChange={belgicaChange} id="filtroBelgica"/></div>
                <div className="filtro">Canadá<input type="checkbox" onChange={canadaChange} id="filtroCanada"/></div>
                <div className="filtro">Colombia<input type="checkbox" onChange={colombiaChange} id="filtroColombia"/></div>
                <div className="filtro">Dinamarca<input type="checkbox" onChange={dinamarcaChange} id="filtroDinamarca"/></div>
            </div>
    )
}

export default FiltrosPersonajes;