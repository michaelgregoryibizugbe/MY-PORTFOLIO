'use client'

import {
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { COMMANDS, WELCOME_LINES, type OutputLine } from '@/lib/terminal-data'
import { TerminalInput } from './terminal-input'
import { TerminalOutput } from './terminal-output'
import { TerminalLine } from './terminal-line'

type HistoryEntry = {
  id: string
  command: string
  output: OutputLine[]
  animated: boolean
}

function generateId() {
  return Math.random().toString(36).slice(2, 9)
}

interface TerminalWithRefProps {
  onRegister: (fn: (cmd: string) => void) => void
}

export function TerminalWithRef({ onRegister }: TerminalWithRefProps) {
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const bottomRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom on new output
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const processCommand = useCallback((cmd: string) => {
    const trimmed = cmd.trim()
    if (!trimmed) return

    setCommandHistory((prev) => [trimmed, ...prev])

    if (trimmed.toLowerCase() === 'clear') {
      setHistory([])
      return
    }

    const commandData = COMMANDS[trimmed.toLowerCase()]

    const entry: HistoryEntry = commandData
      ? {
          id: generateId(),
          command: trimmed,
          output: commandData.lines,
          animated: commandData.typewrite ?? false,
        }
      : {
          id: generateId(),
          command: trimmed,
          output: [
            { text: `  command not found: ${trimmed}`, type: 'error' },
            { text: "  Type 'help' to see available commands.", type: 'dim' },
          ],
          animated: false,
        }

    setHistory((prev) => [...prev, entry])
  }, [])

  // Register handler with parent so mobile buttons can trigger it
  useEffect(() => {
    onRegister(processCommand)
  }, [processCommand, onRegister])

  const focusInput = () => {
    containerRef.current
      ?.querySelector<HTMLInputElement>('input[type="text"]')
      ?.focus()
  }

  return (
    <div
      ref={containerRef}
      onClick={focusInput}
      className="flex flex-col h-full cursor-text"
    >
      {/* Welcome banner */}
      <div className="px-4 pt-3 pb-1 shrink-0">
        {WELCOME_LINES.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.045, duration: 0.2 }}
          >
            <TerminalLine line={line} />
          </motion.div>
        ))}
      </div>

      {/* Scrollable history */}
      <div className="flex-1 overflow-y-auto terminal-scroll px-4 pb-2">
        <AnimatePresence initial={false}>
          {history.map((entry) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {/* Echoed prompt + command */}
              <div className="flex flex-wrap items-center gap-x-1 mt-3">
                <span className="text-phosphor-amber text-sm font-mono select-none">
                  mgibizugbe
                </span>
                <span className="text-phosphor-dim text-sm font-mono select-none">
                  @sec-terminal
                </span>
                <span className="text-phosphor-green text-sm font-mono select-none">
                  :~$
                </span>
                <span className="text-phosphor-green text-sm font-mono ml-1">
                  {entry.command}
                </span>
              </div>

              {/* Command output */}
              <TerminalOutput lines={entry.output} animated={entry.animated} />
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={bottomRef} />
      </div>

      {/* Active input row */}
      <div className="px-4 pb-4 shrink-0">
        <TerminalInput
          onSubmit={processCommand}
          history={commandHistory}
          disabled={false}
        />
      </div>
    </div>
  )
}
