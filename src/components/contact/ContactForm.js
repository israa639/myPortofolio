import React from 'react'
import { send } from 'emailjs-com';
export  function ContactForm() {
    const [formData,setFormData]=React.useState({name:'',email:'',message:''});
  const handleChange=(event)=>{
    setFormData((prevData)=>(
       {...prevData,
        [event.target.name]:event.target.value}
      
    ))
  }
  const handleSubmit=(event)=>{
   event.preventDefault();
    send(
      'service_itvz7xn',
      'template_pxlq1n8',
        formData,
      '2pZH4svMmDGlwtIKk'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
      setFormData({name:'',email:'',message:''});
  };
   
  
  return (
    <form className='form col-xs-12 col-md-5' onSubmit={handleSubmit}>
      <input 
      type='text'
       placeholder='name' 
       className='name-input form-control text-info col-xs-12 m-1' 
       name="name" 
       value={formData.name} onChange={handleChange}/>

      <input 
      placeholder='Email' 
      className='email-input form-control col-xs-12 m-1' 
      name='email'
       value={formData.email}
       onChange={handleChange}
       />
      <textarea 
      placeholder='write a message...'
       className='message-textarea form-control col-xs-12 m-1' 
       name='message' 
       value={formData.message}
       onChange={handleChange}/>
      <button type='submit' >Submit</button>
      </form>
  )
}
