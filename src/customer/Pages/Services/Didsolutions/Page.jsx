import React from 'react'

import Didheader from './Components/Didheader'
import Didcontent1 from './Components/Didcontent1'
import Didanimation from './Components/Didanimation'
import Didcontent2 from './Components/Didcontent2'
import Becomepartner from '../../../Components/Becomepartner';
import Navbar from '../../../Components/Navbar'
import Footer from '../../../Components/Footer'
import Register from '../../../Components/Register'
import HomeAchievement from '../../../Components/Homeacheivemnet'

const Page = () => {
  return (
    <div>
      <Navbar />
      <Didheader />
      <Becomepartner />
      <Didcontent1 />
      <Didanimation />
      <Didcontent2 />
      <HomeAchievement />
      <Register />
      <Footer />
    </div>
  )
}

export default Page