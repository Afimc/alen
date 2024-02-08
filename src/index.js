import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import Cards from './@components/Cards/Cards';
import Header from './@components/Header/Header';
import Scroll from './@components/Scroll';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <div>
    <Header/>
    <Scroll>
      <Cards/>
    </Scroll>
    <footer calssName='footer'>
     Ален Бориславов гард:Перник тел:0888888888 
    </footer>
  </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
