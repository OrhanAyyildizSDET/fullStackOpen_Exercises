import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Years from './Years';
import App1 from './App1';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Years/>
    <App1/>
  </React.StrictMode>
);
// let year = 32
// const refresh = () => {
//   ReactDOM.createRoot(document.getElementById('root')).render(
//     <>
//       <App />
//       <Years name = "Orhan" year = {year}/>
//     </>   
//   )
// }
// setInterval(() => {
//   refresh()
//   if(year < 33)
//     year += 1
// }, 1000)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

