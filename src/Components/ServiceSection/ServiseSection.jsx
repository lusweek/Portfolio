import { React, useEffect, useState } from 'react'
import Card from './Card'
import { GiSandSnake, GiCook, GiMuscleUp } from "react-icons/gi";
import { MdMovieFilter } from "react-icons/md"
import { SiStarship, SiPwa } from "react-icons/si"
import { CgWebsite, CgGym } from "react-icons/cg"
import ServiceModal from './ServiceModal';
import SNAKE_IMG from '../../media/img/snake.png';
import RECIPIE_IMG from '../../media/img/resepie.png'
import SWAG_IMG from '../../media/img/swagimg.png'
import BRAKING_BAD_IMG from '../../media/img/brakingBad.png'
import NERD_INFO_IMG from '../../media/img/nerd-info.png'
import BRÖLLOPSFOTOGRAFEN_IMG from '../../media/img/pwaApp.webp'
import ADRIAN_WEBPAGE_IMG from '../../media/img/adrian.png'
import GYM_IMG from '../../media/img/GYM.png'

function ServiseSection() {


  // ADD NEW OBJECT HERE
  // Förra hetter cards
  const skolProjekt = [
    {
      title: 'Gym website', 
      cardText: `The biggest school project so far, a realistic website for a gym`,
      modalText: `School projekt including me and 5 other students. I did most of the work on the booking page, admin page and the personal page.`,
      img: GYM_IMG ,
      icon: <CgGym />,
      githubLink: 'https://github.com/lusweek/Gym---spolprojekt',
      linkText: 'link to github:',

    }, 
    {
      title: 'Recipe app', 
      cardText: `An app capable of searching for any food from a Recipe API and seing the Recipe for any food. `,
      modalText: `This project was made as a school groop project, I made this together with Emma Janson using react. When you open the app you will see our front page design (see picture) witch includes a searchbar, pobular diches, vegie diches and varies categories. Clicking any food takes you to the page wich witch shows you Recipe and instructions.`,
      img: RECIPIE_IMG ,
      icon: <GiCook />,
      githubLink: 'https://github.com/emmajanson/RecipeApp.git',
      linkText: 'link to github:',

    }, 
   
    {
      title: "Star wars API", 
      cardText: `A very simpe API app using the fetch method to get data from SWAPI`,
      modalText: `This API app gets data from SWAPI and uses .map to create one card for each movie. Clicking on a card opens a modal witch shows the characters for that movie. The modal also contains a left and right button witch is used to switch between the movie-modals. `,
      img: NERD_INFO_IMG,
      icon: <SiStarship />,
      githubLink: 'https://github.com/lusweek/Nerd-info-swapi-api-.git',
      linkText: 'link to github:',

    },  
    {
      title: "First PWA app", 
      cardText: `My very first PWA / Progressive web application.`,
      modalText: `A PWA is an insatiable web application, this one is about taking a picture and saving it in local storage. Photos are not high quality unfortunately.`,
      img: BRÖLLOPSFOTOGRAFEN_IMG,
      icon: <SiPwa />,
      githubLink: 'https://brollopsappen.surge.sh/',
      linkText: 'link to webpage:',

    },  

  ]


  const egnaProjekt = [
    {
      title: "Adrians webpage", 
      cardText: `A one page website I build for my friend who is a personal trainer`,
      modalText: `Build completly from scratch. Designed with figma based on an intervjew and agile work with Adrian, the design changed multiple times. The purpose of this website is for Adrian to get started as a persinal trainer.`,
      img: ADRIAN_WEBPAGE_IMG,
      icon: <CgWebsite />,
      githubLink: 'https://lusweek.github.io/Adrians-hemsida/',
      linkText: 'link to webpage:',
    },  
    {
      title: "SWAG's webpage", 
      cardText: `This is the first project I ever did on my own. SWAG's website`,
      modalText: `I started working on this project after studying front-end for about 3 months, I was so eager to use the things I learned and to get started. There has bin many times I'v bin thinking of redo this project, the code is very messy and I would create it in a whole new way if I redo it. But still, it was very fun to play around with this project and I learned a lot building it.`,
      img: SWAG_IMG ,
      icon: <GiMuscleUp />,
      githubLink: 'https://swag-temp.pages.dev/',
      linkText: 'link to webpage:'
    },  
    {
      title: "Braking Bad API", 
      cardText: `An app using fetch, advanced css and a search function`,
      modalText: `This simple API app uses the fetch function to get all the characters from the Braking Bad series and then using .map to create a card for every character. Hovering over any card flips the card and shows some info bout that character. It was realy fun to learn how to create this flipping thing using css. There is a search feald you can use to search for any character you want.`,
      img: BRAKING_BAD_IMG,
      icon: <MdMovieFilter />,
      githubLink: 'https://github.com/lusweek/Braking-bad-API.git',
      linkText: 'link to github:',
    },  
    {
      title: 'Snake Game',
      cardText: 'I created\nthe snake game with simple javaScript and a grid.',
      modalText: `I made a simple snake game with the rule that the snake goes faster for exery food it eats`,
      img: SNAKE_IMG ,
      icon: <GiSandSnake />,
      githubLink: 'https://snake-3i5.pages.dev/',
      linkText: 'Try it ouy here!',
    },
  ]

  const [isOpenSkol, setIsOpenSkol] = useState(false)
  const [clickedCardEgnaProjekt, setClickedCardEgnaProjekt] = useState(0)

  const [isOpenEgna, setIsOpenEgna] = useState(false)
  const [clickedCardSkolprojekt, setClickedCardSkolprojekt] = useState(0)


  const openModalEgnaProjekt = (index) => {
    setClickedCardEgnaProjekt(index)
    setIsOpenEgna(true)
  }

  const openModalSkolprojekt = (index) => {
    setClickedCardSkolprojekt(index)
    setIsOpenSkol(true)
  }

  return (
    <>
        <h1 id='service-title' className='large-title'>Done on my own</h1>
    <section id='service-section'>

      {egnaProjekt.map((card, index) =>  {
        return(
          <Card 
            setIsOpen={() => openModalEgnaProjekt(index)}
            icon = {card.icon}
            title = {card.title}
            cardText = {card.cardText}
         /> 
        )
      })}

        <ServiceModal 
        isOpen={isOpenEgna} 
        setIsOpen={() => setIsOpenEgna(false)}
        icon = {egnaProjekt[clickedCardEgnaProjekt].icon}
        title = {egnaProjekt[clickedCardEgnaProjekt].title}
        img = {egnaProjekt[clickedCardEgnaProjekt].img}
        modalText = {egnaProjekt[clickedCardEgnaProjekt].modalText}
        githubLink = {egnaProjekt[clickedCardEgnaProjekt].githubLink}
        linkText = {egnaProjekt[clickedCardEgnaProjekt].linkText}

         />

    </section>


    <h1 id='service-title' className='large-title'>School projects</h1>
    <section id='service-section'>

    {skolProjekt.map((card, index) =>  {
        return(
          <Card 
            setIsOpen={() => openModalSkolprojekt(index)}
            icon = {card.icon}
            title = {card.title}
            cardText = {card.cardText}
        /> 
        )
      })}

        <ServiceModal 
        isOpen={isOpenSkol} 
        setIsOpen={() => setIsOpenSkol(false)}
        icon = {skolProjekt[clickedCardSkolprojekt].icon}
        title = {skolProjekt[clickedCardSkolprojekt].title}
        img = {skolProjekt[clickedCardSkolprojekt].img}
        modalText = {skolProjekt[clickedCardSkolprojekt].modalText}
        githubLink = {skolProjekt[clickedCardSkolprojekt].githubLink}
        linkText = {skolProjekt[clickedCardSkolprojekt].linkText}

        />
        
    </section>

    </>
  )
}

export default ServiseSection