import React, { Fragment, useContext } from 'react';
import './App.css';

// componentes
import Navbar from './components/Navbar';
import Menudrop from './components/Menudrop'
// vistas
import LandingPage from './views/LandingPage'


// Context
import  MenuContextProvider  from  './context/MenuContext'

function App() {


  return (
    <Fragment>

      <MenuContextProvider>
      <Menudrop />
      <Navbar/>  
      <LandingPage />
      </MenuContextProvider>      
     
    </Fragment>
  )
  // corchete final
}

export default App;
