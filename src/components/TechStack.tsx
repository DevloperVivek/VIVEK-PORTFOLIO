import React from "react";
import { motion } from "framer-motion";
import { Layout, GitBranch, Database, Wrench } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  accent: string;
  skills: Skill[];
}

export const TechStack: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: "Frontend Core",
      icon: <Layout className="w-5 h-5 text-accent-blue" />,
      accent: "bg-accent-blue",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 92 },
        { name: "Angular", level: 85 },
        { name: "Next.js", level: 82 },
        { name: "JavaScript", level: 95 },
        { name: "TailwindCSS", level: 96 }
      ]
    },
    {
      title: "System Architecture",
      icon: <GitBranch className="w-5 h-5 text-accent-purple" />,
      accent: "bg-accent-purple",
      skills: [
        { name: "Component Design", level: 95 },
        { name: "State Management", level: 90 },
        { name: "Performance Optimization", level: 92 },
        { name: "API Integration", level: 94 },
        { name: "Responsive Layouts", level: 96 }
      ]
    },
    {
      title: "Backend Understanding",
      icon: <Database className="w-5 h-5 text-accent-success" />,
      accent: "bg-accent-success",
      skills: [
        { name: "REST APIs", level: 92 },
        { name: "Node.js", level: 80 },
        { name: "Express", level: 78 },
        { name: "Firebase", level: 85 }
      ]
    },
    {
      title: "Developer Tools",
      icon: <Wrench className="w-5 h-5 text-accent-warning" />,
      accent: "bg-accent-warning",
      skills: [
        { name: "Git & GitHub", level: 95 },
        { name: "Figma (Design Sync)", level: 88 },
        { name: "Vercel / Hosting", level: 92 },
        { name: "CI / CD Pipelines", level: 80 }
      ]
    }
  ];

  return (
    <section id="stack" className="py-24 relative z-10 px-6 max-w-7xl mx-auto border-t border-white/5">
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center space-x-2 font-mono text-xs text-accent-blue mb-2">
          <span>[SECTION_06]</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
          <span>ENGINEERING STACK INTEGRATIONS</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          ENGINEERING STACK
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
            className="bg-bg-surface border border-white/10 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden group hover:border-white/20 transition-all duration-300"
          >
            {/* Corner visual accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.01] group-hover:bg-white/[0.03] rounded-full blur-xl pointer-events-none" />

            <div className="flex items-center space-x-3 border-b border-white/5 pb-4 mb-6">
              {cat.icon}
              <h3 className="text-lg font-bold font-mono text-white tracking-wide">
                {cat.title}
              </h3>
            </div>

            {/* Metric Bars */}
            <div className="space-y-4">
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx}>
                  <div className="flex justify-between text-xs font-mono text-gray-400 mb-1.5">
                    <span>{skill.name}</span>
                    <span className="text-gray-300 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: sIdx * 0.05, ease: "easeOut" }}
                      className={`h-full ${cat.accent} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
