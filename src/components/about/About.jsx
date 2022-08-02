import React,{useState} from 'react'
import {FaAward} from "react-icons/fa"
import {FiUser} from "react-icons/fi"
import {MdOutlineWorkOutline} from "react-icons/md"

import "./about.css"
import me from "../../assets/about.jpg"

const About = () => {
    const [loading,setLoading] = useState(false)
  
  const aboutMe="Hi, I'm a self-taught web developer from New Delhi. My goal is to deliver business value while also leveling up my skills. I am from a system administration background, although my love and curiosity for programming made me switch gears, and I started my web development journey full-time about an year ago. Currently, I'm looking for an entry-level position as a React Developer."


  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={me} alt="aboutimage" />
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
          <div><FaAward className='about__icon'/>
            <h5>
              Qualification(2010-2014)</h5>
            <small>Bacherlor's Of Technology in Electronics and Communication Technology</small><br />
            <small>ITS Engineering College, Greater Noida</small>
            </div>
            <div>
            <MdOutlineWorkOutline className='about__icon'/>
            <h5>HCL Technologies(2016 -2019)</h5>
            <small> Office 365 Technial Service Engineer</small><br />
            <small> Sector 126 Noida</small>
            </div>
            <div>
            <MdOutlineWorkOutline className='about__icon'/>
            <h5>
            Concentrix(2019)</h5>
            <small> Office 365 Technial Service Engineer</small><br />
            <small> Gurugram</small><br />
            </div>
          </article>
          <article className="about__card">
            <FiUser className='about__icon'/>
            <p onClick={()=>setLoading(e=>!e)}>{loading?aboutMe:(<span>{aboutMe.slice(0,122)}...read more</span>)}
       </p>
       <a href="#contact" className='btn btn-primary'>Contactme</a>
          </article>
        </div>  
      
      </div>
      </div>
    </section>
  )
}

export default About