import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/index.scss";

ReactDOM.render( // Nous rend la balise App
  <React.StrictMode>
    <App /> {/* De App va découler toute notre application */}
  </React.StrictMode>,
  document.getElementById('root') // On passe toute l'application à root
);

