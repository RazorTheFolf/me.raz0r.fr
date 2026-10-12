import type en from "./en";

const fr: typeof en = {
  meta: {
    home: "Raoul Iftode — Ingénieur logiciel",
    parcours: "Raoul Iftode — Parcours et veille",
  },
  nav: {
    home: "~/accueil",
    projects: "~/projets",
    about: "~/à-propos",
    background: "~/parcours",
    watch: "~/veille",
    skills: "~/compétences",
    contact: "~/contact",
    menu: "menu",
    close: "fermer",
    language: "langue",
  },
  home: {
    headline: [
      "Des API",
      "aux moteurs 3D,",
      "j'apprends",
      "comment",
      "tout fonctionne.",
    ],
    sub: "Étudiant en BTS SIO option SLAM à l'IPSSI Paris, je me forme pour devenir ingénieur logiciel.",
    ctaProjects: "[ voir les projets → ]",
    ctaContact: "[ me contacter ]",
    keys: { p: "projets", a: "à propos", c: "contact" },
    projects: {
      cmd: "ls projets/",
      badge: "sélection",
      entries: "4 projets",
      open: "[ ouvrir ]",
      unavailable: "[ indisponible ]",
      status: { live: "en ligne", wip: "en cours", archived: "archivé" },
      items: {
        site: "Ce site. Un portfolio à l'âme de terminal, construit sur des polices variables animées et une grammaire CLI.",
        ledgerline:
          "Une API GraphQL typée pour les finances personnelles — schéma d'abord, lectures sous 40 ms, écritures entièrement auditées.",
        vessel:
          "Tableau de bord de conteneurs auto-hébergé. Logs en direct, rollback en un clic, aucun compte cloud requis.",
        prism:
          "Un moteur de rendu logiciel écrit de zéro pour comprendre ce que fait vraiment le GPU.",
      },
    },
    about: {
      cmd: "cat a-propos.md",
      download: "[ Télécharger mon cv ↓ ]",
      facts: {
        exp: "expérience",
        expValue: "3 ans",
        loc: "localisation",
        locValue: "Paris",
        focus: "domaine",
        focusValue: "Systèmes full-stack",
      },
      lede: "J'aime les problèmes où l'interface et le système doivent s'accorder — où un écran propre n'est possible que parce que la couche en dessous est honnête.",
      p1: "Je travaille sur toute la stack : interfaces en React et Vue, services en Go et Node, données dans PostgreSQL. Je tiens à la latence, au typage et aux interfaces qui se passent d'explications. La plupart de ce que je construis commence comme un petit outil pour moi-même, puis s'affûte.",
      p2: "Actuellement ouvert à des projets et collaborations intéressants.",
    },
    background: {
      cmd: "cd ~/parcours",
      more: "[ page complète → ]",
      read: "[ lire ]",
      eduLabel: "formation/",
      eduText:
        "Diplôme national bac+2 en développement logiciel, à l'IPSSI Paris.",
      watchLabel: "veille/",
      watchTitle: "Ce que je suis",
      topics: ["façons de coder", "back-end", "moteurs 3D"],
    },
    skills: {
      cmd: "cat competences.json",
      data: "données & outils/",
      ci: "pipelines CI",
      offers: {
        interfaces: {
          title: "Interfaces produit",
          text: "Des frontends fidèles au design, avec un mouvement qui a du sens.",
        },
        apis: {
          title: "APIs & services",
          text: "Des endpoints typés et documentés, pensés pour rester rapides sous la charge.",
        },
        ship: {
          title: "Livrer & maintenir",
          text: "Conteneurs, pipelines et la rigueur discrète qui garde tout en ligne.",
        },
      },
    },
    contact: {
      label: "dites bonjour ✦ réponse sous 24 h",
      big: "Construisons quelque chose d'exact.",
      available: "disponible pour des missions",
    },
  },
  parcours: {
    prompt: "cd ~/parcours",
    headline: ["Où j'ai appris,", "et ce que", "j'apprends", "encore."],
    sub: "Mes études, et la veille technologique que je tiens chaque jour pour rester affûté entre deux projets.",
    ctaEdu: "[ formation ↓ ]",
    ctaWatch: "[ veille ↓ ]",
    edu: {
      cmd: "cat formation.md",
      meta: "bac+2 · diplôme national",
      status: "diplôme",
      toFill: "· à remplir",
      desc: "Un diplôme national en deux ans, en services informatiques aux organisations. L'option SLAM — solutions logicielles et applications métiers — est la filière développement : concevoir, réaliser et maintenir des applications et leurs données.",
      facts: {
        full: "intitulé",
        fullValue: "Services informatiques aux organisations",
        track: "option",
        trackValue: "Solutions logicielles et applications métiers",
        school: "école",
      },
      curriculum: "programme/",
      blocks: {
        b1: {
          title: "Support et mise à disposition de services informatiques",
          text: "Gérer un parc informatique, traiter incidents et demandes, faire tourner un service pour de vrais utilisateurs.",
        },
        b2: {
          title: "Conception et développement d'applications",
          text: "Le cœur du SLAM : modélisation, bases de données et SQL, programmation objet, applications web et mobiles, tests et déploiement.",
        },
        b3: {
          title: "Cybersécurité des services informatiques",
          text: "Sécuriser données et applications : contrôle d'accès, code sécurisé et règles de protection des données comme le RGPD.",
        },
      },
      add: {
        title: "+ projets et stages",
        text: "Emplacement pour vos projets et stages de BTS — nom, entreprise, ce que vous avez réalisé.",
      },
    },
    watch: {
      cmd: "ls veille/",
      meta: "3 sujets · chaque jour",
      intro:
        "Comment je reste à jour : une courte lecture chaque matin, filtrée sur les trois sujets que je suis vraiment, avec une note sur ce que chaque nouveauté change pour mon travail.",
      sources: "sources/",
      dailydev:
        "Un fil d'actualités pour développeurs que je parcours chaque matin.",
      tldr: "Une newsletter quotidienne : les liens importants du jour en cinq minutes.",
      method: "méthode/",
      steps: [
        "lire — daily.dev + TLDR, ~15 min",
        "filtrer — ne garder que mes trois sujets",
        "noter — une ligne : ce que ça change pour moi",
        "tester — essayer la meilleure idée sur un projet perso",
      ],
      follow: "ce que je suis",
      take: "ce que j'en retiens",
      topics: {
        coding: {
          file: "facons-de-coder.md",
          title: "Façons de coder",
          summary:
            "La manière d'écrire du code change vite : assistants IA dans l'éditeur, typage plus strict, changements plus petits et faciles à relire.",
          follow: [
            "clean code et refactoring",
            "TypeScript strict",
            "développement assisté par IA",
            "pratiques de code review",
          ],
          take: "Les outils changent, les bases restent. Des noms clairs, de petites fonctions et des tests : c'est ce qui rend le code écrit par une IA digne de confiance.",
        },
        backend: {
          file: "back-end.md",
          title: "Back-end",
          summary:
            "API, données et performance — là où se trouve l'essentiel de la vraie complexité d'une application.",
          follow: [
            "Go & Node.js",
            "conception d'API : REST et GraphQL",
            "PostgreSQL et ORM (Prisma)",
            "conteneurs et déploiement",
          ],
          take: "Une API est d'abord un contrat. Je conçois le schéma avant le code, et je mesure avant d'optimiser.",
        },
        engines: {
          file: "moteurs-3d.md",
          title: "Moteurs 3D",
          summary:
            "Comment fonctionne la 3D temps réel, du pipeline de rendu du GPU aux moteurs comme Godot et Unreal, jusqu'au web avec three.js.",
          follow: [
            "le pipeline de rendu",
            "versions de Godot et Unreal",
            "three.js & WebGPU",
            "performance et optimisation",
          ],
          take: "Les moteurs apprennent à penser en budget par image. Environ 16 ms par image, c'est une bonne discipline pour n'importe quelle interface.",
        },
      },
    },
    footer: {
      big: "Envie de voir ce que j'en fais ?",
      projects: "[ ← voir les projets ]",
    },
  },
};

export default fr;
