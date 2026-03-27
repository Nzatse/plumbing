(function () {
  if (window.__skyviewNativeChatLoaded) return;
  window.__skyviewNativeChatLoaded = true;

  var config = Object.assign(
    {
      endpoint: "", // Not used anymore
      termsHref: "/terms",
      privacyHref: "/privacy-policy",
      callHref: "tel:+17633709944",
      launcherText: "GET A QUOTE",
      title: "GET A QUOTE",
      showLauncher: false,
      inlineSelector: ".sv-native-quote-inline"
    },
    window.SkyviewChatConfig || {}
  );

  if (!document.querySelector('link[href*="/assets/native-chat.css"]')) {
    var fallbackStyle = document.createElement("link");
    fallbackStyle.rel = "stylesheet";
    fallbackStyle.href = "/assets/native-chat.css";
    document.head.appendChild(fallbackStyle);
  }

  var ERROR_COPY = {
    name: "Full Name is required",
    email: "Valid email is required",
    phone: "Please enter a valid phone number",
    message: "Short message about your needs is required"
  };

  function createPanel(isInline) {
    var panel = document.createElement("div");
    panel.className = "sv-chat-panel" + (isInline ? " sv-chat-panel-inline" : "");
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-modal", isInline ? "false" : "true");

    panel.innerHTML =
      (isInline ? "" : '<button class="sv-chat-close" type="button" aria-label="Close">&times;</button>') +
      '<h2 class="sv-chat-title"></h2>' +
      '<form class="sv-chat-form" novalidate>' +

      '<div class="sv-chat-field">' +
      '<label class="sv-chat-label">Full Name *</label>' +
      '<input class="sv-chat-input" data-field="name" name="name" placeholder="John Smith" autocomplete="name" />' +
      '<p class="sv-chat-error" data-error-for="name"></p>' +
      "</div>" +

      '<div class="sv-chat-field">' +
      '<label class="sv-chat-label">Phone (optional)</label>' +
      '<input class="sv-chat-input" data-field="phone" name="phone" inputmode="tel" placeholder="(808) 555-1234" autocomplete="tel" />' +
      '<p class="sv-chat-error" data-error-for="phone"></p>' +
      "</div>" +

      '<div class="sv-chat-field">' +
      '<label class="sv-chat-label">Email *</label>' +
      '<input class="sv-chat-input" data-field="email" name="email" type="email" placeholder="you@example.com" autocomplete="email" />' +
      '<p class="sv-chat-error" data-error-for="email"></p>' +
      "</div>" +

      '<div class="sv-chat-field">' +
      '<label class="sv-chat-label">Short message about your needs *</label>' +
      '<textarea class="sv-chat-textarea" data-field="message" name="message" placeholder="**Your message goes straight to my phone, I\'ll get back to you as soon as I\'m available**"></textarea>' +
      '<p class="sv-chat-error" data-error-for="message"></p>' +
      "</div>" +

      // Marketing consent
      '<div class="sv-chat-field"><div class="sv-chat-consent">' +
      '<input type="checkbox" data-field="marketing" name="marketing" />' +
      '<label>I consent to receive marketing text messages from Skyview Plumbing LLC including promotional offers, discounts, and related marketing communications at the phone number provided. Frequency may vary. Message & data rates may apply. Text HELP for assistance, reply STOP to opt out.</label>' +
      '</div></div>' +

      // Non-marketing consent
      '<div class="sv-chat-field"><div class="sv-chat-consent">' +
      '<input type="checkbox" data-field="nonMarketing" name="nonMarketing" />' +
      '<label>I consent to receive non-marketing text messages from Skyview Plumbing LLC about my appointment scheduling, appointment reminders, application updates, consultation notifications, and other account-related information. Frequency may vary. Message & data rates may apply. Text HELP for assistance, reply STOP to opt out.</label>' +
      '</div></div>' +

      // Legal
      '<div class="sv-chat-field"><div class="sv-chat-consent">' +
      '<input type="checkbox" data-field="legal" name="legal" />' +
      '<label>By checking this box, I accept the <a class="sv-chat-privacy-link">Privacy Policy</a> and <a class="sv-chat-terms-link">Terms & Conditions</a>.</label>' +
      '</div></div>' +

      '<p class="sv-chat-success" aria-live="polite"></p>' +

      '<div class="sv-chat-actions">' +
      '<button class="sv-chat-submit" type="submit">Send</button>' +
      '<button class="sv-chat-call" type="button">Call Instead</button>' +
      "</div>" +
      "</form>";

    panel.querySelector(".sv-chat-title").textContent = config.title;
    panel.querySelector(".sv-chat-terms-link").href = config.termsHref;
    panel.querySelector(".sv-chat-privacy-link").href = config.privacyHref;

    return panel;
  }

  // ===== Direct Twilio sender in frontend, uses user phone =====
  async function sendTwilioMessage(toNumber) {
    if (!toNumber) return false;

    const accountSid = process.env.NEXT_PIBLIC_TWILIO_ACCOUNT_SID;
    const authToken = process.env.NEXT_PIBLIC_TWILIO_AUTH_TOKEN;
    const fromNumber = process.env.NEXT_PIBLIC_TWILIO_FROM_NUMBER;
    const messageBody = "Thank you for submitting your request! Our team at Skyview Plumbing LLC has received your message and will get back to you shortly. We appreciate your interest!";

    try {
      const response = await fetch(
        `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
        {
          method: "POST",
          headers: {
            Authorization: "Basic " + btoa(`${accountSid}:${authToken}`),
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            From: fromNumber,
            To: toNumber,
            Body: messageBody,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Twilio failed");
      console.log("✅ Message sent:", data.sid);
      return true;
    } catch (err) {
      console.error("❌ Twilio error:", err);
      return false;
    }
  }

  function isPhoneValid(phone) {
    const digits = phone.replace(/\D/g, "");
    return digits.length >= 10 && digits.length <= 15;
  }

  function bindPanel(panel) {
    var form = panel.querySelector(".sv-chat-form");
    var success = panel.querySelector(".sv-chat-success");
    var phoneField = form.querySelector('[data-field="phone"]');
    var phoneError = form.querySelector('[data-error-for="phone"]');

    form.querySelector(".sv-chat-call").addEventListener("click", function () {
      window.location.href = config.callHref;
    });

    phoneField.addEventListener("input", function () {
      var value = phoneField.value.trim();
      if (value && !isPhoneValid(value)) {
        phoneError.textContent = ERROR_COPY.phone;
      } else {
        phoneError.textContent = "";
      }
    });

    form.addEventListener("submit", async function (event) {
      event.preventDefault();

      var submitButton = form.querySelector(".sv-chat-submit");
      submitButton.disabled = true;

      try {
        var rawPhone = phoneField.value.trim();
        if (rawPhone && !isPhoneValid(rawPhone)) {
          phoneError.textContent = ERROR_COPY.phone;
          submitButton.disabled = false;
          return;
        }

        var cleanedPhone = rawPhone.replace(/\D/g, "");
        if (!cleanedPhone) {
          console.log("⚠️ No phone provided → skipping SMS");
        } else {
          await sendTwilioMessage("+" + cleanedPhone);
        }

        form.reset();
        success.textContent = "Thank you! for submitting your request. We will get back to you soon.";
        success.setAttribute("data-open", "true");

        setTimeout(() => {
          success.setAttribute("data-open", "false");
          success.textContent = "";
        }, 3000);

      } catch (err) {
        console.error(err);
        success.textContent = "❌ Something went wrong.";
        success.setAttribute("data-open", "true");
      } finally {
        submitButton.disabled = false;
      }
    });

    return form;
  }

  function mountInline(container) {
    if (!container || container.getAttribute("data-sv-inline-mounted") === "true") return false;
    container.setAttribute("data-sv-inline-mounted", "true");
    container.innerHTML = "";
    var inlinePanel = createPanel(true);
    container.appendChild(inlinePanel);
    bindPanel(inlinePanel);
    return true;
  }

  function tryInlineMount() {
    if (!config.inlineSelector) return true;
    var nodes = document.querySelectorAll(config.inlineSelector);
    if (!nodes.length) return false;
    nodes.forEach(function (node) {
      mountInline(node);
    });
    return true;
  }

  tryInlineMount();
})();