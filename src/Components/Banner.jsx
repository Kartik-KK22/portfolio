import React, { useEffect, useState } from "react";
import BannerCon from "../css/Banner.styled";
import Typewriter from "typewriter-effect";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Avatar1 from "../assets/image/profilePic.jpg";
import Avatar2 from "../assets/image/profilePic-2.jpg";
import { motion } from "framer-motion"


import { SiGmail } from "react-icons/si";

const Banner = () => {
  return (
    <BannerCon>
      <div className="bannerContainer">
        <div className="typeWirter">
          <div className="introMyself">
            <p className="heading">Hi, I am</p>
            <div className="subHeading">
              <Typewriter
                options={{
                  strings: [
                    "01001011 01100001 01110010 01110100 01101001 01101011",
                    "K a r t i k",
                    "Full Stack Developer",
                    "A tech enthusiast",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              />
            </div>
            <p className="tagLine">
            A dedicated Full Stack Developer, blending technical and non-technical skills, with a mission to create interactive web applications for a better world.
            </p>
            <div className="typeButtons">
              <button className="learn-more">
                <a
                  href={
                    "https://drive.google.com/file/d/194wL0suYYFiZA3dhhR_bk4QbUcfyhsgg/view?usp=sharing"
                  }
                  target={"_blank"}
                >
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Resume</span>
                </a>
              </button>
            </div>
            <div className="socialIconContainer">
              <a
                href="https://www.linkedin.com/in/kartikkumar98/"
                target={"_blank"}
              >
                <BsLinkedin className="socialIcons" />
              </a>
              <a href="https://github.com/Kartik-KK22" target={"_blank"}>
                <BsGithub className="socialIcons" />
              </a>
              <a href="mailto:kartikkumar.dec98@gmail.com" target={"_blank"}>
                <SiGmail className="socialIcons" />
              </a>
            </div>
          </div>
        </div>
        <div className="imageContainer">

          <motion.img
            className="avatar imgclass"
            id={"gradient"}
            // initial={{ y: -1 }}
            // animate={{ y: 1 }}
            whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
            src={Avatar2}
            alt="floater"
          />
        </div>

        {/* <div className="imageContainer">
          <img
            src={Avatar2}
            alt=""
            className="avatar"
          />
          
        </div> */}
      </div>
    </BannerCon>
  );
};

export default Banner;
