import React from 'react'
import Contactheader from './Components/Contactheader'
import Contactcontent1 from './Components/Contactcontent1'
import Contactanimation from './Components/Contactanimation'
import Becomepartner from '../../Components/Becomepartner'
import Navbar from '../../Components/Navbar'
import Register from '../../Components/Register'
import Footer from '../../Components/Footer'


const Contactpages = () => {
  return (
    <div>
      <Navbar />
      <Contactheader />
      <Becomepartner />
      <Contactcontent1 />
      <Contactanimation />
      <Register />
      <Footer />
    </div>
  )
}

export default Contactpages