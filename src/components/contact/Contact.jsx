import React,{useRef} from 'react'
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md";
import emailjs from "@emailjs/browser"
import {FaDiscord} from "react-icons/fa"


const Contact = () => {
  const form = useRef()
  const sendEmail = (e)=>{
    e.preventDefault();
    
  emailjs.sendForm('service_xtoej5h', 'template_b62b2k8',form.current,'KjL3eYduKrGcCX35_')

  e.target.reset()
  }



  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>blifeology@gmail.com</h5>
            <a href="mailto:blifeology@gmail.com" target="__blank">Send a message</a>
          </article>
          <article className="contact__option">
            <FaDiscord/>
            <h4>Discord</h4>
            <h5></h5>
            <a href="https://discordapp.com/users/Order&Chaos#0469" target="__blank">Send a message</a>
          </article>
        </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Your Full Name' required />
            <input type="email" name="email" placeholder='Your Email' required />
            <textarea  name="message" placeholder='Your Message' rows="7" required></textarea>
            <button className='btn btn-primary' type='submit'>Send Message</button>
          </form> 
      </div>
    </section>
  )
}

export default Contact