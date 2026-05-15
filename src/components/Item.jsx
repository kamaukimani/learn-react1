import React from 'react'

function Item({name,category}){
    return(
        <div>
            <span>Name: {name} </span> 
            <span>Category: {category}  </span>
            {/* <br /> */}
            <button>Add To Cart</button>
        </div>
    )
}
export default Item;