import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let currDate = new Date(2020,5,5,14);
currDate = currDate.getHours();
let greet = '';
const cssStyle = {};
if(currDate >= 1 && currDate <= 12){
  greet= 'Good Morning';
  cssStyle.color = 'green';
}else if(currDate>=12 && currDate< 19){
  greet = 'Good Afternoon';
  cssStyle.color = 'orange';
}else{
  greet = 'Good Night';
  cssStyle.color = 'blue'
}


ReactDOM.render(
  <h1>Hello Sir , <span style={cssStyle}> {greet} </span> , This is Yogita.</h1>,


  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
