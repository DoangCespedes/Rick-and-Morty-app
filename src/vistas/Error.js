import React from 'react';
import { Link } from 'react-router-dom';

export const Error = () => {
  return (
        <div>
            <h1>404</h1>
            <Link to="/" className="btn btn-outline-dark">
                Inicio
            </Link>
        </div>
    )    
};
