import { React } from 'react'
import profilePic from '../media/img/profile.png'
import CV_PDF from '../media/img/cv.pdf'

function About() {

  return (
    <>
    <section id='about-section'>
        <img src={profilePic} alt="Profile picture" />

        <article>
            <h1>Who is Lukas?</h1>
           
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis minima aut, voluptate minus maxime, vero vitae voluptates nemo numquam illum molestiae doloribus voluptatum, nam dolor eligendi quas? Tempora, porro temporibus.
              
            </p>

            <a target='_blank' href={CV_PDF}><h2>Click here for CV</h2></a>
        
        </article>
     </section>  
    </>
  )
}

export default About