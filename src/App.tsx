import React, { useState } from "react";
import { Toaster } from "react-hot-toast";

// Components
import BackgroundLayers from "./components/BackgroundLayers";
import BootSequence from "./components/BootSequence";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EngineerProfile from "./components/EngineerProfile";
import JourneyTimeline from "./components/JourneyTimeline";
import EcosystemMap from "./components/EcosystemMap";
import ProjectLab from "./components/ProjectLab";
import TechStack from "./components/TechStack";
import AchievementVault from "./components/AchievementVault";
import Philosophy from "./components/Philosophy";
import ContactTerminal from "./components/ContactTerminal";

export const App: React.FC = () => {
  const [isBooted, setIsBooted] = useState(false);


  return (
    <React.Fragment>
      {/* Premium Dark Toast Provider */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#090B15",
            color: "#fff",
            borderRadius: "12px",
            padding: "16px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            fontFamily: "monospace",
            fontSize: "12px"
          },
          success: {
            style: {
              border: "1px solid #00FF9D",
            },
          },
          error: {
            style: {
              border: "1px solid #F59E0B",
            },
          },
        }}
      />

      {/* OS Boot sequence gate */}
      {!isBooted ? (
        <BootSequence onComplete={() => setIsBooted(true)} />
      ) : (
        <div className="relative min-h-screen text-white select-none">
          {/* Layered global visual background */}
          <BackgroundLayers />

          {/* Core navigation header/capsule */}
          <Navbar />

          {/* Visual page sections */}
          <main className="relative z-10">
            <Hero />
            <EngineerProfile />
            <JourneyTimeline />
            <EcosystemMap />
            <ProjectLab />
            <TechStack />
            <AchievementVault />
            <Philosophy />
            <ContactTerminal />
          </main>

          {/* Premium technical footer */}
          <footer className="py-8 border-t border-white/5 relative z-10 bg-bg-primary">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-gray-500 gap-4">
              <div>
                <span>© {new Date().getFullYear()} VIVEK RAUT. ALL RIGHTS RESERVED.</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-success animate-ping" />
                <span>COMMAND_CENTER_SECURE // LATENCY 12MS</span>
              </div>
            </div>
          </footer>
        </div>
      )}
    </React.Fragment>
  );
};

export default App;
