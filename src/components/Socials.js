import React from "react";
//import icons

import { ImInstagram, ImLinkedin, ImGithub } from "react-icons/im";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        <li>
          <a href="https://www.instagram.com/the25thwanderer/">
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/lma1992/">
            <ImLinkedin />
          </a>
        </li>

        <li>
          <a href="https://github.com/LarryPursuit">
            <ImGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
