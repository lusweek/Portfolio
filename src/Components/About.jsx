import { React } from 'react'
import profilePic from '../media/img/profile.jpg'
import CV_PDF from '../media/img/cv.pdf'

function About() {

  return (
    <>
    <section id='about-section'>
        <img src={profilePic} alt="Profile picture" />

        <article>
            <h1>Who am I?</h1>
           
            <p>

            My name is Lukas. 
            Passionate about creating immersive user experiences, I am a newly
            exterminated frontend developer who is a quick learner and loves designing
            and implementing intuitive web interfaces. 
            <br /> <br /> 
            With expertise in HTML, CSS, and
            JavaScript, I thrive in turning creative concepts into pixel-perfect, responsive
            websites. My dedication to clean code and attention to detail ensure seamless
            functionality across various browsers and devices. 
            <br /><br />
            Committed to staying upto-date with the latest industry trends, I continuously explore new
            technologies and frameworks to enhance user engagement and optimize
            performance. As a collaborative team player, I enjoy working alongside
            designers and backend developers to deliver visually stunning and highly
            functional websites. 
            <br /><br />
            I take pride in delivering projects on time, meeting client
            requirements, and exceeding expectations. Ready to take on new challenges, I
            am excited to contribute my skills and contribute to creating exceptional
            digital experiences.


              
            </p>

            <a target='_blank' href={CV_PDF}><h2>Read my CV</h2></a>
        
        </article>
     </section>  
    </>
  )
}

export default About