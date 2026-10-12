<script setup lang="ts">
import { computed } from "vue";
import { useText } from "../i18n";
import TerminalPrompt from "../components/TerminalPrompt.vue";
import MorphHeadline from "../components/MorphHeadline.vue";
import BaseButton from "../components/BaseButton.vue";
import SectionHeading from "../components/SectionHeading.vue";
import FactList from "../components/FactList.vue";
import WatchCard from "../components/WatchCard.vue";
import SiteFooter from "../components/SiteFooter.vue";
import type { FactRow, WatchTopic } from "../types";

const { t, list } = useText();

const EMAIL = "raoul.iftode@proton.me";

const facts = computed<FactRow[]>(() => [
  {
    label: t("parcours.edu.facts.full"),
    value: t("parcours.edu.facts.fullValue"),
  },
  {
    label: t("parcours.edu.facts.track"),
    value: t("parcours.edu.facts.trackValue"),
  },
  { label: t("parcours.edu.facts.school"), value: "IPSSI · Paris" },
]);

const blocks = ["b1", "b2", "b3"];
const topics: WatchTopic[] = ["coding", "backend", "engines"];
</script>

<template>
  <div>
    <div
      class="glow-hero"
      style="
        --glow-h: var(--glow-height-parcours);
        --glow-h-m: var(--glow-height-parcours-mobile);
      "
      aria-hidden="true"
    ></div>

    <main class="container main">
      <section class="hero">
        <TerminalPrompt :command="t('parcours.prompt')" />
        <MorphHeadline
          class="hero-title"
          :words="list('parcours.headline')"
          :accent="3"
          by="word"
          :delay="0.9"
          :stagger="0.1"
          :duration="1.1"
        />
        <p class="hero-sub rise" style="--d: 1.6s">{{ t("parcours.sub") }}</p>
        <div class="actions rise" style="--d: 1.8s">
          <BaseButton :to="{ hash: '#education' }">{{
            t("parcours.ctaEdu")
          }}</BaseButton>
          <BaseButton :to="{ hash: '#watch' }" variant="ghost">{{
            t("parcours.ctaWatch")
          }}</BaseButton>
        </div>
      </section>

      <section id="education" class="section">
        <SectionHeading :command="t('parcours.edu.cmd')">
          <template #aside
            ><span class="meta">{{ t("parcours.edu.meta") }}</span></template
          >
        </SectionHeading>

        <div class="hair-grid" style="--min: 340px">
          <article class="panel">
            <div class="chips">
              <span class="status status-pad"
                ><i class="dot"></i>{{ t("parcours.edu.status") }}</span
              >
              <span class="date">2025 — 2027 </span>
            </div>
            <div>
              <h3 class="degree">BTS SIO <span class="accent">·</span> SLAM</h3>
              <p class="school">IPSSI <span>· Paris</span></p>
            </div>
            <p class="body">{{ t("parcours.edu.desc") }}</p>
            <FactList :rows="facts" dark />
          </article>

          <div class="panel curriculum">
            <span class="label">{{ t("parcours.edu.curriculum") }}</span>
            <div class="blocks">
              <div v-for="id in blocks" :key="id" class="block">
                <span class="block-id">{{ id.toUpperCase() }}</span>
                <div class="block-text">
                  <span class="block-title">{{
                    t(`parcours.edu.blocks.${id}.title`)
                  }}</span>
                  <span class="small-text">{{
                    t(`parcours.edu.blocks.${id}.text`)
                  }}</span>
                </div>
              </div>
            </div>
            <!-- TODO: projects & internships -->
            <div class="todo">
              <span class="todo-title">{{ t("parcours.edu.add.title") }}</span>
              <span class="small-text">{{ t("parcours.edu.add.text") }}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="watch" class="section">
        <SectionHeading :command="t('parcours.watch.cmd')" class="tight">
          <template #aside
            ><span class="meta">{{ t("parcours.watch.meta") }}</span></template
          >
        </SectionHeading>
        <p class="body intro">{{ t("parcours.watch.intro") }}</p>

        <div class="hair-grid info" style="--min: 300px">
          <div class="info-cell">
            <span class="kicker">{{ t("parcours.watch.sources") }}</span>
            <div class="sources">
              <div class="source">
                <b>daily.dev</b
                ><span class="small-text">{{
                  t("parcours.watch.dailydev")
                }}</span>
              </div>
              <div class="source">
                <b>TLDR Dev</b
                ><span class="small-text">{{ t("parcours.watch.tldr") }}</span>
              </div>
            </div>
          </div>
          <div class="info-cell">
            <span class="kicker">{{ t("parcours.watch.method") }}</span>
            <div class="steps">
              <span v-for="(step, i) in list('parcours.watch.steps')" :key="i">
                <b>{{ String(i + 1).padStart(2, "0") }}</b> {{ step }}
              </span>
            </div>
          </div>
        </div>

        <div class="hair-grid" style="--min: 260px">
          <WatchCard
            v-for="(topic, i) in topics"
            :key="topic"
            :topic="topic"
            :index="i + 1"
          />
        </div>
      </section>
    </main>

    <SiteFooter command="cd ~">
      <p class="big-cta footer-big">{{ t("parcours.footer.big") }}</p>
      <div class="actions">
        <BaseButton :to="{ path: '/', hash: '#projects' }">{{
          t("parcours.footer.projects")
        }}</BaseButton>
        <BaseButton :href="`mailto:${EMAIL}`" variant="ghost"
          >[ {{ EMAIL }} ]</BaseButton
        >
      </div>
      <template #meta>
        <span class="socials">
          <a
            href="https://github.com/RazorTheFolf"
            target="_blank"
            rel="noopener"
            >github</a
          >
          <a
            href="https://www.linkedin.com/in/raoul-iftode/"
            target="_blank"
            rel="noopener"
            >linkedin</a
          >
        </span>
      </template>
    </SiteFooter>
  </div>
</template>

<style scoped>
.hero {
  padding: clamp(64px, 11vh, 130px) 0 clamp(60px, 10vh, 110px);
}
.hero-title {
  font-size: var(--text-hero-parcours);
  line-height: 0.96;
  max-width: var(--measure-headline-parcours);
}
.hero-sub {
  max-width: var(--measure-prose);
  margin-top: 32px;
  font-size: var(--text-15);
  line-height: 1.75;
  color: var(--paper-1);
}
.hero .actions {
  margin-top: 40px;
}

.panel {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 36px 32px;
  background: var(--ink-raised);
}
.chips {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.status-pad {
  padding: 5px 10px;
}
.dot {
  width: 6px;
  height: 6px;
  border-radius: var(--radius-round);
  background: var(--amber-400);
  box-shadow: 0 0 8px var(--amber-400);
}
.date {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 10px;
  border: 1px dashed var(--line-bright);
  font-size: var(--text-label);
  color: var(--paper-1);
}
.fill {
  font-size: var(--text-9-5);
  letter-spacing: var(--track-button);
  text-transform: uppercase;
  color: var(--amber-400);
}
.degree {
  font-family: var(--font-display);
  font-size: var(--text-fiche-title);
  line-height: 1;
  letter-spacing: var(--track-fiche);
  font-variation-settings: var(--vf-card-strong);
}
.school {
  margin-top: 14px;
  font-size: var(--text-body-sm);
  letter-spacing: var(--track-mono);
  color: var(--paper-0);
}
.school span {
  color: var(--paper-1);
}

.curriculum {
  gap: 22px;
}
.blocks {
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: var(--line-hair);
  border: var(--border-hair);
}
.block {
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr);
  gap: 14px;
  padding: 20px;
  background: var(--surface-2);
  transition: background-color var(--dur-hover);
}
.block:hover {
  background: var(--amber-a06);
}
.block-id {
  font-size: var(--text-label);
  letter-spacing: var(--track-label);
  color: var(--amber-400);
}
.block-text {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.block-title {
  font-size: var(--text-body-size);
  color: var(--paper-0);
}
.small-text {
  font-size: var(--text-12-5);
  line-height: var(--leading-tight);
  color: var(--paper-1);
}
.todo {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 18px 20px;
  border: 1px dashed var(--line-dim);
}
.todo-title {
  font-size: var(--text-micro);
  letter-spacing: var(--track-label);
  text-transform: uppercase;
  color: var(--amber-400);
}

.tight {
  margin-bottom: 20px;
}
.intro {
  max-width: var(--measure-prose-wide);
  margin-bottom: 44px;
}
.info {
  margin-bottom: 28px;
}
.info-cell {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 26px 28px;
  background: var(--ink-raised);
}
.kicker {
  font-size: var(--text-micro);
  letter-spacing: var(--track-kicker);
  text-transform: uppercase;
  color: var(--paper-1);
}
.sources {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.source {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.source b {
  font-size: var(--text-15);
  font-weight: 400;
  color: var(--paper-0);
}
.steps {
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: var(--text-body-sm);
  color: var(--paper-1);
}
.steps b {
  font-weight: 400;
  color: var(--amber-400);
}

.footer-big {
  max-width: var(--measure-lede-parcours);
  font-size: var(--text-display-parcours);
}
.socials {
  display: flex;
  gap: 18px;
}

@media (max-width: 760px) {
  .hero-title {
    font-size: var(--text-hero-parcours-m);
  }
  .hero-sub {
    margin-top: 26px;
    font-size: var(--text-body-sm);
  }
  .panel {
    padding: 28px 22px;
  }
  .degree {
    font-size: var(--text-fiche-title-m);
  }
  .info-cell {
    padding: 22px;
  }
  .footer-big {
    font-size: var(--text-display-parcours-m);
  }
}
</style>
