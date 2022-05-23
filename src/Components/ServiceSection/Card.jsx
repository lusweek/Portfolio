import React from 'react'


function Card({ icon, title, cardText, setIsOpen }) {

  return (
    <article onClick={setIsOpen}>
        <div className='service-card-head-wrapper'>
            <h2>{title}</h2>
            <h2>{icon}</h2>
        </div>
        <h4 className='card-text'>{cardText}</h4>
    </article>
  )
}

export default Card