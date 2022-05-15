import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jutegkq', 'template_06a4wj9', form.current, 'ZGdhs2ZT5cVWZRNGA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      console.log(form.current);
  };

  return (
    <section className='contact-section'>
      <h1>Contact me</h1>
    <form className='form' ref={form} onSubmit={sendEmail}>
      <div id='form-name-id'>
        <label className='form-lable'>Name</label>
        <input className='form-input' type="text" name="user_name" />
      </div>
      <div id='form-email-id'>
        <label className='form-lable'>Your email</label>
        <input className='form-input' type="email" name="user_email" />
      </div>
     <div id='form-subject-id'>
        <label className='form-lable'>Subject</label>
        <input className='form-input' type="text" name="subject" />
     </div>
     <div id='form-message-id'>
      <label className='form-lable'>Message</label>
      <textarea className='form-input form-TA' name="message" />
     </div>
    
      <input className='form-btn form-lable' type="submit" value="Send" />
    </form>
    </section>
   
  );
};