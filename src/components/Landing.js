import React from "react";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

export const Landing = () => {
  return (
    <div className="bg-gray-900 overflow-hidden relative">
      <span className="text-huge font-black absolute text-gray-700 z-0 leading-tight">
        Raymond Kneipp
      </span>
      <div className="z-10 relative">
        <div className="container mx-auto min-h-screen flex items-center justify-center flex-col ">
          <img src={logo} alt="RK" className="w-48 sm:w-56 my-16" />

          <h1 className="text-4xl sm:text-6xl text-teal-400 text-center font-bold">
            Raymond Kneipp
          </h1>

          <h2 className="text-2xl sm:text-4xl text-gray-300 text-center">
            I design & build full stack web applications
          </h2>

          <div className="flex flex-wrap items-center justify-center my-16">
            <a
              href="https://github.com/thor3444"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-400 hover:bg-teal-700 transition-colors duration-300 rounded-full h-12 inline-flex items-center justify-center px-3 mr-3 my-2"
            >
              <FontAwesomeIcon color="#1a202c" size="lg" icon={faGithub} />
              <span className="ml-3 text-gray-900">Github</span>
            </a>
            <a
              href="https://github.com/thor3444"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-400 hover:bg-teal-700 transition-colors duration-300 rounded-full h-12 inline-flex items-center justify-center px-3 mr-3 my-2"
            >
              <FontAwesomeIcon color="#1a202c" size="lg" icon={faFilePdf} />
              <span className="ml-3 text-gray-900">Resume</span>
            </a>
            <a
              href="https://github.com/thor3444"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-400 hover:bg-teal-700 transition-colors duration-300 rounded-full h-12 inline-flex items-center justify-center px-3 my-2"
            >
              <FontAwesomeIcon color="#1a202c" size="lg" icon={faLinkedin} />
              <span className="ml-3 text-gray-900">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
