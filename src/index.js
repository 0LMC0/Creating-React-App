import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getFirestoreApp } from './firebase/dbConfig';

// llamada a la funcion que inicializa llama a app de dbConfig para obtener las API keys para la llamada a Firebase
getFirestoreApp();

ReactDOM.render(
    <App />
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
