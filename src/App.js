import React, { useState } from 'react';  


import './App.css';
import Navbar from './components/Navbar/Navbar';
import Textform from './components/Textform/Textform';


function App() {

  const [mode, setMode] = useState('info')

  const toggleMode = () => {
    if(mode === 'info'){
      setMode('dark');
      document.body.style.backgroundColor = '#0e0d18'
    }else{
      setMode('info');
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
        <Textform mode={mode} />
      </div>
    </>
  );
}

export default App;
