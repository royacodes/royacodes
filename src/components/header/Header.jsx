import React from 'react'
import './header.css'
import CTA from './CTA'
// import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Roya</h1>
        <h5 className="text-light">Mobile Developer</h5>
        <CTA />
        {/* <HeaderSocials/> */}
          {/* <img src={ME} alt="" className='me' /> */}
        {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}
      </div>
    </header>
  )
}

export default Header