import React from "react";
import "../styles/contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>

        <form action="">
          <div>
            <lable>Name</lable>
            <input type="text" required placeholder="Name" />
          </div>

          <div>
            <lable>Email</lable>
            <input type="email" required placeholder="abc@xyz.com" />
          </div>

          <div>
            <lable>Message</lable>
            <input
              type="text"
              required
              placeholder="Tell us about your query..."
            />
          </div>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
