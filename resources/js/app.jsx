import './bootstrap';
import '../css/app.css';
// import React from 'react';
import ReactDOM from 'react-dom/client';        
import Home from './Home';
import About from './About';

ReactDOM.createRoot(document.getElementById('app')).render(     
    <Home /> ,
    <About />

);