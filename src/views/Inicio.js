import React, { useState } from 'react'
import { Box } from '@material-ui/core';
import { Formulario } from '.././components/Formulario';
import { PintarPersonajes } from '.././components/PintarPersonajes';

export const Inicio = () => {
    const [nombrePersonaje, setNombrePersonaje] = useState('');
  return (
    <div>
        <Box mx={10} >
            <Formulario setNombrePersonaje = {setNombrePersonaje}/>
          </Box>
          <Box
            mx={10} mt={5}
          >
            <PintarPersonajes nombrePersonaje = {nombrePersonaje}/>
          </Box>
    </div>
  )
}
