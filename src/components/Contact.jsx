import { useState } from "react";

const EMAIL = "IrvingRivera88@gmail.com";
const PHONE_DISPLAY = "915-497-3434";
const PHONE_HREF = "9154973434";
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

// Sends straight from the browser via Web3Forms (free tier, no backend of
// our own needed) — see PLACEHOLDERS.md for how to get an access key.
export default function Contact() {
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");
  const [botcheck, setBotcheck] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      return;
    }

    // Honeypot: real visitors never see or fill this field, so a checked
    // box means a bot filled every input blindly. Fake success and skip
    // the API call entirely rather than spending Web3Forms quota on it.
    if (botcheck) {
      setStatus("sent");
      setName("");
      setFromEmail("");
      setMessage("");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio contact from ${name}`,
          name,
          email: fromEmail,
          message,
          botcheck,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setStatus("sent");
        setName("");
        setFromEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <h2 className="font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
        Contact
      </h2>
      <div className="mt-8 grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-ink-soft">
            The fastest way to reach me is directly.
          </p>
          <div className="mt-6 space-y-3">
            <a
              href={`mailto:${EMAIL}`}
              className="block font-mono text-sm text-ink underline decoration-line decoration-2 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {EMAIL}
            </a>
            <a
              href={`tel:+1${PHONE_HREF}`}
              className="block font-mono text-sm text-ink underline decoration-line decoration-2 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="checkbox"
            name="botcheck"
            checked={botcheck}
            onChange={(event) => setBotcheck(event.target.checked)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ display: "none" }}
          />
          <div>
            <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-ink-soft">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-2 w-full border border-line bg-paper px-3 py-2 text-ink outline-none focus:border-accent"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-ink-soft">
              Your email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={fromEmail}
              onChange={(event) => setFromEmail(event.target.value)}
              className="mt-2 w-full border border-line bg-paper px-3 py-2 text-ink outline-none focus:border-accent"
            />
          </div>
          <div>
            <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-ink-soft">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="mt-2 w-full border border-line bg-paper px-3 py-2 text-ink outline-none focus:border-accent"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-ink px-5 py-3 font-mono text-xs uppercase tracking-wider text-paper transition-colors hover:bg-accent disabled:opacity-50"
          >
            {status === "sending" ? "Sending…" : "Send"}
          </button>
          {status === "sent" && (
            <p className="font-mono text-xs text-accent">Message sent. I'll get back to you.</p>
          )}
          {status === "error" && (
            <p className="font-mono text-xs text-rust">
              Something went wrong — email me directly at {EMAIL} instead.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
