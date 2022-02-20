import React from 'react';
import { Link } from 'react-router-dom';

export const Personaje = ({ character = ""}) => {
    const { name, image, species } = character;
    
    return (
        <div className="col-md-3 mb-2">
            <Link to={`/${character.id}`}>
                <div className="card">
                    <img
                        src={image}
                        alt={`imagen-${name}`}
                        className="card-img-top"
                    />

                    <div className="card-body">
                        <h5>{name}</h5>
                        <p>{species}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};
