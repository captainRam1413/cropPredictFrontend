// import logo from './logo.svg';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PredictForm from './components/PredictForm';
import Dataset from './components/Dataset';
import Information from './components/Information';
import './App.css';

function App() {
  const [tab, setTab] = useState('home');

  return (
    <div>
      <Navbar tab={tab} setTab={setTab} />
      <div className="material-main-content">
        {tab === 'home' && <PredictForm />}
        {tab === 'dataset' && <Dataset />}
        {tab === 'info' && <Information />}
      </div>
    </div>
  );
}

export default App;
