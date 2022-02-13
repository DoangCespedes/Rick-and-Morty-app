import { Link } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import Swal from "sweetalert2";
import { Loading } from '../Loading';
import { Personaje } from './Personaje';
export const PintarPersonajes = ({nombrePersonaje}) => {

    const [personaje, setPersonaje] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      consumirApi(nombrePersonaje)
    
    }, [nombrePersonaje]);
    
const consumirApi = async(nombre) => { 
    setLoading(true);
    try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`)
        if (!res.ok) {
            console.log(res);
            return Swal.fire({
                title: "Error!",
                text: `no existe ${nombre}`,
                icon: "error",
            });

        }
        
        const data = await res.json();
        console.log([...data.results]);
        setPersonaje([...data.results]);
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="row mt-2">
            {personaje.map((item) => (
                <Personaje key={item.id} character={item} >
                    <Link to={`/${item.id}`}>
                            {item.id} - {item.title} - {item.image} 
                    </Link>
                </Personaje>
            ))}
        </div>
    );
};


