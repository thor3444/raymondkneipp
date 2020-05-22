import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

export const Projects = () => {
  return (
    <div className="bg-gray-900">
      <div className="container mx-auto min-h-screen flex items-center justify-center flex-col px-4">
        <h1 className="text-4xl sm:text-6xl text-teal-400 text-center font-bold">
          My Projects
        </h1>

        {/* <h2 className="text-2xl sm:text-4xl text-gray-300 text-center font-thin">
          I design & build full stack web applications
        </h2> */}

        <div className="flex flex-wrap items-center justify-center my-16">
          <a
            href="https://github.com/thor3444"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-400 hover:bg-teal-700 transition-colors duration-300 rounded-lg h-12 inline-flex items-center justify-center px-3 mr-3 my-2"
          >
            <FontAwesomeIcon color="#1a202c" size="lg" icon={faCode} />
            <span className="ml-3 text-gray-900">Code</span>
          </a>
          <a
            href="https://github.com/thor3444"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-400 hover:bg-teal-700 transition-colors duration-300 rounded-lg h-12 inline-flex items-center justify-center px-3 mr-3 my-2"
          >
            <FontAwesomeIcon color="#1a202c" size="lg" icon={faGlobeAmericas} />
            <span className="ml-3 text-gray-900">Website</span>
          </a>
        </div>
      </div>
    </div>
  );
};
