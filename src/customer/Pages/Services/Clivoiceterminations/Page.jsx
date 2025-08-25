import React from 'react'
import Cliheader from './Components/Cliheader'
import Becomepartner from '../../../Components/Becomepartner';
import Clicontent1 from './Components/Clicontent1'
import Clianimation from './Components/Clianimation'
import Clicontent2 from './Components/Clicontent2'
import Navbar from '../../../Components/Navbar';
import Footer from '../../../Components/Footer';
import Register from '../../../Components/Register';
import HomeAchievement from '../../../Components/Homeacheivemnet';

const Page = () => {
  return (
    <div>
      <Navbar />
      <Cliheader />
      <Becomepartner />
      <Clicontent1 />
      <Clianimation />
      <Clicontent2 />
      <HomeAchievement />
      <Register />
      <Footer />
    </div>
  )
}

export default Page