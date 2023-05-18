import "./Cg.scss"
import PropTypes from "prop-types"

const Cg = ({image, title, key}) => {
  return (
    <div  className="Category">
    <div className="image">
        <img src ={image} alt={`${title}+${key}`} />
    </div>
    <p >{title}</p>
    
    </div>
  )
}

export default Cg

Cg.propTypes ={
    image:PropTypes.string,
    title:PropTypes.string,
    key:PropTypes.string
}