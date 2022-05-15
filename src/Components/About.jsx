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
           
            <p>

            Hi, My name is Lukas, I’m a 24 years old student in front-end development.
{<br></br>}
{<br></br>} 
Born in Sweden just outside Gothenburg in the small town Floda, studied for two years to become a firefighter right after the gymnasium at the age of 19. I decided to make a career change at the age of 23. I’m studying at Jensen YH in Gothenburg. I just finished my first year and I have one more to go!
{<br></br>}
{<br></br>} 
Eager to get out in the jungle of web development I’m now searching for work on the side and some workspace that suits my preferences to do my practical education which will be from 2022-11-21 to 23-05-05.

              
            </p>

            <a target='_blank' href={CV_PDF}><h2>Click here for CV</h2></a>
        
        </article>
     </section>  
    </>
  )
}

export default About