export default function Page() {
  return (
    <main style={{
      fontFamily: "system-ui, sans-serif",
      padding: "40px",
      maxWidth: "900px",
      margin: "0 auto"
    }}>
      
      <img 
        src="/logo.png" 
        alt="Opal logo"
        style={{ width: 120, marginBottom: 30 }}
      />

      <h1 style={{ fontSize: 36, marginBottom: 20 }}>
        Opal Systems
      </h1>

      <p style={{ fontSize: 18, lineHeight: 1.6 }}>
        A new interface for understanding the human mind.
      </p>

      <p style={{ marginTop: 30, lineHeight: 1.7 }}>
        Opal Systems develops a mental model platform grounded in computational psychiatry and active inference.
        The Ψ framework represents psychological state in five dimensions:
      </p>

      <ul style={{ marginTop: 20, lineHeight: 1.8 }}>
        <li>Ω Order</li>
        <li>Ε Energy</li>
        <li>Π Precision</li>
        <li>Σ Social coupling</li>
        <li>Λ Learning</li>
      </ul>

      <p style={{ marginTop: 40 }}>
        Contact: contact@opalsystems.ai
      </p>

    </main>
  );
}
