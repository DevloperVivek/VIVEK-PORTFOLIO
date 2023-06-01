import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg h-full mx-auto my-auto ml-auto flex flex-col items-center justify-center pz-4 md:flex-row text-white">
        <div className="flex flex-col justify-center h-full m-10">
          <span className="text-1xl sm:text-3xl font-thin text-white">
            Hello, I'm
          </span>
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Vivek Raut
          </h2>
          <h3 className="text-1xl sm:text-2xl font-thin text-white">
            Front End Developer
          </h3>
          <p className="text-gray-500 py-4 text-left">
            Greetings! I'm Vivek Raut, a 2022 graduate from Savitribai Phule
            Pune University, with a degree of Computer Science & Passion for Web
            Development. I strive to create visually appealing and
            high-performing products that prioritize user experience &
            delivering delightful online experiences.
          </p>
          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
