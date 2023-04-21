import React from "react";
// import images
import Image1 from "../img/portfolio/1.jpg";
import Image2 from "../img/portfolio/2.jpg";
import Image6 from "../img/portfolio/6.jpg";
import Image4 from "../img/portfolio/4.jpg";
// import Link
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          {/* text */}
          <div className="flex flex-col lg:items-start">
            <h1 className="h1">Portfolio</h1>
            <p className="mb-12 max-w-sm">
              As a passionate lover of street photography and film, I find joy
              in capturing everyday life in a unique way. Through my creative
              lens, I express my unique perspective and artistic vision, telling
              compelling stories through visual imagery.
              <br />
              <br />
              Whether it's exploring new environments, honing my observational
              skills, or evoking nostalgia with a timeless touch, I'm constantly
              inspired by the world around me. Join me on this exciting journey
              as I document the beauty and complexity of life through the lens
              of street photography and film.
            </p>
            <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              Contact Me
            </Link>
          </div>
          {/* image grid */}
          <div className="grid grid-cols-2 lg:gap-2">
            {/* image  */}
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image1}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image2}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image6}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
