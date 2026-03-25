// function sendJson(res, status, payload) {
//   res.statusCode = status;
//   res.setHeader("Content-Type", "application/json; charset=utf-8");
//   res.setHeader("Cache-Control", "no-store");
//   res.end(JSON.stringify(payload));
// }

// function readBody(req) {
//   return new Promise((resolve, reject) => {
//     let raw = "";
//     req.on("data", (chunk) => {
//       raw += chunk;
//       if (raw.length > 1_000_000) {
//         reject(new Error("Payload too large"));
//       }
//     });
//     req.on("end", () => resolve(raw));
//     req.on("error", reject);
//   });
// }

// function normalizePhone(value) {
//   return String(value || "").replace(/[^\d+]/g, "").trim();
// }

// module.exports = async function handler(req, res) {
//   if (req.method === "OPTIONS") {
//     res.statusCode = 204;
//     res.end();
//     return;
//   }

//   if (req.method !== "POST") {
//     sendJson(res, 405, { ok: false, error: "Method not allowed" });
//     return;
//   }

//   const accountSid = process.env.TWILIO_ACCOUNT_SID;
//   const authToken = process.env.TWILIO_AUTH_TOKEN;
//   const twilioFrom = process.env.TWILIO_FROM_NUMBER;
//   const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;
//   const toNumber = process.env.ALERT_TO_PHONE || process.env.TWILIO_TO_NUMBER;

//   if (!accountSid || !authToken || !toNumber || (!twilioFrom && !messagingServiceSid)) {
//     sendJson(res, 500, {
//       ok: false,
//       error: "Twilio server config missing",
//       required: [
//         "TWILIO_ACCOUNT_SID",
//         "TWILIO_AUTH_TOKEN",
//         "TWILIO_FROM_NUMBER or TWILIO_MESSAGING_SERVICE_SID",
//         "ALERT_TO_PHONE or TWILIO_TO_NUMBER"
//       ]
//     });
//     return;
//   }

//   try {
//     const raw = await readBody(req);
//     const body = raw ? JSON.parse(raw) : {};

//     const name = String(body.name || "").trim();
//     const phone = String(body.phone || "").trim();
//     const message = String(body.message || "").trim();
//     const page = String(body.page || "").trim();

//     if (!name || !phone || !message) {
//       sendJson(res, 400, { ok: false, error: "Missing required fields" });
//       return;
//     }

//     const smsText = [
//       "New quote request:",
//       `Name: ${name}`,
//       `Phone: ${phone}`,
//       `Message: ${message}`,
//       page ? `Page: ${page}` : ""
//     ]
//       .filter(Boolean)
//       .join("\n");

//     const form = new URLSearchParams();
//     form.set("To", normalizePhone(toNumber));
//     form.set("Body", smsText);
//     if (messagingServiceSid) {
//       form.set("MessagingServiceSid", messagingServiceSid);
//     } else {
//       form.set("From", normalizePhone(twilioFrom));
//     }

//     const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
//       method: "POST",
//       headers: {
//         Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString("base64")}`,
//         "Content-Type": "application/x-www-form-urlencoded"
//       },
//       body: form.toString()
//     });

//     const result = await response.json().catch(() => ({}));
//     if (!response.ok) {
//       sendJson(res, 502, { ok: false, error: "Twilio send failed", details: result });
//       return;
//     }

//     sendJson(res, 200, { ok: true, sid: result.sid || null });
//   } catch (error) {
//     sendJson(res, 500, { ok: false, error: "Server error" });
//   }
// };



function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(payload));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 1_000_000) reject(new Error("Payload too large"));
    });
    req.on("end", () => resolve(raw));
    req.on("error", reject);
  });
}

function normalizePhone(value) {
  return String(value || "").replace(/[^\d+]/g, "").trim();
}

module.exports = async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== "POST") {
    sendJson(res, 405, { ok: false, error: "Method not allowed" });
    return;
  }

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioFrom = process.env.TWILIO_FROM_NUMBER;
  const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;
  const toNumber = process.env.ALERT_TO_PHONE || process.env.TWILIO_TO_NUMBER;

  if (!accountSid || !authToken || !toNumber || (!twilioFrom && !messagingServiceSid)) {
    sendJson(res, 500, {
      ok: false,
      error: "Twilio server config missing",
      required: [
        "TWILIO_ACCOUNT_SID",
        "TWILIO_AUTH_TOKEN",
        "TWILIO_FROM_NUMBER or TWILIO_MESSAGING_SERVICE_SID",
        "ALERT_TO_PHONE or TWILIO_TO_NUMBER"
      ]
    });
    return;
  }

  try {
    const raw = await readBody(req);
    const body = raw ? JSON.parse(raw) : {};

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const message = String(body.message || "").trim();
    const page = String(body.page || "").trim();
    const marketing = Boolean(body.marketingConsent);
    const nonMarketing = Boolean(body.nonMarketingConsent);
    const legal = Boolean(body.termsAccepted);

    if (!name || !email || !message || !legal) {
      sendJson(res, 400, { ok: false, error: "Missing required fields" });
      return;
    }

    const smsText = [
      "New quote request:",
      `Name: ${name}`,
      email ? `Email: ${email}` : "",
      phone ? `Phone: ${phone}` : "",
      `Message: ${message}`,
      `Marketing Consent: ${marketing ? "Yes" : "No"}`,
      `Non-Marketing Consent: ${nonMarketing ? "Yes" : "No"}`,
      page ? `Page: ${page}` : ""
    ]
      .filter(Boolean)
      .join("\n");

    const form = new URLSearchParams();
    form.set("To", normalizePhone(toNumber));
    form.set("Body", smsText);
    if (messagingServiceSid) {
      form.set("MessagingServiceSid", messagingServiceSid);
    } else {
      if (!phone) sendJson(res, 400, { ok: false, error: "No From number available" });
      form.set("From", normalizePhone(twilioFrom));
    }

    const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: form.toString()
    });

    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      sendJson(res, 502, { ok: false, error: "Twilio send failed", details: result });
      return;
    }

    sendJson(res, 200, { ok: true, sid: result.sid || null });
  } catch (error) {
    console.error(error);
    sendJson(res, 500, { ok: false, error: "Server error" });
  }
};