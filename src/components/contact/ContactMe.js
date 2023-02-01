import React from 'react'
import {ContactForm} from '../index.js'
export  function ContactMe() {
  
  return (
    <section className="ContactMe row" id="ContactMe">
      <section className='contact-info col-xs-12 col-md-6 text-center'>
      <h1>Get in touch</h1>
      <p className="fa fa-envelope">israaezzat.133@gmail.com</p>
      </section>
      <ContactForm/>
    </section>
  )
}
