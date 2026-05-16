import React,{useContext} from 'react'
import { UserContext } from '../context/User';
 function Header2({theme,setTheme}){
    const {user,setUser}=useContext(UserContext)
    const defaultUser={
        name:"Paul",
        age:45
    }
    function handleLogIn(){
        if(user){
            setUser(null)
        }else{
            setUser(defaultUser)
        }
    }
    return(
        <div>
            <button onClick={handleLogIn}>{user ? "Log Out" : "Log In"}</button>
        </div>
    )
 }
 export default Header2;