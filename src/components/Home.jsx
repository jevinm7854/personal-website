import React from "react";
import "../styles/home.css";
import Particles from "react-particles";

// Import your profile image
// import profileImage from "../../public/images/own_suit.jpg";

function Home() {
  return (
    <>
      <div className="App">
        <header className="header">
          <div className="header-content">
            <h1>Your Name</h1>
            <p>Web Developer & Designer</p>
            <img
              className="profile-image"
              src="images/own_suit.jpg"
              alt="Profile"
            />
          </div>
        </header>

        <section className="main-section">
          <div className="about-section">
            <h2>About Me</h2>
            <p>
              Welcome to my creative space! I am a passionate web developer...
            </p>
          </div>
        </section>
      </div>
      <Particles />
    </>
  );
}

export default Home;
