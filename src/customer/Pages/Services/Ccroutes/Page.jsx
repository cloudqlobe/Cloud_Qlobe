import Ccheader from './Components/Ccheader';
import Cccontent1 from './Components/Cccontent1';
import Ccanimation from './Components/Ccanimation';
import Cccontent2 from './Components/Cccontent2';
import HomeAchievement from '../../../Components/Homeacheivemnet';
import Becomepartner from '../../../Components/Becomepartner';
import Register from '../../../Components/Register';
import Footer from '../../../Components/Footer';
import Navbar from '../../../Components/Navbar';

const Page = () => {
  return (
    <div>
      <Navbar  />
      <Ccheader />
      <Becomepartner />
      <Cccontent1 />
      <Ccanimation />
      <Cccontent2 />
      <HomeAchievement />
      <Register />
      <Footer />
    </div>
  );
};

export default Page;
