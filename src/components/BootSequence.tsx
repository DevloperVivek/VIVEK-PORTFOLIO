import React, { useEffect, useState } from "react";
import { Terminal } from "lucide-react";

interface BootSequenceProps {
  onComplete: () => void;
}

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const bootLines = [
    "> Initializing Vivek OS v2.0.4...",
    "Loading Experience Data (3+ Years Pro)...",
    "Loading Project Archive (7+ Production Apps)...",
    "Loading Engineering Systems [React, TS, Tailwind]...",
    "Connecting Security Gateway [PASS]...",
    "System Ready."
  ];

  useEffect(() => {
    if (currentLine < bootLines.length) {
      const timer = setTimeout(() => {
        setLogs((prev) => [...prev, bootLines[currentLine]]);
        setCurrentLine((prev) => prev + 1);
      }, 200); // Fast typing cadence (approx. 1.2s total)
      return () => clearTimeout(timer);
    } else {
      // Hold for 300ms, then fade out
      const fadeTimer = setTimeout(() => {
        setIsFading(true);
        const completeTimer = setTimeout(() => {
          onComplete();
        }, 500);
        return () => clearTimeout(completeTimer);
      }, 400);
      return () => clearTimeout(fadeTimer);
    }
  }, [currentLine, onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-[#030712] z-50 flex items-center justify-center p-4 transition-opacity duration-500 ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-xl bg-bg-surface border border-white/10 rounded-lg p-6 shadow-2xl backdrop-blur-md relative overflow-hidden">
        {/* Glow behind terminal */}
        <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-accent-blue/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-accent-purple/10 blur-3xl pointer-events-none" />

        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
          <div className="flex items-center space-x-2">
            <Terminal className="w-4 h-4 text-accent-blue" />
            <span className="text-xs font-mono text-gray-400">vivek-os-boot.sh</span>
          </div>
          <div className="flex space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent-success/50" />
          </div>
        </div>

        {/* Boot output log */}
        <div className="font-mono text-sm space-y-2 min-h-[160px] text-gray-300">
          {logs.map((log, idx) => {
            const isLast = idx === logs.length - 1;
            const isSystemReady = log === "System Ready.";
            return (
              <p
                key={idx}
                className={
                  isSystemReady
                    ? "text-accent-success font-semibold flex items-center"
                    : "text-gray-300"
                }
              >
                {log}
                {isLast && !isSystemReady && (
                  <span className="inline-block w-1.5 h-4 ml-1 bg-accent-blue animate-pulse" />
                )}
              </p>
            );
          })}
        </div>

        {/* User skip button */}
        <div className="mt-6 flex justify-end border-t border-white/5 pt-4">
          <button
            onClick={() => {
              setIsFading(true);
              setTimeout(onComplete, 400);
            }}
            className="text-xs font-mono text-gray-500 hover:text-accent-blue transition duration-200"
          >
            [ESC] Skip boot sequence
          </button>
        </div>
      </div>
    </div>
  );
};

export default BootSequence;
