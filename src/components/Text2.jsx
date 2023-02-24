import React from "react";
import './Text2.css'

function Text2(props){
    console.log(props);
    return(
        <>
        <p>
            Hello, {props.name}
        </p>
        <p>
            I'm, {props.age} years old.
        </p>
        <p>
            I live in {props.city}.
        </p>
        </>
    )
}

export default Text2