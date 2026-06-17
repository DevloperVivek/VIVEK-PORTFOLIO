import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export const Philosophy: React.FC = () => {
  return (
    <section className="py-32 relative z-10 px-6 max-w-4xl mx-auto text-center border-t border-white/5 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-accent-purple/5 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-8 relative z-10"
      >
        {/* Decorative Quote Icon */}
        <div className="flex justify-center">
          <span className="p-3.5 rounded-full bg-white/5 border border-white/10 text-accent-purple inline-block">
            <Quote className="w-8 h-8 fill-current" />
          </span>
        </div>

        {/* Philosophy Text */}
        <blockquote className="text-2xl md:text-4xl font-extrabold tracking-tight leading-normal text-white">
          "Great software is not only written with code. It is created by{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">
            understanding people
          </span>
          , solving meaningful business problems, and engineering systems that scale with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-success">
            simplicity and elegance
          </span>
          ."
        </blockquote>

        <div className="flex items-center justify-center space-x-3 text-xs font-mono tracking-wider text-gray-500 uppercase">
          <span>[ENGINEERING CORE PHILOSOPHY]</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
          <span>VIVEK RAUT</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Philosophy;
