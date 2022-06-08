import React, { useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2oj94rq', 'template_8c7iv3b', form.current, 'xOjQqyQObGBE9DQiS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      alert('Message sent successfully.');
  };

  useEffect(() => {
    nameRef.current.focus();
    emailRef.current.focus();
    subjectRef.current.focus();
    messageRef.current.focus();
  }, []);


  return (
    <div className="contact">
      <div className="contact-container">
        <div>
          <div className="contact-title-text">Contact.</div>
          <div className="contact-sub-text">
            For portfolio questions, freelance projects, and more.
          </div>
        </div>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input className="contact-name-email-subject" placeholder="Name" type="text" name="name" ref={nameRef}/>
          <input className="contact-name-email-subject" placeholder="Email" type="email" name="email" ref={emailRef}/>
          <input className="contact-name-email-subject" placeholder="Subject" name="subject" ref={subjectRef}/>
          <textarea className="contact-message" placeholder="Message" name="message" ref={messageRef}/>
          <button className="contact-submit" type="submit" value="Send">Submit.</button>
        </form>
        <div className="credit">
          Website Designed by LUKEJ | Engineered by CHASE RENSBERGER
        </div>
      </div>
    </div>
  );
};

export default Contact;
