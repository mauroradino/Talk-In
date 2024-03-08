import './WelcomeComp.css'
import homeImg from '../../assets/homeImg.jpg'

const WelcomeComp = () => {
    return(
        <div className='homeDiv'>
        <h1 className="title">Practica tu idioma favorito con nativos!</h1>
        <img className='homeImg' src={homeImg} width="400px" alt='bienvenida'/>
        </div>
    )
}

export default WelcomeComp