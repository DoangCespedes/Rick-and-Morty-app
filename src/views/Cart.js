import React from 'react'
import { useParams } from "react-router";
import { UseFetch } from "../hook/UseFetch";

export const Cart = () => {
    let params = useParams();
   
    const { data, error, loading} = UseFetch(
        "https://rickandmortyapi.com/api/character/" + params.id
    );

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error !== "") {
        return <h1>{error}</h1>;
    }

    return (
        <div>
            <h1>
                {data.id} - {data.name} 
            </h1>
            <div className="col-md-4 mb-2">
                <div className="card">
                    <img
                        src={data.image}
                        alt={`imagen-${data.name}`}
                        className="card-img-top "
                    />

                    <div className="card-body">
                        <h5>{data.name}</h5>
                        <p>{data.species}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
