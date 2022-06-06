import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <div>
          <div className="contact-title-text">Contact. IN PROGRESS</div>
          <div className="contact-sub-text">
            For portfolio questions, freelance projects, and more.
          </div>
        </div>
        <div className="contact-form">
          <input className="contact-name-email-subject" placeholder="Name" />
          <input className="contact-name-email-subject" placeholder="Email" />
          <input className="contact-name-email-subject" placeholder="Subject" />
          <textarea className="contact-message" placeholder="Message" />
          <button className="contact-submit">Submit.</button>
        </div>
        <div className="credit">
          Website Designed by LUKEJ | Engineered by CHASE RENSBERGER
        </div>
      </div>
    </div>
  );
};

export default Contact;
