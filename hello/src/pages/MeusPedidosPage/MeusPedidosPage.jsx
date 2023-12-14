import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';

const MeusPedidosPage = () => {

    const {theme} = useContext(ThemeContext);

    return (
        
        <>
        <h1> Meus pedidos</h1>
        <h1> Página Privada</h1>
        <p>{theme}</p>
        </>

    );
};

export default MeusPedidosPage;