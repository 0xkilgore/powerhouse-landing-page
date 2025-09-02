import logo from "../images/PH-Logo-Light-L.png";

export default function PowerhouseLanding() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-zinc-100 antialiased selection:bg-[#34eb4f]/20 selection:text-emerald-100">
      {/* Background grid + glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0B0B0F]" />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px] [background-position:0_0]" />
        <div className="absolute left-1/2 top-[-20%] h-[60vh] w-[80vw] -translate-x-1/2 rounded-full bg-[linear-gradient(90deg,rgba(80,140,255,0.22),rgba(168,85,247,0.22))] blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Powerhouse" className="h-7 w-auto" />
          </div>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#bridge" className="text-zinc-300 hover:text-white transition">Why</a>
            <a href="#snos" className="text-zinc-300 hover:text-white transition">What</a>
            <a href="#products" className="text-zinc-300 hover:text-white transition">How</a>
            <a href="#proof" className="text-zinc-300 hover:text-white transition">Proof</a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center rounded-xl border border-[#34eb4f]/40 bg-[#34eb4f]/10 px-4 py-2 text-sm font-medium text-[#b7ffc4] hover:bg-[#34eb4f]/15 hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#34eb4f]/50"
          >
            Talk to us
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 md:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-[#5B7CFF] via-[#6E6CF6] to-[#A855F7] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl">
              AI‑Native Organizations, Open by Default
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-zinc-300 md:text-xl">
              Scalable Network Organizations—programmable with AI, open‑source by default, and built to operate at real‑world scale.
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-base text-zinc-400">
              <span className="font-semibold">Deploy an organization like you deploy code.</span>
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
                href="#bridge"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#34eb4f]/40 bg-[#34eb4f]/10 px-5 py-3 text-sm font-semibold text-[#b7ffc4] hover:bg-[#34eb4f]/15 hover:text-white transition"
              >
                Why it matters
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bridge: AI + Open Source */}
      <section id="bridge" className="relative border-y border-white/5 bg-[#0E0E14]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Open Source is a superpower in the Age of AI</h2>
            <p className="mt-4 text-zinc-300">
              AI isn’t just tooling anymore—it’s becoming a contributor. To work alongside AI, organizations must be programmable: rules as code, policies as data, and decisions as auditable workflows.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">Faster building</h3>
              <p className="mt-2 text-zinc-300">AI accelerates open‑source development; projects can ship and adapt at unprecedented speed.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">Shared leverage</h3>
              <p className="mt-2 text-zinc-300">Forks, remixes, and agents extend value across the commons instead of locking it into silos.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">Trust & transparency</h3>
              <p className="mt-2 text-zinc-300">AI decisions shape organizations; only open systems can be audited, corrected, and trusted.</p>
            </div>
          </div>
          <p className="mt-10 text-center text-zinc-300">
            Without new economics, AI will centralize power into a few monopolies. Powerhouse pairs <span className="font-semibold">Scalable Network Organizations</span> with <span className="font-semibold">Open Source Capitalism</span>—the organizational and economic model for AI‑native, open organizations.
          </p>
          <p className="mt-4 text-center text-zinc-400 italic">Spin up an organization on demand.</p>
        </div>
      </section>

      {/* What: Two pillars */}
      <section id="snos" className="relative">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
              <h3 className="text-2xl font-bold">Scalable Network Organizations (SNOs)</h3>
              <p className="mt-2 text-zinc-300">AI‑native organizations.</p>
              <ul className="mt-4 space-y-3 text-zinc-300 list-disc list-inside">
                <li>Encode governance and finance in programmable rulebooks.</li>
                <li>Let AI agents enforce scope, budget, and delivery while humans set direction.</li>
                <li>Scale networks without central choke points.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
              <h3 className="text-2xl font-bold">Open Source Capitalism (OSC)</h3>
              <p className="mt-2 text-zinc-300">Economic & political model for AI + human collaboration.</p>
              <ul className="mt-4 space-y-3 text-zinc-300 list-disc list-inside">
                <li>Keeps code, data, and models open by default.</li>
                <li>Captures downstream value so contributors—human or AI—share in the upside.</li>
                <li>Counters the concentration of power in a handful of AI giants.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="relative border-y border-white/5 bg-[#0E0E14]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-2xl font-bold">Achra — Marketplace for global coordination</h3>
              <p className="mt-2 text-zinc-300">Where humans and AI agents propose, deliver, and audit work.</p>
              <ul className="mt-4 space-y-3 text-zinc-300 list-disc list-inside">
                <li>Open roadmaps, RFPs, milestones, and audit trails (transparency by default)</li>
                <li>Milestone payouts in stablecoins with automated compliance (W‑9/1099)</li>
                <li>Atlas‑powered governance: scoped authority, logged decisions, programmable approvals</li>
              </ul>
              <a href="#achra" className="mt-5 inline-flex items-center gap-1 text-[#34eb4f] hover:text-white">Explore Achra →</a>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-2xl font-bold">Vetra — Reactive document architecture</h3>
              <p className="mt-2 text-zinc-300">Where AI acts as a governed contributor.</p>
              <ul className="mt-4 space-y-3 text-zinc-300 list-disc list-inside">
                <li>Define document types, UIs, and automations; publish as reusable packages</li>
                <li>Spec‑driven AI: agents draft budgets, reconcile spend, and enforce rulebooks</li>
                <li>Dev‑first SDKs; fork, extend, or self‑host—no lock‑in</li>
              </ul>
              <a href="#vetra" className="mt-5 inline-flex items-center gap-1 text-[#34eb4f] hover:text-white">Explore Vetra →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Programmable orgs */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Programmable organizations</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Document models</h3>
              <p className="mt-3 text-zinc-300">Policies become structured data. Approvals trigger workflows and payouts; history is version‑controlled and auditable.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Agents as governed contributors</h3>
              <p className="mt-3 text-zinc-300">AI drafts budgets, reconciles spend, and proposes updates—within scoped authority and logged decisions.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Deploy like code</h3>
              <p className="mt-3 text-zinc-300">Compose rulebooks and workflows from best‑practice components to <span className="font-semibold">spin up an organization on demand</span>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section id="proof" className="relative border-y border-white/5 bg-[#0E0E14]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-2xl font-semibold">MakerDAO → Sky heritage</h3>
              <p className="mt-3 text-zinc-300">We learned the hard lessons building in one of the longest‑running DAOs and turned them into repeatable systems.</p>
              <p className="mt-3 text-zinc-300"><strong>Battle‑tested patterns:</strong> Atlas rulebooks, operational hubs, marketplace workflows shaped by real‑world delivery.</p>
              <p className="mt-3 text-zinc-300"><strong>Read the papers:</strong> SNOs, Atlas, and Open Source Capitalism.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#34eb4f]/10 to-transparent p-6">
              <h3 className="text-2xl font-semibold">Ready to build?</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#34eb4f]/30 bg-[#34eb4f]/10 p-5">
                  <h4 className="font-medium text-[#b7ffc4]">Bring your network</h4>
                  <p className="mt-1 text-zinc-300">Pilot Achra with your roadmap.</p>
                  <a href="#pilot" className="mt-3 inline-flex items-center gap-1 text-[#34eb4f] hover:text-white">Start a pilot →</a>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h4 className="font-medium">Join the builder beta</h4>
                  <p className="mt-1 text-zinc-300">Publish a package, ship a module.</p>
                  <a href="#builder" className="mt-3 inline-flex items-center gap-1 text-[#34eb4f] hover:text-white">Request access →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <section id="contact" className="py-16 text-center">
        <p className="text-sm text-zinc-500">© {new Date().getFullYear()} Powerhouse · Privacy · Terms · Contact</p>
      </section>
    </div>
  );
}
