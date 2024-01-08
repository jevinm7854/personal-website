import {
  Card,
  Paper,
  CardMedia,
  Box,
  Typography,
  CardContent,
} from "@mui/material";
import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Experience = () => {
  return (
    <>
      <div className="container">
        <div className="row exp-row">
          <div className="col-sm-6 ">
            <Accordion className="acc-main">
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5">Full-time</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/* Content for the expanded section goes here */}
                <Typography>
                  <h5>Honeywell Intelligrated- Mason, OH</h5>
                  <ul>
                    <li>Software Engineer 1</li>
                    <li>March 2022- January 2023</li>
                  </ul>
                  <p>Responsibilities-</p>
                  <ul>
                    <li>
                      Developed and fine-tuned machine control code in C++ for
                      warehouse automation, tailoring solutions to meet precise
                      client requirements
                    </li>
                    <li>
                      Enhanced database functionality and efficiency by crafting
                      SQL scripts for updates and optimizations
                    </li>
                    <li>
                      Provided on-site testing and live support, ensuring
                      seamless implementation and addressing any issues promptly
                    </li>
                    <li>
                      Regularly attended meetings with the project manager,
                      clients, and cross-disciplinary engineering teams to
                      ensure alignment and successful project execution
                    </li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="col-sm-6">
            <Accordion className="acc-main">
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5">Internship</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/* Content for the expanded section goes here */}
                <Typography>
                  <h5>TechExcel Software Solutions- Mumbai, India</h5>
                  <ul>
                    <li>Full Stack Developer Intern</li>
                    <li>April 2023- July 2023</li>
                  </ul>
                  <p>Responsibilities-</p>
                  <ul>
                    <li>
                      Contributed to React-based front-end development for a
                      dynamic trading software
                    </li>
                    <li>
                      Developed back-end utilizing Python Flask and Express.js
                      libraries, including the creation of RESTful APIs for live
                      data exchanges using sockets to test front-end
                    </li>
                    <li>
                      Implemented innovative front-end features using Syncfusion
                      React libraries, enhancing user experience and UI
                      functionality
                    </li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
      <img src="images/own_honeywell.jpg" className="img-exp"></img>
    </>
  );
};

export default Experience;
