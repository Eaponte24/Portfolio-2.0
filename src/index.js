import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

window.onload = () => {
   const transtionEl = document.querySelector('.transition');


    setTimeout(() => {
        transtionEl.classList.remove('is-active');
    }, 500);
}


ReactDOM.render(<App />, document.getElementById('root'));


