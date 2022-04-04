import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importation de composants
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
   <BrowserRouter> {/* Englobe toute l'application */}
    <Routes>
      <Route path="/" element={<Home />} /> {/* On va chercher un composant */}
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Home />} /> {/* Si jamais l'URL ne correspond à rien de connu */}
    </Routes>
  </BrowserRouter>
  );
};

export default App;