import React,{useState} from 'react'
import Form from './Form';
import ShoppingList from './ShoppingList';
import Header from './Header';

function App2(){
    const [isDark,setIsDark]=useState(false)
    function handleDark(){
        setIsDark(isDark=>!isDark)
    }
    const color=isDark ? "black" :"white"
    
    return(
        <div style={{background:color}}>
            {/* Hello, Welcome to my new App
            <Form/> */}
            <Header  isDark={isDark} handleDark={handleDark}/>
            <ShoppingList />
        </div>
    )
}
export default App2;