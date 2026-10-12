export default {
  meta: {
    home: "Raoul Iftode — Software Engineer",
    parcours: "Raoul Iftode — Background & tech watch",
  },
  nav: {
    home: "~/home",
    projects: "~/projects",
    about: "~/about",
    background: "~/background",
    watch: "~/tech-watch",
    skills: "~/skills",
    contact: "~/contact",
    menu: "menu",
    close: "close",
    language: "language",
  },
  home: {
    headline: [
      "From APIs",
      "to 3D engines,",
      "I'm learning",
      "how",
      "everything works.",
    ],
    sub: "BTS SIO SLAM student at IPSSI Paris, a two-year degree in software development, training to become a software engineer.",
    ctaProjects: "[ view projects → ]",
    ctaContact: "[ get in touch ]",
    keys: { p: "projects", a: "about", c: "contact" },
    projects: {
      cmd: "ls projects/",
      badge: "selected work",
      entries: "4 entries",
      open: "[ open ]",
      unavailable: "[ unavailable ]",
      status: { live: "live", wip: "wip", archived: "archived" },
      items: {
        site: "This site. A terminal-souled portfolio built on variable-font motion and a CLI grammar.",
        ledgerline:
          "A typed GraphQL API for personal finance — schema-first, sub-40ms reads, fully audited writes.",
        vessel:
          "Self-hosted container dashboard. Live logs, one-click rollbacks, no cloud account required.",
        prism:
          "A software rasteriser written from scratch to understand what the GPU actually does.",
      },
    },
    about: {
      cmd: "cat about.md",
      download: "[ Download my resume ↓ ]",
      facts: {
        exp: "experience",
        expValue: "4+ years",
        loc: "location",
        locValue: "Paris",
        focus: "focus",
        focusValue: "Full-stack systems",
      },
      lede: "I like problems where the interface and the system have to agree — where a clean screen is only possible because the layer underneath is honest.",
      p1: "I work across the whole stack: interfaces in React and Vue, services in Go and Node, data in PostgreSQL. I care about latency, type safety and interfaces that don't need explaining. Most of what I build starts as a small tool for myself and gets sharper from there.",
      p2: "Currently open to interesting work and collaborations.",
    },
    background: {
      cmd: "cd ~/background",
      more: "[ full page → ]",
      read: "[ read ]",
      eduLabel: "education/",
      eduText:
        "Two-year national diploma in software development, at IPSSI Paris.",
      watchLabel: "tech-watch/",
      watchTitle: "What I follow",
      topics: ["ways of coding", "back-end", "3D engines"],
    },
    skills: {
      cmd: "cat skills.json",
      data: "data & tools/",
      ci: "CI pipelines",
      offers: {
        interfaces: {
          title: "Product interfaces",
          text: "Design-faithful frontends with motion that carries meaning.",
        },
        apis: {
          title: "APIs & services",
          text: "Typed, documented endpoints built to stay fast under load.",
        },
        ship: {
          title: "Ship & maintain",
          text: "Containers, pipelines and the boring rigour that keeps it live.",
        },
      },
    },
    contact: {
      label: "say hello ✦ reply within a day",
      big: "Let's build something exact.",
      available: "available for work",
    },
  },
  parcours: {
    prompt: "cd ~/background",
    headline: ["Where I learned,", "and what", "I keep", "learning."],
    sub: "My studies, and the technology watch I keep up every day to stay sharp between projects.",
    ctaEdu: "[ education ↓ ]",
    ctaWatch: "[ tech watch ↓ ]",
    edu: {
      cmd: "cat education.md",
      meta: "bac+2 · higher national diploma",
      status: "diploma",
      toFill: "· to fill",
      desc: "A two-year national diploma in IT services for organisations. The SLAM track — software solutions and business applications — is the development side: designing, building and maintaining applications and the data behind them.",
      facts: {
        full: "full name",
        fullValue: "Services informatiques aux organisations",
        track: "track",
        trackValue: "Software solutions & business apps",
        school: "school",
      },
      curriculum: "curriculum/",
      blocks: {
        b1: {
          title: "Support & provision of IT services",
          text: "Managing IT assets, handling incidents and requests, running a service for real users.",
        },
        b2: {
          title: "Application design & development",
          text: "The heart of SLAM: modelling, databases and SQL, object-oriented code, web and mobile apps, testing and deployment.",
        },
        b3: {
          title: "Cybersecurity of IT services",
          text: "Securing data and applications: access control, secure coding, and data protection rules such as GDPR.",
        },
      },
      add: {
        title: "+ projects & internships",
        text: "Space for your BTS projects and internships — name, company, what you built.",
      },
    },
    watch: {
      cmd: "ls tech-watch/",
      meta: "3 topics · daily",
      intro:
        "How I stay current: a short read every morning, filtered down to the three subjects I actually follow, with one note on what each thing changes for my work.",
      sources: "sources/",
      dailydev: "A feed of developer news I skim every morning.",
      tldr: "A daily newsletter: the day's key links in five minutes.",
      method: "method/",
      steps: [
        "read — daily.dev + TLDR, ~15 min",
        "filter — keep only my three topics",
        "note — one line: what it changes for me",
        "try — test the best idea on a side project",
      ],
      follow: "what I follow",
      take: "what I take from it",
      topics: {
        coding: {
          file: "ways-of-coding.md",
          title: "Ways of coding",
          summary:
            "How code gets written is changing fast: AI assistants in the editor, stricter typing, smaller changes that are easy to review.",
          follow: [
            "clean code & refactoring",
            "strict TypeScript",
            "AI-assisted development",
            "code review practices",
          ],
          take: "Tools change, the basics don't. Clear names, small functions and tests are what make AI-written code trustworthy.",
        },
        backend: {
          file: "back-end.md",
          title: "Back-end",
          summary:
            "APIs, data and performance — where most of an application's real complexity lives.",
          follow: [
            "Go & Node.js",
            "API design: REST & GraphQL",
            "PostgreSQL & ORMs (Prisma)",
            "containers & deployment",
          ],
          take: "An API is a contract first. I design the schema before the code, and I measure before I optimise.",
        },
        engines: {
          file: "3d-engines.md",
          title: "3D engines",
          summary:
            "How real-time 3D works, from the GPU's rendering pipeline to engines like Godot and Unreal, and to the web with three.js.",
          follow: [
            "the rendering pipeline",
            "Godot & Unreal releases",
            "three.js & WebGPU",
            "performance & optimisation",
          ],
          take: "Engines make you think in frame budgets. About 16 ms per frame is a good discipline for any interface.",
        },
      },
    },
    footer: {
      big: "Want to see what I build with it?",
      projects: "[ ← see projects ]",
    },
  },
};
