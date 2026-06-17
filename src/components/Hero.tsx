import React, { useState } from "react";
import { useCountUp } from "../hooks/useCountUp";
import { motion } from "framer-motion";
import { ShieldCheck, HardDrive, Terminal as TermIcon, Layers, Play } from "lucide-react";

export const Hero: React.FC = () => {
  const [activeSystem, setActiveSystem] = useState<string | null>(null);

  // Stats counting up
  const xp = useCountUp(3, 1000);
  const prodSystems = useCountUp(7, 1000);
  const commits = useCountUp(100, 1200);

  // Status Metrics (also count up)
  const reactArch = useCountUp(95, 1500);
  const tsSystems = useCountUp(92, 1500);
  const uiEng = useCountUp(94, 1500);
  const perfOpt = useCountUp(90, 1500);

  const activeSystemsList = [
    { id: "brandstore", name: "360BrandStore", type: "B2B SaaS Portal" },
    { id: "catalog", name: "Catalog Hub", type: "Inventory Manager" },
    { id: "payment", name: "Payment Hub", type: "Transaction Center" },
    { id: "gifthub", name: "GiftHub", type: "Gifting Automat" },
    { id: "admin", name: "Admin Dashboard", type: "Control Center" },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen pt-28 pb-16 flex items-center justify-center relative z-10 px-6 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Column: Introduction & Core Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 space-y-8"
        >
          {/* Tag badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-blue font-mono text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-ping" />
            <span>ENGINEERING COMMAND CENTER ONLINE</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              VIVEK RAUT
            </h1>
            <h2 className="text-2xl md:text-3xl font-mono font-medium text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">
              &lt;Frontend Engineer /&gt;
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
              Building enterprise-grade digital products with scalable architecture,
              thoughtful design engineering, and exceptional user experiences.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            <div className="bg-bg-surface border border-white/5 p-4 rounded-xl backdrop-blur-md">
              <p className="text-3xl font-bold text-accent-blue">{xp}+</p>
              <p className="text-xs font-mono text-gray-500 mt-1">Years Experience</p>
            </div>
            <div className="bg-bg-surface border border-white/5 p-4 rounded-xl backdrop-blur-md">
              <p className="text-3xl font-bold text-accent-success">{prodSystems}+</p>
              <p className="text-xs font-mono text-gray-500 mt-1">Production Systems</p>
            </div>
            <div className="bg-bg-surface border border-white/5 p-4 rounded-xl backdrop-blur-md">
              <p className="text-3xl font-bold text-accent-purple">Multiple</p>
              <p className="text-xs font-mono text-gray-500 mt-1">Enterprise Platforms</p>
            </div>
            <div className="bg-bg-surface border border-white/5 p-4 rounded-xl backdrop-blur-md">
              <p className="text-3xl font-bold text-white">{commits}%</p>
              <p className="text-xs font-mono text-gray-500 mt-1">Quality Commitment</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <a
              href="#ecosystem"
              className="flex items-center justify-center space-x-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-black font-semibold hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Explore Systems</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 px-8 py-3.5 rounded-lg bg-transparent border border-white/10 hover:border-white/30 hover:bg-white/5 font-semibold text-white hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Download Resume</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: High-tech Engineering Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 bg-bg-surface border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-md relative overflow-hidden group hover:border-accent-blue/20 transition-all duration-500"
        >
          {/* Card glow effect */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-accent-blue/5 rounded-full blur-2xl group-hover:bg-accent-blue/10 transition-colors pointer-events-none" />

          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-accent-success animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-wider text-gray-400">
                SYSTEM STATUS // ONLINE
              </span>
            </div>
            <span className="font-mono text-[10px] text-gray-600">ID: VR-990-PROD</span>
          </div>

          {/* System status metrics */}
          <div className="space-y-4 mb-8">
            <div>
              <div className="flex justify-between text-xs font-mono mb-1 text-gray-300">
                <span>React Architecture</span>
                <span className="text-accent-blue">{reactArch}%</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent-blue rounded-full transition-all duration-1500"
                  style={{ width: `${reactArch}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono mb-1 text-gray-300">
                <span>TypeScript Systems</span>
                <span className="text-accent-purple">{tsSystems}%</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent-purple rounded-full transition-all duration-1500"
                  style={{ width: `${tsSystems}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono mb-1 text-gray-300">
                <span>UI Engineering</span>
                <span className="text-accent-blue">{uiEng}%</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-accent-blue to-accent-purple rounded-full transition-all duration-1500"
                  style={{ width: `${uiEng}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono mb-1 text-gray-300">
                <span>Performance Optimization</span>
                <span className="text-accent-success">{perfOpt}%</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent-success rounded-full transition-all duration-1500"
                  style={{ width: `${perfOpt}%` }}
                />
              </div>
            </div>
          </div>

          {/* Active Systems Mesh Map */}
          <div>
            <span className="font-mono text-xs text-gray-400 block mb-4 uppercase tracking-wider">
              Active Enterprise Systems
            </span>
            <div className="space-y-2.5">
              {activeSystemsList.map((sys) => {
                const isActive = activeSystem === sys.id;
                return (
                  <div
                    key={sys.id}
                    onMouseEnter={() => setActiveSystem(sys.id)}
                    onMouseLeave={() => setActiveSystem(null)}
                    className={`p-3 rounded-lg border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                      isActive
                        ? "bg-white/5 border-accent-blue/30 translate-x-1"
                        : "bg-white/[0.01] border-white/5 hover:border-white/15"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          isActive ? "bg-accent-blue animate-ping" : "bg-white/20"
                        }`}
                      />
                      <div>
                        <p className="text-sm font-semibold text-white">{sys.name}</p>
                        <p className="text-[10px] font-mono text-gray-500">{sys.type}</p>
                      </div>
                    </div>
                    <div className="flex space-x-1 text-gray-600">
                      {sys.id === "brandstore" && <ShieldCheck className="w-4 h-4 text-accent-blue" />}
                      {sys.id === "payment" && <HardDrive className="w-4 h-4 text-accent-purple" />}
                      {sys.id === "gifthub" && <TermIcon className="w-4 h-4 text-accent-success" />}
                      {sys.id === "admin" && <Layers className="w-4 h-4 text-accent-warning" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
