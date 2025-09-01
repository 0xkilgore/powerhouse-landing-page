

export default function PowerhouseLanding() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Reinventing Organizations in the Age of AI
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8">
          Scalable Network Organizations—open-source by default, programmable with AI, and built to operate at real-world scale.
        </p>
        <p className="italic text-md md:text-lg max-w-2xl mx-auto mb-10">
          Powerhouse lets you vibe code an organization: spin up rulebooks, payments, and governance on demand.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#snos"
            className="bg-green-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-green-400"
          >
            See how SNOs work
          </a>
          <a
            href="#contact"
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200"
          >
            Talk to us
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Legal gray zones block scale.
        </h2>
        <p className="text-xl mb-6">The future of organizations is programmable.</p>
        <p className="text-lg leading-relaxed mb-6">
          Powerhouse turns open projects and internet-native communities into <strong>Scalable Network Organizations (SNOs)</strong>—AI-assisted, governed by code, funded by markets, and built to operate at real-world scale.
        </p>
        <p className="text-lg leading-relaxed italic">
          With Powerhouse, you don’t just launch a project—you generate an organization on demand.
        </p>
      </section>

      {/* Problems */}
      <section className="bg-gray-900 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Coordination & compliance</h3>
            <ul className="space-y-2 text-lg list-disc list-inside">
              <li>Paying global contributors pushes teams into a single “Lab” or foundation—re-centralizing power and risk.</li>
              <li>Resource planning breaks: distributed work needs shared, enforceable plans—not chat scrollback.</li>
              <li>Incentives drift: visibility and politics outcompete outcomes; retro funding misprices work.</li>
              <li>Tooling doesn’t fit: chats, spreadsheets, and point tools can’t run an internet-scale company.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Open-source economics</h3>
            <ul className="space-y-2 text-lg list-disc list-inside">
              <li>Public goods, private costs: critical infra relies on volunteers or a single sponsor.</li>
              <li>Mispriced outcomes: grants/retro lag delivery and underpay maintainers.</li>
              <li>Leaky value capture: enterprise value escapes the commons.</li>
              <li>Uninvestable by default: no clear path for outside capital to fund growth & share upside.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SNO Pattern */}
      <section id="snos" className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">SNO = Five cooperating hubs</h2>
        <ul className="space-y-3 text-lg list-disc list-inside mb-8">
          <li><strong>DAO</strong> — the on-chain brain & treasury</li>
          <li><strong>Operational Hub (OH)</strong> — global, liability-free payroll</li>
          <li><strong>Revenue Hub (RGH)</strong> — sells services & shares proceeds</li>
          <li><strong>Collateral Fund (OCF)</strong> — routes capital to winning work</li>
          <li><strong>IP Guard (IP)</strong> — protects brand while obeying votes</li>
        </ul>
        <p className="text-lg leading-relaxed mb-2">What that enables:</p>
        <ul className="space-y-2 text-lg list-disc list-inside">
          <li>Pay contributors globally without a central choke point</li>
          <li>Route capital to accountable workstreams</li>
          <li>Monetize services and reinvest into the commons</li>
          <li>Protect brand while staying subordinate to governance</li>
        </ul>
      </section>

      {/* Products */}
      <section className="bg-gray-900 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Achra — Marketplace for global coordination</h3>
            <ul className="space-y-2 text-lg list-disc list-inside">
              <li>Open roadmaps, RFPs, milestones, and audit trails (transparency by default)</li>
              <li>Milestone payouts in stablecoins with automated tax workflows (W-9/1099)</li>
              <li>Best-practice flows for distributed teams—from proposal to delivery</li>
              <li>Atlas-powered governance: scoped authority, logged decisions, programmable approvals</li>
            </ul>
            <a href="#achra" className="inline-block mt-4 text-green-400 font-semibold hover:underline">
              Explore Achra →
            </a>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Vetra — Builder platform for reactive document architecture</h3>
            <ul className="space-y-2 text-lg list-disc list-inside">
              <li>Define document types, UIs, and automations; publish as reusable packages</li>
              <li><strong>Spec-driven AI control</strong>: agents act as governed contributors with roles & permissions</li>
              <li>Dev-first SDKs; fork, extend, or self-host—no lock-in</li>
              <li>Usage-based revenue: get paid when others build on your modules</li>
            </ul>
            <a href="#vetra" className="inline-block mt-4 text-green-400 font-semibold hover:underline">
              Explore Vetra →
            </a>
          </div>
        </div>
      </section>

      {/* What it solves */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">What it solves</h2>
        <ul className="space-y-2 text-lg list-disc list-inside mb-6">
          <li>Creates sustainable, recurring revenue for public-good software</li>
          <li>Aligns builders, operators, and investors around measurable outcomes</li>
          <li>Keeps code open while capturing downstream value for the commons</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Four principles</h3>
        <ol className="space-y-2 text-lg list-decimal list-inside">
          <li>Coordinate via a marketplace (open roadmaps & RFPs)</li>
          <li>Profit before distribution (share revenue back after PMF)</li>
          <li>Maximize value capture (copyleft + commercial licensing)</li>
          <li>Make OSS investable (structure finance to share upside)</li>
        </ol>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Where it lives in the stack</h3>
        <p className="text-lg leading-relaxed">
          Achra operates the marketplace—roadmaps, RFPs, delivery, payout rails. Vetra provides the reactive document architecture—packages, automations, and rulebooks that make the economics enforceable.
        </p>
      </section>

      {/* AI / Programmable orgs */}
      <section className="bg-gray-900 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Programmable organizations</h2>
          <h3 className="text-2xl font-semibold mb-4">Document models</h3>
          <p className="text-lg mb-6">
            Policies become structured data. Approvals trigger workflows and payouts; history is version-controlled and auditable.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Agents as governed contributors</h3>
          <p className="text-lg mb-6">
            AI drafts budgets, reconciles spend, and proposes updates—within scoped authority and logged decisions.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Vibe-code your org</h3>
          <p className="text-lg">
            Define the rulebook; Powerhouse assembles the rest from a library of best-practice components—so governance, processes, and interfaces shape themselves to your requirements. Tailored, automated, and easy to operate.
          </p>
        </div>
      </section>

      {/* Proof */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Proof</h2>
        <h3 className="text-2xl font-semibold mb-4">MakerDAO → Sky heritage</h3>
        <p className="text-lg mb-4">
          We learned the hard lessons building in one of the longest-running DAOs and turned them into repeatable systems.
        </p>
        <p className="text-lg mb-4">
          <strong>Battle-tested patterns:</strong> Atlas rulebooks, operational hubs, marketplace workflows shaped by real-world delivery.
        </p>
        <p className="text-lg mb-4">
          <strong>Read the papers:</strong> SNOs, Atlas, and Open-Source Capitalism.
        </p>
        <p className="text-lg mb-4">
          <strong>Open library</strong>
        </p>
      </section>

      {/* Call to Action */}
      <section id="contact" className="bg-gray-900 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Bring your network</h2>
        <p className="text-lg mb-8">Pilot Achra with your roadmap.</p>
        <a
          href="#pilot"
          className="bg-green-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-green-400 mb-8 inline-block"
        >
          Start a pilot →
        </a>
        <h2 className="text-3xl font-bold mb-6">Join the builder beta</h2>
        <p className="text-lg mb-8">Publish a package, ship a module.</p>
        <a
          href="#builder"
          className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 inline-block"
        >
          Request access →
        </a>
      </section>
    </div>
  );
}
