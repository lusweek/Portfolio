import React from 'react'
import {AiFillFacebook, AiFillLinkedin} from 'react-icons/ai'
import {BsInstagram, BsGithub} from 'react-icons/bs'

function Footer() {
  return (
    <section id='footer-section'>

          <div className='icons-div'>
            <a target={'_blank'} href="https://www.facebook.com/lukas.hagberg.9/">
            <AiFillFacebook className='footer-icon'/>
            </a>
           <a target={'_blank'} href="https://www.instagram.com/lukas__hagberg/">
           <BsInstagram className='footer-icon'/> 
           </a>
            <a target={'_blank'} href="https://github.com/lusweek">
            <BsGithub className='footer-icon'/>
            </a>
            <a target={'_blank'} href="https://www.linkedin.com/in/lukas-hagberg-6855441a6/">
            <AiFillLinkedin className='footer-icon'/>
            </a>
            
        </div>

        <div className='info-div'>
            <a href="tel:+46738546407">Phone: +46 738 546 407</a>
            <a href="mailto:HagbergDevelopment@gmail.com" >Email: HagbergDevelopment@gmail.com</a>
            
        </div>
       
        

    </section>
  )
}

export default Footer