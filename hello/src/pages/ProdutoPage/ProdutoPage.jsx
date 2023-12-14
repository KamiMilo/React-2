import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';

const ProdutoPage = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <div>
            <h1>pagina de produtos</h1>
            <p>{theme}</p>
        </div>
    );
};

export default ProdutoPage;