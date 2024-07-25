import '../styles/Footer.css';
import logo_instagram from "../assets/Images/instagram.png";
import logo_twitter from "../assets/Images/twitter.png";
import logo_facebook from "../assets/Images/facebook.png";
import logo_pinterest from "../assets/Images/pinterest.png";
import antiquite_egyptienne from "../assets/Images/antiquité_égyptienne.jpg";
import antiquite_grecque from "../assets/Images/antiquité_grecque.webp";
import epoque_romaine from "../assets/Images/epoque_romaine.jpeg";
import moyen_age from "../assets/Images/moyen_age.jpg";
import renaissance from "../assets/Images/renaissance.jpg";

function Footer() {

    return (
        <div className="footer-container">
            <p className="footer-paragraph">Apprenez en voyageant à travers le temps.</p>
            <div className="footer-img-container">
                <img src={antiquite_egyptienne} alt="antiquite egyptienne" />
                <img src={antiquite_grecque} alt="antiquite grecque" />
                <img src={epoque_romaine} alt="epoque romaine" />
                <img src={moyen_age} alt="moyen age" />
                <img src={renaissance} alt="renaissance" />
            </div>

            <ul className="footer-ul">
                <li className="footer-li">
                    <img src={logo_instagram} alt="Logo Instagram" />
                </li>
                <li className="footer-li">
                    <img src={logo_twitter} alt="Logo Twitter" />
                </li>
                <li className="footer-li">
                    <img src={logo_facebook} alt="Logo Facebook" />
                </li>
                <li className="footer-li">
                    <img src={logo_pinterest} alt="Logo Pinterest" />
                </li>
            </ul>
            <div className="footer-copyright-container">

                <p>Réalisé par : Anthony, Daniel, Rosa, Samih et Sarah.</p>
                <p>Copyright © 2024</p>
            </div>
        </div>
    )
}

export default Footer;
