import "./destiny.scss"
import { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
    faArrowLeft, faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { Destinatios } from "../../constants/Data";
import Card from "./Cardprice/Card";
const Destiny = () => {
    let [counter, setCounter] = useState(0);
    function HandlerNext (){
        const count= counter;
        if (count >= 0 && count<3){
            setCounter(()=>(counter++))
        }else{
            setCounter(0);
        }
    }
    function HandlerPrev (){
        const count= counter;
        if (count >= 0 && count<= 3){
            setCounter(()=>(counter--))
        }else{
            setCounter(0);
        }
    }
  return (
    <div className="Salty__Destination" id="Destinations">
        <div className="Salty__Destination-textzone">
            <div className="content">
                <h2>
                Find Popular Destination
                </h2>
            </div>
            <div className="arrows">
                <span className="arrows-first" onClick={HandlerPrev}>
                    <FontAwesomeIcon icon={faArrowLeft} size={"xl"}/>
                </span>
                <span className="arrows-second" onClick={HandlerNext}>
                <FontAwesomeIcon icon={faArrowRight} size={"xl"} />
                </span>
            </div>
        </div>
        <div className="Salty__Destination-Cards">
            <div className="inner" style={{transform: `translateX(-${counter*26}%)`}}>
            {Destinatios.map((item, index) => (
                <Card image={item.image} title={item.title} desc={item.describtion} price={item.price} key={`${item.title}+0${index}`}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Destiny