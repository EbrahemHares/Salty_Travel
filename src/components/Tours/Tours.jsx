// import React from 'react'
import "./tours.scss"
import { TourCard } from "../../constants/Data"
import TC from "./tourcard/TC"


const Tours = () => {
  return (
    <div className="Salty__tours marginY" id="Tours">
        <div className="Salty__tours-textzone">
            <h2 className="heading">Top Destinations</h2>
            <p className="desc">Sost Brilliant reasons Entrada should be your one-stop-shop!</p>
            <div className="btns">
                <button>London</button>
                <button>Bangkok</button>
                <button>England</button>
                <button>Singapore</button>
                <button>Italy</button>
            </div>
        </div>
        <div className="Salty__tours-grid">
            {
                TourCard.map((item,index) => (<TC sort={item.sort} image={item.image} key={index} />))
            }
        </div>
        
    </div>
  )
}

export default Tours