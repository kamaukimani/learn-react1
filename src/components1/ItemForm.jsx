import React,{useState} from 'react'
import { v4 as uuid } from "uuid";

function ItemForm(props){
    const {items,setItems}=props
    const initialFormData={
        name:"",
        category:"Produce"
    }
    const [formData,setFormData]=useState(initialFormData)
    function handleSubmit(event){
        event.preventDefault()
        
        const newItem={
            id:uuid(),
            name:formData.name,
            category:formData.category
        }
        setItems([...items,newItem])
        //console.log(items)
        setFormData(initialFormData)
    }
    
    function handleAddItem(event){
        const name=event.target.name;
        const value=event.target.value;
        setFormData({
            ...formData,
            [name]:value,
        })
        //console.log(items)
    }
        
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" name="name" value={formData.name} onChange={handleAddItem}/>
                </label>
                <label>
                    Category:
                    <select name="category" value={formData.category} onChange={handleAddItem}>
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Dessert">Dessert</option>
                    </select>
                </label>
                <button type="submit">Add To List</button>
            </form>
            
        </div>
    )
}

export default ItemForm;