import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Error } from './vistas/Error';

import App from './App';


ReactDOM.render(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="*" element={<Error />} />
          
        </Route>  
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);


