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
        <div style={{ marginBottom: 20 }}>
          <a href="/">English</a>
        </div>

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
          アクティブ・インファレンスに基づく精神状態モデリング基盤
        </p>

        <p
          style={{
            fontSize: 14,
            color: "#666",
            margin: 0,
          }}
        >
          2026年設立 · 2025年より構想・研究開始
        </p>
      </header>

      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>
          概要
        </h2>

        <p>
          Opal Systems は、精神状態の動的変化を計算論的に記述し、
          可視化し、長期的に追跡するための研究主導型プロジェクトです。
          心理状態を低次元の連続空間として表現し、行動・言語・文脈などの
          マルチモーダルデータを用いた縦断的解析を目指しています。
        </p>

        <p>
          代表：廣瀬 正義 医師
          <br />
          精神科医、東京
        </p>
      </section>

      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>
          何を作っているか
        </h2>

        <p>
          Opal は、精神状態のダイナミクスを解釈可能なかたちでモデル化し、
          可視化し、モニタリングするためのソフトウェア基盤です。
          研究用途を主眼としつつ、将来的な臨床応用も視野に入れています。
        </p>

        <ul style={{ paddingLeft: 22 }}>
          <li>
            解釈可能な潜在変数による心理状態のモデリング
          </li>

          <li>
            行動・言語・文脈を含むマルチモーダルデータの統合
          </li>

          <li>
            精神状態の長期的軌跡の可視化
          </li>

          <li>
            メンタルヘルスおよびヒューマンステート・モニタリングへの将来的応用
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>
          Ψモデル
        </h2>

        <p>
          Ψモデルは、精神状態を以下の5つの解釈可能な次元で表現します。
        </p>

        <ul style={{ paddingLeft: 22 }}>
          <li>Ω 秩序</li>
          <li>Ε 活性</li>
          <li>Π 精度</li>
          <li>Σ 社会的結合</li>
          <li>Λ 学習</li>
        </ul>
      </section>

      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>
          プレプリント
        </h2>

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
            rel="noreferrer"
          >
            PDF
          </a>
        </p>
      </section>

      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>
          現在の状況
        </h2>

        <ul style={{ paddingLeft: 22 }}>
          <li>2025年にコンセプト開発を開始</li>
          <li>プロトタイプ実装を進行中</li>
          <li>パイロット検証の準備中</li>
          <li>アクティブ・インファレンスに基づく研究原稿を作成</li>
          <li>2026年に個人事業として事業開始</li>
        </ul>
      </section>

      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>
          事業内容
        </h2>

        <p>
          機械学習および計算論的精神医学の手法を用いて、
          人間の精神状態ダイナミクスをモデル化・可視化・モニタリングするための
          ソフトウェアおよびデジタル基盤の開発。
        </p>
      </section>

      <section style={{ marginBottom: 44 }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>
          連絡先
        </h2>

        <p>
          Email
          <br />
          <a href="mailto:contact@opalsystems.ai">
            contact@opalsystems.ai
          </a>
        </p>

        <p>
          LinkedIn
          <br />
          <a
            href="https://www.linkedin.com/in/hirosemasayoshi/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/hirosemasayoshi
          </a>
        </p>
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
