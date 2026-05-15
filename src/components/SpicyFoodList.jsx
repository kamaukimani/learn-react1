import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data/food";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy,setFilterBy]=useState("All");

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    setFoods([...foods,newFood]);
  }
  function handleRemoveFood(id){
        const updated=foods.filter(food=>food.id !=id)
        setFoods(updated)
  }
  function handleHeatIncrease(id){
    const update=foods.map(food=>{
        if(food.id===id){
            return {
                ...food,
                heatLevel:food.heatLevel+1
            }
        }else{
            return food
        }
    })
    setFoods(update)
  }
  const foodsToDisplay=foods.filter(food=>{
    if(filterBy==="All"){
        return true;
    }else{
        return food.cuisine===filterBy
    }
  })
  //console.log(foodsToDisplay)

//   const foodList = foods.map((food) => (
//     <li key={food.id} onClick={()=>handleHeatIncrease(food.id)} >
//       {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}<br/>
      
//     </li>
//   ));
    const foodList=foodsToDisplay.map(food=>(
        <li
        key={food.id}
        onClick={()=>handleRemoveFood(food.id)}>
        {food.name} | Heat :{food.heatLevel} | Cuisine :{food.cuisine}
        </li>
    ))
    function handleFilter(event){
        setFilterBy(event.target.value)
    }

  return (
    <div>
      <select name="filter" onChange={handleFilter}>
            <option value="All">All</option>
            <option value="American">American</option>
            <option value="Sichuan">Sichuan</option>
            <option value="Thai">Thai</option>
            <option value="Mexican">Mexican</option>
    </select>
     <button onClick={handleAddFood}>Add New Food</button>
    <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;