import React from "react";
import { Toaster } from "react-hot-toast";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <React.Fragment>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#1f2937",
            color: "#fff",
            borderRadius: "8px",
            padding: "16px",
          },
          success: {
            icon: "✅",
            style: {
              border: "1px solid #10b981",
            },
          },
          error: {
            icon: "❌",
            style: {
              border: "1px solid #ef4444",
            },
          },
        }}
      />{" "}
      <div className="min-h-screen scroll-smooth">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <SocialLinks />
      </div>
    </React.Fragment>
  );
}

export default App;
