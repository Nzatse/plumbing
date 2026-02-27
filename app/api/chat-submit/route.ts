import { NextRequest, NextResponse } from "next/server";

function normalizePhone(value: unknown): string {
  return String(value ?? "")
    .replace(/[^\d+]/g, "")
    .trim();
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204 });
}

export async function POST(req: NextRequest) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioFrom = process.env.TWILIO_FROM_NUMBER;
  const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;
  const toNumber = process.env.ALERT_TO_PHONE ?? process.env.TWILIO_TO_NUMBER;

  if (!accountSid || !authToken || !toNumber || (!twilioFrom && !messagingServiceSid)) {
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
      { status: 500 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    body = {};
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const message = String(body.message ?? "").trim();
  const page = String(body.page ?? "").trim();

  if (!name || !phone || !message) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const smsText = [
    "New quote request:",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Message: ${message}`,
    page ? `Page: ${page}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const form = new URLSearchParams();
  form.set("To", normalizePhone(toNumber));
  form.set("Body", smsText);
  if (messagingServiceSid) {
    form.set("MessagingServiceSid", messagingServiceSid);
  } else {
    form.set("From", normalizePhone(twilioFrom));
  }

  try {
    const response = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: form.toString(),
      },
    );

    const result: Record<string, unknown> = await response.json().catch(() => ({}));
    if (!response.ok) {
      return NextResponse.json({ ok: false, error: "Twilio send failed", details: result }, { status: 502 });
    }

    return NextResponse.json({ ok: true, sid: result.sid ?? null });
  } catch {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
