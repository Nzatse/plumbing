// import { NextRequest, NextResponse } from "next/server";

// function normalizePhone(value: unknown): string {
//   return String(value ?? "")
//     .replace(/[^\d+]/g, "")
//     .trim();
// }

// export async function OPTIONS() {
//   return new NextResponse(null, { status: 204 });
// }

// export async function POST(req: NextRequest) {
//   const accountSid = process.env.TWILIO_ACCOUNT_SID;
//   const authToken = process.env.TWILIO_AUTH_TOKEN;
//   const twilioFrom = process.env.TWILIO_FROM_NUMBER;
//   const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;
//   const toNumber = process.env.ALERT_TO_PHONE ?? process.env.TWILIO_TO_NUMBER;

//   if (!accountSid || !authToken || !toNumber || (!twilioFrom && !messagingServiceSid)) {
//     return NextResponse.json(
//       {
//         ok: false,
//         error: "Twilio server config missing",
//         required: [
//           "TWILIO_ACCOUNT_SID",
//           "TWILIO_AUTH_TOKEN",
//           "TWILIO_FROM_NUMBER or TWILIO_MESSAGING_SERVICE_SID",
//           "ALERT_TO_PHONE or TWILIO_TO_NUMBER",
//         ],
//       },
//       { status: 500 },
//     );
//   }

//   let body: Record<string, unknown>;
//   try {
//     body = await req.json();
//   } catch {
//     body = {};
//   }

//   const name = String(body.name ?? "").trim();
//   const phone = String(body.phone ?? "").trim();
//   const message = String(body.message ?? "").trim();
//   const page = String(body.page ?? "").trim();

//   if (!name || !phone || !message) {
//     return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
//   }

//   const smsText = [
//     "New quote request:",
//     `Name: ${name}`,
//     `Phone: ${phone}`,
//     `Message: ${message}`,
//     page ? `Page: ${page}` : "",
//   ]
//     .filter(Boolean)
//     .join("\n");

//   const form = new URLSearchParams();
//   form.set("To", normalizePhone(toNumber));
//   form.set("Body", smsText);
//   if (messagingServiceSid) {
//     form.set("MessagingServiceSid", messagingServiceSid);
//   } else {
//     form.set("From", normalizePhone(twilioFrom));
//   }

//   try {
//     const response = await fetch(
//       `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString("base64")}`,
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: form.toString(),
//       },
//     );

//     const result: Record<string, unknown> = await response.json().catch(() => ({}));
//     if (!response.ok) {
//       return NextResponse.json({ ok: false, error: "Twilio send failed", details: result }, { status: 502 });
//     }

//     return NextResponse.json({ ok: true, sid: result.sid ?? null });
//   } catch {
//     return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
//   }
// }

import { NextRequest, NextResponse } from "next/server";

function normalizePhone(value: unknown): string {
  const normalized = String(value ?? "").replace(/[^\d+]/g, "").trim();
  console.log("[normalizePhone] Input:", value, "-> Output:", normalized);
  return normalized;
}

export async function OPTIONS() {
  console.log("[OPTIONS] Preflight request received");
  return new NextResponse(null, { status: 204 });
}

export async function POST(req: NextRequest) {
  console.log("[POST] Incoming request");

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioFrom = process.env.TWILIO_FROM_NUMBER;
  const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;
  const toNumber = process.env.ALERT_TO_PHONE ?? process.env.TWILIO_TO_NUMBER;

  console.log("[Config] accountSid:", !!accountSid);
  console.log("[Config] authToken:", !!authToken);
  console.log("[Config] twilioFrom:", twilioFrom);
  console.log("[Config] messagingServiceSid:", messagingServiceSid);
  console.log("[Config] toNumber:", toNumber);

  if (!accountSid || !authToken || !toNumber || (!twilioFrom && !messagingServiceSid)) {
    console.error("[POST] Missing Twilio config");
    return NextResponse.json(
      {
        ok: false,
        error: "Twilio server config missing",
        required: [
          "TWILIO_ACCOUNT_SID",
          "TWILIO_AUTH_TOKEN",
          "TWILIO_FROM_NUMBER or TWILIO_MESSAGING_SERVICE_SID",
          "ALERT_TO_PHONE or TWILIO_TO_NUMBER",
        ],
      },
      { status: 500 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
    console.log("[POST] Parsed request body:", body);
  } catch (err) {
    console.error("[POST] Failed to parse JSON body", err);
    body = {};
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const message = String(body.message ?? "").trim();
  const page = String(body.page ?? "").trim();
  const marketingConsent = Boolean(body.marketingConsent);
  const nonMarketingConsent = Boolean(body.nonMarketingConsent);
  const legalAccepted = Boolean(body.termsAccepted);

  console.log("[Validation] name:", name);
  console.log("[Validation] email:", email);
  console.log("[Validation] phone:", phone);
  console.log("[Validation] message:", message);
  console.log("[Validation] page:", page);
  console.log("[Validation] marketingConsent:", marketingConsent);
  console.log("[Validation] nonMarketingConsent:", nonMarketingConsent);
  console.log("[Validation] legalAccepted:", legalAccepted);

  if (!name || !email || !message || !legalAccepted) {
    console.warn("[POST] Missing required fields or legal consent not accepted");
    return NextResponse.json(
      { ok: false, error: "Missing required fields or legal consent not accepted" },
      { status: 400 }
    );
  }

  const smsText = [
    "New quote request:",
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : "",
    `Message: ${message}`,
    `Marketing Consent: ${marketingConsent ? "Yes" : "No"}`,
    `Non-Marketing Consent: ${nonMarketingConsent ? "Yes" : "No"}`,
    page ? `Page: ${page}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  console.log("[SMS] Text to send:", smsText);

  const form = new URLSearchParams();
  form.set("To", normalizePhone(toNumber));
  form.set("Body", smsText);
  if (messagingServiceSid) {
    form.set("MessagingServiceSid", messagingServiceSid);
    console.log("[SMS] Using MessagingServiceSid:", messagingServiceSid);
  } else {
    if (!twilioFrom) {
      console.error("[SMS] No Twilio 'From' number configured");
      return NextResponse.json(
        { ok: false, error: "No Twilio 'From' number configured" },
        { status: 500 }
      );
    }
    form.set("From", normalizePhone(twilioFrom));
    console.log("[SMS] Using From number:", twilioFrom);
  }

  try {
    console.log("[POST] Sending SMS via Twilio API...");
    const response = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: form.toString(),
      }
    );

    const result: Record<string, unknown> = await response.json().catch(() => ({}));
    console.log("[POST] Twilio API response:", result);

    if (!response.ok) {
      console.error("[POST] Twilio send failed", result);
      return NextResponse.json(
        { ok: false, error: "Twilio send failed", details: result },
        { status: 502 }
      );
    }

    console.log("[POST] SMS sent successfully, SID:", result.sid);
    return NextResponse.json({ ok: true, sid: result.sid ?? null });
  } catch (err) {
    console.error("[POST] Server error sending SMS", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}