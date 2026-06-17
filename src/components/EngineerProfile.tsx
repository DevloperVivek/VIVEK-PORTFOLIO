import React from "react";
import { motion, Variants } from "framer-motion";
import { Shield, MapPin, Award, Compass, Heart, CheckCircle2 } from "lucide-react";

export const EngineerProfile: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const coreStrengths = [
    "Frontend Architecture",
    "React Ecosystem",
    "Angular Development",
    "TypeScript Engineering",
    "Performance Optimization",
    "API Integration",
    "Product Thinking",
  ];

  return (
    <section id="about" className="py-24 relative z-10 px-6 max-w-7xl mx-auto border-t border-white/5">
      {/* Section Header */}
      <div className="mb-16">
        <div className="flex items-center space-x-2 font-mono text-xs text-accent-blue mb-2">
          <span>[SECTION_02]</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
          <span>ENGINEER PROFILE SCAN</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          ENGINEER PROFILE
        </h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Card 1: Core Specs (Name, Role, Location) */}
        <motion.div
          variants={cardVariants}
          className="md:col-span-2 bg-bg-surface border border-white/10 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden group"
        >
          {/* Futuristic Scan Line Effect */}
          <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-accent-blue to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan-line pointer-events-none" />

          <div className="flex items-start justify-between">
            <div className="space-y-4">
              <span className="p-2.5 rounded-lg bg-accent-blue/10 border border-accent-blue/20 text-accent-blue inline-block">
                <Shield className="w-6 h-6" />
              </span>
              <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase block tracking-wider">Ident</span>
                <h3 className="text-2xl font-bold text-white">VIVEK RAUT</h3>
                <p className="text-sm font-mono text-accent-blue mt-0.5">Associate Software Developer</p>
              </div>
            </div>

            <div className="text-right font-mono text-xs text-gray-500 space-y-1">
              <p>STATUS: <span className="text-accent-success">ACTIVE</span></p>
              <p>SEC-LVL: L3_FE_ENG</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-6 border-t border-white/5">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-accent-purple shrink-0" />
              <div>
                <span className="text-[10px] font-mono text-gray-500 block">Current Location</span>
                <span className="text-sm text-gray-200">Pune, Maharashtra, India</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Award className="w-5 h-5 text-accent-success shrink-0" />
              <div>
                <span className="text-[10px] font-mono text-gray-500 block">Recognitions</span>
                <span className="text-sm text-gray-200">Star & Top Performer Awardee</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Mission Statement */}
        <motion.div
          variants={cardVariants}
          className="bg-bg-surface border border-white/10 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden group"
        >
          <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-accent-purple to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan-line pointer-events-none" />

          <div className="space-y-4">
            <span className="p-2.5 rounded-lg bg-accent-purple/10 border border-accent-purple/20 text-accent-purple inline-block">
              <Compass className="w-6 h-6" />
            </span>
            <h3 className="text-lg font-bold text-white font-mono">Mission Statement</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              "To bridge the gap between complex software architecture and delightful UI engineering. I craft robust enterprise-grade applications optimized for business growth, visual appeal, and accessibility."
            </p>
          </div>
        </motion.div>

        {/* Card 3: Core Strengths */}
        <motion.div
          variants={cardVariants}
          className="bg-bg-surface border border-white/10 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden group"
        >
          <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-accent-success to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan-line pointer-events-none" />

          <div className="space-y-4">
            <span className="p-2.5 rounded-lg bg-accent-success/10 border border-accent-success/20 text-accent-success inline-block">
              <CheckCircle2 className="w-6 h-6" />
            </span>
            <h3 className="text-lg font-bold text-white font-mono">Core Strengths</h3>
            
            <ul className="space-y-3 pt-2">
              {coreStrengths.map((strength, idx) => (
                <li key={idx} className="flex items-center space-x-2.5 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-accent-success shrink-0" />
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Card 4: Core Values */}
        <motion.div
          variants={cardVariants}
          className="md:col-span-2 bg-bg-surface border border-white/10 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden group"
        >
          <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-accent-blue to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan-line pointer-events-none" />

          <div className="space-y-4">
            <span className="p-2.5 rounded-lg bg-accent-blue/10 border border-accent-blue/20 text-accent-blue inline-block">
              <Heart className="w-6 h-6" />
            </span>
            <h3 className="text-lg font-bold text-white font-mono">Core Values</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-white">Technical Ownership</h4>
                <p className="text-xs text-gray-500">Leading frontend decision-making and architectural standard-setting.</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-white">Aesthetic Precision</h4>
                <p className="text-xs text-gray-500">Perfect spacing, fine typography, and premium interaction details inspired by industry giants.</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-white">Product Mindset</h4>
                <p className="text-xs text-gray-500">Aligning technical implementations with client business outcomes and user workflow metrics.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EngineerProfile;
