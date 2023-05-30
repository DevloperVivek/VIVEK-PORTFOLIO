import React from "react";
import restaurant from "../assets/images/projects/restaurant.png";
import ecomin from "../assets/images/projects/ecomin.png";
import expense from "../assets/images/projects/expense.png";
import mailclient from "../assets/images/projects/mailclient.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: restaurant,
      url: "https://react-restaurant-website-three.vercel.app/",
      gitUrl: "https://github.com/DevloperVivek/React-Restaurant-Website.git",
    },
    {
      id: 2,
      src: ecomin,
      url: "https://vivekecom.vercel.app/login",
      gitUrl: "https://github.com/DevloperVivek/Ecomin-main.git",
    },
    {
      id: 3,
      src: expense,
      url: "https://react-expense-tracker-neon-one.vercel.app/",
      gitUrl: "https://github.com/DevloperVivek/React-Expense-Tracker.git",
    },
    {
      id: 4,
      src: mailclient,
      url: "https://vivekmailbox.vercel.app/",
      gitUrl: "https://github.com/DevloperVivek/React-MailBox.git",
    },
  ];

  const demoHandler = (url) => {
    window.open(url);
  };

  const codeHandler = (gitUrl) => {
    window.open(gitUrl);
  };

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-gray-500">Projects</p>
          <p className="py-6">Here Is My Some Work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 pb-8 sm:px-0">
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                className="shadow-md shadow-gray-600 rounded-lg hovar:scale-105"
              >
                <img src={project.src} alt="project" />
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => demoHandler(project.url)}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    Demo
                  </button>
                  <button
                    onClick={() => codeHandler(project.gitUrl)}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    Code
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
