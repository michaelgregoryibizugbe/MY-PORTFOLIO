'use client'

import type { OutputLine } from '@/lib/terminal-data'

const typeClass: Record<OutputLine['type'], string> = {
  default: 'text-[oklch(0.75_0.10_142)]',
  green: 'text-phosphor-green',
  amber: 'text-phosphor-amber',
  dim: 'text-phosphor-dim',
  error: 'text-red-500 drop-shadow-[0_0_6px_rgba(239,68,68,0.6)]',
  success: 'text-emerald-400 drop-shadow-[0_0_6px_rgba(52,211,153,0.6)]',
  heading: 'text-phosphor-amber font-bold tracking-widest uppercase',
  link: 'text-phosphor-green underline underline-offset-2 cursor-pointer hover:text-phosphor-amber transition-colors',
}

interface TerminalLineProps {
  line: OutputLine
}

export function TerminalLine({ line }: TerminalLineProps) {
  const cls = typeClass[line.type] ?? typeClass.default

  if (line.href) {
    return (
      <a
        href={line.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`block whitespace-pre-wrap break-all font-mono text-sm leading-relaxed ${typeClass.link}`}
      >
        {line.text}
      </a>
    )
  }

  return (
    <span className={`block whitespace-pre-wrap break-words font-mono text-sm leading-relaxed ${cls}`}>
      {line.text || '\u00A0'}
    </span>
  )
}
