import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white p-4"
    >
      <div className="max-w-screen-lg mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline">About</p>
          <div className="w-16 h-[2px] bg-cyan-500/60 mt-3" />
        </div>

        <div className="text-lg mt-5 space-y-6 text-gray-300 leading-relaxed">
          <p>
            I am a Software Developer (Frontend) with hands-on experience
            building scalable, production-grade web applications for SaaS and
            enterprise platforms. My work focuses on creating clean UI
            architectures, managing complex application state, and delivering
            reliable, high-performance user experiences.
          </p>

          <p>
            Over the past few years, I have contributed to multiple
            business-critical systems including enterprise dashboards, B2B SaaS
            products, internal tools, and animation-rich marketing platforms. I
            work extensively with modern frontend technologies such as React,
            TypeScript, Redux, and Tailwind CSS, and collaborate closely with
            backend and product teams to deliver complete solutions.
          </p>

          <p>
            I value code quality, scalability, and thoughtful UX, and I enjoy
            solving real-world problems through well-structured frontend
            systems. I am always open to learning, improving, and collaborating
            with teams that build meaningful and impactful digital products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
