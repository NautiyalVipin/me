import React from 'react'
import "./portfolio.css"
import birdimg from "../../assets/BIRD.png"
import json from "../../assets/jsonfinal.png"
import masssively from "../../assets/massively.png"
import quiz from "../../assets//quiz.png"

const Portolfio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Porftolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={birdimg} alt="birdimg" />
          </div>
          <h3>A working social media app like twitter based on localStorage, React and JavaScript.</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/NautiyalVipin/bird" className='btn' target="__blank">Github</a>
          <a href="https://nautiyalvipin.github.io/bird" className='btn btn-primary' target="__blank">Live Demo</a>
          </div>
          <div className='portfolio__tags'> 
          <small className='text-light'>#html</small>
          <small className='text-light'>#tailwind</small>
          <small className='text-light'>#react </small>
          <small className='text-light'>#fetchApi </small>
           </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={json} alt="birdimg" />
          </div>
          <h3>A Proxy server for all the requests received at the jsonplaceholder.typicode.com endpoint</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/NautiyalVipin/jsonproxyholder" className='btn ' target="__blank">Github</a>
          <a href="https://codedamn.com/project/jsonproxyholder/code/6zrfVtVEtCYG9qTwfFDDC" className='btn btn-primary' target="__blank">Live Demo</a>
          </div>
          <div className='portfolio__tags'> 
          <small className='text-light'>#node </small>
          <small className='text-light'>#express </small>
          <small className='text-light'>#react </small>
          <small className='text-light'>#reactQuery </small>
           </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={masssively} alt="birdimg" />
          </div>
          <h3> A long, responsive landing page with a responsive menu</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/NautiyalVipin/massively" className='btn ' target="__blank">Github</a>
          <a href="https://nautiyalvipin.github.io/Massively" className='btn btn-primary' target="__blank">Live Demo</a>
          </div>
          <div className='portfolio__tags'> 
          <small className='text-light'>#html</small>
          <small className='text-light'>#css</small>
          <small className='text-light'>#javascript </small>
           </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={quiz} alt="birdimg" />
          </div>
          <h3>An interactive, countdown based quiz that stores a high score leaderboard in local storage.
</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/NautiyalVipin/Quiz-App-React/" className='btn' target="__blank">Github</a>
          <a href="https://nautiyalvipin.github.io/Quiz-App-React/" className='btn btn-primary' target="__blank">Live Demo</a>
          </div>
          <div className='portfolio__tags'> 
          <small className='text-light'>#html</small>
          <small className='text-light'>#css</small>
          <small className='text-light'>#javascript</small>
          <small className='text-light'>#react </small>
           </div>
        </article>
      </div>

    </section>
  )
}

export default Portolfio