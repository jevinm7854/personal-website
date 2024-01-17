import React from "react";
import "../styles/contact.css";
// import "../styles/global.css"; // Add your CSS styling here
// import "@fortawesome/fontawesome-free/css/all.css";

const Contact = () => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-sm-6 mx-auto">
          <div className="contact-main-div">
            <div className="contact-row-div-heading">
              <b>Contact Me!</b>
            </div>
            <div className="contact-row-div">
              <i
                class="fa fa-user-circle-o fa-2x contact-icon-div"
                aria-hidden="true"
              ></i>
              <span>Jevin Modi</span>
            </div>
            <div className="contact-row-div">
              <a href="mailto:modij@purdue.edu" rel="noopener noreferrer">
                <i
                  class="fa fa-envelope-o fa-2x contact-icon-div"
                  aria-hidden="true"
                ></i>
              </a>
              <span>modij@purdue.edu</span>
            </div>
            <div className="contact-row-div">
              <a
                href="https://www.google.com/maps/place/West+Lafayette,+IN/@40.4526487,-86.9580425,13z/data=!3m1!4b1!4m6!3m5!1s0x8812fd472165042d:0xdf75e293a8a11bef!8m2!3d40.4258686!4d-86.9080655!16zL20vMHNxZDA?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  class="fa fa-map-marker fa-2x contact-icon-div"
                  aria-hidden="true"
                ></i>
              </a>
              <span>West Lafayette, Indiana, USA</span>
            </div>
            <div className="contact-row-div">
              <a
                href="https://github.com/jevinm7854"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  class="fa fa-github fa-2x contact-icon-div"
                  aria-hidden="true"
                ></i>
              </a>

              <a
                href="https://www.linkedin.com/in/jevin-modi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  class="fa fa-linkedin-square fa-2x contact-icon-div"
                  aria-hidden="true"
                ></i>
              </a>
              <a
                href="https://www.instagram.com/jevin_modi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  class="fa fa-instagram fa-2x contact-icon-div"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mx-auto">
          <img src="images/own_suit.jpg" className="contact-img"></img>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 contact-bar">
          <a href="Jevin_Modi_Resume.pdf" download="Jevin_Modi_Resume.pdf">
            <div class="download-bar">
              <span>Resume</span>
              <i class="fa fa-download contact-icon-div" aria-hidden="true"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
