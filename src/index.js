import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Error } from './views/Error';
import App from './App';
import { Cart } from './views/Cart';
import { Inicio } from './views/Inicio';
import { Its } from './views/Its';


ReactDOM.render(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<Inicio />} />
            <Route path="/:id" element={<Cart />} />
            <Route path="*" element={<Error />} />
            <Route path="/Its" element={<Its />} />
        </Route>
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);


