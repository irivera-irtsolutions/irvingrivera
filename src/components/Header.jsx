const links = [
  { href: "#enterprise", label: "Enterprise" },
  { href: "#work", label: "Work" },
  { href: "#how-i-work", label: "How I Work" },
  { href: "#background", label: "Background" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-medium tracking-tight text-ink">
          Irving Rivera
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-wider text-ink-soft transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="/resume.pdf"
          download="Irving Rivera Resume.pdf"
          className="font-mono text-xs uppercase tracking-wider text-ink underline decoration-line decoration-2 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
