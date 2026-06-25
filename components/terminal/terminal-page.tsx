'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { TerminalHeader } from './terminal-header'
import { MobileCommandBar } from './mobile-command-bar'
import { TerminalWithRef } from './terminal-with-ref'

export function TerminalPage() {
  const injectCommand = useRef<(cmd: string) => void>(() => {})

  return (
    <div className="crt-scanlines crt-flicker min-h-screen bg-terminal-bg flex items-center justify-center p-2 md:p-6">
      {/* Ambient phosphor glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 50%, oklch(0.15 0.07 142 / 0.18) 0%, transparent 70%)',
        }}
      />

      {/* Terminal window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="
          relative z-10 w-full max-w-4xl
          bg-terminal-bg
          border border-terminal-border
          shadow-[0_0_40px_oklch(0.82_0.22_142/0.12),0_0_80px_oklch(0.82_0.22_142/0.06)]
          flex flex-col
          h-[92vh] max-h-[800px]
          md:h-[85vh]
        "
      >
        {/* Title bar */}
        <TerminalHeader />

        {/* Terminal body */}
        <div className="flex-1 overflow-hidden">
          <TerminalWithRef
            onRegister={(fn) => {
              injectCommand.current = fn
            }}
          />
        </div>

        {/* Mobile quick-command buttons */}
        <MobileCommandBar
          onCommand={(cmd) => injectCommand.current(cmd)}
        />
      </motion.div>

      {/* Footer status bar */}
      <div className="fixed bottom-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-1.5 bg-[oklch(0.04_0_0)] border-t border-terminal-border">
        <span className="text-phosphor-dim text-xs font-mono">
          MGI Portfolio OS v1.0.0
        </span>
        <span className="text-phosphor-dim text-xs font-mono hidden sm:block">
          ENCRYPTION: AES-256&nbsp;|&nbsp;TLS 1.3
        </span>
        <span className="text-phosphor-green text-xs font-mono">
          [SYS: ONLINE]
        </span>
      </div>
    </div>
  )
}
