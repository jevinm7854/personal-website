import React from "react";
import "../styles/global.css"; // Add your CSS styling here
// import "@fortawesome/fontawesome-free/css/all.css";

const Contact = () => {
  return (
    <div>
      <div>Contact me!</div>
      <div>
        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
        <span>Jevin Modi</span>
      </div>
      <div>
        <a href="mailto:modij@purdue.edu" rel="noopener noreferrer">
          <i class="fa fa-envelope-o" aria-hidden="true"></i>
        </a>
        <span>modij@purdue.edu</span>
      </div>
      <div>
        <a
          href="https://www.google.com/maps/place/West+Lafayette,+IN/@40.4526487,-86.9580425,13z/data=!3m1!4b1!4m6!3m5!1s0x8812fd472165042d:0xdf75e293a8a11bef!8m2!3d40.4258686!4d-86.9080655!16zL20vMHNxZDA?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-map-marker" aria-hidden="true"></i>
        </a>
        <span>West Lafayette, Indiana, USA</span>
      </div>
      <div>
        <a
          href="https://github.com/jevinm7854"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-github" aria-hidden="true"></i>
        </a>
        {/* </div>
      <div> */}
        <a
          href="https://www.linkedin.com/in/jevin-modi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.instagram.com/jevin_modi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
