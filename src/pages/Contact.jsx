import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Map from '../components/Map';
import '../css/Contact.css';
// Import emailjs library
import emailjs from '@emailjs/browser';

// Initialize emailjs
emailjs.init({
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
  // Do not allow headless browsers
  blockHeadless: true,
  blockList: {
    // Block the suspended emails
    list: ['foo@emailjs.com', 'bar@emailjs.com'],
    // The variable contains the email address
    watchVariable: 'userEmail',
  },
  limitRate: {
    // Set the limit rate for the application
    id: 'app',
    // Allow 1 request per 10s
    throttle: 10000,
  },
});


const Contact = () => {

  const [buttonText, setButtonText] = useState('Send'); // Initialize button text
  const [isMessageSent, setIsMessageSent] = useState(false);
  
  console.log(process.env.REACT_APP_EMAILJS_WILDSIDE_SERVICE_ID)
  console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY)

  const { register, handleSubmit, errors, reset } = useForm(); // Use useForm hook

    // Ensure that the errors object is defined before accessing its properties
    const nameError = errors && errors.name ? errors.name.message : '';
    const emailError = errors && errors.email ? errors.email.message : '';
    const messageError = errors && errors.message ? errors.message.message : '';

  const submitForm = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    
    // Your emailjs.sendForm logic here
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_WILDSIDE_SERVICE_ID, 'template_ti4tho6', '#contactForm')
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        setIsMessageSent(true); // Set flag for styling
        setButtonText('Message Sent!'); // Update button text on success
        reset();
         // Reset button state after 5 seconds (5000 milliseconds)
        setTimeout(() => {
          setButtonText('Send');
          setIsMessageSent(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setButtonText('Message Failed to Send'); // Update button text on success
        // Reset button state after 5 seconds (5000 milliseconds)
        setTimeout(() => {
          setButtonText('Send');
          setIsMessageSent(false);
        }, 5000);
      });
  };
 

  return (
  <div className="header">
    <h1>Contact Us</h1>

      <div className="primaryContainer">
        <div className="contact">
          <form id='contactForm' onSubmit={handleSubmit(submitForm)}>
            <label htmlFor="user_name"> Name</label>
            <input type="text" name="name" 
              {...register('name', { required: true })} />
               {nameError && <p>{nameError}</p>}
            <label htmlFor="user_email">Email</label>
            <input type="email" name="email"
              {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}/>
              {emailError && <p>{emailError}</p>}
            <label htmlFor="message" className='message'>Message</label>
            <textarea name="message" {...register('message', { required: true })} />
            {messageError && <p>{messageError}</p>}
            <input type="submit" value={buttonText}
            // CONDITIONAL CLASS NAME
              className={isMessageSent ? 'greenButton' : ''}
            />
          </form>
          <p className='phoneNumber'>812-216-9446</p>
        </div>
        <Map />
      </div>
    </div>
  );
};

export default Contact