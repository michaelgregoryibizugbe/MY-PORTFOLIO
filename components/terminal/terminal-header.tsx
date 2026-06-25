'use client'

interface TerminalHeaderProps {
  title?: string
}

export function TerminalHeader({ title = 'sec-terminal — mgibizugbe' }: TerminalHeaderProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-3 bg-[oklch(0.10_0.03_142)] border-b border-terminal-border select-none">
      {/* Traffic light buttons */}
      <div className="flex items-center gap-1.5">
        <span className="w-3 h-3 rounded-full bg-red-500/70 hover:bg-red-500 transition-colors" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70 hover:bg-yellow-500 transition-colors" />
        <span className="w-3 h-3 rounded-full bg-green-500/70 hover:bg-green-500 transition-colors" />
      </div>

      {/* Title */}
      <div className="flex-1 text-center">
        <span className="text-phosphor-dim text-xs font-mono tracking-wider">{title}</span>
      </div>

      {/* Status indicator */}
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
        <span className="text-phosphor-dim text-xs font-mono">LIVE</span>
      </div>
    </div>
  )
}
