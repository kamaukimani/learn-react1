import React,{useState} from 'react'

function Form(){
    const initialFormData={
        firstName:"",
        lastName:"",
        admin:false
    }
    const [formData,setFormData]=useState(initialFormData)
    function handleChange(event){
        const name=event.target.name;
        let value=event.target.value;
        if(event.target.type==="checkbox"){
            value=event.target.checked
        }
        setFormData({
            ...formData,
            [name]:value
        })

        //another way
        // const {name,value,type,checked}=event.target
        // setFormData({
        //     ...formData,
        //     [name]:type==="checkbox" ? checked : value
        // })
    }
    function handleSubmit(event){
        event.preventDefault()
        fetch("http://localhost:3000/persons",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(formData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setFormData(initialFormData)
            })
        .catch(error=>console.log(error))
    }

    return(
        <div>
            Hello....Let's build our new Form component
             <form onSubmit={handleSubmit}>
                <input
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                /><br/>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                /><br />
                <input 
                    type="checkbox"
                    name="admin"
                    checked={formData.admin}
                    onChange={handleChange}
                />
                <input type="submit" value="Click To Submit" />
                    
            </form>
        </div>
    )
}
export default Form