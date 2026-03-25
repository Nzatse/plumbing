import type { Metadata } from "next";
import Script from "next/script";
import Header from "../../components/Header"
import Footer from "@/app/components/Footer";
export const metadata: Metadata = {
  title: "Contact Us | Skyview Plumbing",
  description:
    "Contact Skyview Plumbing — call, email, or send a message 24/7. Serving Minneapolis, St. Paul, and the Twin Cities metro area.",
  alternates: { canonical: "https://skyviewplumbingmn.com/contact" },
  openGraph: {
    url: "https://skyviewplumbingmn.com/contact",
    title: "Contact Us | Skyview Plumbing",
    description:
      "Contact Skyview Plumbing — call, email, or send a message 24/7. Serving Minneapolis, St. Paul, and the Twin Cities metro area.",
  },
  twitter: {
    title: "Contact Us | Skyview Plumbing",
    description:
      "Contact Skyview Plumbing — call, email, or send a message 24/7. Serving Minneapolis, St. Paul, and the Twin Cities metro area.",
  },
};

const YEAR = new Date().getFullYear();

export default function ContactPage() {
  return (
    <>
      <Header />
      <style dangerouslySetInnerHTML={{ __html: contactStyles }} />
      <main className="contact-wrap">
        <a className="contact-back" href="/">
          &#8592; Back to Skyview Plumbing LLC
        </a>

        <header className="contact-header">
          <h1>Contact Us</h1>
          <p>
            Whether it&rsquo;s an emergency or a routine job, we&rsquo;re here
            around the clock. Reach us any way you prefer.
          </p>
        </header>

        <div className="contact-grid">
          {/* ── Info column ── */}
          <section className="contact-info-card" aria-label="Contact information">
            <div className="info-block">
              <span className="info-icon" aria-hidden="true">📞</span>
              <div>
                <strong>Phone</strong>
                <a href="tel:+17633709944">(763) 370-9944</a>
              </div>
            </div>

            <div className="info-block">
              <span className="info-icon" aria-hidden="true">✉️</span>
              <div>
                <strong>Email</strong>
                <a href="mailto:info@skyviewplumbingmn.com">
                  info@skyviewplumbingmn.com
                </a>
              </div>
            </div>

            <div className="info-block">
              <span className="info-icon" aria-hidden="true">📍</span>
              <div>
                <strong>Service Area</strong>
                <span>Twin Cities Metro, MN</span>
              </div>
            </div>

            <div className="info-block">
              <span className="info-icon" aria-hidden="true">🕐</span>
              <div>
                <strong>Hours</strong>
                <span>24/7 — Mon–Sun, including holidays</span>
              </div>
            </div>

            <div className="info-services">
              <strong>We handle:</strong>
              <ul>
                <li>Emergency plumbing &amp; burst pipes</li>
                <li>Water heater repair &amp; installation</li>
                <li>Drain cleaning &amp; sewer line repair</li>
                <li>Leak detection &amp; pipe repair</li>
                <li>Faucet, toilet &amp; fixture services</li>
                <li>Gas line services</li>
              </ul>
            </div>
          </section>

          {/* ── Quote form column ── */}
          <section className="contact-form-card" aria-label="Request a quote">
            <h2>Send Us a Message</h2>
            <p className="form-subtitle">
              Fill in the form below and we&rsquo;ll get back to you as soon as
              possible — usually within minutes.
            </p>
            {/* The native-chat.js script mounts the quote form here */}
            <div className="sv-native-quote-inline" />
          </section>
        </div>

        {/* <footer className="contact-footer">
          &copy; {YEAR} Skyview Plumbing. All rights reserved. &mdash;{" "}
          <a href="/terms">Terms &amp; Conditions</a> &mdash;{" "}
          <a href="/privacy-policy">Privacy Policy</a>
        </footer> */}
      </main>

      {/* Load the native chat form script */}
      <Script src="/assets/native-chat.js" strategy="afterInteractive" />

      <Footer />
    </>
  );
}

const contactStyles = `
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
  .contact-back {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin: 0 0 20px;
    font-weight: 600;
    text-decoration: none;
    color: var(--accent);
    font-size: 15px;
  }
  .contact-back:hover { text-decoration: underline; }
  .contact-wrap {
    max-width: 1040px;
    margin: 0 auto;
    padding: 28px 18px 60px;
  }
  .contact-header {
    margin-bottom: 32px;
  }
  .contact-header h1 {
    margin: 0 0 10px;
    font-size: clamp(28px, 4vw, 42px);
    line-height: 1.1;
    color: var(--text);
  }
  .contact-header p {
    margin: 0;
    font-size: 17px;
    color: var(--muted);
    max-width: 560px;
  }
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    align-items: start;
  }
  @media (max-width: 700px) {
    .contact-grid { grid-template-columns: 1fr; }
  }
  .contact-info-card,
  .contact-form-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 28px 24px;
  }
  .info-block {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    padding: 14px 0;
    border-bottom: 1px solid var(--border);
  }
  .info-block:first-child { padding-top: 0; }
  .info-icon {
    font-size: 22px;
    line-height: 1;
    flex-shrink: 0;
    margin-top: 2px;
  }
  .info-block div {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .info-block strong {
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--muted);
  }
  .info-block a,
  .info-block span {
    font-size: 16px;
    font-weight: 600;
    color: var(--text);
    text-decoration: none;
  }
  .info-block a:hover { color: var(--accent); text-decoration: underline; }
  .info-services {
    padding-top: 18px;
  }
  .info-services strong {
    display: block;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--muted);
    margin-bottom: 8px;
  }
  .info-services ul {
    margin: 0;
    padding-left: 18px;
  }
  .info-services li {
    font-size: 14px;
    color: var(--text);
    margin-bottom: 4px;
  }
  .contact-form-card h2 {
    margin: 0 0 6px;
    font-size: clamp(20px, 2.5vw, 26px);
    color: var(--text);
  }
  .form-subtitle {
    margin: 0 0 20px;
    font-size: 14px;
    color: var(--muted);
  }
  /* Override inline panel to sit flush in the card */
  .sv-native-quote-inline .sv-chat-panel-inline {
    border: none !important;
    padding: 0 !important;
    box-shadow: none !important;
  }
  .contact-footer {
    margin-top: 36px;
    padding-top: 16px;
    border-top: 1px solid var(--border);
    color: var(--muted);
    font-size: 13px;
    text-align: center;
  }
  .contact-footer a { color: var(--muted); }
  .contact-footer a:hover { color: var(--accent); }
`;
