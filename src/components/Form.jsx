import React,{useState} from 'react'

function Form({
            firstName,
            lastName,
            newsletter,
            handleFirstName,
            handleLastName,
            handleCheckbox,
            isValid,
            setFirstName,
            setLastName
            })
    {
    
        const[data,setData]=useState([])
        function handleSubmit(event){
            event.preventDefault()
            fetch("http://localhost:3000/persons")
                .then(res=>res.json())
                .then(data=>{
                    setData(data)
                    
                })
                .catch(error=>console.log(error))
            setFirstName("")
            setLastName("")
            
        }
        const persons=data.map(person=>(
            <li key={person.id} > FirstName: {person.firstName}  <br/>LastName: {person.lastName}</li>
        ))

        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstname">Enter Firstname</label><br/>
                    <input type="text" id="firstname" value={firstName} onChange={handleFirstName} />
                    {isValid ? <span style={{color:"red"}}>{isValid}</span> : null}<br/>
                    <label htmlFor="lastname">Enter Lastname</label><br/>
                    <input type="text" id="lastname" value={lastName} onChange={handleLastName}/><br/>
                    <label htmlFor="newsletter">Subscribe To Our Newsletter</label>
                    <input 
                        type="checkbox"
                        id="newsletter"
                        checked={newsletter}
                        onChange={handleCheckbox}
                    /><br/>
                    <input type="submit" value="Click To Submit" />
                </form>
                <ul>
                    {persons}
                </ul>
            </div>
        )
    }



export default Form;