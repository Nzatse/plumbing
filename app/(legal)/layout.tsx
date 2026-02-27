import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://skyviewplumbingmn.com"),
  robots: { index: true, follow: true },
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <style dangerouslySetInnerHTML={{ __html: legalStyles }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

const legalStyles = `
  :root {
    --bg: #f6f4f2;
    --card: #ffffff;
    --text: #181818;
    --muted: #545454;
    --accent: #de1f26;
    --border: #e3e1dd;
  }
  *, *::before, *::after { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: "Segoe UI", Arial, sans-serif;
    color: var(--text);
    background: radial-gradient(circle at top right, #fff 0%, var(--bg) 52%);
    line-height: 1.7;
  }
  .legal-wrap {
    max-width: 980px;
    margin: 0 auto;
    padding: 28px 18px 60px;
  }
  .legal-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 32px 28px;
  }
  .legal-back {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin: 0 0 20px;
    font-weight: 600;
    text-decoration: none;
    color: var(--accent);
    font-size: 15px;
  }
  .legal-back:hover { text-decoration: underline; }
  h1 {
    margin: 0 0 6px;
    font-size: clamp(28px, 4vw, 40px);
    line-height: 1.1;
    color: var(--text);
  }
  h2 {
    margin: 32px 0 8px;
    font-size: clamp(17px, 2.2vw, 22px);
    line-height: 1.2;
    color: var(--text);
    border-bottom: 2px solid var(--border);
    padding-bottom: 6px;
  }
  h3 {
    margin: 20px 0 6px;
    font-size: clamp(15px, 1.8vw, 18px);
    color: var(--text);
  }
  p, li { font-size: 15px; color: var(--text); }
  p.meta {
    color: var(--muted);
    margin: 0 0 4px;
    font-size: 14px;
  }
  ul { padding-left: 20px; }
  li { margin-bottom: 6px; }
  a { color: var(--accent); }
  .legal-notice {
    border-left: 4px solid var(--accent);
    background: #fff6f6;
    padding: 12px 16px;
    margin: 24px 0;
    font-size: 14px;
    color: var(--muted);
    border-radius: 0 8px 8px 0;
  }
  .legal-footer {
    margin-top: 32px;
    padding-top: 16px;
    border-top: 1px solid var(--border);
    color: var(--muted);
    font-size: 13px;
    text-align: center;
  }
  .legal-toc {
    background: #f9f8f7;
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 16px 20px;
    margin: 16px 0 28px;
  }
  .legal-toc ol {
    margin: 0;
    padding-left: 20px;
  }
  .legal-toc li {
    font-size: 14px;
    margin-bottom: 4px;
  }
  .legal-toc a {
    color: var(--text);
    text-decoration: none;
  }
  .legal-toc a:hover { text-decoration: underline; color: var(--accent); }
  .legal-header-meta {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  @media (max-width: 600px) {
    .legal-card { padding: 20px 16px; }
  }
`;
