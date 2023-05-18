import "./card.scss"
import PropTypes  from "prop-types"
const Card = ({image, title, desc, price}) => {
return (
    <div className="Destination__Card">
        <div className="Destination__card-image">
            <img src={image} alt="popularDestination" />
        </div>
        <div className="Destination__card-describtion">
            <h4 className="head">{title}</h4>
            <p>{desc}</p>
        </div>
        <div className="Destination__card-price">
            <p>
            ${price} <span>/Person</span>{" "}
            </p>
            <button className="bookBtn">Book Now</button>
        </div>
    </div>
    )
}

export default Card

Card.propTypes ={
    image:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    desc:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
}