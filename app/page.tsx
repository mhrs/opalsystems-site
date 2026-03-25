export default function Page() {
  return (
    <main
      style={{
        fontFamily: "system-ui, -apple-system, sans-serif",
        padding: "48px 24px",
        maxWidth: "880px",
        margin: "0 auto",
        lineHeight: 1.75,
        color: "#111",
      }}
    >
      <header style={{ marginBottom: 56 }}>
        <img
          src="/logo.png"
          alt="Opal Systems logo"
          style={{
            width: 88,
            marginBottom: 28,
          }}
        />

        <h1
          style={{
            fontSize: 42,
            margin: "0 0 10px 0",
            fontWeight: 600,
          }}
        >
          Opal Systems
        </h1>

        <p
          style={{
            fontSize: 20,
            margin: "0 0 14px 0",
            color: "#222",
          }}
        >
          Mental state modeling platform based on active inference
        </p>

        <p
          style={{
            fontSize: 14,
            color: "#666",
            margin: 0,
          }}
        >
          Founded 2026 · Concept development since 2025
        </p>
      </header>

      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>About</h2>

        <p>
          Opal Systems is a research-driven project developing computational
          models of mental state dynamics. The platform represents psychological
          states as a continuous low-dimensional space and enables longitudinal
          tracking using multimodal behavioral data.
        </p>

        <p>
          Founder: Masayoshi Hirose, M.D.
          <br />
          Psychiatrist, Tokyo, Japan
        </p>
      </section>

      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>What we build</h2>

        <p>
          Opal is a software platform designed to model, visualize, and monitor
          mental-state dynamics in an interpretable form suitable for research
          and future clinical applications.
        </p>

        <ul style={{ paddingLeft: 22 }}>
          <li>
            modeling psychological states using interpretable latent variables
          </li>

          <li>
            integrating behavioral, linguistic, and contextual multimodal data
          </li>

          <li>
            visualizing longitudinal mental-state trajectories
          </li>

          <li>
            supporting future applications in mental health and human-state
            monitoring
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>Ψ framework</h2>

        <p>
          The Ψ framework represents mental state using five interpretable
          dimensions:
        </p>

        <ul style={{ paddingLeft: 22 }}>
          <li>Ω Order</li>

          <li>Ε Energy</li>

          <li>Π Precision</li>

          <li>Σ Social Coupling</li>

          <li>Λ Learning</li>
        </ul>
      </section>

      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>
          Current status
        </h2>

        <ul style={{ paddingLeft: 22 }}>
          <li>concept development initiated in 2025</li>

          <li>prototype implementation in progress</li>

          <li>preparation for pilot validation</li>

          <li>research manuscript preparation (active inference)</li>

          <li>business launch as a sole proprietorship in 2026</li>
        </ul>
      </section>

      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>
          Business description
        </h2>

        <p>
          Development of software tools and digital infrastructure for modeling,
          visualization, and monitoring of human mental-state dynamics using
          machine learning and computational psychiatry approaches.
        </p>
      </section>

      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>Contact</h2>

        <p>
          Email:
          <br />
          <a href="mailto:contact@opalsystems.ai">
            contact@opalsystems.ai
          </a>
        </p>

        <p>
          LinkedIn:
          <br />
          <a
            href="https://www.linkedin.com/in/hirosemasayoshi/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/hirosemasayoshi
          </a>
        </p>

        {/* optional */}
        {/*
        <p>
          ORCID:
          <br />
          https://orcid.org/XXXX-XXXX-XXXX-XXXX
        </p>
        */}
      </section>

      <footer
        style={{
          marginTop: 64,
          fontSize: 13,
          color: "#666",
        }}
      >
        © 2026 Opal Systems / Masayoshi Hirose
      </footer>
    </main>
  );
}
