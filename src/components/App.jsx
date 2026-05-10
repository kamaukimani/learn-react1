import React from 'react'
import NavBar from './Nav'
import Home from './Home';
import About from './About';
import Links from './Links';
import ProjectList from './ProjectList';
import user from '../data/user'
function App(){
    return(
        <div>
            Hello World!
            <NavBar />
            <Home name="Kevin" city="Nyeri" color="blue" />
            <About isBio={true}/>
            <Links github="https://github.com/kamaukimani" linkedIn="https://www.linkedin.com/in/paul-kimani-222a29338/"/>
            <ProjectList projects={user.projects} />
        </div>
    )
}
export default App;