import HackerHeroTerminal from "@/components/hacker-hero-terminal"
import DataNavBar2082 from "@/components/data-nav-bar-2082"
import FloatingCodePanelGrid from "@/components/project"
import ContactSection from "@/components/contact-section"
import SkillsSection from "@/components/skills-section"
import ErrorGlitchFooter from "@/components/error-glitch-footer"
import { DangerModeToggle } from "@/components/danger-mode-toggle"
import { FloatingContactButton } from "@/components/floating-contact-button"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-cyan-500 font-mono relative overflow-hidden">
      {/* Scan lines overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-scan-lines opacity-10"></div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="absolute h-2 w-2 rounded-full bg-cyan-500 opacity-70 blur-[1px] top-1/4 left-1/3 animate-float-slow"></div>
        <div className="absolute h-1 w-1 rounded-full bg-pink-500 opacity-70 blur-[1px] top-1/2 left-1/4 animate-float-medium"></div>
        <div className="absolute h-3 w-3 rounded-full bg-cyan-500 opacity-50 blur-[2px] top-3/4 left-2/3 animate-float-fast"></div>
        <div className="absolute h-2 w-2 rounded-full bg-pink-500 opacity-60 blur-[1px] top-1/3 left-3/4 animate-float-slow"></div>
      </div>

      {/* Main content */}
      <div className="relative z-20">
        <DataNavBar2082 />
        <main>
          <HackerHeroTerminal />
          <div id="projects">
            <FloatingCodePanelGrid />
          </div>
          <div id="skills">
            <SkillsSection />
          </div>
          <div id="contact">
            <ContactSection />
          </div>
        </main>
        <ErrorGlitchFooter />
      </div>

      {/* Floating buttons */}
      <div className="fixed bottom-4 right-4 z-50">
        <DangerModeToggle />
      </div>

      {/* Floating contact button - positioned to not overlap with danger mode toggle */}
      <div className="fixed bottom-4 right-20 z-50">
        <FloatingContactButton />
      </div>
    </div>
  )
}
