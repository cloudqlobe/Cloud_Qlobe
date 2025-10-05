import Homescroller from '../Components/Homescroller'
import Rateheader from './Components/Rateheader'
import Footer from '../Components/Footer'
import Register from '../Components/Register'
import HomeAchievement from '../Components/Homeacheivemnet'
import Navbar from '../Components/Navbar'


const Ratespages = () => {
  return (
    <div className='mt-[50px]'>
      <Navbar/>
      <Homescroller/>
      <Rateheader/>
      <HomeAchievement/>
      <Register/>
      <Footer/>
    </div>
  )
}

export default Ratespages