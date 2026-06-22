import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield, Cpu, CheckCircle2, Award, ChevronRight,
  Lock, Rocket, CreditCard, BarChart3, Package, Layers,
  ImageIcon, ShoppingBag, Zap, ArrowRight
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface SystemRecord {
  id: string;
  index: string;
  name: string;
  status: string;
  statusColor: "blue" | "green" | "purple" | "amber" | "gray";
  category: string;
  icon: React.ElementType;
  isFlagship?: boolean;
  purpose: string;
  businessProblem: string;
  capabilities: string[];
  tech: string[];
  contributions: string[];
  impact: string;
  // Flagship-only extras
  flagshipMetrics?: { label: string; value: string; icon: React.ElementType }[];
  flagshipArch?: { top: string; left: string; right: string }[];
  impactStatement?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const SYSTEMS: SystemRecord[] = [
  {
    id: "brandstore",
    index: "#001",
    name: "360 BrandStore",
    status: "FLAGSHIP PLATFORM",
    statusColor: "blue",
    category: "Multi-Tenant Enterprise Merchandise SaaS",
    icon: Rocket,
    isFlagship: true,
    purpose:
      "A dedicated tenant-based SaaS platform enabling organizations to launch and manage their own branded merchandise storefronts with seamless ordering and payment experience.",
    businessProblem:
      "Enterprises needed isolated, branded storefronts to manage corporate merchandise programs without sharing infrastructure with competitors or other clients.",
    capabilities: [
      "Multi-tenant storefronts with isolated environments",
      "Corporate merchandise management & catalogs",
      "Product discovery and ordering workflows",
      "Enterprise bulk order management",
      "Role-based access & storefront experiences",
      "Secure online payments via Razorpay",
      "Responsive cross-device experience",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "REST APIs", "Enterprise Frontend Architecture"],
    contributions: [
      "Frontend architecture designed from ground up",
      "Scalable React module system developed",
      "Enterprise component library implemented",
      "Complex API integrations completed",
      "Business workflows translated into user experiences",
      "Production-grade UI delivered across multiple tenants",
    ],
    impact:
      "360 BrandStore became the flagship digital commerce platform within the 360Customizer ecosystem, powering dedicated branded merchandise experiences for enterprise organizations.",
    flagshipMetrics: [
      { label: "MULTI-TENANT", value: "Enterprise SaaS Architecture", icon: Layers },
      { label: "CORPORATE STORES", value: "Dedicated Brand Experiences", icon: ShoppingBag },
      { label: "PAYMENT FLOW", value: "Razorpay Integrated", icon: CreditCard },
      { label: "PRODUCTION", value: "Live Business System", icon: Zap },
    ],
    impactStatement:
      '"360 BrandStore became the flagship digital commerce platform within the 360Customizer ecosystem, providing organizations with scalable and dedicated merchandise storefront experiences."',
  },
  {
    id: "gifthub",
    index: "#002",
    name: "GiftHub",
    status: "LIVE PLATFORM",
    statusColor: "green",
    category: "Enterprise Gifting & Automation",
    icon: ShoppingBag,
    purpose:
      "A complete customer-facing corporate gifting ecosystem combining infinite product discovery with intelligent automation systems for catalog and mockup generation.",
    businessProblem:
      "Corporate gifting teams needed a streamlined way to discover thousands of products, generate custom catalogs, preview mockups, and submit bulk enquiries — all from one platform.",
    capabilities: [
      "Infinite scroll product discovery engine",
      "Bulk enquiry management workflows",
      "Dynamic PDF catalog generation",
      "Branded mockup preview generation",
      "Product Bridge integration for live inventory",
      "Enterprise order submission workflows",
    ],
    tech: ["React", "TypeScript", "Framer Motion", "Tailwind CSS", "REST APIs"],
    contributions: [
      "Served as primary frontend engineer for the entire platform",
      "Built complex Framer Motion transitions for interactive reveals",
      "Implemented infinite scroll with progressive image loading",
      "Architected campaign wizard flow and enquiry management",
    ],
    impact:
      "Increased gifting campaign conversion rates and improved client enquiry loops, establishing GiftHub as the primary discovery platform for the ecosystem.",
  },
  {
    id: "dashboard",
    index: "#003",
    name: "360 Dashboard / OMS",
    status: "LIVE SYSTEM",
    statusColor: "blue",
    category: "Internal Operations Management",
    icon: BarChart3,
    purpose:
      "The internal operational backbone managing catalog rules, SKU data, order lifecycles, and cross-department workflows for the entire 360Customizer business.",
    businessProblem:
      "Internal operations teams — sales, design, logistics, accounts — needed a unified platform to coordinate order management and avoid inter-department silos.",
    capabilities: [
      "Order Management System (OMS) for full lifecycle tracking",
      "Department-specific access modules",
      "Administrative scheduling and auditing workflows",
      "Direct synchronization to customer-facing portals",
      "Financial reconciliation and invoice management",
    ],
    tech: ["React", "TypeScript", "Angular", "Tailwind CSS", "Material UI"],
    contributions: [
      "Built administrative modules for client design customizations",
      "Optimized data grid virtualization for high-density loads",
      "Configured secure access controls for logistics and design teams",
      "Built financial reconciliation and analytical dashboards",
    ],
    impact:
      "Consolidated all operational activities into a single system, reducing average order processing time and eliminating inter-department coordination overhead.",
  },
  {
    id: "cataloghub",
    index: "#004",
    name: "Catalog Hub",
    status: "LEGACY SUCCESS",
    statusColor: "amber",
    category: "Market Validation Platform",
    icon: Package,
    purpose:
      "A rapid product discovery platform built during the transitional engineering phase to validate buyer interest in the corporate gifting market.",
    businessProblem:
      "The business needed fast, validated proof that clients would engage with a curated product catalog before investing in a full-scale gifting platform.",
    capabilities: [
      "Aggressive product listing grid with fast browsing",
      "Client selection and enquiry cart management",
      "Rapid deployment for market testing",
    ],
    tech: ["React JS", "Tailwind CSS", "JavaScript"],
    contributions: [
      "Served as lead developer for this rapid validation build",
      "Built and deployed the prototype in under 2 weeks",
      "Proved market fit — competitor products later copied the concept",
    ],
    impact:
      "Exceptional customer appreciation validated the product concept. Competitors later copied the approach, confirming the innovation lead established by this platform.",
  },
  {
    id: "bridge",
    index: "#005",
    name: "Product Bridge",
    status: "LIVE ENGINE",
    statusColor: "green",
    category: "Central Product Management",
    icon: Cpu,
    purpose:
      "The central product master system syncing item schemas, supplier inventory, and price structures to all connected consumer-facing platforms.",
    businessProblem:
      "Multiple customer-facing platforms were operating with inconsistent product data, causing catalog mismatches, pricing errors, and inventory discrepancies.",
    capabilities: [
      "Product Information Management (PIM) system",
      "Product lifecycle and schema synchronization",
      "Centralized pricing and inventory definitions",
    ],
    tech: ["React", "TypeScript", "REST API", "Tailwind CSS"],
    contributions: [
      "Developed API bridge connectors for central database ingestion",
      "Built schema validators preventing catalog formatting mismatches",
    ],
    impact:
      "Became the single source of truth for all product data, maintaining absolute catalog pricing integrity across the entire corporate product structure.",
  },
  {
    id: "cataloggen",
    index: "#006",
    name: "Catalog Generator",
    status: "AUTOMATION SERVICE",
    statusColor: "purple",
    category: "PDF Export Automation Engine",
    icon: Layers,
    purpose:
      "A dedicated service that exports professional product PDF catalogs dynamically built from selected merchandise arrays with branded layouts.",
    businessProblem:
      "Sales teams were manually creating product catalogs in design tools — a slow, error-prone process that blocked client proposals.",
    capabilities: [
      "Dynamic layout pagination and print-to-PDF optimization",
      "Corporate theme and branding customization",
      "Multi-product catalog exports",
    ],
    tech: ["React", "TypeScript", "CSS Print Modules"],
    contributions: [
      "Engineered browser layouts with exact page-break CSS controls",
      "Designed configurable template styles for client branding guidelines",
    ],
    impact:
      "Eliminated manual catalog creation, cutting sales support labor costs and accelerating proposal delivery cycles.",
  },
  {
    id: "mockupgen",
    index: "#007",
    name: "Mockup Generator",
    status: "VISUALIZATION ENGINE",
    statusColor: "purple",
    category: "Merchandise Visualization Service",
    icon: ImageIcon,
    purpose:
      "A dedicated visualization service rendering client logos on digital product mockups dynamically using canvas-based image processing.",
    businessProblem:
      "Clients had no way to visualize their branding on merchandise before ordering, leading to low order confidence and frequent revision cycles.",
    capabilities: [
      "Dynamic logo overlay rendering on product images",
      "Matrix canvas displacement mapping for 3D surfaces",
      "Interactive customization preview cards",
    ],
    tech: ["HTML5 Canvas", "WebGL", "React", "TypeScript"],
    contributions: [
      "Wrote matrix translation math for scaling logos onto cylindrical surfaces",
      "Optimized image compression for instant preview renders",
    ],
    impact:
      "Boosted client order confidence by providing immediate product visuals, reducing revision requests and accelerating the order commitment cycle.",
  },
  {
    id: "payment",
    index: "#008",
    name: "360 Payment Hub",
    status: "PAYMENT INFRASTRUCTURE",
    statusColor: "green",
    category: "Secure Transaction Processing",
    icon: CreditCard,
    purpose:
      "Dedicated high-performance payment processing integration hub securing bulk order billing, transactions, and corporate ledger updates.",
    businessProblem:
      "Enterprise bulk orders required secure, trackable payment flows with audit trails, invoice generation, and financial reconciliation — not available in off-the-shelf tools.",
    capabilities: [
      "Razorpay checkout and SDK integration",
      "Secure callback token validation",
      "Transactional ledgers and invoice status boards",
      "Financial reconciliation dashboards",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Razorpay SDK", "Axios"],
    contributions: [
      "Integrated Razorpay SDK with failover status reporting",
      "Built analytical graphs for financial reconciliations",
      "Designed invoice receipt generators and audit tables",
    ],
    impact:
      "Secured billing transactions with zero mismatches across high-value enterprise operations, providing a reliable financial backbone for the ecosystem.",
  },
];

// ─── Status Color Map ─────────────────────────────────────────────────────────
const STATUS_COLORS = {
  blue: {
    dot: "bg-accent-blue",
    text: "text-accent-blue",
    border: "border-accent-blue/40",
    bg: "bg-accent-blue/10",
    glow: "shadow-accent-blue/20",
  },
  green: {
    dot: "bg-accent-success",
    text: "text-accent-success",
    border: "border-accent-success/40",
    bg: "bg-accent-success/10",
    glow: "shadow-accent-success/20",
  },
  purple: {
    dot: "bg-accent-purple",
    text: "text-accent-purple",
    border: "border-accent-purple/40",
    bg: "bg-accent-purple/10",
    glow: "shadow-accent-purple/20",
  },
  amber: {
    dot: "bg-accent-warning",
    text: "text-accent-warning",
    border: "border-accent-warning/40",
    bg: "bg-accent-warning/10",
    glow: "shadow-accent-warning/20",
  },
  gray: {
    dot: "bg-gray-500",
    text: "text-gray-400",
    border: "border-white/10",
    bg: "bg-white/5",
    glow: "shadow-black/20",
  },
};

// ─── Flagship Panel ───────────────────────────────────────────────────────────
const FlagshipPanel: React.FC<{ data: SystemRecord }> = ({ data }) => {
  return (
    <div className="space-y-6">
      {/* Flagship Badge */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-accent-blue/10 border border-accent-blue/30 rounded-full">
          <Rocket className="w-4 h-4 text-accent-blue animate-pulse" />
          <span className="text-xs font-mono font-bold text-accent-blue tracking-widest">
            🚀 FLAGSHIP PLATFORM
          </span>
        </div>
      </div>

      {/* Title block */}
      <div>
        <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          {data.name}
        </h3>
        <p className="text-sm text-accent-blue/80 font-mono mt-1">{data.category}</p>
      </div>

      {/* Mission */}
      <p className="text-sm text-gray-300 leading-relaxed border-l-2 border-accent-blue/40 pl-4 py-1">
        {data.purpose}
      </p>

      {/* Flagship Metric Cards */}
      {data.flagshipMetrics && (
        <div className="grid grid-cols-2 gap-3">
          {data.flagshipMetrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="bg-[rgba(0,212,255,0.04)] border border-accent-blue/15 rounded-xl p-3 group hover:border-accent-blue/40 hover:bg-accent-blue/8 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Icon className="w-3.5 h-3.5 text-accent-blue/70" />
                  <span className="text-[9px] font-mono font-bold text-accent-blue/70 tracking-widest uppercase">
                    {metric.label}
                  </span>
                </div>
                <p className="text-xs font-semibold text-white leading-snug">{metric.value}</p>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Architecture diagram */}
      <div>
        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-3">
          System Architecture Flow
        </span>
        <div className="bg-black/40 border border-white/5 rounded-xl p-4 font-mono text-[11px]">
          <div className="flex flex-col items-center gap-1 text-gray-400">
            <span className="text-white font-bold text-xs">Corporate Users</span>
            <span className="text-accent-blue/40 text-lg leading-none">│</span>
            <span className="text-accent-blue font-bold px-4 py-1.5 border border-accent-blue/30 rounded bg-accent-blue/5">
              360 BrandStore
            </span>
            <div className="flex items-center gap-12 mt-1">
              <span className="text-accent-blue/40 text-lg">╱</span>
              <span className="text-accent-blue/40 text-lg">╲</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-400 px-2 py-1 border border-white/10 rounded text-[10px]">
                360 Dashboard
              </span>
              <span className="text-gray-400 px-2 py-1 border border-white/10 rounded text-[10px]">
                Payment Hub
              </span>
            </div>
            <div className="flex items-center gap-6 mt-1 text-[9px] text-gray-600">
              <span>Operations</span>
              <span>Razorpay</span>
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities */}
      <div>
        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-3">
          Core Capabilities
        </span>
        <ul className="grid grid-cols-1 gap-2">
          {data.capabilities.map((cap, i) => (
            <li key={i} className="flex items-start gap-2.5 text-xs text-gray-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue shrink-0 mt-0.5" />
              <span>{cap}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Engineering Ownership */}
      <div>
        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-3">
          Engineering Ownership
        </span>
        <div className="bg-black/30 border border-white/5 rounded-xl p-4 space-y-2">
          {data.contributions.map((log, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.06 }}
              className="text-[11px] font-mono text-accent-blue/80 flex items-start gap-2"
            >
              <span className="text-accent-blue/40 shrink-0 mt-0.5">›</span>
              <span>{log}</span>
            </motion.p>
          ))}
        </div>
      </div>

      {/* Tech stack */}
      <div>
        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-2">
          Technical Specification
        </span>
        <div className="flex flex-wrap gap-2">
          {data.tech.map((t, i) => (
            <span
              key={i}
              className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-mono text-gray-300 hover:border-accent-blue/30 hover:text-accent-blue transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Business Impact Statement */}
      {data.impactStatement && (
        <div className="relative">
          <div className="absolute inset-0 bg-accent-blue/3 rounded-xl blur-sm" />
          <div className="relative border border-accent-blue/20 rounded-xl p-4 bg-accent-blue/5">
            <Award className="w-4 h-4 text-accent-blue mb-2" />
            <p className="text-xs text-gray-300 leading-relaxed italic">{data.impactStatement}</p>
          </div>
        </div>
      )}
    </div>
  );
};

// ─── Standard Intelligence Panel ─────────────────────────────────────────────
const StandardPanel: React.FC<{ data: SystemRecord }> = ({ data }) => {
  const colors = STATUS_COLORS[data.statusColor];
  const Icon = data.icon;

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-start gap-3">
        <div className={`p-2.5 rounded-xl ${colors.bg} border ${colors.border} shrink-0`}>
          <Icon className={`w-5 h-5 ${colors.text}`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span
              className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}
            >
              {data.status}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white">{data.name}</h3>
          <p className="text-[10px] font-mono text-gray-500 mt-0.5">{data.category}</p>
        </div>
      </div>

      {/* Purpose */}
      <div>
        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-2">
          Mission
        </span>
        <p className="text-xs text-gray-400 leading-relaxed border-l-2 border-white/10 pl-3 py-0.5">
          {data.purpose}
        </p>
      </div>

      {/* Business Problem */}
      <div>
        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-2">
          Business Problem Solved
        </span>
        <p className="text-xs text-gray-400 leading-relaxed">{data.businessProblem}</p>
      </div>

      {/* Capabilities */}
      <div>
        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-2">
          Key Capabilities
        </span>
        <ul className="space-y-1.5">
          {data.capabilities.map((cap, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
              <CheckCircle2 className={`w-3.5 h-3.5 ${colors.text} shrink-0 mt-0.5`} />
              <span>{cap}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Contributions */}
      <div>
        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-2">
          My Engineering Contributions
        </span>
        <div className="space-y-1.5">
          {data.contributions.map((c, i) => (
            <p key={i} className="text-[11px] font-mono text-accent-blue/70 flex items-start gap-2">
              <span className="text-accent-blue/40 shrink-0">›</span>
              <span>{c}</span>
            </p>
          ))}
        </div>
      </div>

      {/* Tech */}
      <div>
        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-2">
          Technologies
        </span>
        <div className="flex flex-wrap gap-1.5">
          {data.tech.map((t, i) => (
            <span
              key={i}
              className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-gray-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Impact */}
      <div className="border-t border-white/5 pt-4">
        <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest block mb-1.5">
          System Impact
        </span>
        <p className="text-xs text-accent-success font-mono leading-relaxed flex items-start gap-2">
          <Award className="w-3.5 h-3.5 shrink-0 mt-0.5 text-accent-success" />
          <span>{data.impact}</span>
        </p>
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
export const EcosystemMap: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>("brandstore");
  const [bootPhase, setBootPhase] = useState<"idle" | "booting" | "ready">("idle");
  const [bootLines, setBootLines] = useState<string[]>([]);
  const [scanningId, setScanningId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const selectedSystem = SYSTEMS.find((s) => s.id === selectedId) || SYSTEMS[0];

  // ── Boot sequence ──────────────────────────────────────────────────────────
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && bootPhase === "idle") setBootPhase("booting");
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [bootPhase]);

  useEffect(() => {
    if (bootPhase !== "booting") return;
    const lines = [
      "> ACCESSING ENGINEERING DATABASE...",
      "> Loading production systems...",
      "> 8 systems discovered.",
      "> ACCESS GRANTED.",
    ];
    let i = 0;
    const interval = setInterval(() => {
      if (i < lines.length) {
        setBootLines((prev) => [...prev, lines[i]]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setBootPhase("ready"), 400);
      }
    }, 280);
    return () => clearInterval(interval);
  }, [bootPhase]);

  // ── Handle record click ────────────────────────────────────────────────────
  const handleSelect = (id: string) => {
    setScanningId(id);
    setSelectedId(id);
    // Scroll panel into view on mobile
    setTimeout(() => {
      panelRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 100);
    setTimeout(() => setScanningId(null), 1200);
  };

  return (
    <section
      id="ecosystem"
      ref={containerRef}
      className="py-24 relative z-10 px-4 md:px-6 max-w-7xl mx-auto border-t border-white/5"
    >
      {/* ── Section Header ─────────────────────────────────────────────── */}
      <div className="mb-14">
        <div className="flex items-center space-x-2 font-mono text-xs text-accent-blue mb-3">
          <Shield className="w-3.5 h-3.5" />
          <span>[SECTION_04]</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
          <span>CLASSIFIED ENGINEERING RECORDS</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2">
          ENGINEERING ARCHIVE
        </h2>
        <p className="text-sm font-mono text-gray-500 tracking-widest uppercase">
          Production Systems I Have Engineered
        </p>
      </div>

      {/* ── Boot overlay ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {bootPhase !== "ready" && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center min-h-[400px]"
          >
            <div className="font-mono text-xs w-full max-w-md bg-black/60 border border-white/8 rounded-xl p-6 shadow-2xl space-y-2.5">
              {bootLines.map((line, idx) => (
                <p
                  key={idx}
                  className={
                    idx === bootLines.length - 1
                      ? "text-white font-bold"
                      : "text-accent-blue/70"
                  }
                >
                  {line}
                  {idx === bootLines.length - 1 && (
                    <span className="terminal-cursor ml-1" />
                  )}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main Two-Panel Layout ──────────────────────────────────────────── */}
      {bootPhase === "ready" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
        >
          {/* ── LEFT: System Archive List ───────────────────────────────── */}
          <div className="lg:col-span-5 xl:col-span-4">
            {/* Panel Header */}
            <div className="flex items-center justify-between bg-[rgba(0,212,255,0.04)] border border-white/8 rounded-t-xl px-4 py-3">
              <div className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-accent-blue" />
                <span className="font-mono text-[10px] text-accent-blue tracking-widest uppercase">
                  System Database
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-success animate-pulse" />
                <span className="font-mono text-[9px] text-gray-500">
                  {SYSTEMS.length} RECORDS
                </span>
              </div>
            </div>

            {/* Records List */}
            <div className="border border-t-0 border-white/8 rounded-b-xl overflow-hidden divide-y divide-white/5">
              {SYSTEMS.map((sys, idx) => {
                const colors = STATUS_COLORS[sys.statusColor];
                const Icon = sys.icon;
                const isActive = selectedId === sys.id;
                const isScanning = scanningId === sys.id;

                return (
                  <motion.button
                    key={sys.id}
                    onClick={() => handleSelect(sys.id)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    className={`w-full text-left px-4 py-3.5 relative overflow-hidden transition-all duration-200 group
                      ${isActive
                        ? `bg-[rgba(0,212,255,0.06)] border-l-2 border-accent-blue`
                        : "bg-transparent border-l-2 border-transparent hover:bg-white/3 hover:border-white/20"
                      }`}
                  >
                    {/* Scan line animation */}
                    {isScanning && (
                      <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 0.8, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-blue/15 to-transparent pointer-events-none"
                      />
                    )}

                    <div className="flex items-center gap-3 relative z-10">
                      {/* Index + Icon */}
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="font-mono text-[9px] text-gray-600 w-8">
                          {sys.index}
                        </span>
                        <div
                          className={`p-1.5 rounded-lg ${isActive ? colors.bg : "bg-white/3"} border ${isActive ? colors.border : "border-white/5"} transition-all duration-200`}
                        >
                          <Icon
                            className={`w-3.5 h-3.5 transition-colors ${isActive ? colors.text : "text-gray-500 group-hover:text-gray-300"}`}
                          />
                        </div>
                      </div>

                      {/* Name + Status */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className={`text-sm font-semibold truncate transition-colors ${isActive ? "text-white" : "text-gray-300 group-hover:text-white"}`}
                          >
                            {sys.name}
                          </span>
                          {sys.isFlagship && (
                            <span className="text-[8px] font-mono px-1.5 py-0.5 bg-accent-blue/10 text-accent-blue border border-accent-blue/20 rounded-full">
                              FLAGSHIP
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} ${isActive ? "animate-pulse" : ""}`} />
                          <span className={`text-[9px] font-mono ${isActive ? colors.text : "text-gray-600"}`}>
                            {sys.status}
                          </span>
                        </div>
                      </div>

                      {/* Arrow indicator */}
                      <ChevronRight
                        className={`w-3.5 h-3.5 shrink-0 transition-all duration-200 ${isActive ? "text-accent-blue" : "text-gray-700 group-hover:text-gray-400"} ${isActive ? "translate-x-0" : "-translate-x-1 group-hover:translate-x-0"}`}
                      />
                    </div>

                    {/* Active bottom line */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-accent-blue/50 via-accent-blue/20 to-transparent"
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Archive footer */}
            <div className="mt-3 flex items-center gap-2 px-1">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-success animate-ping" />
              <span className="font-mono text-[9px] text-gray-600 tracking-widest">
                ARCHIVE SECURE · CLEARANCE LEVEL: PORTFOLIO
              </span>
            </div>
          </div>

          {/* ── RIGHT: Intelligence Panel ────────────────────────────────── */}
          <div className="lg:col-span-7 xl:col-span-8" ref={panelRef}>
            {/* Panel chrome header */}
            <div className="flex items-center justify-between bg-[rgba(15,23,42,0.8)] border border-white/8 rounded-t-xl px-4 py-3">
              <div className="flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-accent-blue" />
                <span className="font-mono text-[10px] text-accent-blue tracking-widest uppercase">
                  System Intelligence Panel
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[9px] text-gray-600">
                  {selectedSystem.index}
                </span>
                <span
                  className={`font-mono text-[9px] px-2 py-0.5 rounded-full border ${STATUS_COLORS[selectedSystem.statusColor].bg} ${STATUS_COLORS[selectedSystem.statusColor].text} ${STATUS_COLORS[selectedSystem.statusColor].border}`}
                >
                  {selectedSystem.status}
                </span>
              </div>
            </div>

            {/* Panel body */}
            <div className="border border-t-0 border-white/8 rounded-b-xl bg-[rgba(9,11,21,0.7)] relative overflow-hidden">
              {/* Ambient top glow for flagship */}
              {selectedSystem.isFlagship && (
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent" />
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="p-6 max-h-[80vh] overflow-y-auto scrollbar-thin"
                >
                  {selectedSystem.isFlagship ? (
                    <FlagshipPanel data={selectedSystem} />
                  ) : (
                    <StandardPanel data={selectedSystem} />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom CTA hint */}
            <div className="mt-3 flex items-center gap-2 justify-end text-[9px] font-mono text-gray-700">
              <span>SELECT A RECORD FROM THE ARCHIVE TO VIEW INTELLIGENCE</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default EcosystemMap;
