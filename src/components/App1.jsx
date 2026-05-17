import React,{useState} from 'react'
import Header2 from './Header2';
import Profile from './Profile';
import { UserProvider } from '../context/User';
import Form from './Form';
import Display from './Display';

function App1(){
    const [theme,setTheme]=useState('dark')
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [newsletter,setNewsletter]=useState(false)
    const [isValid,setIsValid]=useState(null)
    function handleFirstName(event){
        const name=event.target.value
        setFirstName(name)
        if(name==="Paul"){
            setIsValid(null)
        }else{
            setIsValid(`${name} is not Paul`)
        }
        
    }
    function handleLastName(event){
        setLastName(event.target.value)
    }
    function handleCheckbox(event){
        setNewsletter(event.target.checked)
    }
   
    return(
        <div>
            Hello lets learn context
            <UserProvider>
                <Header2 theme={theme} setTheme={setTheme}/>
                <Profile theme={theme}/>
            </UserProvider>
            <Form firstName={firstName} setFirstName={setFirstName}
                handleFirstName={handleFirstName}
                lastName={lastName} setLastName={setLastName} handleLastName={handleLastName}
                newsletter={newsletter} setNewsletter={setNewsletter} handleCheckbox={handleCheckbox}
                isValid={isValid}
            />
            <Display
                firstName={firstName}
                lastName={lastName}
            />
        </div>
    )
}
export default App1;