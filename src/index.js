import React from 'react';
import ReactDOM from 'react-dom';
function HelloWorld(){
  return <h1>Hello, World!</h1>
}
ReactDOM.render(
  <React.StrictMode>
    <HelloWorld/>
    <HelloWorld/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
