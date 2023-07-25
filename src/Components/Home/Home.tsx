// import { useEffect , useState } from 'react'
// import 'animate.css';
import Navbar from '../Navbar/Navbar';
import HeroSection from '../HeroSection/HeroSection';
import Recentwork from '../Recentwork/Recentwork';
import Methodology from '../Methodology/Methodology';
import Connect from '../Connect/Connect';
import Footer from '../Footer/Footer';

function Home() {

  return (
    <div id="home" className='relative flex flex-col gap-[1rem] overflow-x-hidden w-full min-h-screen'>

        {/* {show && */}
        <div className="w-full fixed top-0 left-0 right-0 z-[99999999999]">
          <Navbar/>
        </div>
        {/* } */}

        <div className='mt-[5rem]'>
          <HeroSection/>
        </div>

        <Recentwork/>
        <Methodology/>
        <Connect/>
        <Footer/>

    </div>
  )
}

export default Home
