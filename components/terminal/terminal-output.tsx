'use client'

import { motion } from 'framer-motion'
import type { OutputLine } from '@/lib/terminal-data'
import { TerminalLine } from './terminal-line'

interface TerminalOutputProps {
  lines: OutputLine[]
  animated?: boolean
}

export function TerminalOutput({ lines, animated = false }: TerminalOutputProps) {
  return (
    <motion.div
      initial={animated ? { opacity: 0 } : false}
      animate={animated ? { opacity: 1 } : undefined}
      transition={{ duration: 0.2 }}
      className="mt-1 mb-2"
    >
      {lines.map((line, i) => (
        <TerminalLine key={i} line={line} />
      ))}
    </motion.div>
  )
}
