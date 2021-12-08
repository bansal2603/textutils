import './App.css';
import Nav from './components/Nav.js';
import Formbox from './components/formbox.js';
import About from './components/About';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {

  const [mode, setmode] = useState('light')
 

const togglemode=()=>{
if (mode === 'light') {
  setmode('dark')
  document.body.style.backgroundColor = '#393E46'
 
}
else{
  setmode('light')
  document.body.style.backgroundColor = 'white'
 
}
}
  return (
    <Router>
    <div className="App">
      <Nav  mode={mode} togglemode= {togglemode} title = "TextUtils"/>
      <div className ="formboxcontainer"  >
        
      <Switch>
          <Route path="/about">
          <About mode={mode}  />
          </Route>
  
          <Route path="/">
          <Formbox  mode={mode} heading ="Enter the Text to analyse"/>
          </Route>
        </Switch>
      
    
      </div>  
   
    </div>
    </Router>
  );
}

export default App;
