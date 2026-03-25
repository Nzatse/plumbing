"use client";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Logo + Description */}
                <div className="footer-col logo-col">
                    <a href="/" className="logo-link">
                        <div className="logo-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="droplet-icon">
                                <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
                            </svg>
                        </div>
                        <h3 className="logo-text">Skyview Plumbing LLC</h3>
                    </a>
                    <p className="footer-desc">
                        Your trusted partner for residential and commercial plumbing services in Minnesota and surrounding areas. Available 24/7 for all your plumbing needs.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/locations">Locations</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="footer-col">
                    <h4>Contact Info</h4>
                    <ul>
                        <li>
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <a href="tel:+17633709944">(763) 370-9944</a>
                        </li>
                        <li>
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="M22 7L13.03 12.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </svg>
                            <a href="mailto:info@skyviewplumbingmn.com">info@skyviewplumbingmn.com</a>
                        </li>
                        <li>
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span className="white-text">Minnesota</span>
                        </li>
                    </ul>
                </div>

                {/* Business Hours */}
                <div className="footer-col">
                    <h4>Business Hours</h4>
                    <div className="hours">
                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <div>
                            <div className="hours-title">24/7 Service</div>
                            <p className="white-text">Monday–Sunday, available around the clock for emergencies and regular appointments.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    © 2026 Skyview Plumbing LLC. All rights reserved.
                    <span>
                        &nbsp;•&nbsp; <a href="/terms">Terms & Conditions</a> &nbsp;•&nbsp; <a href="/privacy-policy">Privacy Policy</a>
                    </span>
                </p>
            </div>

            <style jsx>{`
        .footer {
          background: #001f3f; /* navy */
          color: #ffffff; /* all text white */
          font-family: Arial, sans-serif;
        }
        .footer-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 48px 16px;
        }
        @media(min-width: 640px) {
          .footer-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media(min-width: 1024px) {
          .footer-container {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .footer-col h4 {
          font-weight: bold;
          margin-bottom: 16px;
          font-size: 18px;
          color: #ffffff; /* headings white */
        }
        .footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-col ul li {
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .footer-col a {
          color: #ffffff; /* links white */
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-col a:hover {
          color: #d63626; /* hover red */
        }
        .logo-link {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          text-decoration: none;
          color: inherit;
        }
        .logo-icon {
          background: #d63626;
          padding: 8px;
          border-radius: 8px;
        }
        .droplet-icon {
          width: 24px;
          height: 24px;
          color: #fff;
        }
        .logo-text {
          font-weight: bold;
          font-size: 20px;
                    color: #ffffff; /* description white */

        }
        .footer-desc {
          color: #ffffff; /* description white */
          font-size: 14px;
          line-height: 1.6;
        }
        .hours {
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }
        .hours-title p {
          font-weight: bold;
          color: #ffffff; /* hours title white */
          margin-bottom: 4px;
        }
          .white-text {
            color: #ffffff; /* hours title white */
          }
        .icon {
          width: 20px;
          height: 20px;
          color: #d63626;
          margin-top: 2px;
          flex-shrink: 0;
        }
        .footer-bottom p {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 16px;
          text-align: center;
          font-size: 12px;
          color: #ffffff; /* bottom text white */
        }
        .footer-bottom a {
          color: #ffffff;
          text-decoration: underline;
        }
        .footer-bottom a:hover {
          color: #d63626;
        }
      `}</style>
        </footer>
    );
}