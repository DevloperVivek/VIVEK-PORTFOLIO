import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ShieldAlert, CheckCircle, Award } from "lucide-react";

// Project assets import references
import brandstoreImg from "../assets/images/projects/brandstore.png";
import paymentHubImg from "../assets/images/projects/paymentHub.png";
import gifthubImg from "../assets/images/projects/gifthub.png";
import solarImg from "../assets/images/projects/hargharsolar.png";

interface ProjectCaseStudy {
  name: string;
  category: string;
  image: string;
  status: "Production" | "Live" | "Completed";
  problem: string;
  solution: string;
  tech: string[];
  impact: string;
  href?: string;
}

export const ProjectLab: React.FC = () => {
  const caseStudies: ProjectCaseStudy[] = [
    {
      name: "360BrandStore",
      category: "Enterprise B2B SaaS",
      image: brandstoreImg,
      status: "Production",
      problem: "Client custom merchandising portals lacked unified branding control, causing configuration mismatches and ordering friction.",
      solution: "Engineered a modular multi-tenant merchandise SaaS platform. Built dynamic custom styling engines, real-time product designers, and a robust cart checkout pathway.",
      tech: ["React", "TypeScript", "Tailwind CSS", "REST API", "State Sync"],
      impact: "Successfully delivered 7+ production-grade client environments, winning Vivek Top Performer honors.",
      href: "#",
    },
    {
      name: "360 Payment Hub",
      category: "Financial Operations Portal",
      image: paymentHubImg,
      status: "Live",
      problem: "Enterprise client payments lacked granular analytic metrics and invoice matching visibility, slowing down administrative audit times.",
      solution: "Created an interactive transaction management board. Integrated payment gateways, dashboard metrics, and custom Excel export/audit ledgers.",
      tech: ["React", "TypeScript", "Chart.js", "Axios", "Tailwind CSS"],
      impact: "Secured billing transaction logs with zero discrepancies over thousands of active custom orders.",
      href: "#",
    },
    {
      name: "GiftHub",
      category: "Corporate Automation Suite",
      image: gifthubImg,
      status: "Production",
      problem: "Manual scheduling and delivery of reward vouchers led to delivery delays and poor employee engagement.",
      solution: "Automated gifting campaign cycles. Designed cinematically animated gift opening reveals and self-service recipient calendar trackers.",
      tech: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
      impact: "Boosted campaign engagement rates by 30% and trimmed campaign administration overhead.",
      href: "#",
    },
    {
      name: "Har Ghar Solar",
      category: "Government Utility Platform",
      image: solarImg,
      status: "Live",
      problem: "State solar subsidy applications suffered from complex user document submissions and validation flow drops.",
      solution: "Designed high-performance web forms with inline schema validators and intuitive multiphase flow indicators.",
      tech: ["React JS", "Redux Toolkit", "Form Validation", "Tailwind CSS"],
      impact: "Successfully facilitated solar application registrations for regional clean energy campaigns.",
      href: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 relative z-10 px-6 max-w-7xl mx-auto border-t border-white/5">
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center space-x-2 font-mono text-xs text-accent-blue mb-2">
          <span>[SECTION_05]</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
          <span>CASE STUDY ARCHIVES</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          PROJECT LABORATORY
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {caseStudies.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            className="group bg-bg-surface border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between backdrop-blur-md hover:border-accent-blue/30 hover:shadow-[0_0_30px_rgba(0,212,255,0.05)] transition-all duration-500"
          >
            {/* Top Image Preview Container */}
            <div className="relative aspect-video overflow-hidden border-b border-white/5">
              {/* Overlay shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent z-10 opacity-60" />
              
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103 filter brightness-[0.85] group-hover:brightness-100"
              />

              {/* Status & Category Tag Badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center space-x-2">
                <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md rounded border border-white/10 text-[10px] font-mono font-bold tracking-wide uppercase text-accent-blue">
                  {project.category}
                </span>
                <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md rounded border border-accent-success/30 text-[10px] font-mono font-bold tracking-wide uppercase text-accent-success flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-success animate-pulse" />
                  <span>{project.status}</span>
                </span>
              </div>
            </div>

            {/* Bottom details block */}
            <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent-blue transition-colors">
                    {project.name}
                  </h3>
                  <a
                    href={project.href}
                    className="text-gray-500 hover:text-white transition-colors"
                    title="Open Case Study"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Problem Box */}
                <div className="p-3 bg-red-500/5 border border-red-500/10 rounded-lg flex items-start space-x-3">
                  <ShieldAlert className="w-4 h-4 text-accent-warning shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 block uppercase">Problem Statement</span>
                    <p className="text-xs text-gray-400 leading-relaxed mt-0.5">{project.problem}</p>
                  </div>
                </div>

                {/* Solution Box */}
                <div className="p-3 bg-green-500/5 border border-green-500/10 rounded-lg flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-accent-success shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 block uppercase">Engineering Solution</span>
                    <p className="text-xs text-gray-400 leading-relaxed mt-0.5">{project.solution}</p>
                  </div>
                </div>
              </div>

              {/* Technologies & Impact Row */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-white/5 border border-white/5 rounded text-[10px] font-mono text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-2 bg-accent-blue/5 border border-accent-blue/10 p-3 rounded-lg">
                  <Award className="w-4 h-4 text-accent-blue shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono text-accent-blue block uppercase">My Direct Impact</span>
                    <p className="text-xs text-gray-300 font-medium">{project.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectLab;
