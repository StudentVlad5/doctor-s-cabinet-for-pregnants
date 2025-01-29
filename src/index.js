import React from 'react';
// import ReactDOM from "react-dom/client";
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { GlobalStyle } from 'components/baseStyles/GlobalStyle';

// ReactDOM.createRoot(document.getElementById("root")).render(
//   // <React.StrictMode>
//     <BrowserRouter basename="/">
//       <GlobalStyle />
//       <App />
//     </BrowserRouter>
//   // </React.StrictMode>
// );

ReactDOM.render(
  <BrowserRouter basename="/">
    <GlobalStyle />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
