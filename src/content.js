export const caseStudies = [
  {
    id: "job-agent",
    tag: "Flagship project",
    name: "AI Job Agent",
    url: "https://job-agent-production-76b5.up.railway.app",
    urlLabel: "job-agent-production-76b5.up.railway.app",
    summary:
      "I built an AI-powered assistant that automates the job search. It finds matching roles, vets each one, writes a tailored resume and cover letter, and hands back a direct link to apply. The AI does the judgment work, but code makes the final call: hard scoring caps, company website checks, per-user spending limits, and a person approving each step before anything moves forward. I built it solo, end to end, and it's live on Railway.",
    stack: "Node.js, Express, Prisma, PostgreSQL, React, Clerk, Stripe, Claude API",
    screenshot: "/jobagentscreenshot.png",
    screenshotAlt: "AI Job Agent's Applications view, showing tailored applications ready to apply to at companies like UnitedHealth Group, Toyota, and Capital One",
  },
  {
    id: "sonobe",
    tag: "Client project",
    name: "Sonobe",
    url: "https://sonobedi.com",
    urlLabel: "sonobedi.com",
    summary:
      "Sonobe is a custom furniture studio working across Ciudad Juárez and El Paso. I scoped, designed, and shipped their marketing site as the only engineer on it. It runs in English and Spanish, since their clients are on both sides of the border.",
    stack: "AI-assisted development",
    screenshot: "/sonobedi.png",
    screenshotAlt: "Sonobe homepage hero: \"furniture drawn before it's built\" next to a photo of founding partner Juan",
  },
  {
    id: "holey-donuts",
    tag: "Client project",
    name: "Holey Donuts",
    url: "https://holeydonutsdenton.com",
    urlLabel: "holeydonutsdenton.com",
    summary:
      "Holey Donuts is a donut shop in Denton, Texas. I built their marketing and ordering site, handling design through deployment myself, including a Korean translation of the whole site.",
    stack: "AI-assisted development",
    screenshot: "/holeydonutsscreenshot.png",
    screenshotAlt: "Holey Donuts homepage hero: \"Everyday Sweetness\" with ordering and menu buttons",
  },
];
