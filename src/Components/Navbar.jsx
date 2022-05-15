import {React, useState, useEffect} from 'react'

function Navbar() {

  const [menuIsOpen, setMenuIsOpen] = useState(false)

 
  useEffect(() => {
    document.addEventListener('click', (event) => {
      const menu = document.querySelector('.nav-menu')
      const brgr = document.querySelector('.hamburger')
      if (event.target != menu && event.target != brgr) {
        handleMenu()
      }    
       }) 
  }, [])
 




  const handleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
    if (menuIsOpen){
    document.querySelector('.nav-menu').style.width = '47vw'
    } else if (!menuIsOpen) {
    document.querySelector('.nav-menu').style.width = '0vw'
    }
  }

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

          <div onClick={handleMenu} className='hamburger'>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>

          <div className='nav-menu'>
              <a onClick={handleMenu} href='#about-section' className='menu-btn'>About</a>
            
              <a onClick={handleMenu} href='#service-title' className='menu-btn'>Projects</a>
          
              <a onClick={handleMenu} href='#' className='menu-btn'>Contact</a>
          </div>

        </article>
    </nav>
  )
}

export default Navbar