// Education.js
import React from "react";
import { Container, Typography, Card, CardContent, Grid } from "@mui/material";

const Education = () => {
  return (
    <>
      <div className="container  align-items-center justify-content-center">
        <div className="row ">
          {/* Left half - Image */}
          <div className="col-sm-6 mx-auto text-center">
            <img
              src="images/own_purdue_edited.jpg" // Replace with your image source
              alt="Sample"
              className="img-fluid img-edu-purdue" // Make the image responsive
            />
          </div>

          {/* Right half - Text */}
          <div className="col-sm-6 edu-text">
            <h2>Purdue University</h2>
            <h4>West Lafayette, IN</h4>
            <ul className="edu-list">
              <li>
                <b>Master's of Science in Computer Science</b>
              </li>
              <li>August 2023- May 2025</li>
              <li>GPA: 3.57/4</li>
            </ul>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="container d-flex align-items-center justify-content-center">
        <div className="row">
          {/* Left half - Image */}
          <div className="col-sm-6 mx-auto text-center">
            <img
              src="images/own_psu.jpg" // Replace with your image source
              alt="Sample"
              className="img-fluid img-edu" // Make the image responsive
            />
          </div>

          {/* Right half - Text */}
          <div className="col-sm-6 edu-text">
            <h2>The Pennsylvania State University</h2>
            <h4>University Park, PA</h4>
            <ul className="edu-list">
              <li>
                <b>Bachelor's of Science in Computer Science</b>
              </li>
              <li>August 2018- Dec 2021</li>
              <li>GPA: 3.62/4</li>
              <li>Dean's List: 5/7 semesters</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
