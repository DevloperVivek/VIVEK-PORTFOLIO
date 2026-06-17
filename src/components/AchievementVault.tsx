import React from "react";
import { motion } from "framer-motion";
import { Trophy, Star, Rocket, Users, ShieldCheck } from "lucide-react";
import confetti from "canvas-confetti";

interface Achievement {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  glow: string;
  borderGlow: string;
  confettiColors: string[];
}

export const AchievementVault: React.FC = () => {
  const achievements: Achievement[] = [
    {
      title: "Top Performer 2024-2025",
      subtitle: "Awarded for exceptional execution & team leadership at 360Customizer.",
      icon: <Trophy className="w-8 h-8 text-accent-warning" />,
      glow: "rgba(245,158,11,0.05)",
      borderGlow: "group-hover:border-accent-warning/30",
      confettiColors: ["#F59E0B", "#FFFFFF", "#FFD700"]
    },
    {
      title: "Star Performer Award",
      subtitle: "Recognized for driving technical solutions and high-standard features.",
      icon: <Star className="w-8 h-8 text-accent-blue" />,
      glow: "rgba(0,212,255,0.05)",
      borderGlow: "group-hover:border-accent-blue/30",
      confettiColors: ["#00D4FF", "#7C3AED", "#FFFFFF"]
    },
    {
      title: "7+ Production Systems",
      subtitle: "Shipped enterprise web applications, Saas tools, and checkout hubs.",
      icon: <Rocket className="w-8 h-8 text-accent-success" />,
      glow: "rgba(0,255,157,0.05)",
      borderGlow: "group-hover:border-accent-success/30",
      confettiColors: ["#00FF9D", "#00D4FF", "#FFFFFF"]
    },
    {
      title: "Mentored Developers",
      subtitle: "Built standard operational guides, ran code reviews, and trained juniors.",
      icon: <Users className="w-8 h-8 text-accent-purple" />,
      glow: "rgba(124,58,237,0.05)",
      borderGlow: "group-hover:border-accent-purple/30",
      confettiColors: ["#7C3AED", "#FF007F", "#FFFFFF"]
    }
  ];

  const triggerConfetti = (colors: string[]) => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: colors,
    });
  };

  return (
    <section id="achievements" className="py-24 relative z-10 px-6 max-w-7xl mx-auto border-t border-white/5">
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center space-x-2 font-mono text-xs text-accent-blue mb-2">
          <span>[SECTION_07]</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
          <span>UNLOCKED MILESTONE VAULT</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          ACHIEVEMENT VAULT
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((ach, idx) => (
          <motion.div
            key={idx}
            onClick={() => triggerConfetti(ach.confettiColors)}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className={`group bg-bg-surface border border-white/10 hover:-translate-y-1 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden cursor-pointer transition-all duration-300 ${ach.borderGlow}`}
            style={{
              boxShadow: `inset 0 0 12px ${ach.glow}`,
            }}
          >
            {/* Soft pulsing ambient light */}
            <div className="absolute -top-12 -left-12 w-28 h-28 rounded-full blur-2xl opacity-40 transition-opacity duration-300 group-hover:opacity-75 pointer-events-none"
                 style={{ backgroundColor: ach.confettiColors[0] }} />

            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-center">
                <span className="p-2.5 rounded-xl bg-white/5 border border-white/10 inline-block group-hover:scale-105 transition-transform duration-300">
                  {ach.icon}
                </span>
                <span className="text-[9px] font-mono text-gray-500 flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-success" />
                  <span>UNLOCKED</span>
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white tracking-wide leading-tight group-hover:text-accent-blue transition-colors">
                  {ach.title}
                </h3>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  {ach.subtitle}
                </p>
              </div>

              <div className="text-[10px] font-mono text-gray-500 pt-2 border-t border-white/5 flex items-center justify-between">
                <span>[TAP TO LAUNCH]</span>
                <span>OS_SYS_AUTH</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AchievementVault;
