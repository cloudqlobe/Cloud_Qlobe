import React from 'react'
import FaqHeader from './Components/Faqheader'
import Register from '../../Components/Register'
import Footer from '../../Components/Footer'
import Becomepartner from '../../Components/Becomepartner'
import Faqquires from './Components/Faqquires'
import Navbar from '../../Components/Navbar'
import HomeAchievement from '../../Components/Homeacheivemnet'

const Faqpages = () => {
  return (
    <div>
      <Navbar />
      <FaqHeader />
      <Becomepartner />
      <Faqquires />
      <HomeAchievement />
      <Register />
      <Footer />
    </div>
  )
}

export default Faqpages