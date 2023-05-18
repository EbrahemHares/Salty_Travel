import "./about.scss"
import State from "./state/State"
import {aboutimg} from "../../constants/image"

const About = () => {
  return (
    <div className="Salty__about container-reverse " id="About">
        <div className="Salty__about-textzone ">
            <p className="headline">Our Experience</p>
            <h2>Our Stories Have Adventures</h2>
            <p className="desc"> We are experienced in bringing adventures to stay their journey, with all outdoor destinations in the world as our specialties. Start your adventure now! Nature has already called you!</p>
            <div className="state">
                <State stateNumber="12K" title="Succes Journey"/>
                <State stateNumber={16} title="Awards Winning"/>
                <State stateNumber={20} title="Years Of Experience"/>
            </div>
        </div>
        <div className="Salty__about-image">
            <img src={aboutimg} alt="about" />
        </div>
        
    </div>
  )
}

export default About