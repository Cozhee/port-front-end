import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './css/index.css'
import './css/card.css'
import './css/display.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);