import './MeetPPL.css'
import MeetPPL_IMG from '../../assets/chatting.svg'
const MeetPPL = () => {
    return (
        <div data-aos="fade-right" className='MeetDiv'>
            <div className='MeetTextDiv'>
                <h2 className='MeetTitle'>Conocé gente de todo el mundo 100% gratis!</h2>
                <h3 className='MeetSub'>Chateá con estudiantes de idioma de todo el mundo mediante nuestra plataforma 100% gratuita, práctica idioma y conocé!</h3>
            </div>
            <img className='MeetImg' src={MeetPPL_IMG} width="30%" alt='imagen meet' />
        </div>
    )
}

export default MeetPPL