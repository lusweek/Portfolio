import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import MessageSent from './MessageSent'


export const ContactUs = () => {

  const [text, setText] = useState('')
  const [success, setSucsess] = useState(true)


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    openLoader()


    emailjs.sendForm('service_jutegkq', 'template_06a4wj9', form.current, 'ZGdhs2ZT5cVWZRNGA')
      .then((result) => {
          console.log(result.text);
          handleMessage(result.text)
      }, (error) => {
          console.log(error.text);
          handleMessage(error.text)
      });

        function openLoader() {
          document.querySelector('.loader-modal').style.display = 'flex'
        }

        function closeLoader() {
          document.querySelector('.loader-modal').style.opacity = '0'
          setTimeout(close, 500)
        }
      
        function close () {
          document.querySelector('.loader-modal').style.display = 'none'
          document.querySelector('.loader-modal').style.opacity = '1'
          document.querySelector('.done-text').style.opacity='0'
          loader.classList.add("modal-loader-wrapper-animation")
          loader.classList.remove("modal-loader-new-animation")
          document.querySelector('.done-text').style.color='green'
          loader.classList.remove("message-fail-animation")
        }


      const loader = document.querySelector('.modal-loader-wrapper')

      function handleMessage(result) {
        if (result === 'OK') {
          setSucsess(true)
          setText('message sent!')
          animation()
          console.log('message sent! : ', result);
        } else {
          setSucsess(false)
          setText('Something went wrong, try again!')
          console.log('Something went wrong: ', result);
          messageNotSent()
        }

        document.querySelector("#form-input-name-id").value = ''
        document.querySelector("#form-input-email-id").value = ''
        document.querySelector("#form-input-subject-id").value = ''
        document.querySelector("#form-input-text-id").value = ''


      }


      function animation () {
        loader.classList.remove("modal-loader-wrapper-animation")
        loader.classList.add("modal-loader-new-animation")
        setTimeout(() => addText(), 250)
      }

      function addText() {
      document.querySelector('.done-text-div').style.opacity='1'
      document.querySelector('.done-text').style.opacity='1'
      setTimeout(closeLoader, 1900)
      }

      function addTextFail() {
        document.querySelector('.done-text-div').style.opacity='1'
        document.querySelector('.done-text').style.opacity='1'
        setTimeout(closeLoader, 2300)
        }

      function messageNotSent() {
        document.querySelector('.done-text').style.color='red'
        loader.classList.remove("modal-loader-wrapper-animation")
        loader.classList.add("message-fail-animation")
        setTimeout(() => addTextFail(), 250)
      }

  };

  return (

    <>

    <MessageSent text={text} success={success} />

    <section className='contact-section'>
      <h1>Contact me</h1>
    <form className='form' ref={form} onSubmit={sendEmail}>
      <div id='form-name-id'>
        <label className='form-lable'>Name</label>
        <input id='form-input-name-id' className='form-input' type="text" name="user_name" required />
      </div>
      <div id='form-email-id'>
        <label className='form-lable'>Your email</label>
        <input id='form-input-email-id' className='form-input' type="email" name="user_email" required />
      </div>
     <div id='form-subject-id'>
        <label className='form-lable'>Subject</label>
        <input id='form-input-subject-id' className='form-input' type="text" name="subject"/>
     </div>
     <div id='form-message-id'>
      <label className='form-lable'>Message</label>
      <textarea id='form-input-text-id' className='form-input form-TA' name="message" required/>
     </div>
    
      <input className='form-btn form-lable' type="submit" value="Send" />
    </form>
    </section>
    </>
  );
};