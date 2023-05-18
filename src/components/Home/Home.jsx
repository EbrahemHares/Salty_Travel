import './home.scss'
import {heroimg} from "../../constants/image"
import Info from '../InfoBar/Info'

const Home = () => {
  return (
    <div className="Salty__home container marginY">
      <div className="Salty__home-textzone">
        <h1>Discover the Best Lovely Places</h1>
        <p>Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us.</p>
        <Info />
      </div>
      <div className="Salty__home-image">
        <img  src={heroimg} alt="hero" />
      </div>
    </div>
  )
}

export default Home