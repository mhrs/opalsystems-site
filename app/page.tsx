export default function OpalSystemsLandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Opal logo" className="h-10 w-10 rounded-xl object-contain" />
            <div>
              <div className="text-sm font-semibold tracking-wide">Opal Systems</div>
              <div className="text-xs text-slate-500">Mind modeling for everyday life</div>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="#about" className="transition hover:text-slate-900">About</a>
            <a href="#model" className="transition hover:text-slate-900">Model</a>
            <a href="#vision" className="transition hover:text-slate-900">Vision</a>
            <a href="#contact" className="transition hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.08),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_35%)]" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:py-32">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
                Active inference × computational psychiatry
              </div>
              <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
                A new interface for understanding the human mind.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Opal Systems is developing a mental model platform that represents human psychological states in a structured, interpretable way—bridging clinical insight, active inference, and digital support for everyday life.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5"
                >
                  Contact
                </a>
                <a
                  href="#about"
                  className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5"
                >
                  Learn more
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-medium text-slate-500">Core concept</div>
                <div className="mt-3 text-2xl font-semibold text-slate-950">The mind as a structured state space</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Instead of treating mental states as vague impressions, Opal aims to map them into coherent dimensions that can be observed, interpreted, and supported over time.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm">
                  <div className="text-sm font-medium text-slate-500">Clinical grounding</div>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    Built from psychiatric practice and designed to remain interpretable, human-centered, and practically useful.
                  </p>
                </div>
                <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm">
                  <div className="text-sm font-medium text-slate-500">Technology</div>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    Combining language models, computational psychiatry, and active inference into a new kind of support layer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">About</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                What Opal Systems is trying to build
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600">
                Many tools can generate answers, but very few can model the person who is asking. Opal Systems explores a different direction: a platform that helps represent the structure of a person’s mind in a way that is dynamic, personalized, and clinically meaningful.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Interpretable</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  A model that is understandable to humans, not just predictive behind the scenes.
                </p>
              </div>
              <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Personalized</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  A framework that adapts to individuals rather than forcing everyone into the same coarse categories.
                </p>
              </div>
              <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Actionable</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Support that can guide reflection, decisions, communication, and everyday functioning.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="model" className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-start">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Model</div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                  A five-dimensional view of mental state
                </h2>
                <p className="mt-6 text-base leading-8 text-slate-600">
                  The Ψ framework describes mental state through five core variables: Order, Energy, Precision, Social coupling, and Learning. Together, they form a compact but expressive representation of how a person is functioning at a given time.
                </p>
              </div>
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="space-y-4 text-sm text-slate-700">
                  <div><span className="font-semibold">Ω</span> — Order</div>
                  <div><span className="font-semibold">Ε</span> — Energy</div>
                  <div><span className="font-semibold">Π</span> — Precision</div>
                  <div><span className="font-semibold">Σ</span> — Social coupling</div>
                  <div><span className="font-semibold">Λ</span> — Learning / plasticity</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="vision" className="border-t border-slate-200 bg-slate-950 text-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Vision</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                From symptom tracking to mental modeling
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-300">
                Opal is not just a mood logger or chatbot. The long-term aim is a platform that can help individuals understand their own patterns, support clinicians with structured interpretation, and create more coherent bridges between daily life, mental health, and computational modeling.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-sm md:p-10">
              <div className="max-w-2xl">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Contact</div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Get in touch</h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  For collaboration, research, product, or early partnership inquiries, please contact us at:
                </p>
                <div className="mt-6 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-800">
                  contact@opalsystems.ai
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Opal Systems</div>
          <div>opalsystems.ai</div>
        </div>
      </footer>
    </div>
  );
}
