'use client'

import {
  useState,
  useRef,
  useEffect,
  type KeyboardEvent,
  type ChangeEvent,
} from 'react'

interface TerminalInputProps {
  onSubmit: (cmd: string) => void
  history: string[]
  disabled?: boolean
}

export function TerminalInput({ onSubmit, history, disabled }: TerminalInputProps) {
  const [value, setValue] = useState('')
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-focus on mount and whenever disabled changes
  useEffect(() => {
    if (!disabled) inputRef.current?.focus()
  }, [disabled])

  // Focus on click anywhere in terminal
  const focusInput = () => inputRef.current?.focus()

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cmd = value.trim()
      onSubmit(cmd)
      setValue('')
      setHistoryIndex(-1)
      return
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const nextIndex = Math.min(historyIndex + 1, history.length - 1)
      setHistoryIndex(nextIndex)
      setValue(history[nextIndex] ?? '')
      return
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const nextIndex = Math.max(historyIndex - 1, -1)
      setHistoryIndex(nextIndex)
      setValue(nextIndex === -1 ? '' : (history[nextIndex] ?? ''))
      return
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    setHistoryIndex(-1)
  }

  return (
    <div
      className="flex items-center gap-1 mt-1"
      onClick={focusInput}
      role="presentation"
    >
      {/* Prompt */}
      <span className="text-phosphor-green text-sm font-mono shrink-0 select-none">
        <span className="text-phosphor-amber">mgibizugbe</span>
        <span className="text-phosphor-dim">@sec-terminal</span>
        <span className="text-phosphor-green">:~$</span>
      </span>

      {/* Input field */}
      <div className="relative flex-1 flex items-center">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          className={`
            flex-1 bg-transparent border-none outline-none
            text-phosphor-green text-sm font-mono
            caret-transparent
            disabled:opacity-50
          `}
          aria-label="Terminal command input"
        />

        {/* Custom blinking cursor */}
        {!disabled && (
          <span
            className="cursor-blink inline-block w-2 h-4 bg-terminal-green ml-0.5"
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  )
}
