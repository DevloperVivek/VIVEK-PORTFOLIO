import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Network, Code, Sparkles, CheckCircle2, Link2, Zap, Award } from "lucide-react";

interface SystemNode {
  id: string;
  name: string;
  category: string;
  status: string;
  badge: string;
  description: string;
  features: string[];
  connectedServices: string[];
  tech: string[];
  impact: string;
  contributions: string[];
  coordinates: { x: number; y: number };
  tier: number; // For staggered loading (1 = flagship, 2 = layer 2, etc.)
  port: string;
}

export const EcosystemMap: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>("brandstore");
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [bootLog, setBootLog] = useState<string[]>([]);
  const [bootPhase, setBootPhase] = useState<"idle" | "booting" | "ready">("idle");
  const containerRef = useRef<HTMLDivElement>(null);

  const nodes: Record<string, SystemNode> = {
    brandstore: {
      id: "brandstore",
      name: "360 BrandStore",
      category: "Multi-Tenant B2B Merchandise SaaS Platform",
      status: "FLAGSHIP PRODUCT | LIVE",
      badge: "FLAGSHIP PLATFORM",
      description: "A dedicated tenant-based SaaS platform allowing organizations to create, custom design, and manage their own branded merchandise storefronts.",
      features: [
        "Multi-tenant routing & dynamic store configs",
        "Corporate storefront lifecycle managers",
        "Personalized product catalogs",
        "Role-based customer experiences",
        "Enterprise bulk order workflows",
        "Deep product integration via Product Bridge"
      ],
      connectedServices: ["360 Dashboard / OMS", "360 Payment Hub"],
      tech: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "REST API"],
      impact: "Decoupled commerce gateways, powering 7+ active enterprise production environments.",
      contributions: [
        "Led frontend architecture blueprint and routing frameworks",
        "Built responsive real-time product customization Canvas configurations",
        "Implemented secure tokenized role-based access controls (RBAC)",
        "Collaborated with design architects to standardize layout tokens"
      ],
      coordinates: { x: 50, y: 15 },
      tier: 1,
      port: "PORT: 443 (SECURE)"
    },
    payment: {
      id: "payment",
      name: "360 Payment Hub",
      category: "Payment Infrastructure Platform",
      status: "LIVE",
      badge: "ACTIVE UTILITY",
      description: "Dedicated high-performance payment processing integration hub, securing bulk orders billing transactions and corporate ledger updates.",
      features: [
        "Razorpay checkout integration",
        "Secure callback token validation",
        "Transactional ledgers and invoice status boards"
      ],
      connectedServices: ["360 BrandStore"],
      tech: ["React", "TypeScript", "Tailwind CSS", "Axios", "Razorpay SDK"],
      impact: "Secured billing transactions with zero mismatches across $1M+ operations.",
      contributions: [
        "Integrated Razorpay billing SDK pathways with failover status reporting",
        "Built administrative analytical graphs for financial reconciliations",
        "Designed invoice receipt generators and audit tables"
      ],
      coordinates: { x: 72, y: 40 },
      tier: 2,
      port: "PORT: 8443 (LEDGER)"
    },
    dashboard: {
      id: "dashboard",
      name: "360 Dashboard / OMS",
      category: "Internal Enterprise Operations System",
      status: "LIVE",
      badge: "INTERNAL OPERATIONS",
      description: "The internal operational backbone managing catalog rules, SKU coordinates, order lifecycles, and cross-department workflows.",
      features: [
        "Order Management System (OMS)",
        "Department-specific security modules",
        "Administrative scheduling and auditing workflows",
        "Direct synchronization to customer portals"
      ],
      connectedServices: ["360 BrandStore", "GiftHub"],
      tech: ["React", "TypeScript", "Tailwind CSS", "Formik", "Material UI"],
      impact: "Consolidated operational activities, reducing average order processing time by 40%.",
      contributions: [
        "Built administrative modules for processing client design customizations",
        "Optimized data grid virtualization for high-density listing loads",
        "Configured secure access triggers for logistics and design teams"
      ],
      coordinates: { x: 28, y: 40 },
      tier: 2,
      port: "PORT: 8080 (ADMIN)"
    },
    gifthub: {
      id: "gifthub",
      name: "GiftHub",
      category: "Enterprise Gifting & Automation Platform",
      status: "LIVE",
      badge: "CUSTOMER-FACING SaaS",
      description: "A complete customer-facing corporate gifting ecosystem combining product discovery with intelligent automation systems.",
      features: [
        "Infinite scroll product listing modules",
        "Product catalog creator tools",
        "Bulk enquiry workflows",
        "Mockup generation services integration"
      ],
      connectedServices: ["360 Dashboard / OMS", "Product Bridge", "Catalog Engine", "Mockup Engine"],
      tech: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
      impact: "Increased gifting campaign conversion rates by 35% and improved inquiry loops.",
      contributions: [
        "Served as sole frontend designer for the campaign wizard",
        "Wrote complex Framer Motion transitions for interactive gift reveals",
        "Optimized page loads through progressive catalog item image fetching"
      ],
      coordinates: { x: 28, y: 66 },
      tier: 3,
      port: "PORT: 3000 (CLIENT)"
    },
    bridge: {
      id: "bridge",
      name: "Product Bridge",
      category: "Central Product Management Platform",
      status: "LIVE",
      badge: "DATA INTERFACE",
      description: "The central product master system syncing item schemas, supplier inventory, and price structures directly to GiftHub.",
      features: [
        "Product information management (PIM)",
        "Product lifecycle synchronization",
        "Centralized schema definitions"
      ],
      connectedServices: ["GiftHub"],
      tech: ["React", "TypeScript", "REST API", "Tailwind CSS"],
      impact: "Maintains absolute catalog pricing integrity across the entire corporate structure.",
      contributions: [
        "Developed API bridge connectors for central database ingestion",
        "Built schema validators preventing catalog formatting mismatch errors"
      ],
      coordinates: { x: 10, y: 88 },
      tier: 4,
      port: "PORT: 9000 (PIM-BRIDGE)"
    },
    catalog_engine: {
      id: "catalog_engine",
      name: "Catalog Engine",
      category: "Catalog Automation Service",
      status: "LIVE",
      badge: "AUTOMATION ENGINE",
      description: "A dedicated service that exports professional product PDF catalogs dynamically built from selected merchandise arrays.",
      features: [
        "Dynamic layout paginations",
        "Print-to-PDF styles optimization",
        "Corporate theme customization tools"
      ],
      connectedServices: ["GiftHub"],
      tech: ["React", "TypeScript", "CSS Print Modules"],
      impact: "Automated manual layout tasks, cutting sales support labor costs.",
      contributions: [
        "Engineered browser layouts with exact page-break CSS controls",
        "Designed configurable template styles matching client branding guidelines"
      ],
      coordinates: { x: 28, y: 88 },
      tier: 4,
      port: "PORT: 9100 (AUTOMATION)"
    },
    mockup_engine: {
      id: "mockup_engine",
      name: "Mockup Engine",
      category: "Merchandise Visualization Service",
      status: "LIVE",
      badge: "VISUALIZATION TOOL",
      description: "A dedicated visualization service rendering client logos on digital products dynamically.",
      features: [
        "Dynamic logo image overlays",
        "Matrix canvas displacement mapping",
        "Interactive product customization cards"
      ],
      connectedServices: ["GiftHub"],
      tech: ["HTML5 Canvas", "WebGL", "React", "TypeScript"],
      impact: "Boosted user checkout confidence by providing immediate product visuals.",
      contributions: [
        "Wrote matrix translation mathematics for scaling logo graphics onto cylindrical surfaces",
        "Optimized image download compression speeds for instant preview renders"
      ],
      coordinates: { x: 46, y: 88 },
      tier: 4,
      port: "PORT: 9200 (WEBGL-SYS)"
    },
    catalog_hub: {
      id: "catalog_hub",
      name: "Catalog Hub",
      category: "Innovation & Market Validation Platform",
      status: "LEGACY SUCCESS",
      badge: "LEGACY PROJECT",
      description: "A rapid product discovery platform built during the transitional engineering phase to validate buyer interest.",
      features: [
        "Aggressive product list grids",
        "Client selection inquiry carts",
        "Rapid target verification deployment"
      ],
      connectedServices: ["None"],
      tech: ["React JS", "Tailwind CSS", "JavaScript"],
      impact: "Exceptional customer appreciation; validated the product concepts competitors later copied.",
      contributions: [
        "Served as lead developer for rapid validation checks",
        "Built and deployed the prototype in under 2 weeks, proving market fit"
      ],
      coordinates: { x: 72, y: 75 },
      tier: 5,
      port: "PORT: 80 (LEGACY-PROD)"
    }
  };

  const connections = [
    { from: "brandstore", to: "dashboard" },
    { from: "brandstore", to: "payment" },
    { from: "dashboard", to: "gifthub" },
    { from: "gifthub", to: "bridge" },
    { from: "gifthub", to: "catalog_engine" },
    { from: "gifthub", to: "mockup_engine" }
  ];

  // Trigger boot sequence when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && bootPhase === "idle") {
          setBootPhase("booting");
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, [bootPhase]);

  // Handle the boot sequence typing
  useEffect(() => {
    if (bootPhase !== "booting") return;

    const bootLines = [
      "> Initializing 360 Technology Ecosystem...",
      "> Loading Enterprise Platforms (8 active nodes)...",
      "> Mapping Service Connections & Topology...",
      "> Architecture Ready."
    ];

    let current = 0;
    const interval = setInterval(() => {
      if (current < bootLines.length) {
        setBootLog((prev) => [...prev, bootLines[current]]);
        current++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setBootPhase("ready");
        }, 300);
      }
    }, 250);

    return () => clearInterval(interval);
  }, [bootPhase]);

  const selectedData = nodes[selectedNode];

  // Helper check to see if a link is active based on hover states
  const isConnectionHighlighted = (from: string, to: string) => {
    if (!hoveredNode) return false;
    return (from === hoveredNode || to === hoveredNode);
  };

  return (
    <section
      id="ecosystem"
      ref={containerRef}
      className="py-24 relative z-10 px-6 max-w-7xl mx-auto border-t border-white/5"
    >
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center space-x-2 font-mono text-xs text-accent-blue mb-2">
          <span>[SECTION_04]</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
          <span>ENTERPRISE SYSTEM ARCHITECTURE</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          360 CUSTOMIZER ECOSYSTEM
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Left Side: Topology Map / Terminal Console */}
        <div className="lg:col-span-7 bg-bg-surface border border-white/10 rounded-2xl p-6 min-h-[500px] flex flex-col relative overflow-hidden backdrop-blur-md">
          {/* Dashboard Visual Anchor */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.04)_0%,transparent_75%)]" />
          </div>

          <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4 z-10">
            <span className="font-mono text-xs text-gray-400 flex items-center space-x-2">
              <Network className="w-4 h-4 text-accent-blue" />
              <span>ENTERPRISE TECHNOLOGY ECOSYSTEM MAP</span>
            </span>
            <span className="text-[10px] font-mono text-gray-500">
              {bootPhase === "ready" ? "ACTIVE INTERACTIVE TOPOLOGY" : "INITIALIZING SYSTEMS"}
            </span>
          </div>

          {/* Render state gates: Booting Terminal vs Ready Graph */}
          {bootPhase !== "ready" ? (
            <div className="flex-grow flex items-center justify-center font-mono text-xs text-accent-blue py-12">
              <div className="space-y-2.5 w-full max-w-md bg-black/40 border border-white/5 p-5 rounded-lg shadow-xl">
                {bootLog.map((log, idx) => (
                  <p key={idx} className={idx === bootLog.length - 1 ? "text-white font-medium" : "text-accent-blue/80"}>
                    {log}
                    {idx === bootLog.length - 1 && <span className="terminal-cursor ml-1" />}
                  </p>
                ))}
              </div>
            </div>
          ) : (
            <div className="relative flex-grow flex items-center justify-center min-h-[420px] select-none">
              
              {/* Dynamic SVG Connection Link Mesh */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                {connections.map((conn, idx) => {
                  const nodeFrom = nodes[conn.from];
                  const nodeTo = nodes[conn.to];
                  const isHighlighted = isConnectionHighlighted(conn.from, conn.to);
                  
                  return (
                    <g key={idx}>
                      {/* Base link path */}
                      <line
                        x1={nodeFrom.coordinates.x}
                        y1={nodeFrom.coordinates.y}
                        x2={nodeTo.coordinates.x}
                        y2={nodeTo.coordinates.y}
                        stroke={isHighlighted ? "rgba(0, 212, 255, 0.4)" : "rgba(255, 255, 255, 0.08)"}
                        strokeWidth={isHighlighted ? "1" : "0.5"}
                        className="transition-all duration-300"
                      />
                      
                      {/* Flowing animated pulses */}
                      <motion.line
                        x1={nodeFrom.coordinates.x}
                        y1={nodeFrom.coordinates.y}
                        x2={nodeTo.coordinates.x}
                        y2={nodeTo.coordinates.y}
                        stroke={isHighlighted ? "#00D4FF" : "rgba(124, 90, 237, 0.25)"}
                        strokeWidth="0.75"
                        strokeDasharray="3, 10"
                        animate={{
                          strokeDashoffset: [0, -20]
                        }}
                        transition={{
                          duration: isHighlighted ? 1.5 : 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Node Buttons */}
              {Object.values(nodes).map((node) => {
                const isSelected = selectedNode === node.id;
                const isHovered = hoveredNode === node.id;
                const isFlagship = node.id === "brandstore";

                // Animation delays based on tiers (importance sequence)
                const delayTime = node.tier * 0.15;

                return (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: delayTime, ease: "easeOut" }}
                    style={{
                      left: `${node.coordinates.x}%`,
                      top: `${node.coordinates.y}%`,
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group z-10"
                  >
                    {/* Pulsing glow ring behind selected or flagship node */}
                    {(isSelected || isFlagship) && (
                      <div
                        className={`absolute inset-0 rounded-full blur-md opacity-45 pointer-events-none transition-all duration-500 scale-150 ${
                          isFlagship ? "bg-accent-blue/25 animate-ping" : "bg-accent-purple/20 animate-pulse"
                        }`}
                      />
                    )}

                    {/* Interactive Node Point */}
                    <button
                      onClick={() => setSelectedNode(node.id)}
                      onMouseEnter={() => setHoveredNode(node.id)}
                      onMouseLeave={() => setHoveredNode(null)}
                      className={`rounded-full flex items-center justify-center transition-all duration-300 relative ${
                        isFlagship
                          ? "w-11 h-11 bg-accent-blue/15 border-2 border-accent-blue"
                          : "w-8.5 h-8.5 bg-bg-primary border border-white/10"
                      } ${
                        isSelected
                          ? "border-accent-purple scale-110 shadow-lg shadow-accent-purple/20"
                          : isHovered
                          ? "border-white/40 scale-105"
                          : ""
                      }`}
                    >
                      {isFlagship ? (
                        <Zap className="w-5 h-5 text-accent-blue animate-pulse" />
                      ) : (
                        <div
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            isSelected ? "bg-accent-purple" : isHovered ? "bg-accent-blue" : "bg-gray-500"
                          }`}
                        />
                      )}

                      {/* Tooltip on hover */}
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute bottom-full mb-2 bg-black/95 border border-white/10 px-2.5 py-1.5 rounded text-[9px] font-mono text-gray-200 shadow-2xl pointer-events-none whitespace-nowrap z-50 flex flex-col space-y-0.5"
                          >
                            <span className="text-white font-bold">{node.name}</span>
                            <span className="text-accent-blue">{node.port}</span>
                            <span className="text-[8px] text-gray-500">{node.badge}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>

                    {/* Label Tag */}
                    <span
                      className={`mt-2 font-mono text-[9px] whitespace-nowrap bg-bg-primary/95 px-2 py-0.5 rounded border transition-colors duration-300 ${
                        isSelected
                          ? "text-accent-purple border-accent-purple/30 font-bold"
                          : isHovered
                          ? "text-accent-blue border-accent-blue/30"
                          : "text-gray-400 border-white/5"
                      }`}
                    >
                      {node.name}
                    </span>
                  </motion.div>
                );
              })}

              {/* Sub-label indicators */}
              <div className="absolute left-6 bottom-4 flex items-center space-x-1.5 text-[9px] font-mono text-gray-600">
                <span className="w-2 h-2 rounded-full border border-accent-blue bg-accent-blue/20" />
                <span>Flagship</span>
                <span className="w-2 h-2 rounded bg-bg-primary border border-white/10 ml-2" />
                <span>Sub-Systems</span>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Technical Specs metadata panel */}
        <div className="lg:col-span-5 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedNode}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="bg-bg-surface border border-white/10 rounded-2xl p-6 flex-grow flex flex-col justify-between backdrop-blur-md relative overflow-hidden"
            >
              {/* Corner ambient styling */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-accent-blue uppercase tracking-widest">
                      SYSTEM INTEGRATION SPEC
                    </span>
                    <span className="flex items-center space-x-1.5 text-[9px] font-mono text-accent-success bg-accent-success/10 border border-accent-success/20 px-2 py-0.5 rounded">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{selectedData.badge}</span>
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mt-2 flex items-center justify-between">
                    <span>{selectedData.name}</span>
                  </h3>
                  <p className="text-[10px] font-mono text-gray-500 mt-1">{selectedData.category}</p>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed border-l-2 border-accent-purple/30 pl-3 py-0.5">
                  {selectedData.description}
                </p>

                {/* Core Capabilities */}
                <div>
                  <span className="text-[10px] font-mono text-gray-300 block mb-2 uppercase tracking-wide">
                    Features & Core Capabilities
                  </span>
                  <ul className="grid grid-cols-1 gap-1.5">
                    {selectedData.features.map((feat, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-success shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Connected Services */}
                <div>
                  <span className="text-[10px] font-mono text-gray-300 block mb-2 uppercase tracking-wide flex items-center space-x-1">
                    <Link2 className="w-3 h-3 text-accent-purple" />
                    <span>Connected Pipelines</span>
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedData.connectedServices.map((srv, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-bg-primary/50 border border-white/5 rounded text-[10px] font-mono text-gray-400"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Badges */}
                <div>
                  <span className="text-[10px] font-mono text-gray-300 block mb-2 uppercase tracking-wide">
                    Core Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedData.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Contributions */}
                <div>
                  <span className="text-[10px] font-mono text-gray-300 block mb-2 uppercase tracking-wide">
                    My Engineering Contributions
                  </span>
                  <ul className="space-y-1.5">
                    {selectedData.contributions.map((c, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-start space-x-2">
                        <Code className="w-3.5 h-3.5 text-accent-blue shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Architectural Business Impact */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono text-gray-500 uppercase block">Product Impact</span>
                  <span className="text-xs text-accent-success font-mono font-semibold flex items-center space-x-1">
                    <Award className="w-3.5 h-3.5 text-accent-success shrink-0" />
                    <span>{selectedData.impact}</span>
                  </span>
                </div>
                <div className="text-right font-mono text-[9px] text-gray-600">
                  <p>{selectedData.port}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default EcosystemMap;
