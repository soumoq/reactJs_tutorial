import React from 'react'


export const Greet = ({name,type,children}) => {

    return (
        <dif>
            <h1>Hello {name} a.k.a {type}</h1>
            {children}
        </dif>
    )
}

