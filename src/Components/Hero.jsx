import React from 'react'
import BACKGROUND_IMG from '../media/img/programming_img.jpg'


function Hero() {
  return (
    <section id='hero-section'>
      <img src={BACKGROUND_IMG} alt="Background color on a beautiful ocian" />
        <article className='light-text ' id='hero-article'>
            <h1 id='portfolio-title'>Lukas Hagberg <br /> Frontend developer </h1>
            <h2 style={{textAlign: 'center', marginBottom: '50px'}}>Passionate, curious and <br /> determined for life long learning</h2>
            <div id='portfolio-btn'>
                <h1 className='x-shake'><a className='btn' href="#service-title">See my projects</a></h1>
            </div>

        </article>
    </section>
  )
}

export default Hero