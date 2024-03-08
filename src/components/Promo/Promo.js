import './Promo.css'
import App from '../../assets/App.png'
const Promo = () => {
    return(
        <div className='PromoDiv'>
            <h2 className='PromoTitle'>Divertido, Efectivo y Gratis!</h2>
            <img className='appImg' src={App} width="300px" alt='promo imagen'/>
        </div>
    )
}

export default Promo