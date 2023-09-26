import {GiHamburgerMenu} from 'react-icons/gi'
import {IoIosArrowForward} from 'react-icons/io'
import CV_PDF from '../media/img/cv.pdf'


function Navbar() {

  window.addEventListener('resize', () => {
    if (window.innerWidth < 800){
    document.querySelector('#menu-burger').style.display='block'
    } else{
    document.querySelector('#menu-burger').style.display='none'
    }
  })

  const openMenu = () => {
    document.querySelector('.nav-menu').style.width='180px'

    document.querySelector('#back').style.display='block'
    document.querySelector('#menu-burger').style.opacity='0'

    setTimeout(miniDelay, 1)
    setTimeout(displayNone, 500)

    function displayNone() {
      document.querySelector('#menu-burger').style.display='none'
    }

    function miniDelay() {
      document.querySelector('#back').style.opacity='1'
    }

  }

  const closeMenu = () => {
    document.querySelector('.nav-menu').style.width='0px'

    document.querySelector('#menu-burger').style.display='block'
    document.querySelector('#back').style.opacity='0'

    setTimeout(miniDelay, 1)
    setTimeout(displayBlock, 500)

    function displayBlock() {
      document.querySelector('#back').style.display='none'
    }

    function miniDelay() {
      document.querySelector('#menu-burger').style.opacity='1'
    }
    
  }

  return (
    <nav id='navbar'>
        <article id='logo' className='light-text'>
          <h1 className='service-title'>Lukas Portfolio</h1>
        </article>
        <article id='nav-right-side'>

        <div className='nav-btn-div'>
          <a href={CV_PDF} target='_blank' className='nav-btn mini-x-shake'>CV</a>
          </div>

          <div className='nav-btn-div'>
          <a href='#about-section' className='nav-btn mini-x-shake'>About</a>
          </div>
            
          <div className='nav-btn-div'>
          <a href='#service-title' className='nav-btn mini-x-shake'>Projects</a>
          </div>
          
          <div className='nav-btn-div'>
          <a href='#contact-section-id' className='nav-btn mini-x-shake'>Contact</a>
          </div>

        

            <IoIosArrowForward onClick={closeMenu} id='back' className='icon'/>
            <GiHamburgerMenu onClick={openMenu} id='menu-burger' className='icon' />

          <div className='nav-menu'>

              <a onClick={closeMenu} target='_blank' href={CV_PDF} className='menu-btn'>CV</a>

              <a onClick={closeMenu} href='#about-section' className='menu-btn'>About</a>
            
              <a onClick={closeMenu} href='#service-title' className='menu-btn'>Projects</a>
          
              <a onClick={closeMenu} href='#contact-section-id' className='menu-btn'>Contact</a>
          

          </div>

        </article>
    </nav>
  )
}

export default Navbar