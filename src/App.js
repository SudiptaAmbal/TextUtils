import React, { useState } from 'react';

import './App.css';
import About from './components/About/About';
import Alert from './components/Alert/Alert';
import Navbar from './components/Navbar/Navbar';
import Textform from './components/Textform/Textform';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('info')
  const [alert, setAlert] = useState(null)

  const showAlert = (meseage, type) => {
    setAlert({
      msg: meseage,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000)
  }

  const toggleMode = () => {
    if (mode === 'info') {
      setMode('dark');
      document.body.style.backgroundColor = '#0e0d18'
      showAlert('Dark mode enabled', 'success')
    } else {
      setMode('info');
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode enabled', 'success')
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Textform mode={mode} showAlert={showAlert} />} />
            <Route exact path='/about' element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
