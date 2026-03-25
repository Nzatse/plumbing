import type { Metadata } from "next";
import Header from "../../components/Header"
import Footer from "@/app/components/Footer";
export const metadata: Metadata = {
  title: "Terms & Conditions | Skyview Plumbing LLC",
  description:
    "Terms and Conditions for Skyview Plumbing LLC services, SMS communications, and website use.",
  alternates: { canonical: "https://skyviewplumbingmn.com/terms" },
  openGraph: {
    url: "https://skyviewplumbingmn.com/terms",
    title: "Terms & Conditions | Skyview Plumbing LLC",
    description:
      "Terms and Conditions for Skyview Plumbing LLC services, SMS communications, and website use.",
  },
  twitter: {
    title: "Terms & Conditions | Skyview Plumbing",
    description:
      "Terms and Conditions for Skyview Plumbing LLC services, SMS communications, and website use.",
  },
};

const YEAR = new Date().getFullYear();

export default function TermsPage() {
  return (
    <div>
      <Header />

      <main className="legal-wrap">
        <a className="legal-back" href="/">
          &#8592; Back to Skyview Plumbing LLC
        </a>
        <article className="legal-card">
          <h1>Terms &amp; Conditions</h1>
          <div className="legal-header-meta">
            <p className="meta">Effective Date: February 12, 2026</p>
            <p className="meta">Last Updated: February 12, 2026</p>
          </div>

          <p>
            These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use of the Skyview Plumbing LLC website, quote form, SMS communications, and plumbing services in Minnesota.
            By requesting a quote, booking service, submitting our contact form, or using this
            website, you agree to these Terms. If you do not agree, please discontinue use of
            this site and our services.
          </p>

          <nav className="legal-toc" aria-label="Table of Contents">
            <ol>
              <li><a href="#company-info">Company Information</a></li>
              <li><a href="#quotes">Quotes, Estimates, and Scope of Work</a></li>
              <li><a href="#scheduling">Scheduling, Access, and Cancellations</a></li>
              <li><a href="#permits">Permits, Code Compliance, and Inspections</a></li>
              <li><a href="#payment">Payment Terms</a></li>
              <li><a href="#customer-responsibilities">Customer Responsibilities</a></li>
              <li><a href="#warranty">Warranty and Disclaimers</a></li>
              <li><a href="#liability">Limitation of Liability</a></li>
              <li><a href="#website-use">Website Use</a></li>
              <li><a href="#sms">SMS / Text Messaging Terms</a></li>
              <li><a href="#privacy">Privacy</a></li>
              <li><a href="#governing-law">Governing Law and Venue</a></li>
              <li><a href="#changes">Changes to These Terms</a></li>
              <li><a href="#contact">Contact</a></li>
            </ol>
          </nav>

          <h2 id="company-info">1. Company Information</h2>
          <p>
            Skyview Plumbing LLC (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
            &ldquo;us&rdquo;) provides residential and commercial plumbing services throughout
            Minnesota, including the Twin Cities metropolitan area.
          </p>
          <ul>
            <li>Phone: <a href="tel:+17633709944">(763) 370-9944</a></li>
            <li>Email: <a href="mailto:info@skyviewplumbingmn.com">info@skyviewplumbingmn.com</a></li>
            <li>Website: <a href="https://skyviewplumbingmn.com">skyviewplumbingmn.com</a></li>
          </ul>

          <h2 id="quotes">2. Quotes, Estimates, and Scope of Work</h2>
          <ul>
            <li>Quotes and estimates are based on information available at the time provided.</li>
            <li>
              Final price may change if on-site conditions or scope differ from initial
              assumptions.
            </li>
            <li>Additional work beyond the agreed scope requires customer approval before charges are added.</li>
            <li>Written quotes expire 30 days from the date issued unless otherwise noted.</li>
          </ul>

          <h2 id="scheduling">3. Scheduling, Access, and Cancellations</h2>
          <ul>
            <li>You agree to provide safe, timely access to the property for scheduled service.</li>
            <li>
              Cancellations or rescheduling with less than 24 hours&rsquo; notice may result in a
              trip fee.
            </li>
            <li>
              Emergency service response times are estimates and depend on technician availability
              and travel conditions.
            </li>
          </ul>

          <h2 id="permits">4. Permits, Code Compliance, and Inspections</h2>
          <ul>
            <li>
              Work requiring permits will be performed in accordance with applicable Minnesota
              state and local building codes.
            </li>
            <li>
              Unless otherwise agreed in writing, permit and inspection fees are the
              customer&rsquo;s responsibility.
            </li>
            <li>We will notify you in advance if a permit is required for your project.</li>
          </ul>

          <h2 id="payment">5. Payment Terms</h2>
          <ul>
            <li>
              Payment is due upon completion of services unless a different schedule is agreed in
              writing before work begins.
            </li>
            <li>We accept cash, check, and major credit/debit cards.</li>
            <li>Late balances may incur lawful late fees and reasonable collection costs.</li>
            <li>
              We reserve the right to suspend future non-emergency services for accounts with
              outstanding unpaid balances.
            </li>
          </ul>

          <h2 id="customer-responsibilities">6. Customer Responsibilities</h2>
          <ul>
            <li>
              Provide accurate and complete project information, including disclosure of any
              known plumbing issues.
            </li>
            <li>Secure pets and remove obstacles from work areas prior to technician arrival.</li>
            <li>
              Protect valuables near the work area; while we exercise reasonable care, customers
              are responsible for securing personal property.
            </li>
            <li>
              Ensure the person authorizing work is the property owner or has authority to
              authorize plumbing work on the property.
            </li>
          </ul>

          <h2 id="warranty">7. Warranty and Disclaimers</h2>
          <ul>
            <li>
              Labor and/or parts warranty terms, if offered, are provided at the time of service
              or on the invoice.
            </li>
            <li>
              Warranty does not cover damage caused by misuse, abuse, normal wear and tear,
              pre-existing conditions, freezing, floods, acts of nature, or work performed by
              third parties.
            </li>
            <li>
              Except where prohibited by applicable law, all warranties not expressly stated here
              are disclaimed to the fullest extent permitted.
            </li>
          </ul>

          <h2 id="liability">8. Limitation of Liability</h2>
          <p>
            To the fullest extent allowed by applicable law, Skyview Plumbing LLC shall not be
            liable for indirect, incidental, special, consequential, or punitive damages arising
            out of or related to our services or this website. Our total liability for any claim
            related to services is limited to the amount paid for the specific service giving
            rise to the claim. This limitation does not apply where prohibited by law, including
            liability arising from gross negligence or willful misconduct.
          </p>

          <h2 id="website-use">9. Website Use</h2>
          <ul>
            <li>You may use this website only for lawful purposes.</li>
            <li>
              You agree not to interfere with website operation, submit false or misleading
              information, or attempt unauthorized access to any part of the site or its systems.
            </li>
            <li>
              Content on this website is for informational purposes only and does not constitute
              professional advice specific to your situation.
            </li>
          </ul>

          <h2 id="sms">10. SMS / Text Messaging Terms</h2>
          <p>
            By providing your mobile phone number and checking the SMS consent box on our quote
            form, you agree to receive text messages from Skyview Plumbing LLC related to your
            service request, appointment confirmations, scheduling reminders, and service updates.
          </p>
          <ul>
            <li>Message frequency varies based on your service activity and requests.</li>
            <li>Message and data rates may apply based on your mobile carrier plan.</li>
            <li>
              Consent to receive SMS messages is <strong>not</strong> a condition of purchasing
              any service.
            </li>
            <li>
              Reply <strong>STOP</strong> at any time to opt out of text messages. Reply{" "}
              <strong>HELP</strong> for assistance.
            </li>
            <li>
              For privacy details, see our <a href="/privacy-policy">Privacy Policy</a>.
            </li>
          </ul>

          <h2 id="privacy">11. Privacy</h2>
          <p>
            Information submitted through our website or quote form is used to respond to your
            inquiry, provide requested services, and communicate with you. We do not sell your
            personal information to third parties. We may share data with trusted service
            providers solely to operate our business and communications. For full details, please
            review our <a href="/privacy-policy">Privacy Policy</a>.
          </p>

          <h2 id="governing-law">12. Governing Law and Venue</h2>
          <p>
            These Terms are governed by the laws of the State of Minnesota, without regard to
            conflict-of-laws principles. Any legal action arising out of or relating to these
            Terms shall be brought in a court of competent jurisdiction in the State of Minnesota.
            If any provision of these Terms is found to be unenforceable, the remaining provisions
            shall remain in full force and effect.
          </p>

          <h2 id="changes">13. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time to reflect changes in our services, legal
            requirements, or business practices. Updated Terms are effective when posted on this
            page with a revised &ldquo;Last Updated&rdquo; date. Your continued use of our
            services after such changes constitutes acceptance of the updated Terms.
          </p>

          <h2 id="contact">14. Contact</h2>
          <p>Questions about these Terms?</p>
          <ul>
            <li>Phone: <a href="tel:+17633709944">(763) 370-9944</a></li>
            <li>Email: <a href="mailto:info@skyviewplumbingmn.com">info@skyviewplumbingmn.com</a></li>
          </ul>

          <p className="legal-notice">
            These Terms represent practical legal guidelines for plumbing operations in Minnesota
            and the United States. For formal legal review specific to your business structure and
            risk profile, consult a licensed Minnesota attorney.
          </p>

          <footer className="legal-footer">
            &copy; {YEAR} Skyview Plumbing LLC. All rights reserved. &mdash;{" "}
            <a href="/privacy-policy">Privacy Policy</a>
          </footer>
        </article>
      </main>

      <Footer />
    </div>
  );
}

