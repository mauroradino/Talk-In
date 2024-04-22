import './Promo.css'
import App from '../../assets/free.svg'
const Promo = () => {
    return (
        <div className='PromoDiv' data-aos="zoom-in">
            <div className='promoTextDiv'>
                <h2 className='PromoTitle'>Divertido, grátis y en tu idioma!</h2>
                <p className='PromoSub'>Talk-in es tu puente hacia nuevos idiomas y culturas!</p>
            </div>
            <img className='appImg' src={App} width="300px" alt='promo imagen' />
        </div>
    )
}

export default Promo 