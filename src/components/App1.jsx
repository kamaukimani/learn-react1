import React,{useState} from 'react'
import Header2 from './Header2';
import Profile from './Profile';
import { UserProvider } from '../context/User';

function App1(){
    const [theme,setTheme]=useState('dark')
    return(
        <div>
            Hello lets learn context
            <UserProvider>
                <Header2 theme={theme} setTheme={setTheme}/>
                <Profile theme={theme}/>
            </UserProvider>
        </div>
    )
}
export default App1;