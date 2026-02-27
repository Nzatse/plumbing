(function () {
  if (window.__skyviewNativeChatLoaded) return;
  window.__skyviewNativeChatLoaded = true;

  var config = Object.assign(
    {
      endpoint: "/api/chat-submit",
      termsHref: "/terms.html",
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
    phone: "Phone is required",
    message: "Short message about your needs is required",
    terms: "Please accept the terms and conditions"
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
      '<label class="sv-chat-label">Phone *</label>' +
      '<input class="sv-chat-input" data-field="phone" name="phone" inputmode="tel" placeholder="(808) 555-1234" autocomplete="tel" />' +
      '<p class="sv-chat-error" data-error-for="phone"></p>' +
      "</div>" +
      '<div class="sv-chat-field">' +
      '<label class="sv-chat-label">Short message about your needs *</label>' +
      '<textarea class="sv-chat-textarea" data-field="message" name="message" placeholder="**Your message goes straight to my phone, I\'ll get back to you as soon as I\'m available**"></textarea>' +
      '<p class="sv-chat-error" data-error-for="message"></p>' +
      "</div>" +
      '<div class="sv-chat-field">' +
      '<div class="sv-chat-consent">' +
      '<input type="checkbox" data-field="terms" name="terms" />' +
      '<label>I agree to <a class="sv-chat-terms-link" target="_blank" rel="noopener noreferrer">terms &amp; conditions</a> provided by the company. By providing my phone number, I agree to receive text messages from the business.</label>' +
      "</div>" +
      '<p class="sv-chat-error" data-error-for="terms"></p>' +
      "</div>" +
      '<p class="sv-chat-success" aria-live="polite">Thanks, your message has been sent.</p>' +
      '<div class="sv-chat-actions">' +
      '<button class="sv-chat-submit" type="submit">Send</button>' +
      '<button class="sv-chat-call" type="button">Call Instead</button>' +
      "</div>" +
      "</form>";

    panel.querySelector(".sv-chat-title").textContent = config.title;
    panel.querySelector(".sv-chat-terms-link").href = config.termsHref;
    return panel;
  }

  function isPhoneValid(value) {
    return value.replace(/\D/g, "").length >= 10;
  }

  async function submitPayload(payload) {
    if (!config.endpoint) return { ok: true, mode: "local" };

    var response = await fetch(config.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) throw new Error("Request failed");
    return { ok: true, mode: "remote" };
  }

  function bindPanel(panel) {
    var form = panel.querySelector(".sv-chat-form");
    var success = panel.querySelector(".sv-chat-success");
    var fields = {
      name: form.querySelector('[data-field="name"]'),
      phone: form.querySelector('[data-field="phone"]'),
      message: form.querySelector('[data-field="message"]'),
      terms: form.querySelector('[data-field="terms"]')
    };

    function setError(key, message) {
      var el = form.querySelector('[data-error-for="' + key + '"]');
      if (el) el.textContent = message || "";
    }

    function clearErrors() {
      Object.keys(ERROR_COPY).forEach(function (key) {
        setError(key, "");
      });
    }

    function validate() {
      clearErrors();
      var valid = true;

      if (!fields.name.value.trim()) {
        setError("name", ERROR_COPY.name);
        valid = false;
      }

      if (!fields.phone.value.trim() || !isPhoneValid(fields.phone.value)) {
        setError("phone", ERROR_COPY.phone);
        valid = false;
      }

      if (!fields.message.value.trim()) {
        setError("message", ERROR_COPY.message);
        valid = false;
      }

      if (!fields.terms.checked) {
        setError("terms", ERROR_COPY.terms);
        valid = false;
      }

      return valid;
    }

    fields.phone.addEventListener("input", function () {
      var digits = fields.phone.value.replace(/\D/g, "").slice(0, 10);
      var formatted = digits;
      if (digits.length > 6) formatted = "(" + digits.slice(0, 3) + ") " + digits.slice(3, 6) + "-" + digits.slice(6);
      else if (digits.length > 3) formatted = "(" + digits.slice(0, 3) + ") " + digits.slice(3);
      else if (digits.length > 0) formatted = "(" + digits;
      fields.phone.value = formatted;
    });

    form.querySelector(".sv-chat-call").addEventListener("click", function () {
      window.location.href = config.callHref;
    });

    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      success.setAttribute("data-open", "false");
      if (!validate()) return;

      var submitButton = form.querySelector(".sv-chat-submit");
      submitButton.disabled = true;

      try {
        var payload = {
          name: fields.name.value.trim(),
          phone: fields.phone.value.trim(),
          message: fields.message.value.trim(),
          termsAccepted: fields.terms.checked,
          page: window.location.href,
          submittedAt: new Date().toISOString()
        };

        await submitPayload(payload);
        window.dispatchEvent(new CustomEvent("skyview-chat-submit", { detail: payload }));
        form.reset();
        clearErrors();
        success.setAttribute("data-open", "true");
      } catch (error) {
        setError("message", "Unable to send right now. Please call us directly.");
      } finally {
        submitButton.disabled = false;
      }
    });

    return fields;
  }

  var launcher = document.createElement("button");
  launcher.type = "button";
  launcher.className = "sv-chat-launcher";
  launcher.textContent = config.launcherText;
  launcher.setAttribute("aria-haspopup", "dialog");

  var backdrop = document.createElement("div");
  backdrop.className = "sv-chat-backdrop";
  backdrop.setAttribute("data-open", "false");
  var modalPanel = createPanel(false);
  backdrop.appendChild(modalPanel);
  document.body.appendChild(backdrop);

  if (config.showLauncher) document.body.appendChild(launcher);

  var lastFocused = null;
  var modalFields = bindPanel(modalPanel);

  function setOpen(open) {
    backdrop.setAttribute("data-open", open ? "true" : "false");
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      lastFocused = document.activeElement;
      modalFields.name.focus();
    } else if (lastFocused && lastFocused.focus) {
      lastFocused.focus();
    }
  }

  modalPanel.querySelector(".sv-chat-close").addEventListener("click", function () {
    setOpen(false);
  });

  backdrop.addEventListener("click", function (event) {
    if (event.target === backdrop) setOpen(false);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && backdrop.getAttribute("data-open") === "true") setOpen(false);
  });

  if (config.showLauncher) {
    launcher.addEventListener("click", function () {
      setOpen(true);
    });
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
  var attempts = 0;
  var inlineTimer = setInterval(function () {
    attempts += 1;
    if (tryInlineMount() || attempts > 12) clearInterval(inlineTimer);
  }, 400);

  window.SkyviewNativeChat = {
    open: function () {
      setOpen(true);
    },
    close: function () {
      setOpen(false);
    },
    mountInline: mountInline
  };
})();
