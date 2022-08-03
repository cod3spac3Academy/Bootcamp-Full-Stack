import { Fragment } from "react";



export default function FirstComponent (props){

    console.log(props, typeof props);
    console.log(props.title);

    return (
        <Fragment>
            <h3>{props.title}</h3> 
            <small>{props.date}</small>
            <p>Lorem dfgsdh dfg sdgu sdfg dfgadfigdjf adfdfgnasdjnfgd 

            </p>
        </Fragment> /*esto es lo mismo que poner dentro la etiqueta Fragment, la cual sustituye al div*/
    )
}

// export default FirstComponent//Alternativa
// SOLO se puede un export default por archivo

function SecondComponent (props){
    return (
        <Fragment>
            <h1>Soy un segundo componente</h1>
        </Fragment>
    )
}

function ThirdComponent (props){
    return (
        <Fragment>
            <h1>Soy un tercer componente</h1>
        </Fragment>
    )
}

export {SecondComponent, ThirdComponent};

