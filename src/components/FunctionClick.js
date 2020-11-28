import React from 'react'

function FunctionClick() {

    function buttonClick(){
        console.log('click');
    }

    return (
        <div>
            <button onClick={buttonClick}>click</button>
        </div>
    )
}

export default FunctionClick
