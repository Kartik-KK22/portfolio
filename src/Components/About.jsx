import React from "react";
import AboutDiv from "../css/About.styled";
import { Fade } from "react-awesome-reveal";
// import Aboutme from "../assets/icons/aboutme.svg";
import AboutPic from "../assets/image/aboutPic.webp";

const About = () => {
  return (
    <AboutDiv id="about">
      <div className="conatainerAbout">
        {/* <div className="iconContainer"> */}
        <Fade direction="left" className="iconContainer">
          <img className="iconAboutMe" src={AboutPic} alt="" />
        </Fade>
        {/* </div> */}

        <div className="aboutDesc">
          <Fade direction="left">
            <h1 className="subTitle">About me</h1>
            <p className="desc">
            Full stack developer specializing in <b>React, Node.js, MongoDB and Express.js</b>. 
            <p className="line">
              <br/>
            </p>
            Crafting user-centric web apps is my forte, blending creativity and functionality. 
            With expertise in backend APIs, captivating React UIs, and cloud platforms like <b>AWS and Azure</b>, I'm driven by open-source collaboration and agile methodologies. 
            <p className="line">
              <br/>
            </p>
            Let's build innovative applications that leave a mark!
            </p>
          </Fade>
        </div>
      </div>
    </AboutDiv>
  );
};

export default About;

