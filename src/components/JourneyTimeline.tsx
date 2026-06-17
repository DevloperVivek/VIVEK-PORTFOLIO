import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, Calendar, CheckSquare } from "lucide-react";

export const JourneyTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  // Replace expensive useScroll/useTransform with a passive IntersectionObserver
  // that drives height via CSS transition — zero JS per scroll frame
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLineHeight(100);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      year: "2024 — Present",
      role: "Associate Software Developer",
      company: "360Customizer",
      status: "ACTIVE",
      description:
        "Participating in frontend architectural choices, coordinating with cross-functional teams, and building robust web services for B2B logistics, commerce, and user portals.",
      highlights: [
        "Delivered 7+ production-ready enterprise systems",
        "Mentored and guided junior frontend developers",
        "Received Star Performer recognition",
        "Awarded Top Performer (2024–2025)",
        "Collaborated on core payment gateways & dashboard designs",
      ],
    },
    {
      year: "2022 — 2024",
      role: "React JS Developer",
      company: "CodersFarm",
      status: "COMPLETED",
      description:
        "Engineered scalable react interfaces, optimized client apps, and collaborated on public sector and commercial client projects.",
      highlights: [
        "Worked on the Har Ghar Solar government application",
        "Developed responsive production-grade web interfaces",
        "Implemented state managers and optimized loading structures",
        "Coordinated with backend teams to integrate high-security endpoints",
      ],
    },
  ];

  return (
    <section
      id="journey"
      ref={containerRef}
      className="py-24 relative z-10 px-6 max-w-5xl mx-auto border-t border-white/5"
    >
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center space-x-2 font-mono text-xs text-accent-blue mb-2">
          <span>[SECTION_03]</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
          <span>ENGINEERING JOURNEY PATHWAY</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          ENGINEERING JOURNEY
        </h2>
      </div>

      <div className="relative pl-8 md:pl-12">
        {/* Static background bar */}
        <div className="absolute left-3.5 md:left-5 top-0 bottom-0 w-[2px] bg-white/10 rounded-full" />

        {/* CSS-transition driven line — no JS per scroll frame */}
        <div
          ref={lineRef}
          className="absolute left-3.5 md:left-5 top-0 w-[2px] bg-gradient-to-b from-accent-blue to-accent-purple rounded-full origin-top"
          style={{
            height: `${lineHeight}%`,
            transition: "height 1.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />

        <div className="space-y-16">
          {experiences.map((exp, idx) => {
            const isActive = exp.status === "ACTIVE";
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative"
              >
                {/* Timeline node */}
                <div
                  className={`absolute -left-11 md:-left-15 top-1.5 w-8 h-8 rounded-full border flex items-center justify-center bg-bg-primary ${
                    isActive
                      ? "border-accent-blue shadow-lg shadow-accent-blue/20"
                      : "border-white/10"
                  }`}
                >
                  {isActive ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-accent-blue animate-pulse" />
                  ) : (
                    <Briefcase className="w-3.5 h-3.5 text-gray-500" />
                  )}
                </div>

                {/* Content Card — removed backdrop-blur, use solid surface instead */}
                <div
                  className={`bg-[rgba(15,23,42,0.95)] border rounded-2xl p-6 md:p-8 relative overflow-hidden group transition-colors duration-300 hover:border-white/20 ${
                    isActive
                      ? "border-accent-blue/30 shadow-[0_0_20px_rgba(0,212,255,0.03)]"
                      : "border-white/10"
                  }`}
                >
                  {isActive && (
                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent-blue/5 rounded-full blur-xl pointer-events-none" />
                  )}

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center space-x-3 mb-1">
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          {exp.role}
                        </h3>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider ${
                            isActive
                              ? "bg-accent-blue/15 text-accent-blue border border-accent-blue/20"
                              : "bg-white/5 text-gray-400 border border-white/5"
                          }`}
                        >
                          {exp.status}
                        </span>
                      </div>
                      <p className="text-base font-semibold text-gray-300">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 text-xs font-mono text-gray-500">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.year}</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <span className="text-xs font-mono font-bold tracking-wider text-gray-300 uppercase block mb-3.5">
                      Key Accomplishments
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start space-x-2.5 text-xs text-gray-400"
                        >
                          {isActive ? (
                            <Award className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                          ) : (
                            <CheckSquare className="w-4 h-4 text-accent-purple shrink-0 mt-0.5" />
                          )}
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
