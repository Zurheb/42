import Footer from "./Footer/Footer"
import { Header } from "./Heder/Header"
import { Hero } from "./Hero/Hero"
import { Section1 } from "./Section1/Section1"
import { Section2 } from "./Section2/Section2"
import { Section4 } from "./Section4/Section4"
import { Something } from "./Select3/Section3"
import ModeChanger from "./utils/ModeChanger"

function App() {
  

  return (
  <section className={`${ModeChanger("","bg-black")}`}>
    <Header/>
  <Hero/>
  <Section1/>
<Section2/>
 <Something/>
 <Section4/>
 <Footer/>
  </section>
  
  
  )
}

export default App
