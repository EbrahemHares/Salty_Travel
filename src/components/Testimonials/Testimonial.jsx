import "./testimonial.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Testim} from "../../constants/image"
import { faStar,faArrowLeft,faArrowRight } from "@fortawesome/free-solid-svg-icons"
const Testimonial = () => {
  return (
    <div className="parents ">

   
    <div className="Salty__testimonial container-reverse ">
        <div className="Salty__testimonial-textzone ">
            <div className="Rod" />
            <h2 className="heading">A customer said about us:</h2>
            <div className="feedback">
                <p className="msg">
                Salty helped me a lot in finding the best place for our first outdoor adventure trip. They responded very quickly and gave me a detailed account of the place—its history, as well as its best features.
                </p>
                <div className="stars">
                    <FontAwesomeIcon icon={faStar} color="#FFC14B" />
                    <FontAwesomeIcon icon={faStar} color="#FFC14B" />
                    <FontAwesomeIcon icon={faStar} color="#FFC14B" />
                    <FontAwesomeIcon icon={faStar} color="#FFC14B" />
                    <FontAwesomeIcon icon={faStar} color="#FFC14B" />
                </div>
                <div className="details">
                    <div>
                        <h4>Andrew Sarma</h4>
                        <p>Enterpreneur</p>  
                    </div>
                    <div className="arrows">
                        <span className="arrows-first">
                            <FontAwesomeIcon icon={faArrowLeft} size={"xl"}/>
                        </span>
                        <span className="arrows-second">
                        <FontAwesomeIcon icon={faArrowRight} size={"xl"}/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="Salty__testimonial-image">
            <img src={Testim} alt="testimonials" />
        </div>
    </div>
    </div>
  )
}

export default Testimonial