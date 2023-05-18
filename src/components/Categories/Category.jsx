// import React from 'react'
import "./category.scss"
import Cg from "./Cgoptions/Cg"
import { Categories } from "../../constants/Data" 
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
    faArrowLeft, faArrowRight
  } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";  

const Category = () => {
    let [Counter, setCounter] = useState(0);
    const [Nextprev, setNextPrev]= useState(false);
    const HandleNext = () =>{
        console.log(Nextprev, Counter )
        const indexLength= Categories.length/2;
        Nextprev?
        Counter <= indexLength-1?
            setCounter(++Counter):setCounter(0)
        :Counter == indexLength-1 &&Counter >= 0?
            setCounter(--Counter):setCounter(0)
    }
return (
    <div className="Salty__Category viewport">
        <div className="Salty__Category-textzone">
            <div className="content">
                <h2>
                Categories
                </h2>
                <p>
                Here are lots of interesting destinations to visit, but don’t be confused—they’re already grouped by category.
                </p>
            </div>
            <div className="arrows">
                <span className="arrows-first" onClick={()=>{setNextPrev(false); HandleNext() }}>
                    <FontAwesomeIcon icon={faArrowLeft} size={"xl"}/>
                </span>
                <span className="arrows-second" onClick={()=>{setNextPrev(true); HandleNext() }}>
                <FontAwesomeIcon icon={faArrowRight} size={"xl"}/>
                </span>
            </div>
        </div>

        <div className="Salty__Category-options">
            <div className="inner_carousel" style={{transform:`translateX(-${Counter*50}%)`}}>
            {Categories.map((item,index) => {
                return <Cg image={item.image} title={item.title} key={`${index}`} />
            })}
            </div>
        </div>
    </div>
  )
}

export default Category