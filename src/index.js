import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Nav from './Nav/Nav'
import Bron from './Bron/Bron'
import About from './About/About'
import Number from './Number/Number'
import Comfort from './Comfort/Comfort'
import New from './New/New'
import Call from './Call/Call'
import Menu from './Menu/Menu'




import { BrowserRouter, Routes, Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
    <Nav />
      <Routes>

        <Route exact path="/App" element={<App />}/>
        <Route path="/Bron" element={<Bron />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Number" element={<Number />}/>
        <Route path="/Comfort" element={<Comfort />}/>
        <Route path="/New" element={<New />}/>
        <Route path="/Call" element={<Call />}/>
        <Route path="/Menu" element={<Menu />}/>


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);