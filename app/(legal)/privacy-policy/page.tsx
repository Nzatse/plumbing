import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Skyview Plumbing",
  description:
    "Privacy Policy for Skyview Plumbing — how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://skyviewplumbingmn.com/privacy-policy" },
  openGraph: {
    url: "https://skyviewplumbingmn.com/privacy-policy",
    title: "Privacy Policy | Skyview Plumbing",
    description:
      "Privacy Policy for Skyview Plumbing — how we collect, use, and protect your personal information.",
  },
  twitter: {
    title: "Privacy Policy | Skyview Plumbing",
    description:
      "Privacy Policy for Skyview Plumbing — how we collect, use, and protect your personal information.",
  },
};

const YEAR = new Date().getFullYear();

export default function PrivacyPolicyPage() {
  return (
    <main className="legal-wrap">
      <a className="legal-back" href="/">
        &#8592; Back to Skyview Plumbing
      </a>
      <article className="legal-card">
        <h1>Privacy Policy</h1>
        <div className="legal-header-meta">
          <p className="meta">Effective Date: February 12, 2026</p>
          <p className="meta">Last Updated: February 12, 2026</p>
        </div>

        <p>
          Thank you for choosing Skyview Plumbing (&ldquo;Company,&rdquo; &ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;). We are committed to protecting your personal
          information and your right to privacy. When you visit our website,{" "}
          <a href="https://skyviewplumbingmn.com">skyviewplumbingmn.com</a>, use our contact
          or quote forms, or engage with our services, you trust us with your personal
          information. We take that responsibility seriously.
        </p>
        <p>
          This Privacy Policy explains what information we collect, how we use it, with whom
          we share it, and what rights you have regarding it. Please read it carefully. If you
          do not agree with the terms of this Privacy Policy, please discontinue use of our
          website and services.
        </p>

        <nav className="legal-toc" aria-label="Table of Contents">
          <ol>
            <li><a href="#info-collect">What Information Do We Collect?</a></li>
            <li><a href="#info-use">How Do We Use Your Information?</a></li>
            <li><a href="#info-share">Will Your Information Be Shared with Anyone?</a></li>
            <li><a href="#cookies">Do We Use Cookies and Other Tracking Technologies?</a></li>
            <li><a href="#sms">SMS / Text Messaging</a></li>
            <li><a href="#retention">How Long Do We Keep Your Information?</a></li>
            <li><a href="#security">How Do We Keep Your Information Safe?</a></li>
            <li><a href="#minors">Do We Collect Information from Minors?</a></li>
            <li><a href="#rights">What Are Your Privacy Rights?</a></li>
            <li><a href="#dnt">Controls for Do-Not-Track Features</a></li>
            <li><a href="#california">Do California Residents Have Specific Privacy Rights?</a></li>
            <li><a href="#updates">Do We Make Updates to This Policy?</a></li>
            <li><a href="#contact">How Can You Contact Us About This Policy?</a></li>
          </ol>
        </nav>

        <h2 id="info-collect">1. What Information Do We Collect?</h2>

        <h3>Personal Information You Provide to Us</h3>
        <p>
          We collect personal information that you voluntarily provide when you request a
          quote, use our contact form, book a service, or otherwise interact with us. The
          information we collect may include:
        </p>
        <ul>
          <li>
            <strong>Contact Information:</strong> First name, last name, phone number, and
            email address.
          </li>
          <li>
            <strong>Service Details:</strong> Description of the plumbing issue or project,
            service address, and any other information you include in your message.
          </li>
          <li>
            <strong>Communication Preferences:</strong> Whether you consent to receive SMS
            messages or other communications from us.
          </li>
        </ul>
        <p>
          All personal information you provide must be true, complete, and accurate. Please
          notify us of any changes to your personal information.
        </p>

        <h3>Information Automatically Collected</h3>
        <p>
          When you visit our website, certain technical information is collected automatically,
          including:
        </p>
        <ul>
          <li>IP address and general geographic location (city/region level)</li>
          <li>Browser type, version, and device characteristics</li>
          <li>Operating system</li>
          <li>Pages visited, time spent, and referring URLs</li>
          <li>Date and time of your visit</li>
        </ul>
        <p>
          This information is used primarily to maintain the security and performance of our
          website and to understand how visitors use it.
        </p>

        <h2 id="info-use">2. How Do We Use Your Information?</h2>
        <p>We use the personal information we collect or receive to:</p>
        <ul>
          <li>
            <strong>Respond to your inquiry</strong> and provide the plumbing services you
            request.
          </li>
          <li>
            <strong>Send appointment confirmations, reminders, and service updates</strong>{" "}
            via phone call, email, or SMS (if you have consented).
          </li>
          <li>
            <strong>Provide customer support</strong> and address questions or concerns about
            your service.
          </li>
          <li>
            <strong>Send marketing communications</strong> about promotions, discounts, and
            new services (only if you have opted in; you may opt out at any time).
          </li>
          <li>
            <strong>Improve our website and services</strong> through analytics, usage trends,
            and feedback.
          </li>
          <li>
            <strong>Comply with legal obligations</strong> and protect the rights and safety
            of our customers and business.
          </li>
        </ul>

        <h2 id="info-share">3. Will Your Information Be Shared with Anyone?</h2>
        {/* <p>
          We only share your personal information in limited circumstances and never sell it
          to third parties. Specifically, we may share your information:
        </p>
        <ul>
          <li>
            <strong>Service Providers:</strong> We may share data with trusted third-party
            vendors who assist us in operating our website and delivering services — such as
            SMS/communication platforms (e.g., Twilio), web hosting providers, and scheduling
            tools. These providers are contractually obligated to keep your information
            confidential and use it only for the services they provide to us.
          </li>
          <li>
            <strong>Legal Compliance:</strong> We may disclose your information where required
            by law, court order, or governmental request, including to meet national security
            or law enforcement requirements.
          </li>
          <li>
            <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale
            of all or part of our business, your information may be transferred as part of that
            transaction. We will notify you via email or a prominent notice on our website of
            any such change in ownership and your choices regarding your information.
          </li>
          <li>
            <strong>Protection of Rights:</strong> We may disclose information where we believe
            it is necessary to investigate, prevent, or act regarding potential violations of
            our policies, fraud, or threats to the safety of any person.
          </li>
        </ul> */}

        <p>
          We do not sell, rent, or share your personal information with third-party companies for their marketing purposes.
        </p>

        <p>
          No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
        </p>

        <h2 id="cookies">4. Do We Use Cookies and Other Tracking Technologies?</h2>
        <p>
          We may use cookies and similar tracking technologies (such as web beacons and pixels)
          to collect and store information about how you use our website. Cookies help us
          understand visitor behavior, remember your preferences, and improve our site.
        </p>
        <p>
          Most web browsers are set to accept cookies by default. You can usually choose to
          set your browser to remove or reject cookies; however, this may affect certain
          features or functionality of our website. We do not currently use cookies for
          advertising or cross-site tracking purposes.
        </p>

        <h2 id="sms">5. SMS / Text Messaging</h2>
        <p>
          If you provide your mobile phone number and consent to receive SMS messages from
          Skyview Plumbing, you agree to receive text messages regarding appointments, service
          updates, and promotional offers.
        </p>
        <ul>
          <li>Message frequency varies.</li>
          <li>Message and data rates may apply.</li>
          <li>
            Reply <strong>STOP</strong> at any time to opt out. Reply <strong>HELP</strong>{" "}
            for assistance.
          </li>
          <li>
            Consent to receive SMS messages is <strong>not</strong> a condition of any
            purchase or service.
          </li>
          <li>
            We use Twilio to send SMS messages. Your phone number is transmitted to Twilio
            solely to deliver messages on our behalf and is not used for any other purpose.
          </li>
        </ul>

        <h2 id="retention">6. How Long Do We Keep Your Information?</h2>
        <p>
          We retain your personal information only for as long as necessary to fulfill the
          purposes described in this Privacy Policy, unless a longer retention period is
          required or permitted by law (such as for tax, accounting, or legal compliance
          purposes). In general:
        </p>
        <ul>
          <li>
            Customer contact and service records are retained for up to{" "}
            <strong>3 years</strong> from your last interaction with us.
          </li>
          <li>
            Marketing communication preferences and opt-in/opt-out records are retained as
            long as needed to honor your choices.
          </li>
        </ul>
        <p>
          When we have no ongoing legitimate business need to process your personal
          information, we will securely delete or anonymize it.
        </p>

        <h2 id="security">7. How Do We Keep Your Information Safe?</h2>
        <p>
          We have implemented appropriate technical and organizational security measures to
          protect your personal information from unauthorized access, alteration, disclosure,
          or destruction. These include:
        </p>
        <ul>
          <li>Encrypted data transmission (HTTPS/TLS) for all form submissions</li>
          <li>Access controls limiting who can view customer information</li>
          <li>Use of reputable, security-certified third-party service providers</li>
        </ul>
        <p>
          However, no method of transmission over the internet or electronic storage is 100%
          secure. While we strive to use commercially acceptable means to protect your
          information, we cannot guarantee absolute security. You access and use our website
          and services at your own risk.
        </p>

        <h2 id="minors">8. Do We Collect Information from Minors?</h2>
        <p>
          We do not knowingly collect personal information from or market to children under 18
          years of age. By using our website and services, you represent that you are at least
          18 years old, or that you are the parent or legal guardian of a minor and consent to
          the minor&rsquo;s use of our services. If we learn that we have collected personal
          information from a child under 18, we will promptly delete that information.
        </p>
        <p>
          If you are aware that we have inadvertently collected information from a minor,
          please contact us at <a href="mailto:info@skyviewplumbingmn.com">info@skyviewplumbingmn.com</a>.
        </p>

        <h2 id="rights">9. What Are Your Privacy Rights?</h2>
        <p>
          Depending on your location and applicable law, you may have rights regarding your
          personal information, including the right to:
        </p>
        <ul>
          <li>
            <strong>Access</strong> — request a copy of the personal information we hold about
            you.
          </li>
          <li>
            <strong>Correction</strong> — request that we correct inaccurate or incomplete
            information.
          </li>
          <li>
            <strong>Deletion</strong> — request that we delete your personal information,
            subject to certain legal exceptions.
          </li>
          <li>
            <strong>Opt-Out of Marketing</strong> — opt out of receiving marketing
            communications at any time by replying STOP to SMS messages or contacting us
            directly.
          </li>
          <li>
            <strong>Data Portability</strong> — in certain circumstances, request a
            machine-readable copy of your personal data.
          </li>
        </ul>
        <p>
          To exercise any of these rights, please contact us using the information in{" "}
          <a href="#contact">Section 13</a>. We will respond to your request within a
          reasonable timeframe in accordance with applicable law.
        </p>

        <h2 id="dnt">10. Controls for Do-Not-Track Features</h2>
        <p>
          Most web browsers and some mobile operating systems include a Do-Not-Track
          (&ldquo;DNT&rdquo;) feature. Because there is no uniform technology standard for
          recognizing and implementing DNT signals, we do not currently respond to DNT browser
          signals. If a standard is adopted in the future, we will update this policy
          accordingly.
        </p>

        <h2 id="california">11. Do California Residents Have Specific Privacy Rights?</h2>
        <p>
          Yes. Under California Civil Code Section 1798.83 (&ldquo;Shine The Light&rdquo; law),
          California residents may request, once per year and free of charge, information about
          any personal information we disclosed to third parties for their direct marketing
          purposes during the preceding calendar year. We do not sell personal information or
          share it with third parties for their direct marketing purposes without your consent.
        </p>
        <p>
          California residents under 18 who have an account or have posted content publicly
          may request removal of that content. To make a request, contact us at{" "}
          <a href="mailto:info@skyviewplumbingmn.com">info@skyviewplumbingmn.com</a> and
          include a statement that you reside in California.
        </p>

        <h2 id="updates">12. Do We Make Updates to This Policy?</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our
          practices, legal requirements, or the services we offer. The updated version will
          be indicated by an updated &ldquo;Last Updated&rdquo; date at the top of this page.
          We encourage you to review this policy periodically. Material changes will be
          communicated via a prominent notice on our website or by direct notification.
        </p>

        <h2 id="contact">13. How Can You Contact Us About This Policy?</h2>
        <p>
          If you have questions, concerns, or requests related to this Privacy Policy, please
          contact us:
        </p>
        <ul>
          <li>
            <strong>Skyview Plumbing</strong>
          </li>
          <li>Phone: <a href="tel:+17633709944">(763) 370-9944</a></li>
          <li>
            Email:{" "}
            <a href="mailto:info@skyviewplumbingmn.com">info@skyviewplumbingmn.com</a>
          </li>
          <li>
            Website:{" "}
            <a href="https://skyviewplumbingmn.com">skyviewplumbingmn.com</a>
          </li>
          <li>Service Area: Twin Cities Metropolitan Area, Minnesota</li>
        </ul>

        <p className="legal-notice">
          This Privacy Policy is a practical template for a plumbing service business
          operating in Minnesota and the United States. For formal legal compliance review
          specific to your data practices, consult a licensed privacy attorney.
        </p>

        <footer className="legal-footer">
          &copy; {YEAR} Skyview Plumbing. All rights reserved. &mdash;{" "}
          <a href="/terms">Terms &amp; Conditions</a>
        </footer>
      </article>
    </main>
  );
}
