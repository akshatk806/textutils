import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';         // imr -> shortcut

function App() {
  const [mode, setMode] = useState('light');      // Whether the dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor='#3c4349'
    } else {
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
      <Navbar title="TextUtils" contact="Contact Us" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
