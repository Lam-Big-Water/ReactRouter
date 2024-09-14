import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import App from './App.tsx';
import About from './About.tsx';

import './index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <StrictMode>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
    </StrictMode>
  </BrowserRouter>
)
