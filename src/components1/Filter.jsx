import React from 'react'
function Filter(props){
    const {handleSearch}=props
    return(
        <div>
            <input type="text" name="search" placeholder="Search..." onChange={handleSearch}/>
            <select name="filter" onChange={handleSearch}>
                <option value="All">Filter By Category</option>
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Dessert">Dessert</option>
            </select>
        </div>
    )
}
export default Filter;