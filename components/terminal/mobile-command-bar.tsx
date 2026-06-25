'use client'

import { motion } from 'framer-motion'

const QUICK_COMMANDS = ['help', 'whoami', 'skills', 'projects', 'contact', 'clear']

interface MobileCommandBarProps {
  onCommand: (cmd: string) => void
}

export function MobileCommandBar({ onCommand }: MobileCommandBarProps) {
  return (
    <div className="md:hidden border-t border-terminal-border bg-[oklch(0.06_0.01_142)] px-3 py-2">
      <p className="text-phosphor-dim text-xs mb-2 text-center tracking-wider">
        QUICK COMMANDS
      </p>
      <div className="flex flex-wrap gap-2 justify-center">
        {QUICK_COMMANDS.map((cmd, i) => (
          <motion.button
            key={cmd}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => onCommand(cmd)}
            className="
              px-3 py-1.5 text-xs font-mono
              border border-terminal-border
              text-phosphor-green
              hover:bg-[oklch(0.15_0.05_142)]
              hover:border-terminal-green
              hover:text-phosphor-amber
              active:scale-95
              transition-all duration-150
            "
            aria-label={`Run ${cmd} command`}
          >
            {cmd}
          </motion.button>
        ))}
      </div>
    </div>
  )
}
