import "./footer.scss"
import { Logo } from "../../constants/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faFacebookF, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons"
export const Footer = () => {
  return (
    <div className="Salty__footer">

    
    <div className="Salty__footer-links">
        <div className="Salty__footer-links_logo">
            <div className="Fulllogo">
                <img src={Logo} alt="logo" />
                <p>Salty</p>
            </div>
            <p>Enjoy the touring with Salty</p>
            <div className="socialmedia">
             <span><FontAwesomeIcon icon={faFacebookF} /></span> 
             <span><FontAwesomeIcon icon={faInstagram} /></span> 
             <span><FontAwesomeIcon icon={faTwitter} /></span> 
            </div>
        </div>
        <div className="Salty__footer-links_div">
            <h4>Resources</h4>
            <p>Download</p>
            <p>Help Center</p>
            <p>Guide Book</p>
            <p>App Directory</p>
        </div>
        <div className="Salty__footer-links_div">
            <h4>Travellers</h4>
            <p>Why Travellers</p>
            <p>Enterprice</p>
            <p>Customer Stories</p>
            <p>Instagram post</p>
        </div>
        <div className="Salty__footer-links_div">
            <h4>Company</h4>
            <p>Travelling</p>
            <p>About Locato</p>
            <p>Success</p>
            <p>Information</p>
        </div>
        <div className="Salty__footer-links_div">
            <h4>Get App</h4>
            <p>App Store</p>
            <p>Google Play Store</p>
            <p>info@payme.net</p>
        </div>
        </div>
        <div className="Salty__footer-copyright">
        <p> Salty ©2023  Made with ❤️ by Laross. All rights reserved.</p>
        </div>
    </div>
  )
}
