export const metadata = {
  title: "Opal Systems",
  description:
    "Opal Systems develops computational models of mental state dynamics based on active inference and machine learning.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "#ffffff",
        }}
      >
        {children}
      </body>
    </html>
  );
}
