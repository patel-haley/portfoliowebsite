import { useState, useRef, useEffect } from "react";
import { useCommandPalette } from "@/hooks/use-command-palette";

interface CommandItem {
  label: string;
  action: () => void;
}

const commands: CommandItem[] = [
  {
    label: "Go to Experience",
    action: () => document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" })
  },
  {
    label: "Go to Projects",
    action: () => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
  },
  {
    label: "Go to Leadership",
    action: () => document.querySelector("#leadership")?.scrollIntoView({ behavior: "smooth" })
  },
  {
    label: "Go to Contact",
    action: () => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
  },
  {
    label: "Download Resume",
    action: () => window.open("/resume.pdf", "_blank")
  }
];

export function CommandPalette() {
  const { isOpen, close } = useCommandPalette();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredCommands = commands.filter(command =>
    command.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleCommand = (command: CommandItem) => {
    command.action();
    close();
    setQuery("");
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
        onClick={close}
        data-testid="command-palette-overlay"
      />
      
      {/* Command Palette */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-xl mx-4">
        <div className="glass-card bg-white/90 dark:bg-black/90 border border-black/10 dark:border-white/20 rounded-2xl shadow-2xl">
          <div className="p-4">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search commands..."
              className="w-full bg-transparent border-none outline-none text-lg placeholder-black/50 dark:placeholder-white/50"
              data-testid="input-command-search"
            />
          </div>
          <div className="border-t border-black/10 dark:border-white/10 p-2 max-h-64 overflow-y-auto">
            {filteredCommands.length > 0 ? (
              <>
                <div className="text-sm text-black/60 dark:text-white/60 px-2 py-1">Quick actions</div>
                {filteredCommands.map((command, index) => (
                  <button
                    key={index}
                    onClick={() => handleCommand(command)}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-sm transition-colors"
                    data-testid={`button-command-${index}`}
                  >
                    {command.label}
                  </button>
                ))}
              </>
            ) : (
              <div className="px-4 py-6 text-sm opacity-60">No matching commands found.</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
