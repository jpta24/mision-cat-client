import React from 'react';
import { hydrate, render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import './custom.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';


const Content = () => (
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<Content />, rootElement);
} else {
  render(<Content />, rootElement);
}