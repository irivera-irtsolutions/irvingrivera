import { useState } from "react";

const EMAIL = "IrvingRivera88@gmail.com";
const PHONE_DISPLAY = "915-497-3434";
const PHONE_HREF = "9154973434";

// No backend for this site, so the form just builds a mailto: link —
// it opens the visitor's own mail client with the message pre-filled.
export default function Contact() {
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || "your site"}`);
    const body = encodeURIComponent(
      `${message}\n\n—\n${name}\n${fromEmail}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
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
          <div>
            <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-ink-soft">
              Name
            </label>
            <input
              id="name"
              type="text"
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
              type="email"
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
              required
              rows={4}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="mt-2 w-full border border-line bg-paper px-3 py-2 text-ink outline-none focus:border-accent"
            />
          </div>
          <button
            type="submit"
            className="bg-ink px-5 py-3 font-mono text-xs uppercase tracking-wider text-paper transition-colors hover:bg-accent"
          >
            Send
          </button>
          <p className="font-mono text-xs text-ink-soft">
            Opens your email app with this pre-filled — nothing is sent from this page directly.
          </p>
        </form>
      </div>
    </section>
  );
}
