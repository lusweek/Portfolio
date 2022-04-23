import React from 'react'
import ReactDOM from 'react-dom'
import {AiOutlineClose} from 'react-icons/ai'

function ServiceModal({ isOpen, setIsOpen, img, title, icon, modalText, githubLink }) {

    

    if (!isOpen) return null 

  return ReactDOM.createPortal(

    <section className='modal-overlay'>

        <article className='modal-wrapper'>
            <AiOutlineClose onClick={setIsOpen} className='close-icon' />
            <h1 className='modal-h1 large-title'>{title} {icon}</h1>
            
            <img className='modal-img' src={img} alt="" />
            <p className='modal-p'>{modalText}</p>
            <p className='github-link'>Link to github: <a target='_blank' href={githubLink}> {githubLink} </a></p>



        </article>

    </section>,

    document.getElementById('portal')

  )
}

export default ServiceModal