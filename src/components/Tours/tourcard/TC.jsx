import "./TC.scss";
import PropTypes from "prop-types"

const TC = ({image, sort}) => {
  return (
    <div className={`Tourcard ${sort}`}>
      <img src={image} alt="dest" />
      <div className="content">
        <p className="rate">3.5</p>
        <div className="title">
          <h4>Vientam</h4>
          <p>Worefall</p>
        </div>
      </div>
    </div>
  )
}

export default TC

TC.propTypes ={
    image:PropTypes.string.isRequired,
    sort:PropTypes.string.isRequired,
}