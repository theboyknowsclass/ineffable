import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ineffable Consulting Ltd | Professional Software Development",
  description:
    "Ineffable Consulting Ltd - Delivering excellence in software development, digital transformation, and technology consulting services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Source+Serif+Pro:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <header
            style={{
              flex: 0,
              padding: "2rem 0",
              borderBottom: "1px solid #e5e5e5",
              width: "100%",
            }}
          >
            <nav
              style={{
                display: "flex",
                justifyContent: "flex-end",
                paddingRight: "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Link href="/" className="nav-link">
                  Home
                </Link>
                <Link href="/projects" className="nav-link">
                  Projects
                </Link>
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </div>
            </nav>
          </header>
          <main style={{ flex: 1 }}>{children}</main>
          <footer
            style={{
              flex: 0,
              background: "var(--secondary-color)",
              color: "var(--primary-color)",
              marginTop: "auto",
              textAlign: "center",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <div>
              <p>
                © {new Date().getFullYear()} Ineffable Consulting Ltd. All
                rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
