
import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
//import { BrowserRouter,Routes,Route } from 'react-router-dom';
import TextForm from './components/TextForm';
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState("dark");
  const [alert,setAlert] = useState(null);

  const [green,setGreen] = useState('green');
  const [blue,setBlue] = useState('blue');

  const changeBlue = ()=>{
    if(blue==='blue'){
      setBlue(
        document.body.style.backgroundColor = '#030222',
        document.body.style.color = 'white'
      )
    }
    else{
      setBlue(
        document.body.style.backgroundColor = 'black',
        document.body.style.color = 'white'
      )
    }
  }

  const changeGreen = ()=>{
    if(green==='green'){
      setGreen(
        document.body.style.backgroundColor = '#03160b',
        document.body.style.color = 'white'
      )
    }
    else{
      setGreen(
        document.body.style.backgroundColor = 'black',
        document.body.style.color = 'white'
      )
    }
  }

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }

  setTimeout(() => {
    setAlert(null)
  }, 2000);

  const changeMode = ()=>{
    if(mode==="dark"){
      setMode('light');
      showAlert("Light Mode Enabled","success")
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
    }
    else{
      setMode('dark');
      showAlert("Dark Mode Enabled","primary")
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
    }
  }
  return (
    <>
      <Navbar
      name="TextUtils"
      AboutUs="About TextUtils"
      Home="Home"
      mode={mode} changeMode={changeMode}
      changeBlue={changeBlue}
      changeGreen={changeGreen}
      />

      <Alert
      alert={alert}
      />

        <TextForm 
        heading="Enter the Text to Analyze Below"
        mode={mode}
        showAlert={showAlert}
        />

    </>
  );
}

export default App;
