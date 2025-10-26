import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomePage from './landingPage/home/HomePage.js';
import Gallery from './landingPage/gallery/Gallery.js';
import Events from './landingPage/events/Events.js';
import Artists from './landingPage/artists/Artists.js';
import Navbar from './landingPage/Navbar.js';
import Footer from './landingPage/Footer.js';
import NotFound from './landingPage/NotFound.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/events' element={<Events />} />
      <Route path='/artists' element={<Artists />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>


);