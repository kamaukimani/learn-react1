import React from 'react'

function Header1({isOn,onDarkModeClick}){
    return(
         <header>
            <h1>Shopster</h1>
             <button 
            style={{background:"yellow"}}
            onClick={onDarkModeClick}>
            {isOn ?"Dark Mode" : "Light Mode"}</button><br/>
           </header>
    )
}
export default Header1;