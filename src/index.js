import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let curDate = new Date(2020 , 8,8,22);
curDate = curDate.getHours();
let greeting ="";
if(curDate >= 1 && curDate<12){
greeting = "Good Morning";
}
else if(curDate>=12 && curDate<17){
greeting = "Good Evening";
}
else {
  greeting = "goodnight";

}

ReactDOM.render(
  <>
  <h1>Hello Friends,  {greeting} </h1>
  </>
  ,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
