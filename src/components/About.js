import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl text-left mt-5">
          Step into the world of possibilities! I'm Vivek Raut,
          <br /> A Graduate (2022) from Savitribai Phule Pune University
        </p>
        <p className="text-xl text-left mt-10">
          A Frontend Developer, With a wealth of experience, Delivering Visually
          Striking and Engaging digital experiences. There Is something I want
          to Show, Have A Look of My Work!
        </p>
      </div>
    </div>
  );
};

export default About;
