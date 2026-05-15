import React,{useState} from 'react';
import Item from './Item';
import itemsArray from '../data/item';
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
            <select name="filter" onChange={handleChange}>
                <option value="All">Filter by category</option>
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Dessert">Dessert</option>
            </select>
            <ul>
                {itemList}
            </ul>
        </div>
    )
}
export default ShoppingList;