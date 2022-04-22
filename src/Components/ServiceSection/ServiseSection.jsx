import React from 'react'
import Card from './Card'
import { BiCodeAlt } from "react-icons/bi";



function ServiseSection() {


  return (
    <>
        <h1 id='service-title' className='large-title'>Projects</h1>
    <section id='service-section'>
        <Card 
            icon = {<BiCodeAlt/>} 
            title = 'En titel'
            text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptate, quia magni expedita molestias facilis ipsam dolores voluptatum aspernatur architecto alias iste, eos, minima necessitatibus maxime minus ea quidem error?' 
        />
       
    </section>
    </>
  )
}

export default ServiseSection