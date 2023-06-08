import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import  "./scss/app.scss";

import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Routes>
    <Route  path='*'  element={<App />}/>
    </Routes>
    </Router>
    
  </React.StrictMode>
);

