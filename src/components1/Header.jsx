import React from 'react';

function Header({isDark,handleDark}){
    return(
        <header>
            
            <button onClick={handleDark}
                style={{background:"red"}}
                >
                {isDark ? "Light Mode" : "Dark Mode"}
            </button>
            <h1 style={{color:"blue"}}>Welcome to my New controlled Lab</h1>
        </header>
    )
}
export default Header;