# Twilio Env Vars (Vercel)

Set these in Vercel Project Settings -> Environment Variables:

- `TWILIO_ACCOUNT_SID` = your Twilio Account SID
- `TWILIO_AUTH_TOKEN` = your Twilio Auth Token
- `ALERT_TO_PHONE` = your personal phone in E.164 format (example: `+17633709944`)

Choose one sending method:

1. Twilio Number
- `TWILIO_FROM_NUMBER` = your Twilio number in E.164 format

2. Messaging Service (recommended)
- `TWILIO_MESSAGING_SERVICE_SID` = your Messaging Service SID

Notes:
- Keep values server-side only. Do not expose in frontend JS.
- Endpoint used by native form: `/api/chat-submit`.
