import React from 'react'
import {AiFillFacebook, AiFillLinkedin, AiOutlineMail, AiFillPhone} from 'react-icons/ai'
import {BsInstagram, BsGithub} from 'react-icons/bs'

function Footer() {
  return (
    <section id='footer-section'>

          <div className='icons-div'>
            <a target={'_blank'} href="https://github.com/lusweek">
            <BsGithub className='footer-icon'/>
            </a>
            <a target={'_blank'} href="https://www.linkedin.com/in/lukas-hagberg-6855441a6/">
            <AiFillLinkedin className='footer-icon'/>
            </a>     
            <a href="mailto:lukash@live.se" >
            <AiOutlineMail className='footer-icon'/>
            </a> 
            <a href="tel:+46738546407" >
            <AiFillPhone className='footer-icon'/>
            </a>     
            <div className='info-div'>
              <a className='phoneNr' href="tel:+46738546407">Phone: +46 738 546 407</a>            
            </div>    
        </div>

 
       
        

    </section>
  )
}

export default Footer