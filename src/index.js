import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';
//import { HashRouter } from 'react-router-dom';
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/bootstrap/js/src/collapse.js";
import "../node_modules/react-popper/dist/index.umd"


import {
        createHashRouter,
        RouterProvider
       } from 'react-router-dom';


const router = createHashRouter([
{
  path: "/*",
  element: <App />,
}
]);
      
function liveViews(response) {
  document.getElementById('visits').innerText = response.value;
}
// The function is called in the CDN on HTML.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
