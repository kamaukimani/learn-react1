import React from 'react'

function Header(props){
    const {name}=props
    return(
        <header>{name}</header>
    )
}
export default Header;