import React from 'react'


export const Greet = (props) => {
    console.log(props);
    return (
        <dif>
            <h1>Hello {props.name} a.k.a {props.type}</h1>
            {props.children}
        </dif>
    )
}

