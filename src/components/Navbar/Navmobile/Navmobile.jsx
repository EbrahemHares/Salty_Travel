import "./navmobile.scss";
import { send } from "../../../constants/image";
import PropTypes from 'prop-types';

export default function Navmobile({show, handleClick}) {

  return (
    <div className="Navmobile">
      <div className="container">
        <nav className={`main-nav ${show ? "is-open" : ""}`} id="main-nav">
          <ul>
            <li>
              <a href="#About" onClick={() => handleClick()}>
                {" "}
                About me
              </a>
            </li>
            <li>
              <a href="#Feature" onClick={() => handleClick()}>
                Feature
              </a>
            </li>
            <li>
              <a href="#Work" onClick={() => handleClick()}>
                {" "}
                Work
              </a>
            </li>
            <li>
              <a href="#Contact" onClick={() => handleClick()}>
                {" "}
                Contact
              </a>
            </li>
            <li>
              <a href="#Blog" onClick={() => handleClick()}>
                {" "}
                Blog
              </a>
            </li>
            <div className={`mobile__Navbar-booking ${show ? "is-open" : ""}`}>
              <button className='btn'>
                Book Now
                <img src= {send} alt="send" />
              </button>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}



Navmobile.propTypes ={
  show: PropTypes.bool.isRequired,
  handleClick: PropTypes.func,
}