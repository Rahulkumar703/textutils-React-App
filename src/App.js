import './Css/App.css';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import React, { useState } from 'react'
import About from './Components/About';


function App() {
  const [themeMode, setThemeMode] = useState('light');

  function changeTheme() {
    if(themeMode === 'light')
    {
      setThemeMode('dark');
      document.body.classList = 'dark';
    }
    else
    {
      setThemeMode('light');
      document.body.classList = 'light';
    }
  }

  return (
   <>
    <Navbar title="Text Utils" theme={themeMode} changetheme={changeTheme}/>
    <Form theme={themeMode} />
    <About theme={themeMode} />
   </>
  );
}

export default App;
