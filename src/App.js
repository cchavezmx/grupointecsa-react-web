import React, { Fragment } from 'react';
import './App.css';

// componentes
import Navbar from './components/Navbar';
import Menudrop from './components/Menudrop'
import Modal from './components/Modal'
// vistas
import LandingPage from './views/LandingPage'


// Context
import  MenuContextProvider  from  './context/MenuContext'
import DataContextProvider from './context/DataContext'


function App() {


  return (
    <Fragment>

      <MenuContextProvider>
      <DataContextProvider>
      <Modal />  
      <Menudrop />
      <Navbar/>  
      <LandingPage />
      </DataContextProvider>
      </MenuContextProvider>      
     
    </Fragment>
  )
  // corchete final
}

export default App;
