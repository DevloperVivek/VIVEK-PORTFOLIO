import React, { useEffect, useRef, useState } from "react";
import { User, Briefcase, Network, FolderCode, Cpu, PhoneCall, FileText } from "lucide-react";

const SECTIONS = ["hero", "about", "journey", "ecosystem", "projects", "stack", "contact"];

export const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const rafId = useRef<number>(0);
  const lastScrollY = useRef<number>(0);

  const navLinks = [
    { name: "About", href: "#about", icon: <User className="w-4 h-4" /> },
    { name: "Journey", href: "#journey", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Ecosystem", href: "#ecosystem", icon: <Network className="w-4 h-4" /> },
    { name: "Projects", href: "#projects", icon: <FolderCode className="w-4 h-4" /> },
    { name: "Stack", href: "#stack", icon: <Cpu className="w-4 h-4" /> },
    { name: "Contact", href: "#contact", icon: <PhoneCall className="w-4 h-4" /> },
  ];

  useEffect(() => {
    // Throttle scroll handler via rAF so we only run once per frame max
    const handleScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        
        // Always show if near the top
        if (currentScrollY < 50) {
          setIsVisible(true);
        } else {
          // Hide when scrolling down, show when scrolling up
          if (currentScrollY > lastScrollY.current) {
            setIsVisible(false); // scrolling down
          } else {
            setIsVisible(true);  // scrolling up
          }
        }
        
        lastScrollY.current = currentScrollY;
      });
    };

    // Use IntersectionObserver instead of getBoundingClientRect in scroll handler
    // This is passive by nature — zero cost during scroll
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(id);
          });
        },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("scroll", handleScroll);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return (
    <>
      {/* Desktop Top Navbar */}
      <nav
        className={`fixed top-5 left-0 right-0 mx-auto z-50 hidden md:flex items-center justify-between w-[85%] lg:w-[70%] max-w-5xl px-6 py-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full border border-white/10 bg-[rgba(15,23,42,0.6)] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <a href="#hero" className="flex items-center space-x-2 group">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-accent-blue to-accent-purple flex items-center justify-center font-mono font-bold text-sm text-black group-hover:scale-105 transition-transform">
            V
          </div>
          <span className="font-mono text-sm tracking-widest text-white group-hover:text-accent-blue transition-colors">
            VIVEK RAUT
          </span>
        </a>

        <div className="flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-mono tracking-wider transition-all duration-300 relative py-1 hover:-translate-y-[1px] ${
                  isActive ? "text-accent-blue" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-accent-blue transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 hover:w-full"
                  }`}
                />
              </a>
            );
          })}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 px-3 py-1.5 border border-accent-blue/30 rounded-full hover:border-accent-blue/80 hover:bg-accent-blue/5 text-xs font-mono text-accent-blue transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>
      </nav>

      {/* Mobile Floating Bottom Navigation Capsule */}
      <div className="fixed bottom-6 left-0 right-0 z-40 flex justify-center md:hidden px-4">
        <div className="bg-[rgba(15,23,42,0.9)] border border-white/10 px-5 py-3 rounded-full flex items-center justify-between w-full max-w-sm shadow-xl shadow-black/40">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`p-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-accent-blue/15 text-accent-blue scale-110"
                    : "text-gray-400 hover:text-white"
                }`}
                title={link.name}
              >
                {link.icon}
              </a>
            );
          })}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-accent-purple hover:bg-accent-purple/15 transition-all"
            title="Resume"
          >
            <FileText className="w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
