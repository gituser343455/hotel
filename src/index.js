import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Nav from './Nav/Nav'
import Bron from './Bron/Bron'

import { BrowserRouter, Routes, Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
    <Nav />
      <Routes>

        <Route exact path="/App" element={<App />}/>
        <Route path="/Bron" element={<Bron />}/>


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);