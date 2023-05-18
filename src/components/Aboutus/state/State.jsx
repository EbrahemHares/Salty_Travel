import PropTypes from 'prop-types';

const State = ({stateNumber, title}) => {
  return (
    <div className='salty__State'>
        <h4>{stateNumber}+</h4>
        <p>{title}</p>
    </div>
  )
}

export default State

State.propTypes ={
    stateNumber:PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    title:PropTypes.string,
}