import React from 'react'
function Display({firstName,lastName}){
    return(
        <div>
            <h1>My firstname: {firstName}</h1>
            <h2>My lastname: {lastName}</h2>
        </div>
    )
}

export default Display;