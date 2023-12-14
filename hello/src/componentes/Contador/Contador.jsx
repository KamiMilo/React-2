import React, { useState } from 'react';

const Contador = () => {
    //UseState : estado /Dado do componente isolado
    const [contador, setContador]= useState(0)

    function handleIncrementar() { 
        setContador(contador + 1)     
    }

    function handleDecrementar() {  
        // (contador === 0 ? 0 : contador -1)
        if (contador === 0) {
            setContador(0)
            return
        }
        setContador(contador - 1)
    }

    return (
        <div>
            <h1>Contador</h1>

            <p>{contador}</p>
            {/* encapsular a função com uma arrow fuction ,pq se não ele executa assim que o navegador roda */}
            <button onClick={() => {handleIncrementar()}} 
            >Incrementar</button>

            <button onClick={() => {handleDecrementar()
            }}>Decrementar</button>

        </div>

    );
};

export default Contador;

