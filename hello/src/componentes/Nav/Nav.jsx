import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../Context/ThemeContext';



const Nav = () => {
    const{theme,setTheme} = useContext(ThemeContext);

    const toogleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <nav>
            <Link to="/" > Home</Link>
            <Link to="/produtos" > Produtos</Link>
            <Link to="/login" > Login</Link>
            <Link to="/meus-pedidos" > Meus Pedidos</Link>
            <Link to="/importante" > Importante</Link>

            <button onClick={toogleTheme}>{theme}</button>
        </nav>
    );
};

export default Nav;