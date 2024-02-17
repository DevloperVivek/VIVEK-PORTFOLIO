import React from "react";
import css from "../assets/skills/css.png";
import firebase from "../assets/skills/firebase.png";
import gitHub from "../assets/skills/github.png";
import html from "../assets/skills/html.png";
import javascripts from "../assets/skills/js.png";
import react from "../assets/skills/react.png";
import nextjs from "../assets/skills/nextjs.png";
import tailwind from "../assets/skills/tailwind.png";
import ts from "../assets/skills/ts.png";
import nodejs from "../assets/skills/nodejs.png";
import materialui from "../assets/skills/materialui.png";
import chakraui from "../assets/skills/chakraui.png";

const Skills = () => {
  const skill = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascripts,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: ts,
      title: "TypeScript",
      style: "shadow-sky-500",
    },
    {
      id: 6,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-500",
    },
    {
      id: 7,
      src: gitHub,
      title: "GitHub",
      style: "shadow-gray-500",
    },
    {
      id: 8,
      src: tailwind,
      title: "TailWind",
      style: "shadow-sky-500",
    },
    {
      id: 9,
      src: materialui,
      title: "Material UI",
      style: "shadow-blue-500",
    },
    {
      id: 10,
      src: chakraui,
      title: "Chakra UI",
      style: "shadow-gray-500",
    },
    {
      id: 11,
      src: nodejs,
      title: "NodeJS",
      style: "shadow-green-500",
    },
    {
      id: 12,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">Technologies I've Worked With</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 sm:px=0">
          {skill.map((skill) => {
            return (
              <div
                key={skill.id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${skill.style}`}
              >
                <img src={skill.src} alt="skill" className="w-20 mx-auto" />
                <p className="mt-4">{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
