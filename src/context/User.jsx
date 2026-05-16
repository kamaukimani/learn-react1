import React,{useState} from 'react'

const UserContext=React.createContext(); //create the context object

function UserProvider({children}){
    //the value prop will be our context data
    //this value will be available to the child components of this provider

    const [user,setUser]=useState(null)
    
    return<UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>
}
//create the context Provider Component^^^^

export {UserContext,UserProvider}