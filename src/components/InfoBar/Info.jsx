// import React from 'react'
import "./info.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faCalendarDays,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";

const Info = () => {
  return (
    <div className="Infobar">
    <div className="info__location">
      <h4>Where</h4>
      <div className="info__location-content">
        <p>Center Point, Lo...</p>
        <FontAwesomeIcon
          icon={faLocation}
          size="2xs"
          width={9}
          height={13}
          color="#F66F4D"
        />
      </div>
    </div>
    <div className="info__date">
      <h4>Date</h4>
      <div className="info__date-content">
        <p>09th March,2021</p>
        <FontAwesomeIcon
          icon={faCalendarDays}
          size={"xs"}
          width={13}
          height={13}
          color="#F66F4D"
        />
      </div>
    </div>
    <div className="info__search">
      <span className="info__search-circle">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          width={27.8}
          height={27.8}
          size="2xl"
        />
      </span>
    </div>
  </div>
  )
}

export default Info