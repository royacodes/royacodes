import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio8.png'

 
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Smart Home',
    description: 'Home Automation System monitoring and controlling home attributes such as lighting, climate, entertainment systems, and appliances. It also includes home security such as access control and alarm systems. Smart Home Android Application and PWA are implemented via Flutter/Dart and communicated with IoT devices by MQTT Protocol.',
  },
  {
    id: 2,
    image: IMG6,
    title: 'Crypto Gateway',
    description: 'A payment processor for USDT currency on Tron network enabling any business to accept USDT payments. A Kafka-centric microservice architecture is implemented in this project.',
  },
  {
    id: 3,
    image: IMG2,
    title: 'Ecommerce Solution',
    description: 'A multi-vendor and single-vendor ecommerce application that sellers can manage their shops. It also compatible with any payment systems. Ecommerce Android Application and PWA are developed by Flutter/Dart',
  },
  {
    id: 4,
    image: IMG3,
    title: 'Shast Application',
    description: 'Application for managing bank accounts with capability of money transfering, design gift cards, buying tickets and so on. Note that this application is implemented by the order of e National Bank of Iran. Shast Android Application is implemented via Java for devices that supports android OS.',
  },
  {
    id: 5,
    image: IMG5,
    title: 'AnyPay',
    description: 'Large-scale application that is bound to Mobile POS (MPOS) devices by its payment SDK to transact all transactions by second track of debit card. AnyPay IOS Application is developed by Swift for iPhone and iPad.',
  },
  {
    id: 6,
    image: IMG4,
    title: 'MelliPass',
    description: 'Identity digital authentication system using face recognition and digital signature technology. Melli Pass Android Application is built with Kotlin for Android devices.',
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, description}) => {
            return (
              <article className="portfolio__item" key={id}>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
          {/* <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div> */}
         
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio