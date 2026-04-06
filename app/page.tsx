export default function Page() {
  return (
    <main
      style={{
        fontFamily: "system-ui, -apple-system, sans-serif",
        backgroundImage: "url('/bg.png')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >

      <div
        style={{
          background: "rgba(255,255,255,0.92)",
          minHeight: "100vh",
        }}
      >

        <div
          style={{
            maxWidth: 860,
            margin: "0 auto",
            padding: "80px 24px 60px 24px",
            lineHeight: 1.75,
            color: "#111",
          }}
        >

          <header style={{ marginBottom: 70 }}>

            <div style={{ marginBottom: 24 }}>
              <a href="/ja">日本語</a>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                marginBottom: 22,
              }}
            >

              <img
                src="/logo.png"
                alt="Opal Systems logo"
                style={{
                  width: 46,
                  height: 46,
                }}
              />

              <h1
                style={{
                  fontSize: 40,
                  margin: 0,
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                }}
              >
                Opal Systems
              </h1>

            </div>


            <p
              style={{
                fontSize: 18,
                margin: 0,
                color: "#333",
                maxWidth: 520,
              }}
            >
              Mental state modeling platform based on active inference
            </p>

          </header>



          <section style={{ marginBottom: 48 }}>

            <h2>About</h2>

            <p>
              Opal Systems is a research-driven project developing computational
              models of mental state dynamics. The platform represents psychological
              states as a continuous low-dimensional space and enables longitudinal
              tracking using multimodal behavioral data.
            </p>

            <p>
              Founder: Masayoshi Hirose, M.D.
            </p>

          </section>



          <section style={{ marginBottom: 48 }}>

            <h2>Ψ framework</h2>

            <p>
              Mental state is represented using five interpretable dimensions:
            </p>

            <ul>

              <li>Ω Order</li>

              <li>Ε Energy</li>

              <li>Π Precision</li>

              <li>Σ Social Coupling</li>

              <li>Λ Learning</li>

            </ul>

          </section>



          <section style={{ marginBottom: 48 }}>

            <h2>Preprint</h2>

            <p>
              The Ψ Model: A Five-Dimensional Active-Inference State Space for Mental-State Dynamics
            </p>

            <p>
              DOI: 10.5281/zenodo.19158833
            </p>

            <p>

              <a
                href="/paper.pdf"
                target="_blank"
              >

                PDF

              </a>

            </p>

          </section>



          <section style={{ marginBottom: 48 }}>

            <h2>Contact</h2>

            <p>

              <a href="mailto:contact@opalsystems.ai">
                contact@opalsystems.ai
              </a>

            </p>

          </section>



          <footer
            style={{
              marginTop: 80,
              fontSize: 13,
              color: "#666",
            }}
          >

            © 2026 Opal Systems

          </footer>


        </div>

      </div>

    </main>
  );
}
