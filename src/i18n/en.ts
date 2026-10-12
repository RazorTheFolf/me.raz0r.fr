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
      "From sensors",
      "to native apps,",
      "I'm learning",
      "how",
      "everything works.",
    ],
    sub: "BTS SIO SLAM student at IPSSI Paris, a two-year degree in software development, training to become a software engineer — currently focused on IoT and native, system-level applications.",
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
        linx: "A digital photo frame on a Raspberry Pi. It pulls photos from Immich and is controlled from Home Assistant.",
        gatekeeper:
          "A zero-trust vault built for a company during my internship. It keeps every root account locked away, and a member only gets access to one after a team vote.",
        quark:
          "A small Go API template, with Swagger docs generated automatically.",
      },
    },
    about: {
      cmd: "cat about.md",
      download: "[ Download my resume ↓ ]",
      facts: {
        exp: "experience",
        expValue: "3 years",
        loc: "location",
        locValue: "Paris",
        focus: "focus",
        focusValue: "IoT & native apps",
      },
      lede: "I like problems where the interface and the system have to agree — where a clean screen is only possible because the layer underneath is honest.",
      p1: "I'm moving closer to the machine: native desktop apps in C++ with SDL3, connected devices driven through Home Assistant, and the services in Go and Node that tie them together. I care about latency, memory and interfaces that don't need explaining. Most of what I build starts as a small tool for myself and gets sharper from there.",
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
      topics: ["ways of coding", "IoT", "native apps"],
    },
    skills: {
      cmd: "cat skills.json",
      data: "data & tools/",
      ci: "CI pipelines",
      offers: {
        native: {
          title: "Native & heavy clients",
          text: "Desktop apps that start fast and stay light on memory.",
        },
        iot: {
          title: "IoT & devices",
          text: "Connecting sensors and devices to software people actually use.",
        },
        apis: {
          title: "APIs & services",
          text: "The typed services that tie devices and clients together.",
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
        iot: {
          file: "iot.md",
          title: "IoT & connected devices",
          summary:
            "Devices that sense and act on the physical world, and the hubs and protocols that connect them to the rest of the software.",
          follow: [
            "Home Assistant & home automation",
            "MQTT & Matter",
            "microcontrollers (ESP32)",
            "IoT security",
          ],
          take: "A device has to keep working when the network doesn't. I design for failure and offline first, features second.",
        },
        native: {
          file: "native-apps.md",
          title: "System apps & heavy clients",
          summary:
            "Native software that runs close to the OS: C++ libraries like SDL3 and Qt, lighter cross-platform shells like Tauri, and what it takes to make them fast.",
          follow: [
            "modern C++",
            "SDL3 & Qt",
            "Tauri & Rust",
            "memory & performance profiling",
          ],
          take: "When you own the whole process, memory, threads and startup time are your problem. A ~16 ms frame budget keeps any interface honest.",
        },
      },
    },
    footer: {
      big: "Want to see what I build with it?",
      projects: "[ ← see projects ]",
    },
  },
};
