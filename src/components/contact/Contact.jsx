import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {FaTelegram} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container conatct__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>roya.raastgar@gmail.com</h5>
            <a href="mailto:roya.raastgar@gmail.com"target='_blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            <FaTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>royacodes</h5>
            <a href="https://web.telegram.org/z/#-1441719524"target='_blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+989396770887</h5>
            <a href="https://api.whatsapp.com/send?phone" target='_blank'>Send a Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input type="text" name='name' placeholder='Your Ful Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
