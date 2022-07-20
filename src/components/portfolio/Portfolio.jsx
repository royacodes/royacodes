import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'


const data = [
  {
    id: 1,
    image: IMG3,
    title: 'Portfolio 1',
    github: 'https://github.com/royacodes',
    demo: 'https://allstarsoft.ir/'
  },
  {
    id: 2,
    image: IMG4,
    title: 'Portfolio 2',
    github: 'https://github.com/royacodes',
    demo: 'https://allstarsoft.ir/'
  },
  {
    id: 3,
    image: IMG5,
    title: 'Portfolio 4',
    github: 'https://github.com/royacodes',
    demo: 'https://allstarsoft.ir/'
  },
  {
    id: 4,
    image: IMG6,
    title: 'Portfolio 4',
    github: 'https://github.com/royacodes',
    demo: 'https://allstarsoft.ir/'
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portflio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article className="portfolio__item" key={id}>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
         
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio