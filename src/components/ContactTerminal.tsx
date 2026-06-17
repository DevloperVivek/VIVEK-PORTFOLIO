import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal, Send, Mail, FileText } from "lucide-react";
import toast from "react-hot-toast";

interface LogLine {
  text: string;
  type: "input" | "system" | "success" | "error";
}

export const ContactTerminal: React.FC = () => {
  const [terminalInput, setTerminalInput] = useState("");
  const [history, setHistory] = useState<LogLine[]>([
    { text: "> Initializing secure contact gateway...", type: "system" },
    { text: "Type 'help' to view available operations, or 'connect' to send a direct message.", type: "system" }
  ]);
  const [step, setStep] = useState<"cmd" | "name" | "email" | "message">("cmd");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of terminal
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const addLog = (text: string, type: "input" | "system" | "success" | "error" = "system") => {
    setHistory((prev) => [...prev, { text, type }]);
  };

  const handleCommandSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanInput = terminalInput.trim();
    if (!cleanInput && step === "cmd") return;

    setTerminalInput("");

    if (step === "cmd") {
      addLog(`guest@vivek-os:~$ ${cleanInput}`, "input");
      const cmd = cleanInput.toLowerCase();

      switch (cmd) {
        case "help":
          addLog("Available commands:", "system");
          addLog("  connect       - Launch secure email transmission prompt", "system");
          addLog("  about         - Display summary profile data", "system");
          addLog("  socials       - Print social network connection points", "system");
          addLog("  clear         - Clear terminal output logs", "system");
          break;

        case "connect":
        case "connect --vivek":
          addLog("Connection Established. Initializing form sequence...", "success");
          addLog("Please enter your name:", "system");
          setStep("name");
          break;

        case "about":
          addLog("Vivek Raut - Associate Software Developer", "system");
          addLog("Exp: 3+ Years in Enterprise Web & SaaS Engineering", "system");
          addLog("Tech Stack: React, TypeScript, Angular, Tailwind", "system");
          break;

        case "socials":
          addLog("Social endpoints loaded:", "system");
          addLog("  LinkedIn: https://www.linkedin.com/in/thevivekraut", "system");
          addLog("  GitHub: https://github.com/DevloperVivek", "system");
          addLog("  Email: thevivekrraut@gmail.com", "system");
          break;

        case "clear":
          setHistory([]);
          break;

        default:
          addLog(`Command not recognized: '${cleanInput}'. Type 'help' for suggestions.`, "error");
      }
    } else if (step === "name") {
      addLog(`Name: ${cleanInput}`, "input");
      if (cleanInput.length < 2) {
        addLog("Validation Error: Name must be at least 2 characters. Try again:", "error");
      } else {
        setFormData((prev) => ({ ...prev, name: cleanInput }));
        addLog("Please enter your email address:", "system");
        setStep("email");
      }
    } else if (step === "email") {
      addLog(`Email: ${cleanInput}`, "input");
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(cleanInput)) {
        addLog("Validation Error: Enter a valid email format. Try again:", "error");
      } else {
        setFormData((prev) => ({ ...prev, email: cleanInput }));
        addLog("Please enter your message (min 10 characters):", "system");
        setStep("message");
      }
    } else if (step === "message") {
      addLog(`Message: ${cleanInput}`, "input");
      if (cleanInput.length < 10) {
        addLog("Validation Error: Message must be at least 10 characters. Try again:", "error");
      } else {
        const finalData = { ...formData, message: cleanInput };
        setFormData(finalData);
        setIsSubmitting(true);
        addLog("Transmitting data packets to getform.io server...", "system");

        try {
          const response = await fetch(
            "https://getform.io/f/cc6107c6-3b09-4959-a469-0cd3112c3f37",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: new URLSearchParams({
                name: finalData.name,
                email: finalData.email,
                message: finalData.message,
              }).toString(),
            }
          );

          if (response.ok) {
            addLog("SUCCESS: Message packets successfully delivered!", "success");
            addLog("Connection terminated safely.", "success");
            toast.success("Message sent successfully!");
          } else {
            addLog("ERROR: Request failed at API gateway level.", "error");
            toast.error("API transmission failed.");
          }
        } catch (err) {
          addLog("ERROR: Network transmission breakdown.", "error");
          toast.error("Network connection error.");
        } finally {
          setIsSubmitting(false);
          setStep("cmd");
          setFormData({ name: "", email: "", message: "" });
        }
      }
    }
  };

  const autoFillCommand = (cmd: string) => {
    if (step !== "cmd") return;
    setTerminalInput(cmd);
  };

  return (
    <section id="contact" className="py-24 relative z-10 px-6 max-w-7xl mx-auto border-t border-white/5">
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center space-x-2 font-mono text-xs text-accent-blue mb-2">
          <span>[SECTION_09]</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
          <span>ESTABLISH SECURE LINK</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          CONTACT EXPERIENCE
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        {/* Left Side: Call-to-action details */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Let's Build Something Exceptional
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Currently crafting enterprise digital products and always interested in challenging frontend engineering opportunities. Reach out using the interactive command console or click direct channels.
            </p>
          </div>

          {/* Quick links buttons */}
          <div className="grid grid-cols-2 gap-4">
            <a
              href="mailto:thevivekrraut@gmail.com"
              className="flex items-center space-x-3 p-4 bg-bg-surface border border-white/5 rounded-xl hover:border-accent-blue/30 hover:bg-accent-blue/5 transition-all group"
            >
              <Mail className="w-5 h-5 text-accent-blue group-hover:scale-105 transition-transform" />
              <div>
                <span className="text-[10px] font-mono text-gray-500 block">Direct Mail</span>
                <span className="text-xs font-semibold text-gray-200">Email Me</span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/thevivekraut"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-4 bg-bg-surface border border-white/5 rounded-xl hover:border-accent-purple/30 hover:bg-accent-purple/5 transition-all group"
            >
              {/* Inline SVG for LinkedIn */}
              <svg className="w-5 h-5 text-accent-purple group-hover:scale-105 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <div>
                <span className="text-[10px] font-mono text-gray-500 block">LinkedIn</span>
                <span className="text-xs font-semibold text-gray-200">Connect Profile</span>
              </div>
            </a>

            <a
              href="https://github.com/DevloperVivek"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-4 bg-bg-surface border border-white/5 rounded-xl hover:border-accent-success/30 hover:bg-accent-success/5 transition-all group"
            >
              {/* Inline SVG for GitHub */}
              <svg className="w-5 h-5 text-accent-success group-hover:scale-105 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <div>
                <span className="text-[10px] font-mono text-gray-500 block">GitHub</span>
                <span className="text-xs font-semibold text-gray-200">View Repos</span>
              </div>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-4 bg-bg-surface border border-white/5 rounded-xl hover:border-accent-warning/30 hover:bg-accent-warning/5 transition-all group"
            >
              <FileText className="w-5 h-5 text-accent-warning group-hover:scale-105 transition-transform" />
              <div>
                <span className="text-[10px] font-mono text-gray-500 block">Resume PDF</span>
                <span className="text-xs font-semibold text-gray-200">Download</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Side: Interactive Shell Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 bg-bg-surface border border-white/10 rounded-2xl flex flex-col justify-between backdrop-blur-md shadow-2xl overflow-hidden min-h-[400px]"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/5 px-6 py-3 bg-black/30">
            <div className="flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-accent-blue" />
              <span className="font-mono text-xs text-gray-400">guest@vivek-os:~</span>
            </div>
            <div className="flex space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
            </div>
          </div>

          {/* Terminal Console Logs */}
          <div className="flex-grow p-6 font-mono text-xs space-y-2.5 overflow-y-auto max-h-[320px]">
            {history.map((line, idx) => {
              let textClass = "text-gray-300";
              if (line.type === "input") textClass = "text-white font-medium";
              if (line.type === "success") textClass = "text-accent-success font-semibold";
              if (line.type === "error") textClass = "text-accent-warning";
              return (
                <p key={idx} className={textClass}>
                  {line.text}
                </p>
              );
            })}
            <div ref={terminalEndRef} />
          </div>

          {/* Preset Commands Helper (Visual Clicks) */}
          {step === "cmd" && (
            <div className="px-6 py-2.5 border-t border-white/5 bg-black/10 flex flex-wrap gap-2 items-center">
              <span className="text-[10px] font-mono text-gray-500 mr-2 uppercase">Autofill:</span>
              <button
                onClick={() => autoFillCommand("connect")}
                className="text-[10px] font-mono px-2 py-0.5 border border-accent-blue/30 text-accent-blue rounded hover:bg-accent-blue/10 transition-colors"
              >
                connect
              </button>
              <button
                onClick={() => autoFillCommand("about")}
                className="text-[10px] font-mono px-2 py-0.5 border border-white/10 text-gray-400 rounded hover:bg-white/5 transition-colors"
              >
                about
              </button>
              <button
                onClick={() => autoFillCommand("socials")}
                className="text-[10px] font-mono px-2 py-0.5 border border-white/10 text-gray-400 rounded hover:bg-white/5 transition-colors"
              >
                socials
              </button>
            </div>
          )}

          {/* Form Command Bar */}
          <form
            onSubmit={handleCommandSubmit}
            className="border-t border-white/5 px-6 py-4 flex items-center justify-between bg-black/20"
          >
            <div className="flex items-center space-x-2 flex-grow mr-4">
              <span className="font-mono text-xs text-accent-success">
                {step === "cmd"
                  ? "guest@vivek-os:~$ "
                  : step === "name"
                  ? "Enter Name: "
                  : step === "email"
                  ? "Enter Email: "
                  : "Enter Message: "}
              </span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                disabled={isSubmitting}
                className="bg-transparent focus:outline-none text-xs font-mono text-white flex-grow"
                placeholder={
                  step === "cmd"
                    ? "type command here..."
                    : step === "name"
                    ? "John Doe"
                    : step === "email"
                    ? "john@example.com"
                    : "Describe the project opportunities..."
                }
                autoFocus
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="p-1.5 rounded bg-white/5 border border-white/10 hover:border-accent-blue/30 text-gray-400 hover:text-white transition-all disabled:opacity-40"
              title="Submit command"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactTerminal;
