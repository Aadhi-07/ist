import { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useLoader } from './hooks/useLoader.js';
import { useNavTheme } from './hooks/useNavTheme.js';
import { useParallax } from './hooks/useParallax.js';

import Loader from './components/Loader.jsx';
import Navbar from './components/Navbar.jsx';
import Badge from './components/Badge.jsx';
import JetCanvas from './components/JetCanvas.jsx';

import Home from './pages/Home.jsx';
import AboutOverview from './pages/About/AboutOverview.jsx';
import AboutSubpage from './pages/About/AboutSubpage.jsx';
import ServicesOverview from './pages/Services/ServicesOverview.jsx';
import ServiceDetail from './pages/Services/ServiceDetail.jsx';
import EquipmentOverview from './pages/Equipment/EquipmentOverview.jsx';
import EquipmentDetail from './pages/Equipment/EquipmentDetail.jsx';
import IndustriesOverview from './pages/Industries/IndustriesOverview.jsx';
import IndustryDetail from './pages/Industries/IndustryDetail.jsx';
import ContactPage from './pages/Contact/ContactPage.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const loaded = useLoader();
  const onDark = useNavTheme();
  useParallax();

  return (
    <>
      <ScrollToTop />
      <Loader done={loaded} />
      <Navbar onDark={onDark} />
      <JetCanvas ready={loaded} isHome={isHome} />

      <Routes>
        <Route path='/' element={<Home loaded={loaded} />} />

        {/* About Routes */}
        <Route path='/about' element={<AboutOverview />} />
        <Route path='/about/:subpage' element={<AboutSubpage />} />

        {/* Services Routes */}
        <Route path='/services' element={<ServicesOverview />} />
        <Route path='/services/:serviceId' element={<ServiceDetail />} />

        {/* Equipment Routes */}
        <Route path='/equipment' element={<EquipmentOverview />} />
        <Route path='/equipment/:equipmentId' element={<EquipmentDetail />} />

        {/* Industries Routes */}
        <Route path='/industries' element={<IndustriesOverview />} />
        <Route path='/industries/:industryId' element={<IndustryDetail />} />

        {/* Contact Route */}
        <Route path='/contact' element={<ContactPage />} />

        {/* Catch-all */}
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>

      {isHome && <Badge />}
    </>
  );
}
