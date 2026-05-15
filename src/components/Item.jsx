import React,{useState} from 'react'

function Item({name,category}){
    const [isClicked,setIsClicked]=useState(false)
    function handleClick(){
        setIsClicked(isClicked=>!isClicked)
    }
    const line=isClicked? "line-through":null
    return(
        <div>
            <span>Name: {name} </span> 
            <span>Category: {category}  </span>
            {/* <br /> */}
            <button 
                style={{textDecoration:line,backgroundColor:"light-purple"}}
                onClick={handleClick}>
                {isClicked ? "Remove From Cart" : "Add To Cart"}
            </button>
        </div>
    )
}
export default Item;