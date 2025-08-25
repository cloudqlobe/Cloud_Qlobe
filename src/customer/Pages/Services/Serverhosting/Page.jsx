import Hostingheader from './Components/Hostingheader'
import Servercontent1 from './Components/Servercontent1'
import Serveranimation from './Components/Serveranimation'
import Servercontent2 from './Components/Servercontent2'
import Navbar from '../../../Components/Navbar'
import Becomepartner from '../../../Components/Becomepartner'
import Footer from '../../../Components/Footer'
import Register from '../../../Components/Register'
import HomeAchievement from '../../../Components/Homeacheivemnet'

const Page = () => {
  return (
    <div>
      <Navbar />
      <Hostingheader />
      <Becomepartner />
      <Servercontent1 />
      <Serveranimation />
      <Servercontent2 />
      <HomeAchievement />
      <Register />
      <Footer />
    </div>
  )
}

export default Page