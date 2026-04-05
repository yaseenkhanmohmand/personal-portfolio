export type Category = "saas" | "client" | "tool" | "creative" | "all";

export interface Product {
  name: string;
  slug: string;
  url: string;
  description: string;
  category: Category;
  gradient: string;
  featured: boolean;
  tech?: string[];
}

export const categories: { label: string; value: Category }[] = [
  { label: "All Projects", value: "all" },
  { label: "SaaS Products", value: "saas" },
  { label: "Client Websites", value: "client" },
  { label: "Developer Tools", value: "tool" },
  { label: "Creative / 3D", value: "creative" },
];

export const products: Product[] = [
  // ── SaaS Products ──
  {
    name: "VibeJobs",
    slug: "vibejobs",
    url: "https://vibejobs-yaseens-projects-4e1726c3.vercel.app",
    description:
      "AI-powered job matching platform that connects candidates with roles that fit their vibe and skillset.",
    category: "saas",
    gradient: "from-violet-600 to-indigo-600",
    featured: true,
    tech: ["Next.js", "AI/ML", "Tailwind CSS"],
  },
  {
    name: "KoraStats",
    slug: "korastats",
    url: "https://korastats.vercel.app",
    description:
      "Real-time analytics and statistics dashboard for tracking key performance metrics across platforms.",
    category: "saas",
    gradient: "from-cyan-500 to-blue-600",
    featured: true,
    tech: ["Next.js", "Charts", "API"],
  },
  {
    name: "Envire",
    slug: "envire",
    url: "https://envire.vercel.app",
    description:
      "Environmental impact tracking platform helping organizations measure and reduce their carbon footprint.",
    category: "saas",
    gradient: "from-emerald-500 to-teal-600",
    featured: true,
    tech: ["Next.js", "Data Viz", "Tailwind CSS"],
  },
  {
    name: "Athleads",
    slug: "athleads",
    url: "https://athleads-mu.vercel.app",
    description:
      "Lead generation and management platform built for the athletics and sports industry.",
    category: "saas",
    gradient: "from-orange-500 to-red-600",
    featured: true,
    tech: ["Next.js", "CRM", "Tailwind CSS"],
  },
  {
    name: "Resume Builder",
    slug: "resume-builder",
    url: "https://resume-builder-omega-dun.vercel.app",
    description:
      "Intelligent resume builder with templates, AI suggestions, and one-click PDF export.",
    category: "saas",
    gradient: "from-pink-500 to-rose-600",
    featured: false,
    tech: ["Next.js", "PDF Generation", "AI"],
  },
  {
    name: "Voice Notes",
    slug: "voice-notes",
    url: "https://voice-notes-alpha.vercel.app",
    description:
      "Voice-first note-taking app with speech-to-text transcription and smart organization.",
    category: "saas",
    gradient: "from-amber-500 to-orange-600",
    featured: false,
    tech: ["Next.js", "Web Audio API", "AI"],
  },
  {
    name: "Invoice Generator",
    slug: "invoice-generator",
    url: "https://invoice-generator-six-wheat.vercel.app",
    description:
      "Professional invoice creation tool with customizable templates, tax calculations, and PDF export.",
    category: "saas",
    gradient: "from-lime-500 to-green-600",
    featured: false,
    tech: ["Next.js", "PDF", "Tailwind CSS"],
  },
  {
    name: "Meal Planner",
    slug: "meal-planner",
    url: "https://meal-planner-pi-wheat.vercel.app",
    description:
      "Smart meal planning app with recipe suggestions, grocery lists, and nutritional tracking.",
    category: "saas",
    gradient: "from-yellow-500 to-amber-600",
    featured: false,
    tech: ["Next.js", "API", "Tailwind CSS"],
  },

  // ── Client Websites ──
  {
    name: "HK Tailors",
    slug: "hk-tailors",
    url: "https://hktailors.overos.xyz",
    description:
      "Premium bespoke tailoring brand website with elegant design and online appointment booking.",
    category: "client",
    gradient: "from-stone-600 to-zinc-800",
    featured: true,
    tech: ["Next.js", "Custom Domain", "Tailwind CSS"],
  },
  {
    name: "Steward",
    slug: "steward",
    url: "https://steward.overos.xyz",
    description:
      "Property management and stewardship services platform with modern UI and client portal.",
    category: "client",
    gradient: "from-blue-600 to-indigo-800",
    featured: true,
    tech: ["Next.js", "Custom Domain", "Tailwind CSS"],
  },
  {
    name: "Dental Spa Clinic",
    slug: "dental-spa-clinic",
    url: "https://dental-spa-clinic.vercel.app",
    description:
      "Luxury dental spa clinic website with service showcase, booking system, and patient testimonials.",
    category: "client",
    gradient: "from-sky-400 to-cyan-600",
    featured: false,
    tech: ["Next.js", "Booking", "Tailwind CSS"],
  },
  {
    name: "CaliforniaAC",
    slug: "californiaac",
    url: "https://californiaac.vercel.app",
    description:
      "HVAC and air conditioning services company website for the California market.",
    category: "client",
    gradient: "from-blue-400 to-sky-600",
    featured: false,
    tech: ["Next.js", "SEO", "Tailwind CSS"],
  },
  {
    name: "Stevie's Site",
    slug: "stevies-site",
    url: "https://stevies-site.vercel.app",
    description:
      "Personal brand website with portfolio showcase and content hub.",
    category: "client",
    gradient: "from-fuchsia-500 to-purple-700",
    featured: false,
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    name: "Manhattan Laser",
    slug: "manhattan-laser-v2",
    url: "https://manhattan-laser-v2.vercel.app",
    description:
      "Premium laser treatment clinic in Manhattan with service catalog and online booking.",
    category: "client",
    gradient: "from-rose-400 to-pink-600",
    featured: false,
    tech: ["Next.js", "Booking", "Tailwind CSS"],
  },
  {
    name: "Shandey's",
    slug: "shandeys",
    url: "https://shandeys.vercel.app",
    description:
      "Brand website with bold visual identity and product showcase.",
    category: "client",
    gradient: "from-amber-600 to-yellow-700",
    featured: false,
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    name: "Paul Heikin",
    slug: "paulheikin",
    url: "https://paulheikin.vercel.app",
    description:
      "Professional personal website and portfolio for Paul Heikin.",
    category: "client",
    gradient: "from-slate-500 to-gray-700",
    featured: false,
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    name: "SG Assessments",
    slug: "sg-assessments",
    url: "https://sg-assessments.vercel.app",
    description:
      "Assessment and consulting firm website with service offerings and client onboarding.",
    category: "client",
    gradient: "from-teal-500 to-emerald-700",
    featured: false,
    tech: ["Next.js", "Tailwind CSS"],
  },

  // ── Developer Tools ──
  {
    name: "Whiteboard",
    slug: "whiteboard",
    url: "https://whiteboard-pi-lac.vercel.app",
    description:
      "Real-time collaborative whiteboard with drawing tools, shapes, and multi-user support.",
    category: "tool",
    gradient: "from-indigo-500 to-violet-700",
    featured: true,
    tech: ["Next.js", "Canvas API", "WebSocket"],
  },
  {
    name: "MDX Blog",
    slug: "mdx-blog",
    url: "https://mdx-blog-olive-one.vercel.app",
    description:
      "Full-featured blog platform built with MDX for rich, interactive content.",
    category: "tool",
    gradient: "from-gray-600 to-zinc-800",
    featured: false,
    tech: ["Next.js", "MDX", "Tailwind CSS"],
  },
  {
    name: "API Tutorial",
    slug: "api-tutorial",
    url: "https://api-tutorial-puce.vercel.app",
    description:
      "Interactive API tutorial platform with live code examples and documentation.",
    category: "tool",
    gradient: "from-green-500 to-emerald-700",
    featured: false,
    tech: ["Next.js", "API", "Docs"],
  },
  {
    name: "SaaS Auth",
    slug: "saas-auth",
    url: "https://saas-auth-zeta.vercel.app",
    description:
      "Production-ready SaaS authentication boilerplate with OAuth, email login, and role management.",
    category: "tool",
    gradient: "from-red-500 to-rose-700",
    featured: false,
    tech: ["Next.js", "Auth", "Database"],
  },
  {
    name: "Headless CMS",
    slug: "headless-cms",
    url: "https://headless-cms-jet-six.vercel.app",
    description:
      "Lightweight headless CMS with API-first architecture and content management dashboard.",
    category: "tool",
    gradient: "from-purple-500 to-indigo-700",
    featured: false,
    tech: ["Next.js", "CMS", "API"],
  },
  {
    name: "Website Designer",
    slug: "website-designer-v2",
    url: "https://website-designer-v2.vercel.app",
    description:
      "Visual website builder with drag-and-drop interface and live preview.",
    category: "tool",
    gradient: "from-pink-500 to-fuchsia-700",
    featured: true,
    tech: ["Next.js", "Drag & Drop", "Tailwind CSS"],
  },
  {
    name: "Calculator App",
    slug: "calculator-app",
    url: "https://calculator-app-red-ten-12.vercel.app",
    description:
      "Feature-rich calculator with scientific functions and clean UI.",
    category: "tool",
    gradient: "from-zinc-500 to-neutral-700",
    featured: false,
    tech: ["Next.js", "Math", "Tailwind CSS"],
  },

  // ── Creative / 3D ──
  {
    name: "Product 3D",
    slug: "product-3d",
    url: "https://product-3d-liart.vercel.app",
    description:
      "Interactive 3D product showcase with WebGL rendering and smooth animations.",
    category: "creative",
    gradient: "from-violet-500 to-purple-800",
    featured: true,
    tech: ["Next.js", "Three.js", "WebGL"],
  },
  {
    name: "Shandey's 3D",
    slug: "shandeys-3d",
    url: "https://shandeys-3d.vercel.app",
    description:
      "Immersive 3D brand experience with interactive product visualization.",
    category: "creative",
    gradient: "from-cyan-500 to-blue-800",
    featured: false,
    tech: ["Next.js", "Three.js", "3D"],
  },
];

export const stats = [
  { label: "Products Built", value: 30 },
  { label: "Client Projects", value: 12 },
  { label: "SaaS Platforms", value: 8 },
  { label: "Technologies Used", value: 15 },
];
