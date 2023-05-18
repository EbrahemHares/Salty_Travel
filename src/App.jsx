import './App.scss'
import About from './components/Aboutus/About'
import Category from './components/Categories/Category'
import Destiny from './components/Destination/Destiny'
import { Footer } from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Nav'
import Newsletter from './components/Newsletter/Newsletter'
import Testimonial from './components/Testimonials/Testimonial'
import Tours from './components/Tours/Tours'


function App() {

  return (
    <>
    <div className='paddingX'>
      <Navbar />
      <Home />
    </div>
    <div className='paddingX '>
      <Category />
      <About />
      <Destiny />
      <Tours />
      <Testimonial />
      <Newsletter />
    </div>
      <Footer />

    </>
  )
}

export default App
