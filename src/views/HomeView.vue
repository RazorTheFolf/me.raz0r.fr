<script setup lang="ts">
import { computed, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useText } from "../i18n";
import TerminalPrompt from "../components/TerminalPrompt.vue";
import MorphHeadline from "../components/MorphHeadline.vue";
import BaseButton from "../components/BaseButton.vue";
import SectionHeading from "../components/SectionHeading.vue";
import ProjectCard from "../components/ProjectCard.vue";
import TechMarquee from "../components/TechMarquee.vue";
import FactList from "../components/FactList.vue";
import TreeList from "../components/TreeList.vue";
import SiteFooter from "../components/SiteFooter.vue";
import type { Project } from "../types";

const { t, list } = useText();
const router = useRouter();

const GITHUB = "https://github.com/RazorTheFolf";
const LINKEDIN = "https://www.linkedin.com/in/raoul-iftode/";
const EMAIL = "raoul.iftode.pro@gmail.com";

const projects: Project[] = [
  {
    key: "site",
    name: "me.raz0r.fr",
    status: "live",
    tags: ["Vue.JS", "i18n", "Vue-Router", "Vite"],
    year: 2026,
    url: GITHUB,
  },
  {
    key: "gatekeeper",
    name: "gatekeeper",
    status: "wip",
    tags: ["NodeJS", "GraphQL", "PostgreSQL", "Prisma", "BullMQ", "Redis"],
    year: 2026,
  },
  {
    key: "quark",
    name: "quark",
    status: "wip",
    tags: ["Golang", "REST/API", "SwaggerUI"],
    year: 2025,
    url: GITHUB,
  },
  {
    key: "linx",
    name: "linx",
    status: "wip",
    tags: ["C++", "SDL3", "IoT", "Home Assistant"],
    year: 2026,
  },
];

const stack = [
  "React.js",
  "Vue.js",
  "Tailwind CSS",
  "TypeScript",
  "Golang",
  "Node.js",
  "Java",
  "C++",
  "PostgreSQL",
  "Prisma",
  "GraphQL",
];

const facts = computed(() =>
  ["exp", "loc", "focus"].map((k) => ({
    label: t(`home.about.facts.${k}`),
    value: t(`home.about.facts.${k}Value`),
  })),
);

const skills = computed(() => [
  {
    label: "frontend/",
    items: ["React.js", "Vue.js", "Tailwind CSS", "TypeScript & GSAP"],
  },
  { label: "backend/", items: ["Golang", "Node.js", "Java · C++", "GraphQL"] },
  {
    label: t("home.skills.data"),
    items: ["PostgreSQL", "Prisma", "Git · Docker", t("home.skills.ci")],
  },
]);

const offers = ["interfaces", "apis", "ship"];

// Keyboard shortcuts: P / A / C / S / H jump to a section
const shortcuts: Record<string, string> = {
  p: "projects",
  a: "about",
  c: "contact",
  s: "skills",
  h: "home",
};
function onKey(e: KeyboardEvent) {
  const target = e.target as Element;
  if (
    e.metaKey ||
    e.ctrlKey ||
    e.altKey ||
    target.closest("input, textarea, [contenteditable]")
  )
    return;
  const id = shortcuts[e.key.toLowerCase()];
  if (id) router.push({ hash: `#${id}`, force: true });
}
onMounted(() => window.addEventListener("keydown", onKey));
onUnmounted(() => window.removeEventListener("keydown", onKey));
</script>

<template>
  <div>
    <div class="glow-hero" aria-hidden="true"></div>

    <main class="container main">
      <section id="home" class="hero">
        <TerminalPrompt command="whoami" result="Raoul Iftode" />
        <MorphHeadline
          class="hero-title"
          :words="list('home.headline')"
          :accent="3"
          :delay="1.35"
        />
        <p class="hero-sub rise" style="--d: 2.1s">{{ t("home.sub") }}</p>
        <div class="actions">
          <BaseButton
            :to="{ hash: '#projects' }"
            class="rise"
            style="--d: 2.3s"
            >{{ t("home.ctaProjects") }}</BaseButton
          >
          <BaseButton
            :to="{ hash: '#contact' }"
            variant="ghost"
            class="rise"
            style="--d: 2.42s"
            >{{ t("home.ctaContact") }}</BaseButton
          >
        </div>
        <div class="keys rise" style="--d: 2.6s">
          <span v-for="key in ['p', 'a', 'c']" :key="key">
            <b>[{{ key.toUpperCase() }}]</b> {{ t(`home.keys.${key}`) }}
          </span>
        </div>
      </section>

      <section id="projects" class="section">
        <SectionHeading :command="t('home.projects.cmd')">
          <template #aside>
            <span class="badge">{{ t("home.projects.badge") }}</span>
            <span class="meta">{{ t("home.projects.entries") }}</span>
          </template>
        </SectionHeading>
        <div class="hair-grid">
          <ProjectCard
            v-for="(project, i) in projects"
            :key="project.key"
            :project="project"
            :index="i + 1"
          />
        </div>
      </section>

      <TechMarquee :items="stack" />

      <section id="about" class="section">
        <SectionHeading :command="t('home.about.cmd')" />
        <div class="about">
          <div class="about-side">
            <div class="about-resume">
              <img
                src="/raoul.jpeg"
                alt="Raoul Iftode"
                width="164"
                height="164"
                class="avatar"
              />
              <BaseButton :to="{ hash: '#' }" style="height: fit-content">{{
                t("home.about.download")
              }}</BaseButton>
            </div>
            <FactList :rows="facts" />
          </div>
          <div class="about-text">
            <p class="lede">{{ t("home.about.lede") }}</p>
            <p class="body">{{ t("home.about.p1") }}</p>
            <p class="body">{{ t("home.about.p2") }}</p>
          </div>
        </div>
      </section>

      <section id="background" class="section">
        <SectionHeading :command="t('home.background.cmd')">
          <template #aside>
            <RouterLink to="/parcours" class="link-meta">{{
              t("home.background.more")
            }}</RouterLink>
          </template>
        </SectionHeading>
        <div class="hair-grid">
          <RouterLink
            :to="{ path: '/parcours', hash: '#education' }"
            class="card"
          >
            <span class="label">{{ t("home.background.eduLabel") }}</span>
            <h3 class="card-title">BTS SIO · SLAM</h3>
            <p class="desc">{{ t("home.background.eduText") }}</p>
            <span class="card-foot">{{ t("home.background.read") }}</span>
          </RouterLink>
          <RouterLink :to="{ path: '/parcours', hash: '#watch' }" class="card">
            <span class="label">{{ t("home.background.watchLabel") }}</span>
            <h3 class="card-title">{{ t("home.background.watchTitle") }}</h3>
            <div class="tags topics">
              <span
                v-for="topic in list('home.background.topics')"
                :key="topic"
                class="tag"
                >{{ topic }}</span
              >
            </div>
            <span class="card-foot">{{ t("home.background.read") }}</span>
          </RouterLink>
        </div>
      </section>

      <section id="skills" class="section">
        <SectionHeading :command="t('home.skills.cmd')" />
        <div class="hair-grid" style="--min: 260px">
          <div v-for="group in skills" :key="group.label" class="card skill">
            <span class="label">{{ group.label }}</span>
            <TreeList :items="group.items" />
          </div>
        </div>
        <div class="hair-grid offers" style="--min: 240px">
          <div v-for="key in offers" :key="key" class="offer">
            <span class="offer-title">{{
              t(`home.skills.offers.${key}.title`)
            }}</span>
            <span class="offer-text">{{
              t(`home.skills.offers.${key}.text`)
            }}</span>
          </div>
        </div>
      </section>
    </main>

    <SiteFooter command="./contact">
      <span class="prism prism-label"
        ><span>{{ t("home.contact.label") }}</span></span
      >
      <p class="big-cta">{{ t("home.contact.big") }}</p>
      <div class="actions footer-actions">
        <BaseButton :href="`mailto:${EMAIL}`">[ {{ EMAIL }} ]</BaseButton>
        <BaseButton :href="GITHUB" variant="ghost" external
          >[ github → ]</BaseButton
        >
        <BaseButton :href="LINKEDIN" variant="ghost" external
          >[ linkedin → ]</BaseButton
        >
      </div>
      <template #meta>
        <span class="available"><i></i>{{ t("home.contact.available") }}</span>
      </template>
    </SiteFooter>
  </div>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: var(--hero-min-h);
  padding: var(--hero-y) 0 clamp(80px, 14vh, 160px);
}
.hero-title {
  font-size: var(--text-hero);
  max-width: var(--measure-headline);
}
.hero-sub {
  max-width: var(--measure-prose);
  margin-top: 36px;
  font-size: var(--text-15);
  line-height: 1.75;
  color: var(--paper-1);
}
.keys {
  display: flex;
  gap: 18px;
  margin-top: 56px;
  font-size: var(--text-micro);
  letter-spacing: var(--track-meta);
  text-transform: uppercase;
  color: var(--paper-1);
}
.keys b {
  color: var(--amber-400);
  font-weight: 400;
}

.badge {
  display: inline-block;
  padding: 7px 12px;
  transform: rotate(-3deg);
  background: var(--amber-400);
  color: var(--ink-0);
  font-size: var(--text-10);
  font-weight: 600;
  letter-spacing: var(--track-kicker);
  text-transform: uppercase;
  box-shadow: 0 0 24px var(--amber-a30);
}

.about {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: 56px;
  align-items: start;
}
.about-side {
  display: flex;
  flex-direction: column;
  gap: 26px;
}
.about-resume {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.avatar {
  width: 164px;
  height: 164px;
  border-radius: var(--radius-round);
  object-fit: cover;
  border: 1px solid var(--amber-a35);
  box-shadow: var(--ring-avatar);
}
.about-text {
  display: flex;
  flex-direction: column;
  gap: 22px;
  max-width: var(--measure-prose-narrow);
}
.lede {
  font-family: var(--font-display);
  font-size: var(--text-lede);
  line-height: var(--leading-lede);
  letter-spacing: var(--track-card);
  color: var(--paper-0);
  font-variation-settings: var(--vf-quiet);
  text-wrap: pretty;
}

.link-meta {
  font-size: var(--text-label);
  letter-spacing: var(--track-label);
  text-transform: uppercase;
}
.topics {
  flex: 1;
  align-content: flex-start;
}
.card-foot {
  padding-top: 12px;
  border-top: var(--border-hair);
  font-size: var(--text-label);
  letter-spacing: var(--track-meta);
  text-transform: uppercase;
  color: var(--amber-400);
}

.skill {
  padding: 30px;
  gap: 20px;
}
.offers {
  border-top: 0;
}
.offer {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 26px 30px;
  background: var(--surface-1);
}
.offer-title {
  font-size: var(--text-body-size);
  color: var(--paper-0);
}
.offer-text {
  font-size: var(--text-12-5);
  line-height: var(--leading-tight);
  color: var(--paper-1-soft);
}

.prism-label {
  display: inline-block;
  margin-bottom: 22px;
  padding: 1px;
  transform: rotate(1.5deg);
}
.prism-label span {
  display: block;
  padding: 8px 13px;
  background: var(--ink-0);
  font-size: var(--text-10);
  letter-spacing: var(--track-kicker);
  text-transform: uppercase;
  color: var(--paper-0);
}
.footer-actions {
  margin-top: 48px;
}
.available {
  display: flex;
  align-items: center;
  gap: 9px;
}
.available i {
  width: 6px;
  height: 6px;
  border-radius: var(--radius-round);
  background: var(--amber-400);
  box-shadow: 0 0 8px var(--amber-400);
}

@media (max-width: 760px) {
  .hero {
    min-height: 0;
  }
  .hero-title {
    font-size: var(--text-hero-m);
  }
  .hero-sub {
    margin-top: 26px;
    font-size: var(--text-body-sm);
  }
  .keys {
    display: none;
  }
  .about {
    gap: 36px;
  }
  .lede {
    font-size: var(--text-lede-m);
  }
  .skill {
    padding: 26px 22px;
  }
  .offer {
    padding: 22px;
  }
}
</style>
