import React from 'react'


function Card({ icon, title, text }) {
  return (
    <article>
        <div className='service-card-head-wrapper'>
            <h2>{title}</h2>
            {icon}
        </div>
        <p>{text}</p>
    </article>
  )
}

export default Card