import react from "react";
import  './title.css';

//exporta a função title 

// export default function Title() {
//     return(
//         <h1 className="title">hello componente title</h1>
//     );
// }

const Title = (props) =>{
    return(
        <h1 className="title">hello {props.text}</h1>
    );
}

export default Title;

//abreviacao da arrow fuction
const Title2 =() => {return(<h1 className="title">hello componente title</h1>)};