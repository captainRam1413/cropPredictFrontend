import React, { useState } from 'react';
import '../App.css'; // Import the CSS file


function Navbar({ tab, setTab }) {
  const [open, setOpen] = useState(false);

  const handleNav = (tabName) => {
    setTab(tabName);
    setOpen(false); // Close menu on mobile after click
  };

  return (
    <nav className="material-navbar">
      <div className="navbar-logo">
        <span role="img" aria-label="leaf">🍃</span>
<strong
  style={{
    fontFamily: "'Pacifico', cursive",
    fontStyle: "italic",
    fontWeight: 500,
    letterSpacing: "5px"
  }}
>
  CropPredict
</strong>
      </div>
      <button
        className="navbar-toggle"
        aria-label="Toggle navigation"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>
      <div className={`nav-links${open ? ' open' : ''}`}>
        <div
          className={`nav-item${tab === 'home' ? ' active' : ''}`}
          onClick={() => handleNav('home')}
        >
          Home
        </div>
        <div
          className={`nav-item${tab === 'dataset' ? ' active' : ''}`}
          onClick={() => handleNav('dataset')}
        >
          Dataset
        </div>
        <div
          className={`nav-item${tab === 'info' ? ' active' : ''}`}
          onClick={() => handleNav('info')}
        >
          Information
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
