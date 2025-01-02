import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import QRScanner from './components/QRScanner'; // Ensure this path matches the actual file structure
import ModelUploader from './components/ModelUploader'; // Ensure this path matches the actual file structure
import './styles/App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle
  const [modelUrl, setModelUrl] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleModelSelect = (url) => {
    setModelUrl(url);
  };

  return (
    <Router>
      <div className="App">
        <header>
          <nav className="navbar">
            <div className="navbar-brand">QR Recognition and AR Model Viewer</div>
            <button className="menu-toggle" onClick={toggleMenu}>
              ☰
            </button>
            <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
              <li>
                <Link to="/qrscanner" onClick={() => setMenuOpen(false)}>
                  QRScanner
                </Link>
              </li>
              <li>
                <Link to="/modeluploader" onClick={() => setMenuOpen(false)}>
                  ModelUploader
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/qrscanner" element={<QRScanner onModelSelect={handleModelSelect} />} />
            <Route path="/modeluploader" element={<ModelUploader />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
