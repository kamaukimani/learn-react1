import React,{useState} from 'react';
import Item from './Item';
import itemsArray from '../data/item';
import Filter from './Filter';
function ShoppingList(){
    const [filterBy,setFilterBy]=useState("All")
    const [items,setItem]=useState(itemsArray)
    console.log(items)
    function handleChange(event){
        setFilterBy(event.target.value);
    }
    const itemsToDisplay=items.filter(food=>{
        if(filterBy==="All"){
            return true;
        }else{
            return food.category===filterBy
        }
    })
    // const itemList=items.map(item=>(
    //     <Item key={item.key} name= {item.name}  category= {item.category} />
    // ))
     const itemList=itemsToDisplay.map(item=>(
        <Item key={item.key} name= {item.name}  category= {item.category} />
    ))
    return(
        <div>
           <Filter onCategoryChange={handleChange} />
            <ul>
                {itemList}
            </ul>
        </div>
    )
}
export default ShoppingList;