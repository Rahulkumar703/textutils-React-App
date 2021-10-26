import './Css/App.css';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import React, { useState } from 'react'
import About from './Components/About';
import Contact from './Components/Contact';
import { HashRouter as Router, Route, Switch} from 'react-router-dom'



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
   <Router>
      <Navbar title="Text Utils" theme={themeMode} changetheme={changeTheme}/>

      <Switch>

        <Route exact path="/">
          <Form theme={themeMode} />
        </Route>

        <Route exact path="/about">
          <About theme={themeMode} />
        </Route>

        <Route exact path="/contact">
          <Contact theme={themeMode} />
        </Route>

      </Switch>

   </Router>
   </>
  );
}

export default App;
