import { React, useEffect, useState } from 'react'
import Card from './Card'
import { GiSandSnake } from "react-icons/gi";
import ServiceModal from './ServiceModal';
import SNAKE_IMG from '../../media/img/snake.png'


function ServiseSection() {

  // ADD NEW OBJECT HERE
  const cards = [
    {
      title: 'Snake Game',
      cardText: 'Created the snake game with simple javaScript and a grid.',
      modalText: 'I made a simple snake game with the rule that the snake goes faster for exery food it eats',
      img: SNAKE_IMG ,
      icon: <GiSandSnake />,
      githubLink: 'https://github.com/lusweek/SnakeGame.git'
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

         />
        
    </section>
    </>
  )
}

export default ServiseSection