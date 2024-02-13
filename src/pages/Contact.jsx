import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Map from '../components/Map';
import '../css/Contact.css';
// NEED TO SETUP EMAIL JS SERVICE & GET KEY

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
  <div className="header">
    <h1>Contact</h1>
    <div className="primaryContainer">
      
      </div>
      <div className="secondaryContainer">
        <div className="contact">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" required />
            <label>Email</label>
            <input type="email" name="user_email" required />
            <label className='message'>Message</label>
            <textarea name="message" required />
            <input type="submit" value="Send" />
          </form>
          <p className='phone'>Phone: <span className='phoneNumber'>812-528-6288</span></p>
          <p className='emailAddress'>IDK@gmail.com</p>
        </div>
        <Map />
      </div>
    </div>
  );
};

export default Contact