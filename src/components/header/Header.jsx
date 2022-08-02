import React from 'react'
import "./header.css"
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header >
      <div className="container header__container">
      <h4>Hello, I am</h4>
      <h1>Vipin Nautiyal</h1>
      <h4 className="text-light">Frontend Developer</h4>
      <CTA/> 
      <HeaderSocials/>
      <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header