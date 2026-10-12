<script setup lang="ts">
import { useI18n } from "vue-i18n";
import type { Project } from "../types";

defineProps<{ project: Project; index: number }>();

const { t } = useI18n();
</script>

<template>
  <article class="card project">
    <div class="row">
      <span class="num">{{ String(index).padStart(2, "0") }}</span>
      <span
        class="status"
        :class="{ 'status--muted': project.status !== 'live' }"
      >
        {{ t(`home.projects.status.${project.status}`) }}
      </span>
    </div>
    <h3 class="card-title">{{ project.name }}</h3>
    <p class="desc">{{ t(`home.projects.items.${project.key}`) }}</p>
    <div class="tags">
      <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
    <div class="row foot">
      <span>{{ project.year }}</span>
      <component
        :is="project.url ? 'a' : 'p'"
        :href="project.url ?? undefined"
        target="_blank"
        rel="noopener"
        class="open"
        >{{
          project.url ? t("home.projects.open") : t("home.projects.unavailable")
        }}</component
      >
    </div>
  </article>
</template>

<style scoped>
.project {
  min-height: 280px;
}
.row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
}
.foot {
  align-items: center;
  padding-top: 6px;
  border-top: var(--border-hair);
  font-size: var(--text-label);
  letter-spacing: var(--track-button);
  color: var(--paper-1);
}
.open {
  letter-spacing: var(--track-meta);
  text-transform: uppercase;
}
</style>
