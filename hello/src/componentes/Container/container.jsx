import React from "react";
import './container.css'

const Container = (props) => {
    return (
        <div className="Container">
            {/* children : significa que a props pode receber outros elementos. */}
            {props.children}
        </div>
    )
}

export default Container;