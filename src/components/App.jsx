import React from 'react'
import NavBar from './Nav'
import Home from './Home';
import About from './About';
import Links from './Links';
import ProjectList from './ProjectList';
import user from '../data/user'
import Header from './Header';
import About1 from './About1'
import ArticleList from './ArticleLList';
import blogData from '../data/blog';
function App(){
    console.log(blogData)
    return(
        <div>
            Hello World!
            <NavBar />
            <Home name="Kevin" city="Nyeri" color="blue" />
            <About isBio={true}/>
            <Links github="https://github.com/kamaukimani" linkedIn="https://www.linkedin.com/in/paul-kimani-222a29338/"/>
            <ProjectList projects={user.projects} />
            <Header name={blogData.name}/>
            <About1 image={blogData.image} about={blogData.about}/>
            <ArticleList posts={blogData.posts}/>
        </div>
    )
}
export default App;