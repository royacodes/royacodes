import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs' 
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>RoyaCodes</a>
      <ul className='permlinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Conatct</a></li>

      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/roya-raastgar/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/royacodes" target="_blank"><FaGithub/></a>
        {/* <a href="https://dribbble.com/roya_rastgar" target="_blank"><FiDribbble/></a> */}
      </div>

      <div className="footer__copyright">
        <small>&copy; RoyaCodes. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer