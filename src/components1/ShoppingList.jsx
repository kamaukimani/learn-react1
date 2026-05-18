import React,{useState} from 'react'
import items1 from '../data/item1';
import ItemForm from './ItemForm';
import Filter from './Filter';


function ShoppingList(){
    const [items,setItems]=useState(items1)
    const [search,setSearch]=useState("All")
    //console.log(items)
    const itemsToDisplay=items.filter((item)=>{
        if(search.toLowerCase()==="all") return true;
        //return item.category===search
        return item.category.toLowerCase().includes(search.toLowerCase())
    })
    function handleSearch(event){
        setSearch(event.target.value)
    }
    // const showItems=items.map(item=>(
    //     <li key={item.id}> Name: {item.name} Category: {item.category}</li>
    // ))
    const showItems=itemsToDisplay.map(item=>(
        <li key={item.id}>Name: {item.name} Category: {item.category}</li>
    ))
    return(
        <div>
            <ItemForm items={items} setItems={setItems}/>
            <Filter handleSearch={handleSearch}/>
            <h2>My Shopping List Items:</h2>
            <ol>
                {showItems}
            </ol>

        </div>
    )
}
export default ShoppingList;