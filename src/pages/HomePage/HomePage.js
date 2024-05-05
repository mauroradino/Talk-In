import './HomePage.css';
import WelcomeComp from '../../components/WelcomeComp/WelcomeComp.js';
import AvailableLang from '../../components/AvailableLang/AvaliableLang.js';
import MeetPPL from '../../components/MeetPPL/MeetPPL.js';
import Promo from '../../components/Promo/Promo.js';
import Footer from '../../components/Footer/Footer.js';
import Preguntas from '../../components/Preguntas/Preguntas.js';
import Registrate from '../../components/Registrate/Registrate.js';
const HomePage = () => {
    return (
        <>
            <WelcomeComp />
            <AvailableLang />
            <MeetPPL />
            <Promo />
            <Registrate />
            <Preguntas />
            <Footer />
        </>
    )
}

export default HomePage