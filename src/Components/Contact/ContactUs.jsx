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

      console.log(emailjs.sendForm);
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="form_name" />
      <label>Email</label>
      <input type="email" name="form_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};