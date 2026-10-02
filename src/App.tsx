import { useState, useEffect } from 'react'
import clsx from 'clsx'
import confetti from 'canvas-confetti'
import {
  ExternalLink,
  Mail,
  Copy,
  Check,
  Code2,
  Sparkles,
  Zap,
  ArrowUpRight,
  Layers,
  Palette,
  CheckCircle2,
  ArrowUp,
  Cpu,
  Flame,
  Clock,
  ShieldCheck,
  Phone,
  Bot
} from 'lucide-react'

// Custom SVG Icons
function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  )
}

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.24-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.32z"/>
    </svg>
  )
}

// Project Interface
interface Project {
  id: string
  title: string
  category: string
  url: string
  description: string
  impact: string
  accentColor: string
  tags: string[]
  stats: { label: string; value: string }[]
}

const PROJECTS: Project[] = [
  {
    id: 'devlinkhub',
    title: 'DevLinkHub',
    category: 'Developer Ecosystem & Platform',
    url: 'https://www.devlinkhub.in/',
    description:
      'A comprehensive hub connecting developers with essential developer tools, curated roadmaps, cheat sheets, and active tech repositories. Engineered for lightning-fast resource discovery.',
    impact: '10K+ Monthly Searches • Real-time Instant Filter • Mobile First',
    accentColor: '#ccff00',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'API Integration'],
    stats: [
      { label: 'Role', value: 'Full Stack Development' },
      { label: 'Stack', value: 'Next.js & TypeScript' },
      { label: 'Status', value: 'Live in Production' }
    ]
  },
  {
    id: 'apexphotoclub',
    title: 'Apex Photo Club',
    category: 'Photography Community & Visual Showcase',
    url: 'https://apex-mocha-gamma.vercel.app/',
    description:
      'A modern, interactive visual platform and community showcase for photography enthusiasts and creative visual artists. Features ultra-responsive media galleries, event showcases, member portfolios, and seamless high-resolution visual curation.',
    impact: 'High-Res Visual Gallery • Smooth Filtering • Zero Jank',
    accentColor: '#00f0ff',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Media Optimization'],
    stats: [
      { label: 'Role', value: 'Frontend & UI Architecture' },
      { label: 'Stack', value: 'React & Tailwind CSS' },
      { label: 'Status', value: 'Live in Production' }
    ]
  },
  {
    id: 'thearrivalx',
    title: 'The Arrival X',
    category: 'Agency & Immersive Brand Experience',
    url: 'https://www.thearrivalx.in/',
    description:
      'An avant-garde experiential digital platform for a creative agency, blending kinetic typography, bold layout dynamics, and high-impact visual storytelling.',
    impact: 'Award-Caliber Motion • Seamless Transitions • Premium Aesthetics',
    accentColor: '#ff2a85',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Kinetic UI', 'Brand Design'],
    stats: [
      { label: 'Role', value: 'Full Stack Web Development' },
      { label: 'Stack', value: 'Next.js & Modern CSS' },
      { label: 'Status', value: 'Live in Production' }
    ]
  },
  {
    id: 'saenterprises',
    title: 'S&A Enterprises',
    category: 'Enterprise Operations & B2B Hub',
    url: 'https://s-a-enterprises-website.vercel.app/',
    description:
      'Industrial corporate web portal engineered to showcase commercial services, product catalogs, and high-intent inquiry pipelines with bulletproof dependability.',
    impact: '3x Lead Generation • Clean Architecture • Business Catalog',
    accentColor: '#ffd000',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Lead Funnel', 'Enterprise UX'],
    stats: [
      { label: 'Role', value: 'Web Design & Development' },
      { label: 'Stack', value: 'React & Tailwind CSS' },
      { label: 'Status', value: 'Live in Production' }
    ]
  },
  {
    id: 'plushaffairs',
    title: 'Plush Affairs',
    category: 'Luxury Wedding & Event Curation',
    url: 'https://www.plushaffairs.in/',
    description:
      'High-end editorial web experience for luxury wedding planners and bespoke event organizers. Features high-res visual masonry grids, editorial typography, and bespoke inquiry flows.',
    impact: 'Editorial Masonry Layout • High-Res Asset CDN • Custom Booking Funnel',
    accentColor: '#ff7a00',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Asset Optimization', 'Luxury UX'],
    stats: [
      { label: 'Role', value: 'Frontend & Experience Design' },
      { label: 'Stack', value: 'Next.js & Responsive CSS' },
      { label: 'Status', value: 'Live in Production' }
    ]
  }
]

export default function App() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [activeFilter, setActiveFilter] = useState<'all' | 'web-apps' | 'platforms'>('all')
  const [currentTime, setCurrentTime] = useState('')

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        })
      )
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  // Confetti trigger
  const triggerConfetti = (e?: React.MouseEvent) => {
    if (e) {
      const rect = (e.target as HTMLElement).getBoundingClientRect()
      const x = (rect.left + rect.width / 2) / window.innerWidth
      const y = (rect.top + rect.height / 2) / window.innerHeight
      confetti({
        particleCount: 65,
        spread: 70,
        origin: { x, y },
        colors: ['#ccff00', '#00f0ff', '#ff2a85', '#ffd000', '#000000']
      })
    } else {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ccff00', '#00f0ff', '#ff2a85', '#ffd000', '#000000']
      })
    }
  }

  const [copiedLinkedIn, setCopiedLinkedIn] = useState(false)
  const [customMessage, setCustomMessage] = useState(
    "Hi Nilesh Verma, I saw your portfolio and would like to discuss an AI & Full Stack project with you."
  )

  const LINKEDIN_URL = "https://www.linkedin.com/in/nilesh-verma-9845a3266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  const PHONE_NUMBER = "9754512932"
  const EMAIL_ADDRESS = "nileshverma0052@gmail.com"

  // Open WhatsApp with direct prefilled message
  const sendToWhatsApp = (text?: string) => {
    const msg = text || customMessage || "Hi Nilesh Verma, I saw your portfolio and want to discuss a project with you!"
    const url = `https://api.whatsapp.com/send?phone=919754512932&text=${encodeURIComponent(msg)}`
    triggerConfetti()
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  // Open Gmail web composer directly with prefilled recipient, subject, and body
  const sendToGmail = (text?: string, subject?: string) => {
    const msg = text || customMessage || "Hi Nilesh,\n\nI saw your portfolio and would like to discuss a project with you.\n\nThanks!"
    const sub = subject || "Project Inquiry - AI & Full Stack Development"
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=nileshverma0052@gmail.com&su=${encodeURIComponent(sub)}&body=${encodeURIComponent(msg)}`
    triggerConfetti()
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  // Copy email to clipboard
  const handleCopyEmail = (e?: React.MouseEvent) => {
    navigator.clipboard.writeText(EMAIL_ADDRESS)
    setCopiedEmail(true)
    triggerConfetti(e)
    setTimeout(() => setCopiedEmail(false), 3000)
  }

  // Copy phone number to clipboard
  const handleCopyPhone = (e?: React.MouseEvent) => {
    navigator.clipboard.writeText(PHONE_NUMBER)
    setCopiedPhone(true)
    triggerConfetti(e)
    setTimeout(() => setCopiedPhone(false), 3000)
  }

  // Copy LinkedIn URL to clipboard
  const handleCopyLinkedIn = (e?: React.MouseEvent) => {
    navigator.clipboard.writeText(LINKEDIN_URL)
    setCopiedLinkedIn(true)
    triggerConfetti(e)
    setTimeout(() => setCopiedLinkedIn(false), 3000)
  }

  // Filter projects
  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'web-apps') return p.id === 'apexphotoclub' || p.id === 'devlinkhub'
    if (activeFilter === 'platforms') return p.id === 'thearrivalx' || p.id === 'saenterprises' || p.id === 'plushaffairs'
    return true
  })

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={clsx("min-h-screen bg-[#F9F8F6] text-[#050505] neo-grid-pattern selection:bg-[#ccff00] selection:text-black")}>
      {/* ========================================================
          STICKY TOP NAVIGATION
      ======================================================== */}
      <header className="sticky top-0 z-50 bg-[#F9F8F6]/95 backdrop-blur-md border-b-4 border-black px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <div className="flex items-center gap-5 sm:gap-6">
            <a
              href="#"
              className="text-2xl sm:text-3xl font-black tracking-tighter uppercase font-display hover:-translate-y-0.5 transition-transform flex items-center gap-2"
            >
              <span>NILESH</span>
              <span className="bg-[#ccff00] text-black px-2.5 py-0.5 border-3 border-black shadow-[3px_3px_0px_0px_#000]">
                VERMA
              </span>
            </a>
            <div className="hidden xl:inline-flex items-center gap-2 bg-[#ff2a85] text-white font-mono font-bold text-xs uppercase px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#000]">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              AI &amp; FULL STACK DEVELOPER
            </div>
          </div>

          {/* Quick Nav Buttons - Neo-Brutalist Tactile Buttons */}
          <nav className="hidden lg:flex items-center gap-2.5">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-white text-black font-mono font-bold text-xs uppercase px-3.5 py-2 border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-[#ccff00] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#000] transition-all cursor-pointer flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#ccff00] border border-black" />
              <span>PROJECTS ({PROJECTS.length})</span>
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="bg-white text-black font-mono font-bold text-xs uppercase px-3.5 py-2 border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-[#00f0ff] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#000] transition-all cursor-pointer flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#00f0ff] border border-black" />
              <span>SKILLS MATRIX</span>
            </button>
            <button
              onClick={() => scrollToSection('why-me')}
              className="bg-white text-black font-mono font-bold text-xs uppercase px-3.5 py-2 border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-[#ff2a85] hover:text-white hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#000] transition-all cursor-pointer flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff2a85] border border-black" />
              <span>WORKFLOW</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-black font-mono font-bold text-xs uppercase px-3.5 py-2 border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-[#ffd000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#000] transition-all cursor-pointer flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffd000] border border-black" />
              <span>CONTACT</span>
            </button>
          </nav>

          {/* Header Action Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => handleCopyEmail()}
              title="Click to copy email address"
              className="hidden sm:flex items-center gap-1.5 bg-white text-black font-mono font-bold text-xs px-3 py-2 border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#000] transition-all cursor-pointer"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'COPIED!' : 'COPY EMAIL'}</span>
            </button>

            <button
              onClick={() => sendToWhatsApp("Hi Nilesh Verma, let's discuss an AI & Full Stack project!")}
              className="bg-[#ccff00] text-black font-black text-xs sm:text-sm uppercase tracking-wider px-4 sm:px-5 py-2 sm:py-2.5 border-3 border-black shadow-[4px_4px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#000] transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Zap className="w-4 h-4 fill-black" />
              <span>LET'S TALK</span>
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================
          HERO SECTION
      ======================================================== */}
      <section className="relative px-4 sm:px-8 pt-10 sm:pt-16 pb-14 border-b-4 border-black overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Status Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 border-3 border-black shadow-[3px_3px_0px_0px_#000]">
              <span className="w-3 h-3 rounded-full bg-[#10b981] animate-ping" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] -ml-4" />
              <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider">
                AVAILABLE FOR CLIENT PROJECTS &amp; CONTRACTS (2026)
              </span>
            </div>

            <div className="inline-flex items-center gap-2 bg-[#ff2a85] text-white px-3.5 py-1.5 border-3 border-black shadow-[3px_3px_0px_0px_#000] font-mono text-xs sm:text-sm font-bold uppercase">
              <Clock className="w-4 h-4" />
              <span>IST {currentTime || 'LOCAL TIME'}</span>
            </div>
          </div>

          {/* Main Giant Headline */}
          <div className="relative">
            <div className="inline-block bg-[#00f0ff] border-3 border-black px-3 py-1 font-mono text-xs sm:text-sm font-extrabold uppercase mb-4 shadow-[3px_3px_0px_0px_#000]">
              ⚡ AI &amp; FULL STACK DEVELOPER
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.95] mb-6 font-display">
              TURNING IDEAS INTO <br />
              <span className="bg-[#ccff00] px-2 py-0.5 border-4 border-black shadow-[5px_5px_0px_0px_#000] inline-block -rotate-1">
                DIGITAL PRODUCTS
              </span>
              <br />
              <span className="relative inline-block mt-1">
                <span className="bg-[#ff2a85] text-white px-3 py-0.5 border-4 border-black shadow-[5px_5px_0px_0px_#000] inline-block rotate-1">
                  THAT WORK.
                </span>
              </span>
            </h1>

            {/* Sub-Headline & Bio (USER'S EXACT ABOUT COPY) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
              <div className="lg:col-span-8 bg-white border-4 border-black p-5 sm:p-8 shadow-[6px_6px_0px_0px_#000] relative">
                <div className="absolute -top-3 -right-3 bg-[#ffd000] border-2 border-black px-2.5 py-0.5 font-mono text-xs font-black uppercase">
                  ABOUT ME
                </div>
                
                <div className="space-y-4">
                  <p className="text-xl sm:text-2xl font-black text-black font-display tracking-tight leading-snug">
                    I’m Nilesh Verma, an AI &amp; Full Stack Developer who turns ideas into digital products that work.
                  </p>
                  <p className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed">
                    I build high-quality websites, web applications, SaaS products, and AI-powered solutions for businesses and startups. I focus on combining modern technology, thoughtful user experiences, and scalable development to create products that don’t just look good — they deliver real value.
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t-2 border-black/10 flex flex-wrap gap-4 text-xs font-mono font-bold uppercase text-gray-700">
                  <span className="flex items-center gap-1.5 text-black">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981]" /> AI-POWERED SOLUTIONS
                  </span>
                  <span className="flex items-center gap-1.5 text-black">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981]" /> FULL STACK ARCHITECTURE
                  </span>
                  <span className="flex items-center gap-1.5 text-black">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981]" /> SCALABLE &amp; MODERN CODE
                  </span>
                </div>
              </div>

              {/* Quick Action Box */}
              <div className="lg:col-span-4 flex flex-col gap-3">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="w-full bg-[#ccff00] text-black font-black text-base sm:text-lg uppercase tracking-wider py-4 px-6 border-4 border-black shadow-[6px_6px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0px_0px_#000] transition-all cursor-pointer flex items-center justify-between"
                >
                  <span>EXPLORE LIVE WORK</span>
                  <ArrowUpRight className="w-6 h-6 stroke-[3]" />
                </button>

                <button
                  onClick={() => sendToWhatsApp("Hi Nilesh Verma, I saw your portfolio and want to hire you for an AI & Full Stack project!")}
                  className="w-full bg-[#25D366] text-black font-black text-base sm:text-lg uppercase tracking-wider py-4 px-6 border-4 border-black shadow-[6px_6px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0px_0px_#000] transition-all cursor-pointer flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <WhatsAppIcon className="w-5 h-5 fill-black" />
                    CHAT &amp; SEND ON WHATSAPP
                  </span>
                  <ExternalLink className="w-5 h-5" />
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => sendToGmail("Project Inquiry - AI & Full Stack Development", "Hi Nilesh,\n\nI saw your portfolio and would like to discuss a project with you.\n\nThanks!")}
                    className="w-full bg-[#EA4335] text-white font-mono font-bold text-xs uppercase py-3.5 px-3 border-3 border-black shadow-[3px_3px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#000] transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Mail className="w-4 h-4" />
                    <span>OPEN GMAIL</span>
                  </button>

                  <button
                    onClick={() => handleCopyEmail()}
                    className="w-full bg-[#ffd000] text-black font-mono font-bold text-xs uppercase py-3.5 px-3 border-3 border-black shadow-[3px_3px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#000] transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-4 h-4 text-green-700 stroke-[3]" />
                        <span>COPIED!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>COPY EMAIL</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_#000]">
                <div className="text-3xl sm:text-4xl font-black font-display text-black">5+</div>
                <div className="text-xs sm:text-sm font-mono font-bold uppercase mt-1 text-gray-700">
                  Live Client Projects
                </div>
              </div>

              <div className="bg-[#ccff00] border-4 border-black p-4 shadow-[4px_4px_0px_0px_#000]">
                <div className="text-3xl sm:text-4xl font-black font-display text-black">100%</div>
                <div className="text-xs sm:text-sm font-mono font-bold uppercase mt-1 text-black">
                  Quality Commitment
                </div>
              </div>

              <div className="bg-[#00f0ff] border-4 border-black p-4 shadow-[4px_4px_0px_0px_#000]">
                <div className="text-2xl sm:text-3xl font-black font-display text-black mt-1">Full Stack</div>
                <div className="text-xs sm:text-sm font-mono font-bold uppercase mt-1 text-black">
                  Web &amp; AI Engineering
                </div>
              </div>

              <div className="bg-[#ff2a85] text-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_#000]">
                <div className="text-2xl sm:text-3xl font-black font-display mt-1">Direct</div>
                <div className="text-xs sm:text-sm font-mono font-bold uppercase mt-1 text-white">
                  Fast Communication
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          KINETIC INFINITE MARQUEE TICKER (DUAL ROW)
      ======================================================== */}
      <div className="border-b-4 border-black overflow-hidden bg-[#ccff00] py-3 select-none">
        <div className="animate-marquee-infinite flex whitespace-nowrap gap-8 font-black font-display text-lg sm:text-xl uppercase tracking-wider text-black">
          <span>✦ AI-POWERED SOLUTIONS</span>
          <span>✦ FULL STACK ARCHITECTURE</span>
          <span>✦ NEXT.JS APP ROUTER</span>
          <span>✦ TYPESCRIPT STRICT</span>
          <span>✦ HIGH-CONVERTING SAAS PRODUCTS</span>
          <span>✦ SCALABLE APIS &amp; BACKENDS</span>
          <span>✦ CLEAN &amp; SCALABLE CODE</span>
          <span>✦ AI-POWERED SOLUTIONS</span>
          <span>✦ FULL STACK ARCHITECTURE</span>
          <span>✦ NEXT.JS APP ROUTER</span>
        </div>
      </div>

      <div className="border-b-4 border-black overflow-hidden bg-[#000000] py-2.5 text-[#ccff00] select-none">
        <div className="animate-marquee-reverse flex whitespace-nowrap gap-8 font-mono font-extrabold text-sm sm:text-base uppercase tracking-widest">
          <span>★ DEVLINKHUB</span>
          <span>★ APEX PHOTO CLUB</span>
          <span>★ THE ARRIVAL X</span>
          <span>★ S&amp;A ENTERPRISES</span>
          <span>★ PLUSH AFFAIRS</span>
          <span>★ AVAILABLE FOR CLIENT WORK</span>
          <span>★ BASED IN INDIA • WORKING GLOBALLY</span>
          <span>★ DEVLINKHUB</span>
          <span>★ APEX PHOTO CLUB</span>
        </div>
      </div>

      {/* ========================================================
          PROJECTS SECTION (5 LIVE CLIENT PROJECTS)
      ======================================================== */}
      <section id="projects" className="px-4 sm:px-8 py-16 sm:py-24 border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#ff2a85] text-white font-mono font-bold text-xs uppercase px-3 py-1.5 border-3 border-black shadow-[3px_3px_0px_0px_#000] mb-3">
                <Flame className="w-4 h-4 fill-white" />
                SELECTED WORK
              </div>
              <h2 className="text-4xl sm:text-6xl font-black uppercase font-display tracking-tight text-black leading-tight mb-6">
                FEATURED <span className="bg-[#ccff00] px-3 py-1 border-3 border-black shadow-[4px_4px_0px_0px_#000] inline-block ml-1">PROJECTS</span>
              </h2>
              <p className="text-gray-700 font-medium text-base sm:text-lg max-w-2xl leading-relaxed">
                Real, production-grade applications running live in the wild. Click any project card or live button to test live functionality.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 border-3 border-black font-mono font-black text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-black text-[#ccff00] shadow-[4px_4px_0px_0px_#ccff00]'
                    : 'bg-white text-black shadow-[3px_3px_0px_0px_#000] hover:bg-[#ccff00]'
                }`}
              >
                ALL ({PROJECTS.length})
              </button>
              <button
                onClick={() => setActiveFilter('web-apps')}
                className={`px-4 py-2 border-3 border-black font-mono font-black text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${
                  activeFilter === 'web-apps'
                    ? 'bg-black text-[#00f0ff] shadow-[4px_4px_0px_0px_#00f0ff]'
                    : 'bg-white text-black shadow-[3px_3px_0px_0px_#000] hover:bg-[#00f0ff]'
                }`}
              >
                SaaS &amp; Web Apps
              </button>
              <button
                onClick={() => setActiveFilter('platforms')}
                className={`px-4 py-2 border-3 border-black font-mono font-black text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${
                  activeFilter === 'platforms'
                    ? 'bg-black text-[#ff2a85] shadow-[4px_4px_0px_0px_#ff2a85]'
                    : 'bg-white text-black shadow-[3px_3px_0px_0px_#000] hover:bg-[#ff2a85] hover:text-white'
                }`}
              >
                Agency &amp; Portals
              </button>
            </div>
          </div>

          {/* Project Cards Stack */}
          <div className="space-y-12 sm:space-y-16">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] hover:shadow-[12px_12px_0px_0px_#000] transition-all duration-200 overflow-hidden"
              >
                {/* Browser-style Top Bar */}
                <div className="bg-[#f0ece1] border-b-4 border-black px-4 py-3 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] border-2 border-black inline-block" />
                    <span className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] border-2 border-black inline-block" />
                    <span className="w-3.5 h-3.5 rounded-full bg-[#27c93f] border-2 border-black inline-block" />
                    <span className="font-mono text-xs font-bold uppercase ml-2 text-gray-700 hidden sm:inline-block">
                      PROJECT 0{index + 1} • {project.category}
                    </span>
                  </div>

                  {/* Mock URL bar */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 max-w-md bg-white border-2 border-black px-3 py-1 font-mono text-xs text-gray-800 truncate hover:text-black hover:border-black flex items-center justify-between group"
                  >
                    <span className="truncate">{project.url}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <div className="font-mono text-xs font-black uppercase hidden md:block">
                    LIVE PRODUCTION ↗
                  </div>
                </div>

                {/* Card Content Grid */}
                <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column: Details & Tech */}
                  <div className="lg:col-span-7 flex flex-col justify-between h-full">
                    <div>
                      {/* Project Category Tag */}
                      <div className="flex flex-wrap items-center gap-2.5 mb-3">
                        <span
                          className="font-mono font-extrabold text-xs uppercase px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#000]"
                          style={{ backgroundColor: project.accentColor }}
                        >
                          {project.category}
                        </span>
                        <span className="bg-black text-white font-mono font-bold text-xs uppercase px-2 py-0.5">
                          VERIFIED LIVE
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight text-black mb-4">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-medium mb-6">
                        {project.description}
                      </p>

                      {/* Impact Banner */}
                      <div className="bg-[#F9F8F6] border-3 border-black p-3.5 font-mono text-xs sm:text-sm font-bold uppercase text-black mb-6 flex items-center gap-2">
                        <Zap className="w-4 h-4 fill-black shrink-0" />
                        <span>{project.impact}</span>
                      </div>
                    </div>

                    {/* Tags & Action Button */}
                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-white border-2 border-black px-2.5 py-1 font-mono text-xs font-bold uppercase shadow-[2px_2px_0px_0px_#000]"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-4">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => triggerConfetti(e)}
                          className="inline-flex items-center gap-2 font-black text-sm sm:text-base uppercase tracking-wider px-6 py-3.5 border-4 border-black shadow-[4px_4px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#000] transition-all cursor-pointer"
                          style={{ backgroundColor: project.accentColor }}
                        >
                          <span>VISIT LIVE SITE</span>
                          <ExternalLink className="w-5 h-5 stroke-[2.5]" />
                        </a>

                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(project.url)
                            triggerConfetti()
                            alert(`Project link copied: ${project.url}`)
                          }}
                          className="inline-flex items-center gap-1.5 bg-white text-black font-mono font-bold text-xs uppercase px-4 py-3.5 border-3 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-gray-100 cursor-pointer"
                        >
                          <Copy className="w-4 h-4" />
                          <span>COPY URL</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Project Highlights & Quick Preview (High Contrast Dark Console) */}
                  <div className="lg:col-span-5">
                    <div className="bg-[#0f0f11] text-white border-4 border-black p-5 sm:p-7 shadow-[8px_8px_0px_0px_#000] relative">
                      {/* Top Window Bar */}
                      <div className="flex items-center justify-between border-b border-gray-800 pb-3 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block border border-black/40" />
                          <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block border border-black/40" />
                          <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block border border-black/40" />
                          <span className="font-mono text-xs text-gray-300 font-bold uppercase tracking-wider ml-1">
                            LIVE DEPLOYMENT
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-black/80 px-2.5 py-1 border border-gray-700">
                          <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                          <span className="font-mono text-[11px] font-black text-[#10b981] uppercase tracking-wider">
                            ONLINE
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3.5">
                        {/* URL Showcase Box */}
                        <div className="bg-black/90 border-2 border-gray-800 p-3.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)]">
                          <div className="font-mono text-[10px] text-gray-400 font-black uppercase tracking-wider mb-1 flex items-center justify-between">
                            <span>PRODUCTION URL</span>
                            <span className="text-gray-500 font-normal">HTTPS SECURE</span>
                          </div>
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs sm:text-sm font-black break-all flex items-center justify-between group transition-colors"
                            style={{ color: project.accentColor }}
                          >
                            <span className="truncate mr-2">{project.url}</span>
                            <ArrowUpRight className="w-4 h-4 shrink-0 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </a>
                        </div>

                        {/* Key Project Specs with dark contrast and project accent text */}
                        <div className="space-y-2">
                          {project.stats.map((s) => (
                            <div
                              key={s.label}
                              className="flex items-center justify-between bg-[#18181b] border border-gray-800/80 px-3 py-2.5 font-mono text-xs"
                            >
                              <span className="text-gray-400 font-bold uppercase text-[11px] tracking-wide">{s.label}</span>
                              <span
                                className="font-black text-xs sm:text-sm"
                                style={{ color: project.accentColor }}
                              >
                                {s.value}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Direct Visit Button in neon project color */}
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => triggerConfetti(e)}
                          className="mt-2 w-full flex items-center justify-center gap-2 font-black uppercase text-xs sm:text-sm tracking-wider py-3.5 px-4 border-3 border-black shadow-[4px_4px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer text-black"
                          style={{ backgroundColor: project.accentColor }}
                        >
                          <span>OPEN LIVE PROJECT</span>
                          <ExternalLink className="w-4 h-4 stroke-[2.5]" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SKILLS SECTION: BENTO GRID MATRIX
      ======================================================== */}
      <section id="skills" className="px-4 sm:px-8 py-16 sm:py-24 border-b-4 border-black bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 bg-[#00f0ff] text-black font-mono font-bold text-xs uppercase px-3 py-1.5 border-3 border-black shadow-[3px_3px_0px_0px_#000] mb-3">
              <Cpu className="w-4 h-4" />
              SKILLS &amp; EXPERTISE
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase font-display tracking-tight text-black leading-tight mb-6">
              AI &amp; FULL STACK <span className="bg-[#ffd000] px-3 py-1 border-3 border-black shadow-[4px_4px_0px_0px_#000] inline-block ml-1">SKILLS</span> MATRIX
            </h2>
            <p className="text-gray-700 font-medium text-base sm:text-lg max-w-2xl leading-relaxed">
              Strictly focused on modern AI integrations, high-performance web applications, and scalable full-stack architectures. Zero fluff, only real product value.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {/* 1. Full Stack Architecture Card (Large Bento) */}
            <div className="lg:col-span-7 bg-white border-4 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between hover:shadow-[10px_10px_0px_0px_#000] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[#ccff00] border-3 border-black shadow-[3px_3px_0px_0px_#000]">
                    <Code2 className="w-7 h-7 text-black stroke-[2.5]" />
                  </div>
                  <span className="font-mono font-black text-xs uppercase px-2.5 py-1 bg-black text-white">
                    FULL STACK CORE
                  </span>
                </div>
                <h3 className="text-3xl font-black font-display uppercase mb-3">
                  REACT &amp; NEXT.JS FULL STACK
                </h3>
                <p className="text-gray-700 font-medium text-base leading-relaxed mb-6">
                  Complete full-stack architectures powered by React 19 and Next.js App Router. Server-Side Rendering (SSR), Server Actions, custom API routes, concurrent features, and bulletproof client-server state synchronization.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-black/10">
                {['App Router', 'Server Actions', 'SSR & ISR', 'State Machines', 'Custom Hooks', 'Hydration Optimization'].map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs font-bold uppercase bg-[#F9F8F6] border-2 border-black px-2.5 py-1"
                  >
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* 2. AI & LLM Solutions Card */}
            <div className="lg:col-span-5 bg-[#00f0ff] border-4 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between hover:shadow-[10px_10px_0px_0px_#000] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white border-3 border-black shadow-[3px_3px_0px_0px_#000]">
                    <Bot className="w-7 h-7 text-black stroke-[2.5]" />
                  </div>
                  <span className="font-mono font-black text-xs uppercase px-2 py-0.5 bg-black text-[#00f0ff]">
                    AI POWERED
                  </span>
                </div>
                <h3 className="text-3xl font-black font-display uppercase mb-3 text-black">
                  AI &amp; LLM INTEGRATION
                </h3>
                <p className="text-black font-medium text-base leading-relaxed mb-6">
                  Building smart, AI-driven applications with OpenAI, Claude, LangChain, and custom prompt workflows. Integrating streaming completions, automated agents, vector search, and intelligent product features.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-black/20">
                {['OpenAI / Claude APIs', 'AI Agents', 'Streaming UI', 'Vector Search', 'Prompt Engineering'].map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs font-bold uppercase bg-white border-2 border-black px-2.5 py-1 text-black"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* 3. Backend & Scalable APIs Card */}
            <div className="lg:col-span-4 bg-[#ffd000] border-4 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between hover:shadow-[10px_10px_0px_0px_#000] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white border-3 border-black shadow-[3px_3px_0px_0px_#000]">
                    <Layers className="w-7 h-7 text-black stroke-[2.5]" />
                  </div>
                  <span className="font-mono font-black text-xs uppercase px-2 py-0.5 bg-black text-[#ffd000]">
                    BACKEND ENGINE
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-display uppercase mb-3 text-black">
                  SCALABLE APIS &amp; DB
                </h3>
                <p className="text-black font-medium text-sm sm:text-base leading-relaxed mb-6">
                  Fast RESTful and edge endpoints, PostgreSQL/Supabase database schemas, authentication systems, and cloud functions built for high-traffic throughput.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-black/20">
                {['Node.js', 'REST APIs', 'Supabase / Postgres', 'Authentication'].map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs font-bold uppercase bg-white border-2 border-black px-2 py-1 text-black"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* 4. TypeScript Card */}
            <div className="lg:col-span-4 bg-white border-4 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between hover:shadow-[10px_10px_0px_0px_#000] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[#ff2a85] text-white border-3 border-black shadow-[3px_3px_0px_0px_#000]">
                    <ShieldCheck className="w-7 h-7 stroke-[2.5]" />
                  </div>
                  <span className="font-mono font-black text-xs uppercase px-2 py-0.5 bg-black text-white">
                    TYPE SAFETY
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-display uppercase mb-3 text-black">
                  TYPESCRIPT STRICT
                </h3>
                <p className="text-gray-700 font-medium text-sm sm:text-base leading-relaxed mb-6">
                  Strict typing across the full stack — from database schemas and API responses to UI props, preventing runtime bugs before code ever deploys.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-black/10">
                {['End-to-End Safety', 'Generics', 'Schema Validation', 'Zero Runtime Bugs'].map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs font-bold uppercase bg-[#F9F8F6] border-2 border-black px-2 py-1 text-black"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* 5. UI/UX & Conversion Card */}
            <div className="lg:col-span-4 bg-[#ccff00] border-4 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between hover:shadow-[10px_10px_0px_0px_#000] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white border-3 border-black shadow-[3px_3px_0px_0px_#000]">
                    <Palette className="w-7 h-7 text-black stroke-[2.5]" />
                  </div>
                  <span className="font-mono font-black text-xs uppercase px-2 py-0.5 bg-black text-[#ccff00]">
                    USER EXPERIENCE
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-display uppercase mb-3 text-black">
                  UI/UX &amp; VALUE FOCUS
                </h3>
                <p className="text-black font-medium text-sm sm:text-base leading-relaxed mb-6">
                  Thoughtful user experiences and high-conversion interfaces. Products that don’t just look good, but drive real business metrics and seamless client workflows.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-black/20">
                {['High Conversion', 'Tailwind CSS', 'Figma to Code', 'Micro-interactions'].map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs font-bold uppercase bg-white border-2 border-black px-2 py-1 text-black"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* 6. Engineering Standards & Client Promise Full-Width Card */}
            <div className="lg:col-span-12 bg-black text-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_#ccff00] relative overflow-hidden">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 bg-[#ccff00] text-black font-mono font-black text-xs uppercase px-3 py-1 border-2 border-white shadow-[2px_2px_0px_0px_#fff] mb-3">
                    <Sparkles className="w-4 h-4" />
                    ENGINEERING STANDARDS
                  </div>
                  <h4 className="text-2xl sm:text-4xl font-black uppercase font-display tracking-tight text-white">
                    HIGH PERFORMANCE &amp; PRODUCTION QUALITY
                  </h4>
                  <p className="text-gray-300 font-medium text-sm sm:text-base mt-2">
                    Every web application and AI solution is crafted with clean code, mobile-first responsiveness, rapid load times, and rock-solid SEO best practices.
                  </p>
                </div>

                {/* 4 Rich Vibrant Neo-Brutalist Feature Cards with Icons */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 shrink-0">
                  <div className="bg-[#ccff00] text-black border-3 border-white p-3.5 sm:p-4 shadow-[4px_4px_0px_0px_#fff] hover:-translate-y-1 transition-transform">
                    <div className="w-8 h-8 rounded bg-black text-[#ccff00] flex items-center justify-center mb-2.5">
                      <CheckCircle2 className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div className="text-xs sm:text-sm font-black font-display uppercase leading-tight">
                      RESPONSIVE
                    </div>
                    <div className="text-[11px] font-mono font-bold text-black/80 mt-1 uppercase">
                      Mobile First
                    </div>
                  </div>

                  <div className="bg-[#00f0ff] text-black border-3 border-white p-3.5 sm:p-4 shadow-[4px_4px_0px_0px_#fff] hover:-translate-y-1 transition-transform">
                    <div className="w-8 h-8 rounded bg-black text-[#00f0ff] flex items-center justify-center mb-2.5">
                      <Zap className="w-4 h-4 fill-[#00f0ff]" />
                    </div>
                    <div className="text-xs sm:text-sm font-black font-display uppercase leading-tight">
                      FAST LOAD
                    </div>
                    <div className="text-[11px] font-mono font-bold text-black/80 mt-1 uppercase">
                      Asset Cached
                    </div>
                  </div>

                  <div className="bg-[#ff2a85] text-white border-3 border-white p-3.5 sm:p-4 shadow-[4px_4px_0px_0px_#fff] hover:-translate-y-1 transition-transform">
                    <div className="w-8 h-8 rounded bg-white text-[#ff2a85] flex items-center justify-center mb-2.5">
                      <Code2 className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div className="text-xs sm:text-sm font-black font-display uppercase leading-tight">
                      CLEAN CODE
                    </div>
                    <div className="text-[11px] font-mono font-bold text-white/90 mt-1 uppercase">
                      Type-Safe
                    </div>
                  </div>

                  <div className="bg-[#ffd000] text-black border-3 border-white p-3.5 sm:p-4 shadow-[4px_4px_0px_0px_#fff] hover:-translate-y-1 transition-transform">
                    <div className="w-8 h-8 rounded bg-black text-[#ffd000] flex items-center justify-center mb-2.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="text-xs sm:text-sm font-black font-display uppercase leading-tight">
                      SEO READY
                    </div>
                    <div className="text-[11px] font-mono font-bold text-black/80 mt-1 uppercase">
                      Discoverable
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          WHY HIRE ME // THE FULL STACK WORKFLOW
      ======================================================== */}
      <section id="why-me" className="px-4 sm:px-8 py-16 sm:py-24 border-b-4 border-black bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 bg-[#ff2a85] text-white font-mono font-bold text-xs uppercase px-3 py-1.5 border-3 border-black shadow-[3px_3px_0px_0px_#000] mb-3">
              <Zap className="w-4 h-4 fill-white" />
              HOW I WORK
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase font-display tracking-tight text-black leading-tight mb-6">
              WHY BUSINESSES &amp; STARTUPS <span className="bg-[#ccff00] px-3 py-1 border-3 border-black shadow-[4px_4px_0px_0px_#000] inline-block ml-1">HIRE ME</span>
            </h2>
            <p className="text-gray-700 font-medium text-base sm:text-lg max-w-2xl leading-relaxed">
              No endless meetings, no excuses, and zero ghosting. A transparent, high-velocity engineering partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 01 */}
            <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#000] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-[#ccff00] text-black font-black text-2xl font-display flex items-center justify-center border-3 border-black shadow-[3px_3px_0px_0px_#000]">
                    01
                  </div>
                  <span className="bg-black text-[#ccff00] font-mono text-xs font-black uppercase px-3 py-1.5 border-2 border-black">
                    ⚡ 24-48H SPRINT
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase font-display mb-3 text-black">
                  RAPID PROTOTYPING &amp; AI SCOPING
                </h3>
                <p className="text-gray-700 font-medium text-base leading-relaxed mb-6">
                  Within 24 to 48 hours of project kickoff, you get an interactive staging build. We validate AI integrations, UI workflows, and architecture before heavy production scaling.
                </p>
              </div>

              <div className="pt-4 border-t-2 border-black/10 flex flex-wrap gap-2">
                {['Interactive Staging', 'AI Prompt Workflows', 'Architecture Spec'].map((chip) => (
                  <span
                    key={chip}
                    className="font-mono text-xs font-bold uppercase bg-[#ccff00]/25 text-black border-2 border-black px-2.5 py-1 shadow-[2px_2px_0px_0px_#000]"
                  >
                    ✓ {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 02 */}
            <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#000] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-[#ff2a85] text-white font-black text-2xl font-display flex items-center justify-center border-3 border-black shadow-[3px_3px_0px_0px_#000]">
                    02
                  </div>
                  <span className="bg-black text-[#ff2a85] font-mono text-xs font-black uppercase px-3 py-1.5 border-2 border-black">
                    ✦ ARCHITECTURE
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase font-display mb-3 text-black">
                  CLEAN, SCALABLE FULL STACK CODE
                </h3>
                <p className="text-gray-700 font-medium text-base leading-relaxed mb-6">
                  Modular architecture, type-safe API boundaries, well-documented components, and clean code that scales seamlessly as your business grows.
                </p>
              </div>

              <div className="pt-4 border-t-2 border-black/10 flex flex-wrap gap-2">
                {['TypeScript Strict', 'Next.js App Router', 'Zero Tech Debt'].map((chip) => (
                  <span
                    key={chip}
                    className="font-mono text-xs font-bold uppercase bg-[#ff2a85]/20 text-black border-2 border-black px-2.5 py-1 shadow-[2px_2px_0px_0px_#000]"
                  >
                    ✓ {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 03 */}
            <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#000] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-[#00f0ff] text-black font-black text-2xl font-display flex items-center justify-center border-3 border-black shadow-[3px_3px_0px_0px_#000]">
                    03
                  </div>
                  <span className="bg-black text-[#00f0ff] font-mono text-xs font-black uppercase px-3 py-1.5 border-2 border-black">
                    ★ DEPLOY &amp; WARRANTY
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase font-display mb-3 text-black">
                  PRODUCTION LAUNCH &amp; WARRANTY
                </h3>
                <p className="text-gray-700 font-medium text-base leading-relaxed mb-6">
                  End-to-end production deployment on Vercel or cloud infrastructure, custom domain and SSL configuration, analytics setup, and 30 days of post-launch support.
                </p>
              </div>

              <div className="pt-4 border-t-2 border-black/10 flex flex-wrap gap-2">
                {['Cloud CDN & SSL', 'Instant Indexing', '30 Days Support'].map((chip) => (
                  <span
                    key={chip}
                    className="font-mono text-xs font-bold uppercase bg-[#00f0ff]/25 text-black border-2 border-black px-2.5 py-1 shadow-[2px_2px_0px_0px_#000]"
                  >
                    ✓ {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CONTACT SECTION (DIRECT CHANNELS ONLY - FORM REMOVED)
      ======================================================== */}
      <section id="contact" className="px-4 sm:px-8 py-16 sm:py-24 border-b-4 border-black bg-[#ffd000] relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-black text-[#ccff00] font-mono font-bold text-xs uppercase px-3 py-1.5 border-3 border-black shadow-[3px_3px_0px_0px_#fff] mb-4">
              <Phone className="w-4 h-4 text-[#ccff00]" />
              GET IN TOUCH
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase font-display tracking-tight text-black leading-tight">
              LET'S BUILD SOMETHING <br />
              <span className="bg-white px-3 py-0.5 border-4 border-black shadow-[6px_6px_0px_0px_#000] inline-block -rotate-1">
                UNFORGETTABLE.
              </span>
            </h2>
            <p className="text-black font-bold text-base sm:text-xl mt-6">
              Have an idea, SaaS product, or AI solution to build? Reach out directly via WhatsApp, Phone, Gmail, or LinkedIn:
            </p>
          </div>

          {/* 3 PRIMARY DIRECT INTERACTIVE CONTACT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* 1. WHATSAPP & PHONE CALL */}
            <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#000] transition-all">
              <div>
                <div className="w-14 h-14 bg-[#25D366] text-white border-3 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center mb-5">
                  <WhatsAppIcon className="w-8 h-8 fill-white" />
                </div>
                <div className="font-mono text-xs font-bold uppercase text-gray-600 mb-1">
                  FASTEST RESPONSE (15 MINS)
                </div>
                <h3 className="text-2xl font-black uppercase font-display text-black mb-2">
                  WHATSAPP &amp; CALL
                </h3>
                <p className="text-gray-700 text-sm font-medium mb-3">
                  Click to directly open WhatsApp with pre-filled greeting or call immediately.
                </p>
                <div className="bg-[#F9F8F6] border-2 border-black p-2.5 font-mono text-sm font-black text-black mb-5 flex items-center justify-between">
                  <span>+91 9754512932</span>
                  <span className="text-[10px] bg-[#25D366] text-black px-1.5 py-0.5 font-bold">ONLINE</span>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => sendToWhatsApp("Hi Nilesh Verma, I saw your portfolio and want to discuss an AI & Full Stack project with you!")}
                  className="w-full bg-[#25D366] text-black font-black text-sm uppercase py-3.5 px-4 border-3 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-[#20ba59] active:translate-x-0.5 active:translate-y-0.5 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-black" />
                  <span>OPEN &amp; SEND WHATSAPP</span>
                  <ExternalLink className="w-4 h-4 stroke-[2.5]" />
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="tel:+919754512932"
                    className="bg-black text-white font-mono font-bold text-xs uppercase py-2.5 px-2 border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-gray-800 flex items-center justify-center gap-1.5 cursor-pointer text-center"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>CALL DIRECT</span>
                  </a>

                  <button
                    onClick={() => handleCopyPhone()}
                    className="bg-[#F9F8F6] text-black font-mono font-bold text-xs uppercase py-2.5 px-2 border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-white flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-600 stroke-[3]" />
                        <span>COPIED!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY NO.</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* 2. GMAIL / EMAIL DIRECT */}
            <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#000] transition-all">
              <div>
                <div className="w-14 h-14 bg-[#EA4335] text-white border-3 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center mb-5">
                  <Mail className="w-8 h-8 stroke-[2.5]" />
                </div>
                <div className="font-mono text-xs font-bold uppercase text-gray-600 mb-1">
                  OFFICIAL INQUIRIES &amp; RFPS
                </div>
                <h3 className="text-2xl font-black uppercase font-display text-black mb-2">
                  GMAIL DIRECT
                </h3>
                <p className="text-gray-700 text-sm font-medium mb-3">
                  Click to open Gmail Web composer tab with recipient and subject ready to send.
                </p>
                <div className="bg-[#F9F8F6] border-2 border-black p-2.5 font-mono text-xs font-bold truncate text-black mb-5">
                  nileshverma0052@gmail.com
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => sendToGmail("Project Inquiry - AI & Full Stack Development", "Hi Nilesh,\n\nI saw your portfolio and would like to discuss a project with you.\n\nProject details:\n\nThanks!")}
                  className="w-full bg-[#EA4335] text-white font-black text-sm uppercase py-3.5 px-4 border-3 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-[#d0372a] active:translate-x-0.5 active:translate-y-0.5 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>OPEN GMAIL (WEB COMPOSER)</span>
                  <ExternalLink className="w-4 h-4" />
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="mailto:nileshverma0052@gmail.com?subject=Project%20Inquiry%20-%20AI%20%26%20Full%20Stack%20Development"
                    className="bg-black text-white font-mono font-bold text-xs uppercase py-2 px-2 border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-gray-800 flex items-center justify-center gap-1.5 cursor-pointer text-center"
                  >
                    <span>MAILTO APP</span>
                  </a>

                  <button
                    onClick={() => handleCopyEmail()}
                    className="bg-[#F9F8F6] text-black font-mono font-bold text-xs uppercase py-2 px-2 border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-white flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-600 stroke-[3]" />
                        <span>COPIED!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY EMAIL</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* 3. LINKEDIN DIRECT */}
            <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#000] transition-all">
              <div>
                <div className="w-14 h-14 bg-[#0A66C2] text-white border-3 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center mb-5">
                  <LinkedinIcon className="w-8 h-8 fill-white" />
                </div>
                <div className="font-mono text-xs font-bold uppercase text-gray-600 mb-1">
                  PROFESSIONAL NETWORK
                </div>
                <h3 className="text-2xl font-black uppercase font-display text-black mb-2">
                  LINKEDIN
                </h3>
                <p className="text-gray-700 text-sm font-medium mb-3">
                  Connect professionally on LinkedIn, review verified background, and send InMail.
                </p>
                <div className="bg-[#F9F8F6] border-2 border-black p-2.5 font-mono text-xs font-bold truncate text-black mb-5">
                  linkedin.com/in/nilesh-verma-9845a3266
                </div>
              </div>

              <div className="space-y-2">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => triggerConfetti(e)}
                  className="w-full bg-[#0A66C2] text-white font-black text-sm uppercase py-3.5 px-4 border-3 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-[#084e96] active:translate-x-0.5 active:translate-y-0.5 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <LinkedinIcon className="w-4 h-4 fill-white" />
                  <span>OPEN LINKEDIN PROFILE</span>
                  <ExternalLink className="w-4 h-4 stroke-[2.5]" />
                </a>

                <button
                  onClick={() => handleCopyLinkedIn()}
                  className="w-full bg-[#F9F8F6] text-black font-mono font-bold text-xs uppercase py-2 px-3 border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-white flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copiedLinkedIn ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-600 stroke-[3]" />
                      <span>COPIED PROFILE URL!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY PROFILE URL</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* INTERACTIVE DIRECT MESSAGE DISPATCHER (WRITE & SEND MESSAGE TO WHATSAPP OR GMAIL) */}
          <div className="max-w-4xl mx-auto bg-white border-4 border-black p-6 sm:p-10 shadow-[10px_10px_0px_0px_#000] mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-3 border-black pb-4 mb-6">
              <div>
                <div className="inline-block bg-[#ccff00] text-black font-mono font-black text-xs uppercase px-2.5 py-0.5 border-2 border-black mb-1">
                  ⚡ INSTANT CONNECT
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase font-display text-black">
                  SEND A MESSAGE DIRECTLY
                </h3>
                <p className="text-xs sm:text-sm font-mono font-bold text-gray-600 uppercase mt-0.5">
                  Choose a quick topic or type your message, then click WhatsApp or Gmail to send
                </p>
              </div>
              <span className="text-3xl">🚀</span>
            </div>

            {/* Quick Topic Chips */}
            <div className="mb-4">
              <label className="block font-mono text-xs font-black uppercase mb-2 text-black">
                SELECT A QUICK TOPIC (AUTO-FILLS MESSAGE):
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: '🤖 AI / LLM Solution', text: "Hi Nilesh Verma, I'm looking to build an AI-powered solution for my business and would like to discuss scoping & timeline." },
                  { label: '🚀 Full Stack SaaS App', text: "Hi Nilesh Verma, I have a Full Stack SaaS web application project and want to hire you to build it." },
                  { label: '⚡ Website Development', text: "Hi Nilesh Verma, I need a high-converting, blazing-fast modern website built for my brand." },
                  { label: '💼 Urgent Hire / Contract', text: "Hi Nilesh Verma, I saw your portfolio and want to hire you immediately for contract / freelance development." }
                ].map((chip) => (
                  <button
                    key={chip.label}
                    type="button"
                    onClick={() => {
                      setCustomMessage(chip.text)
                      triggerConfetti()
                    }}
                    className="font-mono text-xs font-bold uppercase bg-[#F9F8F6] hover:bg-[#ccff00] text-black px-3 py-1.5 border-2 border-black shadow-[2px_2px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Message Textarea */}
            <div className="mb-6">
              <label className="block font-mono text-xs font-black uppercase mb-1.5 text-black">
                YOUR CUSTOM MESSAGE:
              </label>
              <textarea
                rows={4}
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Type your project message here..."
                className="w-full bg-[#F9F8F6] border-3 border-black p-3.5 font-mono text-sm focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_#000] transition-all"
              />
            </div>

            {/* 2 Main Action Send Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => sendToWhatsApp()}
                className="w-full bg-[#25D366] text-black font-black text-sm sm:text-base uppercase tracking-wider py-4 px-4 border-4 border-black shadow-[6px_6px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0px_0px_#000] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-5 h-5 fill-black" />
                <span>SEND VIA WHATSAPP (9754512932) ⚡</span>
              </button>

              <button
                type="button"
                onClick={() => sendToGmail()}
                className="w-full bg-[#ccff00] text-black font-black text-sm sm:text-base uppercase tracking-wider py-4 px-4 border-4 border-black shadow-[6px_6px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0px_0px_#000] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                <span>SEND VIA GMAIL (nileshverma0052@gmail.com) ✉️</span>
              </button>
            </div>
          </div>

          {/* HIGH-IMPACT DIRECT CONNECT SUMMARY BANNER */}
          <div className="max-w-4xl mx-auto bg-black text-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_#fff] text-center">
            <div className="inline-block bg-[#ccff00] text-black font-mono font-black text-xs uppercase px-3 py-1 border-2 border-white mb-3">
              ⚡ READY TO START YOUR PROJECT TODAY?
            </div>
            <h3 className="text-2xl sm:text-4xl font-black font-display uppercase tracking-tight text-white mb-2">
              CALL OR WHATSAPP DIRECTLY
            </h3>
            <p className="text-gray-300 font-mono text-xs sm:text-sm max-w-xl mx-auto mb-6">
              Skip delays and connect immediately. Dial or message <strong className="text-[#ccff00]">+91 9754512932</strong> or email <strong className="text-[#00f0ff]">nileshverma0052@gmail.com</strong>.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => sendToWhatsApp("Hi Nilesh Verma, let's discuss a project!")}
                className="bg-[#25D366] text-black font-black font-mono text-xs sm:text-sm uppercase px-5 py-3 border-2 border-white shadow-[3px_3px_0px_0px_#fff] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-black" />
                <span>WHATSAPP: 9754512932</span>
              </button>

              <button
                onClick={() => sendToGmail()}
                className="bg-[#ccff00] text-black font-black font-mono text-xs sm:text-sm uppercase px-5 py-3 border-2 border-white shadow-[3px_3px_0px_0px_#fff] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>nileshverma0052@gmail.com</span>
              </button>

              <a
                href="tel:+919754512932"
                className="bg-white text-black font-black font-mono text-xs sm:text-sm uppercase px-5 py-3 border-2 border-white shadow-[3px_3px_0px_0px_#fff] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>CALL: +91 9754512932</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          FOOTER
      ======================================================== */}
      <footer className="bg-black text-white px-4 sm:px-8 py-12 border-t-4 border-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-5 mb-2">
              <span className="text-3xl font-black font-display tracking-tight text-white flex items-center gap-2.5">
                NILESH <span className="bg-[#ccff00] text-black px-2.5 py-0.5 border-2 border-white shadow-[2px_2px_0px_0px_#fff]">VERMA</span>
              </span>
              <span className="bg-[#10b981] text-black font-mono text-[10px] font-black uppercase px-2.5 py-0.5 border-2 border-white shadow-[2px_2px_0px_0px_#fff]">
                AVAILABLE FOR HIRE
              </span>
            </div>
            <p className="text-gray-400 font-mono text-xs max-w-md">
              AI &amp; Full Stack Developer turning ideas into high-quality websites, SaaS platforms, and AI-powered digital products.
            </p>
          </div>

          {/* Social Links Row */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white text-black border-2 border-white hover:bg-[#0A66C2] hover:text-white transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <button
              onClick={() => sendToGmail()}
              className="p-3 bg-white text-black border-2 border-white hover:bg-[#EA4335] hover:text-white transition-colors cursor-pointer"
              title="Gmail Web Composer"
            >
              <Mail className="w-5 h-5" />
            </button>

            <button
              onClick={() => sendToWhatsApp()}
              className="p-3 bg-white text-black border-2 border-white hover:bg-[#25D366] hover:text-black transition-colors cursor-pointer"
              title="WhatsApp Chat"
            >
              <WhatsAppIcon className="w-5 h-5 text-black hover:text-black" />
            </button>

            <a
              href="tel:+919754512932"
              className="p-3 bg-white text-black border-2 border-white hover:bg-[#00f0ff] hover:text-black transition-colors"
              title="Direct Call"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-3 bg-[#ccff00] text-black font-black border-2 border-white hover:bg-white transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-5 h-5 stroke-[3]" />
              <span className="font-mono text-xs font-bold uppercase">TOP</span>
            </button>
          </div>
        </div>

        {/* Bottom sub-footer line */}
        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-gray-500 font-mono text-xs gap-4">
          <div>
            © {new Date().getFullYear()} Nilesh Verma. All rights reserved. Zero boring websites allowed.
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <span>● AI &amp; Full Stack Solutions</span>
            <span>● 5 Live Projects</span>
            <span>● Direct Contact: 9754512932</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
