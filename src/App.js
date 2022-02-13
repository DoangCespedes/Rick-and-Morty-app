import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { Outlet } from "react-router-dom";
import { Formulario } from './components/Formulario';
import { Header } from './components/Header';
import { PintarPersonajes } from './components/PintarPersonajes';


const App = () => {
    const [nombrePersonaje, setNombrePersonaje] = useState('');

  return (
    <>
        <Header/>
          <Box mx={10} >
            <Formulario setNombrePersonaje = {setNombrePersonaje}/>
          </Box>
          <Box
            mx={10} mt={5}
          >
            <PintarPersonajes nombrePersonaje = {nombrePersonaje}/>
          </Box>
    </>
    );
};
   
export default App;
