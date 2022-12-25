import React from "react";

import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>TechGURU</h1>
        <p>All Rights Reserved</p>
      </div>
      
      <div>
        <h5>Follow Us</h5>
        <div>
          <a href="https://www.linkedin.com/in/shyam-butani/" target={"blank"}>
            LinkedIn
          </a>
          <a href="https://github.com/butani111" target={"blank"}>
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
