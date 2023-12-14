import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';

const ImportantePage = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <> <h1> importante Page</h1> 
            <span>{theme}</span>
        </>
    );
};

export default ImportantePage;