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
              <a href="/">English</a>
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
                maxWidth: 560,
              }}
            >
              アクティブ・インファレンスに基づく精神状態モデリング基盤
            </p>
          </header>

          <section style={{ marginBottom: 48 }}>
            <h2>概要</h2>

            <p>
              Opal Systems は、精神状態の動的変化を計算論的に記述し、
              可視化し、長期的に追跡するための研究主導型プロジェクトです。
              心理状態を低次元の連続空間として表現し、行動・言語・文脈などの
              マルチモーダルデータを用いた縦断的解析を目指しています。
            </p>

            <p>
              代表：廣瀬 正義 医師
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2>Ψモデル</h2>

            <p>
              精神状態は、以下の5つの解釈可能な次元で表現されます。
            </p>

            <ul>
              <li>Ω 秩序</li>
              <li>Ε 活性</li>
              <li>Π 精度</li>
              <li>Σ 社会的結合</li>
              <li>Λ 学習</li>
            </ul>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2>プレプリント</h2>

            <p>
              The Ψ Model: A Five-Dimensional Active-Inference State Space for Mental-State Dynamics
            </p>

            <p>
              DOI: 10.5281/zenodo.19158833
            </p>

            <p>
              <a href="/paper.pdf" target="_blank" rel="noreferrer">
                PDF
              </a>
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2>連絡先</h2>

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
