import './WelcomeComp.css'
import homeImg from '../../assets/inicioImg.svg'

const WelcomeComp = () => {
    return (
        <div className='homeDiv'>
            <h1 className="title">Practicá tu idioma favorito con nativos!</h1>
            <img className='homeImg' src={homeImg} alt='bienvenida' />
        </div>
    )
}

export default WelcomeComp 