import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home/Home'
import CamionForm from './Camiones/CamionForm'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes,HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <HashRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/camionForm/:id' element={<CamionForm/>}/>
    </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

