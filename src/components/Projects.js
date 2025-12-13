import React from "react";
import hargharsolar from "../assets/images/projects/hargharsolar.png";
import mailclient from "../assets/images/projects/mailclient.png";
import photolab from "../assets/images/projects/photolab.png";
import ecomin from "../assets/images/projects/ecomin.png";
import brandstore from "../assets/images/projects/brandstore.png";
import officialWebsite from "../assets/images/projects/officialWebsite.png";
import gifthub from "../assets/images/projects/gifthub.png";
import catalogHub from "../assets/images/projects/catalogHub.png";
import paymentHub from "../assets/images/projects/paymentHub.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: brandstore,
      url: "https://demo.360brandstore.com/",
      gitUrl: "https://github.com/DevloperVivek/360BrandStore.git",
    },
    {
      id: 2,
      src: officialWebsite,
      url: "https://360customizer.com/",
      gitUrl: "https://github.com/DevloperVivek/360Customizer.git",
    },
    {
      id: 3,
      src: gifthub,
      url: "https://gifthub.360customizer.com/",
      gitUrl: "https://github.com/DevloperVivek/GiftHub-360-Customizer.git",
    },
    {
      id: 3,
      src: catalogHub,
      url: "https://cataloghub.360customizer.com/",
      gitUrl: "https://github.com/DevloperVivek/CatalogHub-360-Customizer.git",
    },
    {
      id: 3,
      src: paymentHub,
      url: "https://paymenthub.360customizer.com/",
      gitUrl: "https://github.com/DevloperVivek/PaymentHub-360-Customizer.git",
    },
    {
      id: 2,
      src: hargharsolar,
      url: "https://hargharsolarindore.org/",
      gitUrl: "https://github.com/DevloperVivek/Har-Ghar-Solar.git",
    },
    {
      id: 4,
      src: photolab,
      url: "https://thevivekraut-photolab.vercel.app/",
      gitUrl: "https://github.com/DevloperVivek/REACT-PHOTOLAB-WEBSITE.git",
    },
    {
      id: 5,
      src: mailclient,
      url: "https://react-mailclient-website.vercel.app/",
      gitUrl: "https://github.com/DevloperVivek/REACT-MAILCLIENT-WEBSITE.git",
    },
    {
      id: 3,
      src: ecomin,
      url: "https://react-ecom-website.vercel.app/",
      gitUrl: "https://github.com/DevloperVivek/REACT-E-COMMERCE-WEBSITE.git",
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
        <div className="pb-5">
          <p className="text-4xl font-bold inline border-gray-500">Projects</p>
          <div className="w-16 h-[2px] bg-cyan-500/60 mt-3" />
          <p className="py-6">
            A curated selection of frontend projects from company platforms and
            personal work
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pb-8 sm:px-0">
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                className="shadow-md shadow-gray-600 rounded-lg hover:scale-105"
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
