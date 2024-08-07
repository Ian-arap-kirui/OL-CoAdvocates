import React from "react";
import "./contactForm.css";

const ContactForm = () => {
  return (
    <div className="contactForm">
      <form className="contactFormWrapper">
        <div className="topFormGroup">
          <div className="innerTopFormGroup">
            <div className="formGroup">
              <label>Full Name*</label>
              <input type="text" name="fullName" required />
            </div>
            <div className="formGroup">
              <label>Email Address*</label>
              <input type="email" name="email" required />
            </div>
          </div>
          <div className="innerBottomFormGroup">
            <div className="formGroup">
              <label>Phone Number</label>
              <input type="tel" name="phone" />
            </div>
            <div className="formGroup">
              <label>Subject</label>
              <input type="text" name="subject" />
            </div>
          </div>
        </div>
        <div className="bottomFormGroup">
          <div className="formGroup">
            <label>Your Message</label>
            <textarea name="message"></textarea>
          </div>
        </div>
        <button type="submit">Get An Appointment</button>
      </form>
    </div>
  );
};

export default ContactForm;
