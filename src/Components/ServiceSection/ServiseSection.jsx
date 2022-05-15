import { React, useEffect, useState } from 'react'
import Card from './Card'
import { GiSandSnake, GiCook, GiMuscleUp } from "react-icons/gi";
import { MdMovieFilter } from "react-icons/md"
import { SiStarship } from "react-icons/si"
import ServiceModal from './ServiceModal';
import SNAKE_IMG from '../../media/img/snake.png';
import RECIPIE_IMG from '../../media/img/resepie.png'
import SWAG_IMG from '../../media/img/swagimg.png'
import BRAKING_BAD_IMG from '../../media/img/brakingBad.png'
import NERD_INFO_IMG from '../../media/img/nerd-info.png'
 
function ServiseSection() {


  // ADD NEW OBJECT HERE
  const cards = [
    {
      title: 'Snake Game',
      cardText: `I created the snake game with simple javaScript and a grid.`,
      modalText: `I made a simple snake game with the rule that the snake goes faster for exery food it eats`,
      img: SNAKE_IMG ,
      icon: <GiSandSnake />,
      githubLink: 'https://github.com/lusweek/SnakeGame.git',
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
      title: "SWAG's webpage", 
      cardText: `This is the first project I ever did on my own. It's a webpage for the SWAG association, witch is about exercising bodyweight. This form of exercise is called calisthenics`,
      modalText: `I started working on this project after studying front-end for about 3 months, I was so eager to use the things I learned and to get started. There has bin many times I'v bin thinking of redo this project, the code is very messy and I would create it in a whole new way if I redo it. But still, it was very fun to play around with this project and I learned a lot building it.`,
      img: SWAG_IMG ,
      icon: <GiMuscleUp />,
      githubLink: 'https://lusweek.github.io/swag/',
      linkText: 'link to webpage:'
    },  
    {
      title: "Braking Bad API", 
      cardText: `A simpe API app built using react witch uses a fetch method to get all the characters from the Braking Bad series, also containing a search function`,
      modalText: `This simple API app uses the fetch function to get all the characters from the Braking Bad series and then using .map to create a card for every character. Hovering over any card flips the card and shows some info bout that character. It was realy fun to learn how to create this flipping thing using css. There is a search feald you can use to search for any character you want.`,
      img: BRAKING_BAD_IMG,
      icon: <MdMovieFilter />,
      githubLink: 'https://github.com/lusweek/Braking-bad-API.git',
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


    
  
  ]

  const [isOpen, setIsOpen] = useState(false)
  const [clickedCard, setClickedCard] = useState(0)

  const openModal = (index) => {

    setClickedCard(index)
    setIsOpen(true)
  }

  useEffect(() => {
    console.log(clickedCard);
  }, [clickedCard])


  return (
    <>
        <h1 id='service-title' className='large-title'>Projects</h1>
    <section id='service-section'>

      {cards.map((card, index) =>  {
        return(
          <Card 
            setIsOpen={() => openModal(index)}
            icon = {card.icon}
            title = {card.title}
            cardText = {card.cardText}
         /> 
        )
      })}

        <ServiceModal 
        isOpen={isOpen} 
        setIsOpen={() => setIsOpen(false)}
        icon = {cards[clickedCard].icon}
        title = {cards[clickedCard].title}
        img = {cards[clickedCard].img}
        modalText = {cards[clickedCard].modalText}
        githubLink = {cards[clickedCard].githubLink}
        linkText = {cards[clickedCard].linkText}

         />
        
    </section>
    </>
  )
}

export default ServiseSection