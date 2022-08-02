import React from 'react'
import "./footer.css"
import {FaFacebook} from "react-icons/fa"
import {AiOutlineGithub} from "react-icons/ai"
import {MdCode} from "react-icons/md"

const Footer = () => {
  return (
    <footer>
    <a href="#" className='footer__log'></a>
    <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
      <a href="https://github.com/nautiyalvipin/" target="__blank" ><AiOutlineGithub/></a>
      <a href="https://facebook.com" target="__blank"><FaFacebook/></a>
      <a href="https://codedamn.com/user/decicrypt" target="__blank"><MdCode/></a>
    </div>
    <div className="footer__copyright">
      <small>&copy;vipinnautiyal.com All rights reserved. </small>
    </div>
    </footer>
    )
}

export default Footer