// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ...types omitted for brevity (unchanged)...

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "Launch",
    badgeOuter: "Relatix is ready",
    titleBefore: "",
    titleHighlight: "Centralize Your Customer Relationships",
    titleAfter: "",
    subtitle:
      "Relatix is the streamlined CRM dashboard for teams to organize contacts, manage deals, and boost collaboration—all in one place.",
    primaryCta: { label: "Get Started", href: "/dashboard" },
    secondaryCta: { label: "Explore features", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "Relatix dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Built with trusted tools",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why Relatix",
    heading: "A CRM that works for your team",
    description:
      "Built for teams who want fast, organized management of contacts and deals—without the clutter.",
    items: [
      {
        icon: "Blocks",
        title: "All-in-One Workspace",
        description: "One place for your team to centralize customer information, notes, and deals.",
      },
      {
        icon: "Users",
        title: "Collaborative",
        description: "Easily collaborate, comment, and keep everyone up to date in real time.",
      },
      {
        icon: "HandCoins",
        title: "Deal Tracking",
        description: "Visualize and manage your pipeline as deals progress—never lose track of an opportunity.",
      },
      {
        icon: "BatteryFull",
        title: "Boost Productivity",
        description: "Automate busywork, surface insights, and keep work flowing.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Features",
    heading: "Why Relatix?",
    subtitle:
      "Centralize, track, and win more with CRM that works for your team.",
    items: [
      {
        icon: "Users",
        title: "All Your Contacts",
        description: "Effortlessly store and update every customer and lead your team engages with.",
      },
      {
        icon: "HandCoins",
        title: "Track Deals",
        description: "Visualize, organize, and drive your sales pipeline forward with deal tracking.",
      },
      {
        icon: "MessageCircle",
        title: "Team Collaboration",
        description: "Keep everyone on the same page with real-time updates and shared notes.",
      },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "Services",
    heading: "Core CRM capabilities",
    subtitle:
      "Relatix is a pragmatic dashboard for teams that need modern CRM essentials, not bloat.",
    items: [
      {
        title: "Contact Management",
        description:
          "Easily add, update, and organize your entire customer base.",
        pro: false,
      },
      {
        title: "Deal Pipelines",
        description: "Track opportunities and progress deals with clarity.",
        pro: false,
      },
      {
        title: "Activity Timeline",
        description: "Log notes, calls, and interactions for full context.",
        pro: false,
      },
      {
        title: "Team Roles & Permissions",
        description:
          "Secure, role-based access for admin, manager, and reps.",
        pro: true,
      },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Testimonials",
    heading: "Teams powered by Relatix",
    reviews: [
      { image: "/demo-img.jpg", name: "Aarav Shah", role: "Sales Lead, FinEdge", comment: "Relatix made it easy to manage our leads and collaborate. Exactly what our team needed.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Maya Patel", role: "Business Ops, ReachFlow", comment: "Simplicity meets power—super fast onboarding and zero clutter!", rating: 4.9 },
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Team",
    heading: "Meet the Relatix team",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Founder", "Product Lead"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
          { name: "Github", url: "https://github.com/leoMirandaa" },
          { name: "X", url: "https://x.com/leo_mirand4" },
        ],
      },
      // Additional members omitted for brevity, adjust as needed
    ],
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Simple pricing",
    subtitle: "Relatix is free for early adopters, and always fair value as you grow.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Free",
        popular: true,
        price: 0,
        description: "Ideal for starting teams—unlimited contacts, deals, and users.",
        buttonText: "Start free",
        benefits: [
          "Unlimited contacts",
          "Unlimited deals",
          "Team collaboration",
          "Essential dashboards",
          "Email support"
        ],
      },
      {
        title: "Team",
        popular: false,
        price: 29,
        description: "Upgrade for advanced reporting and controls.",
        buttonText: "Upgrade",
        benefits: [
          "Advanced reporting",
          "Role permissions",
          "Custom fields",
          "Export capability",
          "Priority support",
        ],
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Talk to Relatix",
    description:
      "Need help getting started or have feedback? We’d love to hear from you.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Find us", value: "Remote-first • Gujarat, India" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email us", value: "chirag@bidx.ai" },
      hours: { label: "Hours", value: ["Monday - Friday", "10AM - 7PM IST"] },
    },
    formSubjects: ["Demo Request", "Technical Support", "General Inquiry", "Partnerships"],
    formSubmitLabel: "Send message",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "Common Questions",
    items: [
      { question: "Is Relatix free for teams?", answer: "Yes. You can start with unlimited contacts and try essential features at no cost." },
      { question: "What makes Relatix different?", answer: "We focus on speed, clarity, and an uncluttered experience—so your team can focus on winning deals, not fighting CRM UI." },
      { question: "Can I manage deals and contacts together?", answer: "Absolutely! Relatix keeps all your contacts and deals in sync." },
      { question: "Is my team’s data secure?", answer: "Yes. We use modern cloud security and you control roles and access." },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "Relatix",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "chirag@bidx.ai", href: "mailto:chirag@bidx.ai" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com" },
          { label: "X", href: "https://x.com" },
        ],
      },
    ],
    copyright: `Relatix © ${new Date().getFullYear()}. The Internal CRM for Teams.`,
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "Relatix",
    routes: [
      { href: "/#features", label: "Features" },
      { href: "/#team", label: "Team" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "Relatix preview" },
    features: [
      { title: "All Your Contacts", description: "Effortlessly store, update, and manage every customer and lead." },
      { title: "Deal Tracking", description: "Stay on top of every opportunity and pipeline stage." },
      { title: "Team Collaboration", description: "Share notes and updates instantly with your team." },
    ],
    signInLabel: "Sign in",
    signUpLabel: "Sign up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com", ariaLabel: "View on GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;

export function getHomeContent(): HomeContent {
  return homeContent;
}