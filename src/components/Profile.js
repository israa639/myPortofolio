import React from 'react'

export  function Profile() {
  return (
    <section className='Profile row' id='Profile'>
      <p className="location text-success col-12 text-center">Cairo,Egypt</p>
           <img src={'assets/tag.svg'} className="col-12 text-center align-self-center avatar"style={{height:"200px"}} alt="html tag brackets"></img>
       
       
        
        <div className="bio col-12 text-center align-self-center">
        
       <h1 >Israa Ezzat</h1>
       <h2 > Fresh graduate </h2>
        <p >
         Bachelor of computer and Information Science Ain Shams University 2022
        </p>
        <p>entry-level front-end</p>
        
        
        </div>
          
       
    </section>
  )
}
