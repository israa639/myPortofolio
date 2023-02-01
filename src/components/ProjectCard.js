import React from 'react'

export function ProjectCard({name,imgSrc,technology,srcCodeUrl,demoUrl}) {
  return (
 
    <div className="card col-xs-10 col-md-5 m-1 p-2" style={{backgroundColor:"rgba(0,0,0,0.98)"}}  key={name}>
    <img src={`assets/${imgSrc}`} className="card-img-top" alt={name}/> 
  <div className="card-body">
 <h5 className="card-title text-light">{name}</h5>

 <a href={demoUrl}><span className="col-4 badge bg-info m-2">demo</span></a>
 <a href={srcCodeUrl}><span className="col-4 badge bg-info m-2">src code</span></a>
 <div className='row'>
{technology.map(item=><span className="badge col-3 bg-primary m-1">{item}</span>)}
</div>
 </div>
</div>
      
   
  )
}
