import { useState, useEffect } from "react";
import './nav.scss'
import { Logo, send } from '../../constants/image'
import NavMobile from "./Navmobile/Navmobile"


const Nav = () => {
  const [show, setShow] = useState(false);
    function handleClick() {
      setShow(!show);
    }
    useEffect(() => {
      console.log(show);
    }, [show]);
  return (
    <div className="Salty__Navbar">
      <div className="Salty__Navbar-logo">
        <img src={Logo} alt="logo" />
        <p>Salty</p>
      </div>
      <nav className="Salty__Navbar-navigation">
        <a href="#">
          <li>Home</li>
          <div className="rod"/>
        </a>
        <a href="#About">
          <li>About Us</li>
        </a>
        <a href="#Destinations">
          <li>Destination</li>
        </a>
        <a href="#Tours">
          <li>Tours</li>
        </a>
        <a href="#Blog">
          <li>Blog</li>
        </a>
      </nav>
      <div className="Salty__Navbar-booking">
        <button className='btn'>
          Book Now
          <img src= {send} alt="send" />
        </button>
      </div>
      <NavMobile show={show} handleClick={()=> handleClick()}/>
      <div>
      <button
          id="burger"
          className={`open-main-nav ${show ? "is-open" : ""}`}
          onClick={() => handleClick()}
          >
          <span className="burger"></span>
          <span className="burger-text">Menu</span>
        </button>
      </div>
    </div>
  )
}

export default Nav