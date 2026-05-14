import React from 'react'

function Keypad(){
    function handleClick(e){
        console.log(e.target.value)
        console.log("Entering password.....")
    }
    return(
        <div>
            <input type="password" onClick={handleClick}/>
        </div>
    )
}
export default Keypad;