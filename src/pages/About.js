import React from "react";
// import images
import MyImg from "../img/about/about.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        {/* text & image wrapper */}
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          {/* image */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img src={MyImg} alt="placeholder_picture" />
          </div>
          {/* text */}
          <div className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">About me</h1>
            <p className="mb-12 max-w-sm">
              I am currently enrolled in a 12-month software development program
              to advance in my career; so far I am skilled in HTML, CSS, and
              Javascript, Figma,{" "}
              <b>Proficient in Adobe Photoshop, Lightroom,</b> Film Photography,
              Making Coffee, and Specialty Coffee.
            </p>
            <Link to={"/portfolio"} className="btn mt-8">
              View my work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
