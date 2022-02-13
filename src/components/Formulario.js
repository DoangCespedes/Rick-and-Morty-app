
import { Button,TextField } from '@material-ui/core';
import React, { useState } from 'react';
import Swal from "sweetalert2";
export const Formulario = ({setNombrePersonaje}) => {
    const [nombre, setNombre] = useState('');
    const handleChange = (e) =>{
        setNombre(e.target.value);
    }
    const handleSubmit = (e) =>{
            e.preventDefault();

            if (!nombre.trim()) {
                return Swal.fire({
                    title: "Error!",
                    text: "Nombre ogligatorio",
                    icon: "error",
                });
            }
    
            setNombre(nombre.trim().toLowerCase());
            setNombrePersonaje(nombre);
            console.log(nombre);
    }

  return (
    <form
        
        onSubmit={handleSubmit}>
            
            <TextField 
                fullWidth
                type="text"
                label="Personaje"
                variant="outlined"
                placeholder="Escribe el personaje que deseas buscar"
                onChange={handleChange}
                id="outlined-basic" 
                size="small"
                value={nombre}
                name= {nombre}
            />
            <Button 
                color="primary" variant="outlined" size="small"
                 type="submit">
                    Buscar
            </Button>

    </form>
    );
};
