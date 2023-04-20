import React from 'react'
import './about.css'
import ME from '../../assets/me.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import { useTranslation } from 'react-i18next';


const about = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>5+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Skills</h5>
              <small>4+ Programming Languages</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>6+ Completed</small>
            </article>
          </div>
          <p>
          I've completed my bachelor's degree in computer science at University of Tabriz, and also my master's degree in computer science at university of Tabriz. My master's thesis is about Intrusion Detection Systems.

I'm an analytical and detail oriented client side developer with experience in designing, developing,
testing and supporting web and mobile applications in Java, Kotlin, Dart and JavaScript.

I've recently contributed in an IoT project. I developed a smart home android application and PWA with flutter and dart.

In Addition, I'm working on a Crypto Gateway project which transfers USDT on the Tron network and would integrate in every business such as online shops. I implemented the front side of this project with ReactJS.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about