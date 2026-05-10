import React from 'react'
import ProjectItem from './ProjectItem'

function ProjectList({projects}){
    console.log(projects)
    const projo=projects.map((project)=>{
        return <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies} />
    })
    return(
        <div>
            <h3>My Projects</h3>
            {projo}
        </div>
    )
}

export default ProjectList;