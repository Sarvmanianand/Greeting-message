import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let curDate = new Date(2020 , 8,8,14);
curDate = curDate.getHours();
let greeting ="";
const cssStyle = { };
if(curDate >= 1 && curDate<12){
greeting = "Good Morning";
cssStyle.color = 'green';
}
else if(curDate>=12 && curDate<17){
greeting = "Good Evening";
cssStyle.color = 'orange';
}
else {
  greeting = "goodnight";
   cssStyle.color = 'black';
}
ReactDOM.render(
  <>
  <div>
  <h1>Hello Sir, <span style= {cssStyle}> {greeting} </span></h1>
  </div>
  </>
  ,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
