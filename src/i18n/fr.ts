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
      "Des capteurs",
      "aux logiciels natifs,",
      "j'apprends",
      "comment",
      "tout fonctionne.",
    ],
    sub: "Étudiant en BTS SIO option SLAM à l'IPSSI Paris, je me forme pour devenir ingénieur logiciel — aujourd'hui tourné vers l'IoT et les applications natives et système.",
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
        linx: "Un cadre photo numérique sur Raspberry Pi. Il récupère les photos depuis Immich et se pilote depuis Home Assistant.",
        gatekeeper:
          "Une solution zero trust conçue pour une entreprise pendant mon stage. Elle garde tous les comptes root sous clé, et un membre n'accède à l'un d'eux qu'après un vote de l'équipe.",
        quark:
          "Un petit template d'API en Go, avec une documentation Swagger générée automatiquement.",
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
        focusValue: "IoT & applications natives",
      },
      lede: "J'aime les problèmes où l'interface et le système doivent s'accorder — où un écran propre n'est possible que parce que la couche en dessous est honnête.",
      p1: "Je me rapproche de la machine : applications de bureau natives en C++ avec SDL3, objets connectés pilotés via Home Assistant, et les services en Go et Node qui les relient. Je tiens à la latence, à la mémoire et aux interfaces qui se passent d'explications. La plupart de ce que je construis commence comme un petit outil pour moi-même, puis s'affûte.",
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
      topics: ["façons de coder", "IoT", "applis natives"],
    },
    skills: {
      cmd: "cat competences.json",
      data: "données & outils/",
      ci: "pipelines CI",
      offers: {
        native: {
          title: "Clients lourds & natifs",
          text: "Des applications de bureau qui démarrent vite et restent légères en mémoire.",
        },
        iot: {
          title: "IoT & objets connectés",
          text: "Relier capteurs et appareils à des logiciels qu'on utilise vraiment.",
        },
        apis: {
          title: "APIs & services",
          text: "Les services typés qui relient appareils et clients.",
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
        iot: {
          file: "iot.md",
          title: "IoT et objets connectés",
          summary:
            "Des appareils qui mesurent et agissent sur le monde physique, et les hubs et protocoles qui les relient au reste du logiciel.",
          follow: [
            "Home Assistant et domotique",
            "MQTT et Matter",
            "microcontrôleurs (ESP32)",
            "sécurité de l'IoT",
          ],
          take: "Un appareil doit continuer de fonctionner quand le réseau tombe. Je pense d'abord aux pannes et au hors-ligne, ensuite aux fonctionnalités.",
        },
        native: {
          file: "applis-natives.md",
          title: "Applications système et clients lourds",
          summary:
            "Des logiciels natifs qui tournent au plus près de l'OS : bibliothèques C++ comme SDL3 et Qt, alternatives multiplateformes plus légères comme Tauri, et ce qu'il faut pour les rendre rapides.",
          follow: [
            "C++ moderne",
            "SDL3 et Qt",
            "Tauri et Rust",
            "profilage mémoire et performance",
          ],
          take: "Quand on maîtrise tout le processus, mémoire, threads et temps de démarrage deviennent notre affaire. Un budget d'environ 16 ms par image garde n'importe quelle interface honnête.",
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
