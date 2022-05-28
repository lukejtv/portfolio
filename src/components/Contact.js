import React from "react";

const Contact = (props) => {
  return (
    <div ref={props.innerRef} className="contact">
      <form className="contact-block">
        <div className="contact-title-text">Contact</div>
        <div className="contact-sub-text">
          For freelance projects, portfolio questions, and more.
        </div>
        <input className="contact-name-and-email" placeholder="Name" />
        <input className="contact-name-and-email" placeholder="Email" />
        <textarea className="contact-message" placeholder="Message" />
        <button
          className="contact-submit"
          onClick={() => {
            alert("Sorry, contact is in development. For now please email me directly at luke.ab.johnson@gmail.com");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
