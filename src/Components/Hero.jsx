import React from 'react'
import BACKGROUND_IMG from '../media/img/ocean-g7b1afebdb_1280.jpg'


function Hero() {
  return (
    <section id='hero-section'>
      <img src={BACKGROUND_IMG} alt="Background color on a beautiful ocian" />
        <article className='light-text ' id='hero-article'>
            <h1 id='portfolio-title'>Lukas Portfolio</h1>
            <div id='portfolio-btn'>
                <h1 className='x-shake'><a className='btn' href="#about-section">Get to know me</a></h1>
            </div>

        </article>
    </section>
  )
}

export default Hero