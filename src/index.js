import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Quiz from './components/Quiz';
import Regform from './components/regform';
import Cart from './cart';
import './components/Form.css';

//const root= ReactDOM.createRoot(document.getElementById('root'));


ReactDOM.render(
  <React.StrictMode>
<Regform/>

  </React.StrictMode>,

document.getElementById("root")
// {/* <Quiz/> */}
// {/* <Cart/> */}

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
