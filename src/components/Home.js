// import React from "react";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";
// const Home = () => {
//   return (
//     <div
//       name="home"
//       className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
//     >
//       <div className="max-w-screen-lg h-full mx-auto my-auto ml-auto flex flex-col items-center justify-center p-4 md:flex-row text-white">
//         <div className="flex flex-col justify-center h-full m-10">
//           <span className="text-1xl sm:text-3xl font-thin text-white">
//             Hello, I'm
//           </span>
//           <h2 className="text-4xl sm:text-7xl font-bold text-white">
//             Vivek Raut
//           </h2>
//           <h3 className="text-1xl sm:text-2xl font-thin text-white">
//             Front End Developer
//           </h3>
//           <p className="text-gray-500 py-4 text-left">
//             Greetings! I'm Vivek Raut, a 2022 graduate from Savitribai Phule
//             Pune University, with a degree of Computer Science & Passion for Web
//             Development. I strive to create visually appealing and
//             high-performing products that prioritize user experience &
//             delivering delightful online experiences.
//           </p>
//           <div>
//             <Link
//               to="projects"
//               smooth
//               duration={500}
//               className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
//             >
//               projects
//               <span className="group-hover:rotate-90 duration-300">
//                 <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
//               </span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center h-full text-white">
        <div className="max-w-3xl px-6 md:px-0">
          <span className="text-sm sm:text-base font-light text-gray-400 tracking-wide">
            Hello, I’m
          </span>

          <h1 className="text-4xl sm:text-6xl font-bold mt-2">Vivek Raut</h1>

          <div className="w-16 h-[2px] bg-cyan-500/60 mt-4 mb-6" />

          <h2 className="text-lg sm:text-2xl font-medium text-cyan-400/90">
            Software Developer (Frontend)
          </h2>

          <p className="text-gray-400 mt-6 leading-relaxed max-w-2xl">
            I build scalable, high-performance web applications with a strong
            focus on UI architecture, state management, and user experience.
            Experienced in delivering production-grade SaaS platforms,
            enterprise dashboards, and animation-rich interfaces using modern
            frontend technologies.
          </p>

          <div className="mt-8">
            <Link
              to="projects"
              smooth
              duration={500}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-md
                     bg-gradient-to-r from-cyan-500 to-blue-500
                     text-white font-medium cursor-pointer
                     hover:scale-[1.02] transition"
            >
              Explore Projects
              <MdOutlineKeyboardArrowRight
                size={22}
                className="group-hover:rotate-90 transition duration-300"
              />
            </Link>
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default Home;
