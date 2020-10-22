import React, { Fragment } from 'react';
import './App.css';

// componentes
import Navbar from './components/Navbar';

// vistas
import LandingPage from './views/LandingPage'


function App() {
  return (
    <Fragment>
      <Navbar />
      <LandingPage />
    </Fragment>
  )
  // corchete final
}

export default App;
