import React from 'react'
import Aboutheader from './Components/Aboutheader'
import Aboutcontent1 from './Components/Aboutcontent1'
import Aboutanimation from './Components/Aboutanimation'
import Aboutcontent2 from './Components/Aboutcontent2'
import Register from '../../Components/Register'
import Footer from '../../Components/Footer'
import Becomepartner from '../../Components/Becomepartner'
import Navbar from '../../Components/Navbar'
import HomeAchievement from '../../Components/Homeacheivemnet'

const Aboutpages = () => {
  return (
    <div>
      <Navbar />
      <Aboutheader />
      <Becomepartner />
      <Aboutcontent1 />
      <Aboutanimation />
      <Aboutcontent2 />
      <HomeAchievement />
      <Register />
      <Footer />
    </div>
  )
}

export default Aboutpages