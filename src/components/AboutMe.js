import React from "react";

export const AboutMe = () => {
  return (
    <div className="bg-teal-400">
      <div className="container mx-auto min-h-screen flex items-center justify-center flex-col px-4">
        <h1 className="text-4xl sm:text-6xl text-gray-900 text-center font-bold">
          About Me
        </h1>

        <h2 className="text-2xl sm:text-4xl text-gray-800 text-center font-light">
          Hey, my name is Raymond and I'm a{" "}
          <span className="font-bold">full stack web developer</span> based in{" "}
          <span className="font-bold">Cincinnati, OH</span>. Let me help you
          bring your ideas to life!
        </h2>
      </div>
    </div>
  );
};
