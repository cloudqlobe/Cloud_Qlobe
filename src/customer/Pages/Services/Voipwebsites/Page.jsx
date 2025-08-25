import Voipwebsitesheader from './Components/Voipwebsitesheader'
import Voipcontent1 from './Components/Voipcontent1'
import Voipanimation from './Components/Voipanimation'
import Voipcontent2 from './Components/Voipcontent2'
import Navbar from '../../../Components/Navbar'
import Footer from '../../../Components/Footer'
import Register from '../../../Components/Register'
import HomeAchievement from '../../../Components/Homeacheivemnet'
import Becomepartner from '../../../Components/Becomepartner'

const Page = () => {
  return (
    <div>
      <Navbar />
      <Voipwebsitesheader />
      <Becomepartner />
      <Voipcontent1 />
      <Voipanimation />
      <Voipcontent2 />
      <HomeAchievement />
      <Register />
      <Footer />
    </div>
  )
}

export default Page