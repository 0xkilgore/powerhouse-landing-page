import React from "react";
import { motion } from "framer-motion";
import PowerhouseHeroGlobe from "./components/PowerhouseHeroGlobe";
import PowerhouseSNOChart from './components/PowerhouseSNOChart';

// Single‑file landing page for Powerhouse.io
// TailwindCSS required. Drop into a Next.js app/page.tsx or a Vite React entry.
// Headline: "The future of organizations is open source. Powerhouse builds it"
// Sections: Hero, Why We Exist, Enter SNOs, Platforms (Achra/Vetra), Open‑Source Capitalism, Automation & AI, Proof & Pedigree, Get Involved

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="py-20 md:py-28">
    <div className="max-w-6xl mx-auto px-5">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-4xl font-semibold tracking-tight mb-6 bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text text-transparent"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="prose prose-invert max-w-none"
      >
        {children}
      </motion.div>
    </div>
  </section>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 px-3 py-1 text-sm font-medium text-fuchsia-300">{children}</span>
);

const Card = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 shadow-lg backdrop-blur hover:from-white/10 hover:to-white/15 transition-all duration-300">
    <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">{title}</h3>
    <div className="text-white/80 text-sm md:text-base leading-relaxed">{children}</div>
  </div>
);

const PlatformCard = ({ title, description, features, gradientFrom, gradientTo, children }: { 
  title: string; 
  description: string; 
  features: string[]; 
  gradientFrom: string; 
  gradientTo: string; 
  children: React.ReactNode 
}) => (
  <div className={`rounded-2xl border border-white/10 bg-gradient-to-br ${gradientFrom} ${gradientTo} p-6 relative overflow-hidden`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
    <div className="relative z-10">
      <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-white/90 mb-4 text-lg">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
            <span className="text-white/80 text-sm md:text-base leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
      {children}
    </div>
  </div>
);

export default function PowerhouseLanding() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-fuchsia-500/30 selection:text-white font-['Inter']">
      {/* Glow accents */}
      <div className="pointer-events-none fixed inset-0 -z-20">
        <div className="absolute -top-24 -left-16 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-neutral-950/75">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold">Powerhouse</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#sno" className="hover:text-white transition-colors">SNOs</a>
            <a href="#platforms" className="hover:text-white transition-colors">Platforms</a>
            <a href="#osc" className="hover:text-white transition-colors">Open‑Source Capitalism</a>
          </nav>
          <a href="#cta" className="hidden md:inline-flex items-center rounded-xl bg-gradient-to-br from-fuchsia-600 to-cyan-600 px-4 py-2 text-sm font-semibold shadow-lg hover:from-fuchsia-500 hover:to-cyan-500 transition-all">Get started</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[70vh] overflow-hidden bg-neutral-950 text-white">
        <div className="absolute inset-0 -z-10 opacity-70">
          <PowerhouseHeroGlobe className="w-full h-full" />
        </div>
        <div className="max-w-6xl mx-auto px-5 pt-24 md:pt-32 pb-16 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.05] text-center"
          >
            The future of organizations is <span className="text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-400 to-cyan-300">open source</span>.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-400 to-cyan-300">Powerhouse builds it</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 text-white/80 text-xl md:text-2xl max-w-4xl mx-auto text-center leading-relaxed"
          >
            Turn open projects and internet‑native organizations into <strong>Scalable Network Organizations</strong>—governed by code, funded by markets, and built to operate at real‑world scale.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            <a href="#sno" className="inline-flex items-center rounded-xl bg-gradient-to-br from-fuchsia-600 to-cyan-600 px-6 py-4 font-semibold shadow-lg hover:from-fuchsia-500 hover:to-cyan-500 transition-all text-lg">See how SNOs work</a>
            <a href="#cta" className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-6 py-4 font-semibold hover:bg-white/10 transition-all text-lg">Talk to us</a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-3 justify-center text-white/70"
          >
            <Pill>MakerDAO → Sky heritage</Pill>
            <Pill>Atlas governance</Pill>
            <Pill>Achra marketplace</Pill>
            <Pill>Vetra builder platform</Pill>
          </motion.div>
        </div>
      </section>

      {/* Why We Exist */}
      <Section id="why" title="DAOs have failed to scale">
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Legal gray zones block scale">
            Paying global contributors pushes teams into a single "Lab" or foundation—recentralizing power and risk.
          </Card>
          <Card title="Resource planning breaks">
            Distributed work needs shared, enforceable plans for scope, budgets, and delivery—not chat scrollback.
          </Card>
          <Card title="Incentives drift">
            Visibility and politics outcompete outcomes; retro funding misprices work and delays execution.
          </Card>
          <Card title="Tooling doesn't fit">
            Chats, spreadsheets, and point tools can't run a distributed company.
          </Card>
        </div>
        <div className="mt-8 text-white/85 text-lg">
          Powerhouse pairs open‑source software with legal scaffolding so networks can plan, execute, and account like world‑class companies—without giving up decentralization.
        </div>
      </Section>

      {/* The open-source sustainability crisis */}
      <Section id="oss-crisis" title="The open-source sustainability crisis">
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Public goods, private costs">Critical infra relies on volunteers or a single sponsor.</Card>
          <Card title="Mispriced outcomes">Grants/retro funding lag delivery and underpay maintainers.</Card>
          <Card title="Leaky value capture">Enterprise value escapes the commons.</Card>
          <Card title="Uninvestable by default">No clear path for outside capital to fund growth & share upside.</Card>
        </div>
      </Section>

      {/* SNOs */}
      <Section id="sno" title="Enter Scalable Network Organizations (SNOs)">
        <div className="grid md:grid-cols-[4fr_1fr] gap-12 items-center">
          <PowerhouseSNOChart className="w-full h-auto max-w-[1200px] mx-auto" />
          <ul className="space-y-4 text-white/85 text-sm md:text-base">
            <li className="rounded-xl border border-white/10 p-4">Pay contributors globally without a central choke point</li>
            <li className="rounded-xl border border-white/10 p-4">Route capital to winning workstreams with clear accountability</li>
            <li className="rounded-xl border border-white/10 p-4">Monetize services and reinvest into the commons</li>
            <li className="rounded-xl border border-white/10 p-4">Protect brand while staying subordinate to governance</li>
          </ul>
        </div>
      </Section>

      {/* Platforms */}
      <Section id="platforms" title="The Powerhouse platforms">
        <div className="grid md:grid-cols-2 gap-6">
          <PlatformCard
            title="Achra"
            description="Marketplace for global coordination"
            features={[
              "Structured roadmaps, RFPs, milestones, and audit trails (transparency by default)",
              "Milestone payouts in stablecoins with automated tax workflows (e.g., W‑9/1099)",
              "Best‑practice workflows for distributed teams—from proposal to delivery",
              "Atlas‑powered governance: scoped authority, logged decisions, programmable approvals"
            ]}
            gradientFrom="from-fuchsia-600/10"
            gradientTo="to-fuchsia-400/5"
          >
            <div className="mt-4">
              <a href="#cta" className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 font-semibold hover:bg-white/10 transition-all">Explore Achra</a>
            </div>
          </PlatformCard>
          
          <PlatformCard
            title="Vetra"
            description="Builder platform for reactive document architecture"
            features={[
              "Define document types, UIs, and automations; publish as reusable packages",
              "Spec‑driven AI control: agents act as governed contributors with roles & permissions",
              "Dev‑first SDKs; fork, extend, or self‑host—no lock‑in",
              "Usage‑based revenue: get paid when others build on your modules"
            ]}
            gradientFrom="from-cyan-600/10"
            gradientTo="to-cyan-400/5"
          >
            <div className="mt-4">
              <a href="#cta" className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 font-semibold hover:bg-white/10 transition-all">Explore Vetra</a>
            </div>
          </PlatformCard>
        </div>
      </Section>

      {/* Open‑Source Capitalism */}
      <Section id="osc" title="Open‑Source Capitalism (OSC)">
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="What it solves">
            <ul className="list-disc pl-5 space-y-1">
              <li>Creates sustainable, recurring revenue for public‑good software</li>
              <li>Aligns builders, operators, and investors around measurable outcomes</li>
              <li>Keeps code open while capturing downstream value for the commons</li>
            </ul>
          </Card>
          <Card title="Four principles">
            <ol className="list-decimal pl-5 space-y-1">
              <li>Coordinate via a marketplace (open roadmaps & RFPs)</li>
              <li>Profit before distribution (share revenue back after PMF)</li>
              <li>Maximize value capture (copyleft + commercial licensing)</li>
              <li>Make OSS investable (structure finance to share upside)</li>
            </ol>
          </Card>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Card title="Where it lives in the stack">
            <p><strong>Achra</strong> operates the marketplace — roadmaps, RFPs, delivery, and payout rails.</p>
            <p className="mt-2"><strong>Vetra</strong> provides the reactive document architecture — packages, automations, and rulebooks that make the economics enforceable.</p>
          </Card>
          <Card title="What this enables">
            <p>Networks that scale without centralizing—open by default, investable by design.</p>
          </Card>
        </div>
      </Section>

      {/* Automation & AI */}
      <Section id="ai" title="Automation & AI">
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Document models">
            Policies become structured data. Approvals trigger workflows and payouts; history is version‑controlled and auditable.
          </Card>
          <Card title="Agents as governed contributors">
            AI drafts budgets, reconciles spend, and proposes updates—within scoped authority and logged decisions.
          </Card>
        </div>
      </Section>

      {/* Proof & Pedigree */}
      <Section id="proof" title="Proof & pedigree">
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="MakerDAO → Sky heritage">
            We learned the hard lessons building in one of the longest‑running DAOs and turned them into repeatable systems.
          </Card>
          <Card title="Battle‑tested patterns">
            Atlas rulebooks, operational hubs, and marketplace workflows shaped by real‑world delivery.
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section id="cta" title="Get involved">
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Read the papers">
            SNOs, Atlas, and Open‑Source Capitalism.
            <div className="mt-3"><a className="inline-flex rounded-xl border border-white/15 bg-white/5 px-4 py-2 font-semibold hover:bg-white/10 transition-all" href="#">Open library</a></div>
          </Card>
          <Card title="Join the builder beta">
            Publish a package, ship a module.
            <div className="mt-3"><a className="inline-flex rounded-xl border border-white/15 bg-white/5 px-4 py-2 font-semibold hover:bg-white/10 transition-all" href="#">Request access</a></div>
          </Card>
          <Card title="Bring your network">
            Pilot Achra with your roadmap.
            <div className="mt-3"><a className="inline-flex rounded-xl border border-white/15 bg-white/5 px-4 py-2 font-semibold hover:bg-white/10 transition-all" href="#">Start a pilot</a></div>
          </Card>
        </div>
      </Section>

      <footer className="border-t border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60">
          <div className="flex items-center gap-3">
            <img src="/images/PH-Icon-Light-L.png" alt="Powerhouse" className="h-5 w-5" />
            <span>© 2025 Powerhouse</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
