import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Artists from './pages/Artists';
import Hosts from './pages/Hosts';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/konstnarer" element={<Artists />} />
          <Route path="/vardar" element={<Hosts />} />
          <Route path="/om" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;