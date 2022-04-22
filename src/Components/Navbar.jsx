import React from 'react'

function Navbar() {
  return (
    <nav id='navbar'>
        <article id='logo'>
          <h1>Lukas Portfolio</h1>
        </article>
        <article id='nav-right-side'>

          <div className='nav-btn-div'>
          <a href='#about-section' className='nav-btn mini-x-shake'>About</a>
          </div>
            
          <div className='nav-btn-div'>
          <a href='#service-title' className='nav-btn mini-x-shake'>Projects</a>
          </div>
          
          <div className='nav-btn-div'>
          <a href='#' className='nav-btn mini-x-shake'>Contact</a>
          </div>

        </article>
    </nav>
  )
}

export default Navbar