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
import Twilio from "twilio";

// Normalize phone to E.164 (+923001234567)
// Works for Pakistan and international numbers


export async function OPTIONS() {
  return new NextResponse(null, { status: 204 });
}

export async function POST(req: NextRequest) {
  console.log("[POST] Incoming request");

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioFrom = process.env.TWILIO_FROM_NUMBER;

  if (!accountSid || !authToken || !twilioFrom) {
    return NextResponse.json({ ok: false, error: "Twilio config missing" }, { status: 500 });
  }

  let body: any = {};

  try {
    body = await req.json();
    console.log("Received body:", body);
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const rawPhone = String(body.phone ?? "").trim();
  const message = String(body.message ?? "").trim();
  const legalAccepted = Boolean(body.termsAccepted);

  if (!name || !email || !message || !legalAccepted) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const toNumber = rawPhone.startsWith("+") ? rawPhone : "+" + rawPhone;

  if (!toNumber) {
    console.log("⚠️ No valid phone → skipping SMS", toNumber);
    return NextResponse.json({ ok: true, skipped: true });
  }

  try {
    const client = Twilio(accountSid, authToken);

    const twilioMessage = await client.messages.create({
      to: toNumber,      
      from: twilioFrom,
      body: "Testsbsjskjcbask"
    });

    console.log("✅ SMS sent:", twilioMessage.sid);
    return NextResponse.json({ ok: true, sid: twilioMessage.sid });
  } catch (err: any) {
    console.error("❌ Twilio error:", err);
    return NextResponse.json({ ok: false, error: err.message || "Twilio failed" }, { status: 502 });
  }
}