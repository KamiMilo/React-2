import React from "react";
import './card-evento.css';

const CardEvento = (props) => {
    return (
        //aqui vai ser a expressão

        <div className="card-evento">
            <h3 className="card-evento__titulo">{props.titulo}</h3>
            <p className="card-evento__text">{props.texto}</p>
            <a href="" className="card-evento__conection">{props.textolink}</a>
        </div>

    )
};

export default CardEvento;