import React from 'react'
import {ProjectCard} from './ProjectCard.js'
import projectData from '../projectsData.js';
export  function Projects() {
  return (
    <div className='container'>
    <div className="Projects row justify-content-center mt-3" id="Projects">
      
    {
      projectData.map(project=><ProjectCard name={project.name} imgSrc={project.imgSrc} technology={project.technology} srcCodeUrl={project.sourceCodeUrl} demoUrl={project.demoUrl}/>
  )
    }

    <p className='col-12 text-center animated-p'>For academic projects check my github</p>
    </div>
    </div>
  
  )
}
