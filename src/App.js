import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Artists from './pages/Artists';
import Hosts from './pages/Hosts';
import About from './pages/About';
import AppRouting from './pages/AppRouting';
import Kalendarium from './pages/Kalendarium';
import FAQ from './pages/Faq';
import Workshops from './pages/Workshops';
import AdamJames from './pages/Artists/AdamJames';
import JamesWebb from './pages/Artists/JamesWebb';
import EricMagassa from './pages/Artists/EricMagassa';
import Pastelae from './pages/Artists/Pastelae';
import UntoldGarden from './pages/Artists/UntoldGarden';
import LundahlSeitl from './pages/Artists/LundahlSeitl';
import AsaCederqvist from './pages/Artists/AsaCederqvist';
import OscarHaggstrom from './pages/Artists/OscarHaggstrom';
import SpacePopular from './pages/Artists/SpacePopular';
import SONG from './pages/Artists/SONG';

import './App.css';
import './sharedStyles.css';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <LanguageProvider>
        <div className="App">
          <Header />
          <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/konstnarer" element={<Artists />} />
            <Route path="/vardar" element={<Hosts />} />
            <Route path="/om" element={<About />} />
            <Route path="/app" element={<AppRouting />} />
            <Route path="/kalendarium" element={<Kalendarium />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/konstnarer/adamjames" element={<AdamJames />} />
            <Route path="/konstnarer/jameswebb" element={<JamesWebb />} />
            <Route path="/konstnarer/ericmagassa" element={<EricMagassa />} />
            <Route path="/konstnarer/pastelae" element={<Pastelae />} />
            <Route path="/konstnarer/untoldgarden" element={<UntoldGarden />} />
            <Route path="/konstnarer/lundahlseitl" element={<LundahlSeitl />} />
            <Route path="/konstnarer/asacederqvist" element={<AsaCederqvist />} />
            <Route path="/konstnarer/oscarhaggstrom" element={<OscarHaggstrom />} />
            <Route path="/konstnarer/spacepopular" element={<SpacePopular />} />
            <Route path="/konstnarer/song" element={<SONG />} />
          </Routes>
          </div>
          <Footer />
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;