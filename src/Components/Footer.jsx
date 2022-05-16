import React from 'react'
import {AiFillFacebook, AiFillLinkedin} from 'react-icons/ai'
import {BsInstagram, BsGithub} from 'react-icons/bs'

function Footer() {
  return (
    <section id='footer-section'>
        <div className='info-div'>
            <a >Phone: +46 738 546 407</a>
            <a >Email: HagbergDevelopment@gmail.com</a>
            
        </div>
        <div className='icons-div'>
            <AiFillFacebook className='footer-icon'/>
            <BsInstagram className='footer-icon'/> 
            <BsGithub className='footer-icon'/>
            <AiFillLinkedin className='footer-icon'/>
        </div>
        

    </section>
  )
}

export default Footer