import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Artists from './pages/Artists';
import Hosts from './pages/Hosts';
import About from './pages/About';
import AppRouting from './pages/AppRouting';
import './App.css';
import './sharedStyles.css';

function App() {
  const backgroundImageStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/background.jpg)`,
    backgroundSize: '800px',
    backgroundPosition: '-200px center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <Router>
      <div className="App" style={backgroundImageStyle}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/konstnarer" element={<Artists />} />
          <Route path="/vardar" element={<Hosts />} />
          <Route path="/om" element={<About />} />
          <Route path="/app" element={<AppRouting />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;