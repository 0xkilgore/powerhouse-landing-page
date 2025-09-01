
export default function PowerhouseLanding() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-zinc-100 antialiased selection:bg-emerald-300/20 selection:text-emerald-200">
      {/* Top gradient glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-20%] h-[60vh] w-[80vw] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      {/* Navbar (simple placeholder) */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold tracking-tight">
            Powerhouse
          </div>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#snos" className="text-zinc-300 hover:text-white transition">SNOs</a>
            <a href="#products" className="text-zinc-300 hover:text-white transition">Products</a>
            <a href="#vision" className="text-zinc-300 hover:text-white transition">Vision</a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200 hover:bg-emerald-400/15 hover:text-emerald-100 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50"
          >
            Talk to us
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 md:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl">
              Reinventing Organizations in the Age of AI
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-zinc-300 md:text-xl">
              Scalable Network Organizations—open-source by default, programmable with AI, and built to operate at real-world scale.
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-base text-zinc-400">
              Powerhouse lets you vibe code an organization: spin up rulebooks, payments, and governance on demand.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a
                href="#snos"
                className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white text-black px-5 py-3 text-sm font-semibold shadow-[0_0_0_1px_rgba(255,255,255,0.06)] hover:shadow-lg hover:shadow-white/10 transition"
              >
                See how SNOs work
                <span className="transition group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="#vision"
                className="inline-flex items-center gap-2 rounded-2xl border border-emerald-400/40 bg-emerald-400/10 px-5 py-3 text-sm font-semibold text-emerald-200 hover:bg-emerald-400/15 hover:text-emerald-100 transition"
              >
                Why it matters
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="relative border-y border-white/5 bg-[#0E0E14]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner shadow-black/30 backdrop-blur-sm">
            <h3 className="text-xl font-semibold tracking-tight">Coordination & compliance</h3>
            <ul className="mt-4 space-y-3 text-zinc-300">
              <li>Paying global contributors pushes teams into a single “Lab” or foundation—re-centralizing power and risk.</li>
              <li>Resource planning breaks: distributed work needs shared, enforceable plans—not chat scrollback.</li>
              <li>Incentives drift: visibility and politics outcompete outcomes; retro funding misprices work.</li>
              <li>Tooling doesn’t fit: chats, spreadsheets, and point tools can’t run an internet-scale company.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner shadow-black/30 backdrop-blur-sm">
            <h3 className="text-xl font-semibold tracking-tight">Open‑source economics</h3>
            <ul className="mt-4 space-y-3 text-zinc-300">
              <li>Public goods, private costs: critical infra relies on volunteers or a single sponsor.</li>
              <li>Mispriced outcomes: grants/retro lag delivery and underpay maintainers.</li>
              <li>Leaky value capture: enterprise value escapes the commons.</li>
              <li>Uninvestable by default: no clear path for outside capital to fund growth & share upside.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SNO Pattern */}
      <section id="snos" className="relative">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">SNO = Five cooperating hubs</h2>
            <p className="mt-3 text-zinc-400">A modular pattern to scale without centralizing.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'DAO', desc: 'the on-chain brain & treasury' },
              { title: 'Operational Hub (OH)', desc: 'global, liability-free payroll' },
              { title: 'Revenue Hub (RGH)', desc: 'sells services & shares proceeds' },
              { title: 'Collateral Fund (OCF)', desc: 'routes capital to winning work' },
              { title: 'IP Guard (IP)', desc: 'protects brand while obeying votes' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <div className="text-emerald-300 text-sm">{item.title}</div>
                <div className="mt-1 text-zinc-200">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              'Pay contributors globally without a central choke point',
              'Route capital to accountable workstreams',
              'Monetize services and reinvest into the commons',
              'Protect brand while staying subordinate to governance',
            ].map((b) => (
              <div key={b} className="rounded-xl border border-white/10 bg-white/5 p-4 text-zinc-300">{b}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="relative border-y border-white/5 bg-[#0E0E14]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-2xl font-bold">Achra — Marketplace for global coordination</h3>
              <ul className="mt-4 space-y-3 text-zinc-300">
                <li>Open roadmaps, RFPs, milestones, and audit trails (transparency by default)</li>
                <li>Milestone payouts in stablecoins with automated tax workflows (W‑9/1099)</li>
                <li>Best-practice flows for distributed teams—from proposal to delivery</li>
                <li>Atlas-powered governance: scoped authority, logged decisions, programmable approvals</li>
              </ul>
              <a href="#achra" className="mt-5 inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200">Explore Achra →</a>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-2xl font-bold">Vetra — Builder platform for reactive document architecture</h3>
              <ul className="mt-4 space-y-3 text-zinc-300">
                <li>Define document types, UIs, and automations; publish as reusable packages</li>
                <li><strong className="text-zinc-100">Spec-driven AI control</strong>: agents act as governed contributors with roles & permissions</li>
                <li>Dev-first SDKs; fork, extend, or self-host—no lock-in</li>
                <li>Usage-based revenue: get paid when others build on your modules</li>
              </ul>
              <a href="#vetra" className="mt-5 inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200">Explore Vetra →</a>
            </div>
          </div>
        </div>
      </section>

      {/* What it solves & Principles */}
      <section id="vision" className="relative">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What it solves</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              'Creates sustainable, recurring revenue for public-good software',
              'Aligns builders, operators, and investors around measurable outcomes',
              'Keeps code open while capturing downstream value for the commons',
            ].map((b) => (
              <div key={b} className="rounded-xl border border-white/10 bg-white/5 p-4 text-zinc-300">{b}</div>
            ))}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
              <h3 className="text-2xl font-semibold">Four principles</h3>
              <ol className="mt-4 space-y-3 text-zinc-300 list-decimal list-inside">
                <li>Coordinate via a marketplace (open roadmaps & RFPs)</li>
                <li>Profit before distribution (share revenue back after PMF)</li>
                <li>Maximize value capture (copyleft + commercial licensing)</li>
                <li>Make OSS investable (structure finance to share upside)</li>
              </ol>
            </div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
              <h3 className="text-2xl font-semibold">Where it lives in the stack</h3>
              <p className="mt-4 text-zinc-300">
                Achra operates the marketplace—roadmaps, RFPs, delivery, payout rails. Vetra provides the reactive document architecture—packages, automations, and rulebooks that make the economics enforceable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programmable orgs */}
      <section className="relative border-y border-white/5 bg-[#0E0E14]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Programmable organizations</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Document models</h3>
              <p className="mt-3 text-zinc-300">Policies become structured data. Approvals trigger workflows and payouts; history is version-controlled and auditable.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Agents as governed contributors</h3>
              <p className="mt-3 text-zinc-300">AI drafts budgets, reconciles spend, and proposes updates—within scoped authority and logged decisions.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Vibe‑code your org</h3>
              <p className="mt-3 text-zinc-300">Define the rulebook; Powerhouse assembles the rest from a library of best‑practice components—so governance, processes, and interfaces shape themselves to your requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof & CTAs */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-2xl font-semibold">MakerDAO → Sky heritage</h3>
              <p className="mt-3 text-zinc-300">We learned the hard lessons building in one of the longest-running DAOs and turned them into repeatable systems.</p>
              <p className="mt-3 text-zinc-300"><strong>Battle-tested patterns:</strong> Atlas rulebooks, operational hubs, marketplace workflows shaped by real-world delivery.</p>
              <p className="mt-3 text-zinc-300"><strong>Read the papers:</strong> SNOs, Atlas, and Open-Source Capitalism.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-emerald-400/10 to-transparent p-6">
              <h3 className="text-2xl font-semibold">Ready to build?</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5">
                  <h4 className="font-medium text-emerald-200">Bring your network</h4>
                  <p className="mt-1 text-zinc-300">Pilot Achra with your roadmap.</p>
                  <a href="#pilot" className="mt-3 inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200">Start a pilot →</a>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h4 className="font-medium">Join the builder beta</h4>
                  <p className="mt-1 text-zinc-300">Publish a package, ship a module.</p>
                  <a href="#builder" className="mt-3 inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200">Request access →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-10 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Powerhouse · Privacy · Terms · Contact
      </footer>
    </div>
  );
}
