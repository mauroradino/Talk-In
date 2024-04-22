import './HomePage.css';
import WelcomeComp from '../../components/WelcomeComp/WelcomeComp.js';
import AvailableLang from '../../components/AvailableLang/AvaliableLang.js';
import MeetPPL from '../../components/MeetPPL/MeetPPL.js';
import Promo from '../../components/Promo/Promo.js';
import SobreTalk from '../../components/SobreTalk/SobreTalk.js';
import Footer from '../../components/Footer/Footer.js';
const HomePage = () => {
    return (
        <>
            <WelcomeComp />
            <AvailableLang />
            <MeetPPL />
            <Promo />
            <SobreTalk />
            <Footer />
        </>
    )
}

export default HomePage