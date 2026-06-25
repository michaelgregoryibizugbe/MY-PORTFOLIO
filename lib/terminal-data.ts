export type OutputLine = {
  text: string
  type: 'default' | 'green' | 'amber' | 'dim' | 'error' | 'success' | 'heading' | 'link'
  href?: string
}

export type CommandOutput = {
  lines: OutputLine[]
  typewrite?: boolean
}

export const COMMANDS: Record<string, CommandOutput> = {
  help: {
    lines: [
      { text: '┌─────────────────────────────────────────────────┐', type: 'dim' },
      { text: '│           AVAILABLE COMMANDS                    │', type: 'amber' },
      { text: '└─────────────────────────────────────────────────┘', type: 'dim' },
      { text: '', type: 'default' },
      { text: '  whoami      →  About Michael Gregory Ibizugbe', type: 'green' },
      { text: '  skills      →  Technical toolbox & stack', type: 'green' },
      { text: '  projects    →  Featured repositories & work', type: 'green' },
      { text: '  contact     →  Get in touch', type: 'green' },
      { text: '  clear        →  Clear the terminal', type: 'green' },
      { text: '  help         →  Show this help menu', type: 'green' },
      { text: '', type: 'default' },
      { text: '  Tip: Use ↑ ↓ arrow keys to navigate history', type: 'dim' },
    ],
    typewrite: false,
  },

  whoami: {
    lines: [
      { text: '┌─────────────────────────────────────────────────┐', type: 'dim' },
      { text: '│                   ABOUT ME                     │', type: 'amber' },
      { text: '└─────────────────────────────────────────────────┘', type: 'dim' },
      { text: '', type: 'default' },
      { text: '  Name     : Michael Gregory Ibizugbe', type: 'green' },
      { text: '  Role     : Aspiring Security Professional', type: 'green' },
      { text: '  School   : Caleb University', type: 'green' },
      { text: '  Focus    : Security Analysis & Python Automation', type: 'green' },
      { text: '', type: 'default' },
      { text: '  ─────────────────────────────────────────────', type: 'dim' },
      { text: '', type: 'default' },
      {
        text: '  I am a cybersecurity student passionate about',
        type: 'default',
      },
      {
        text: '  defending systems, uncovering vulnerabilities,',
        type: 'default',
      },
      {
        text: '  and automating security workflows with Python.',
        type: 'default',
      },
      { text: '', type: 'default' },
      {
        text: '  Currently honing my skills through CTF challenges,',
        type: 'default',
      },
      {
        text: '  homelab experiments, and security research at',
        type: 'default',
      },
      { text: '  Caleb University.', type: 'default' },
      { text: '', type: 'default' },
      { text: '  Status    : [ ACTIVELY LEARNING & BUILDING ]', type: 'amber' },
    ],
    typewrite: true,
  },

  skills: {
    lines: [
      { text: '┌─────────────────────────────────────────────────┐', type: 'dim' },
      { text: '│              TECHNICAL TOOLBOX                 │', type: 'amber' },
      { text: '└─────────────────────────────────────────────────┘', type: 'dim' },
      { text: '', type: 'default' },
      { text: '  ── Languages ──────────────────────────────────', type: 'dim' },
      { text: '  [■■■■■■■■■░]  Python       ████████░░  80%', type: 'green' },
      { text: '  [■■■■■■■░░░]  Bash         ███████░░░  70%', type: 'green' },
      { text: '  [■■■■■■░░░░]  PowerShell   ██████░░░░  60%', type: 'green' },
      { text: '  [■■■■■░░░░░]  SQL          █████░░░░░  50%', type: 'green' },
      { text: '', type: 'default' },
      { text: '  ── Security Tools ──────────────────────────────', type: 'dim' },
      { text: '  ◆ Nmap           — Network scanning & discovery', type: 'green' },
      { text: '  ◆ Metasploit     — Exploitation framework', type: 'green' },
      { text: '  ◆ Wireshark      — Packet analysis', type: 'green' },
      { text: '  ◆ Burp Suite     — Web app security testing', type: 'green' },
      { text: '  ◆ SIEM           — Security event management', type: 'green' },
      { text: '', type: 'default' },
      { text: '  ── Platforms & OS ──────────────────────────────', type: 'dim' },
      { text: '  ◇ Kali Linux     — Primary security OS', type: 'amber' },
      { text: '  ◇ Windows Server — Active Directory & Admin', type: 'amber' },
      { text: '  ◇ AWS            — Cloud infrastructure', type: 'amber' },
    ],
    typewrite: false,
  },

  projects: {
    lines: [
      { text: '┌─────────────────────────────────────────────────┐', type: 'dim' },
      { text: '│           FEATURED REPOSITORIES                │', type: 'amber' },
      { text: '└─────────────────────────────────────────────────┘', type: 'dim' },
      { text: '', type: 'default' },
      { text: '  [01] CTF-Writeups', type: 'amber' },
      { text: '  ──────────────────────────────────────────────', type: 'dim' },
      {
        text: '  Documented solutions for Capture The Flag',
        type: 'default',
      },
      { text: '  competitions. Covers web, crypto, forensics,', type: 'default' },
      { text: '  and binary exploitation challenges.', type: 'default' },
      { text: '  Tags: #CTF #Security #WriteUps', type: 'dim' },
      { text: '', type: 'default' },
      { text: '  [02] Automated-Sec-Scripts', type: 'amber' },
      { text: '  ──────────────────────────────────────────────', type: 'dim' },
      {
        text: '  Python & Bash scripts for automating recon,',
        type: 'default',
      },
      { text: '  vulnerability scanning, and reporting tasks.', type: 'default' },
      { text: '  Tags: #Python #Bash #Automation', type: 'dim' },
      { text: '', type: 'default' },
      { text: '  [03] Homelab-Documentation', type: 'amber' },
      { text: '  ──────────────────────────────────────────────', type: 'dim' },
      {
        text: '  Personal homelab setup docs — network config,',
        type: 'default',
      },
      { text: '  VM environments, and security hardening.', type: 'default' },
      { text: '  Tags: #Homelab #Networking #Linux', type: 'dim' },
      { text: '', type: 'default' },
      { text: '  [04] Web-App-Vulnerability-Labs', type: 'amber' },
      { text: '  ──────────────────────────────────────────────', type: 'dim' },
      {
        text: '  Practice labs for OWASP Top 10 vulnerabilities',
        type: 'default',
      },
      { text: '  using DVWA, WebGoat, and custom targets.', type: 'default' },
      { text: '  Tags: #WebSec #OWASP #BurpSuite', type: 'dim' },
    ],
    typewrite: false,
  },

  contact: {
    lines: [
      { text: '┌─────────────────────────────────────────────────┐', type: 'dim' },
      { text: '│              GET IN TOUCH                      │', type: 'amber' },
      { text: '└─────────────────────────────────────────────────┘', type: 'dim' },
      { text: '', type: 'default' },
      { text: '  ◉ Email    : mikegregibi@gmail.com', type: 'green' },
      {
        text: '  ◉ LinkedIn : linkedin.com/in/michael-ibizugbe',
        type: 'green',
        href: 'https://www.linkedin.com/in/michael-ibizugbe',
      },
      { text: '', type: 'default' },
      { text: '  ─────────────────────────────────────────────', type: 'dim' },
      { text: '', type: 'default' },
      {
        text: '  Open to internships, collaborations, and',
        type: 'default',
      },
      { text: '  cybersecurity research opportunities.', type: 'default' },
      { text: '', type: 'default' },
      {
        text: '  Response time: < 24 hours  [ ONLINE ]',
        type: 'success',
      },
    ],
    typewrite: true,
  },
}

export const WELCOME_LINES: OutputLine[] = [
  {
    text: ' __  __ ___ _  _    ___  ___ ___',
    type: 'green',
  },
  {
    text: '|  \\/  |_ _| \\| |  / __|/ __/ __|',
    type: 'green',
  },
  {
    text: '| |\\/| || || .` | | (_ \\__ \\__ \\',
    type: 'green',
  },
  {
    text: '|_|  |_|___|_|\\_|  \\___|___/___/',
    type: 'green',
  },
  { text: '', type: 'default' },
  {
    text: '  Michael Gregory Ibizugbe — Security Portfolio v1.0',
    type: 'amber',
  },
  { text: '  Caleb University  |  Aspiring Security Professional', type: 'dim' },
  { text: '', type: 'default' },
  { text: '  System initialized. All modules loaded.', type: 'dim' },
  {
    text: '  Type  help  to see available commands.',
    type: 'default',
  },
  { text: '', type: 'default' },
]
