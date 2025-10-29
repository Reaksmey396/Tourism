import React from 'react'
import Navbar from './Components/Pages/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Benner from './Components/Pages/Benner';
import PhnomPenh from './Components/Pages/PhnomPenh';
import WhyVisitCambodia from './Components/Pages/WhyVisitCambodia';
import Footer from './Components/Pages/Footer';
import AboutCambodia from './Components/Pages/AboutCambodia';
import Contectus from './Components/Pages/Contectus';
import Province from './Components/Pages/Province';
import PhnomPenhExplore from './Components/Pages/PhnomPenhExplore';
import SiemReap from './Components/Pages/SiemReap';
import PhnomPenhDetail from './Components/Pages/PhnomPenhDetail';
import SiemReapDetail from './Components/Pages/SiemReapDetail';
import KomPot from './Components/Pages/KomPot';
import { KomPotDetail } from './Components/Pages/KomPotDetail';
import KepDetail from './Components/Pages/KepDetail';
import Kep from './Components/Pages/Kep';
import KohKong from './Components/Pages/KohKong';
import KohKongDetail from './Components/Pages/KohKongDetail';
import Sihanoukville from './Components/Pages/Sihanoukville';
import SihanoukvilleDetail from './Components/Pages/SihanoukvilleDetail';
import FunStats from './Components/Pages/FunStats';
import WelcomePopup from './Components/Pages/WelcomePopup';


const App = () => {
  return (
    <Router>
      <WelcomePopup/>
      <Navbar />
      <Routes>
        {/* Home page */}
          <Route path='/' element={<div>
            <Benner/>
            <PhnomPenh/>
            <FunStats/>
            <WhyVisitCambodia/>
            
          </div>}/>
        {/*Home page */}
        <Route path='/home' element={<div>
            <Benner/>
            <PhnomPenh/>
          <WhyVisitCambodia/>

        </div>} />
        {/* Phnompenh Explore */}
         <Route path='/phnompenh' element={<PhnomPenhExplore/>}/>
         <Route path='/provinces' element={<Province/>}/>
         <Route path='/contact' element={<Contectus />} />


         {/* Detail Phnom penh */}
          <Route path='/PhnomPenhExplore/:id' element={<PhnomPenhDetail/>}/>
         
        {/* Provice */}
        <Route path='/province' element={<Province/>}/>

        {/* Siem Reap province list */}
        <Route path="/provinces/siem-reap" element={<SiemReap />} />
        <Route path="/Siemreap/:id" element={<SiemReapDetail />} />

        
       {/* Kompot province list */}
        <Route path='/provinces/kampot' element={<KomPot/>}/>
        <Route path="/KomPot/:id" element={<KomPotDetail/>} />

         {/* Kep province list */}
        <Route path='/provinces/kep' element={<Kep/>}/>
        <Route path='/Kep/:id' element={<KepDetail/>}/>

        {/* KohKong province list */}      
        <Route path='/provinces/koh-kong' element={<KohKong/>}/>
        <Route path='/KohKong/:id' element={<KohKongDetail/>}/>

          {/* provinceSihanoukville */}
          <Route path='/provinces/sihanoukville' element={<Sihanoukville/>}/>
          <Route path='/Sihanoukville/:id' element={<SihanoukvilleDetail/>}/>



        {/* About */}
         <Route path='/about' element={<div>
            <AboutCambodia/>

         </div>}/>

         {/* Contect */}
         <Route path='/contect' element={<div>
            <Contectus/>

         </div>}/>
      </Routes>

      <Footer/>
    
    </Router>
  );
};

export default App;

