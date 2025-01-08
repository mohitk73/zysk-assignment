
import './App.css'
import About from './components/About'
import Blog from './components/Blog'
import Features from './components/Features'
import Footer from './components/Footer'
import Frequently from './components/Frequently'
import Navbar from './components/Navbar'
import Proof from './components/Proof'
import Testimonial from './components/Testimonial'
import Trial from './components/Trial'



function App() {

  return (
    <>
    <div>
      <Navbar/>
      <About/>
      <Proof/>
      <Features/>
      <Testimonial/>
      <Frequently/>
      <Blog/>
      <Trial/>
      <Footer/>

    </div>
    </>
  )
}

export default App
