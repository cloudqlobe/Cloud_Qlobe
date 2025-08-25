import Dailerheader from './Components/Dailerheader'
import Dailercontent1 from './Components/Dailercontent1';
import Daileranimation from './Components/Daileranimation';
import Dailercontent2 from './Components/Dailercontent2';
import Footer from '../../../Components/Footer';
import Register from '../../../Components/Register';
import HomeAchievement from '../../../Components/Homeacheivemnet';
import Becomepartner from '../../../Components/Becomepartner';
import Navbar from '../../../Components/Navbar';


const Page = () => {
  return (
    <div>
      <Navbar/>
      <Dailerheader />
      <Becomepartner />
      <Dailercontent1 />
      <Daileranimation />
      <Dailercontent2 />
      <HomeAchievement />
      <Register />
      <Footer />

    </div>
  )
}

export default Page