
import React from 'react';
import './App.css';
import {NavBar} from './components/NavBar.js';
import {Home} from './components/Home.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function App() {

  return (

    <div  className='App'>
    <NavBar/>
    <Home/>
    
    </div>
  );
}


