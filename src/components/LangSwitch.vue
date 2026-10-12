<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { setLocale } from '../i18n'
import type { Locale } from '../types'

defineProps<{ large?: boolean }>()

const { locale } = useI18n()
const locales: Locale[] = ['en', 'fr']
</script>

<template>
  <div class="switch" :class="{ large }" role="group" aria-label="Language / Langue">
    <button
      v-for="lang in locales"
      :key="lang"
      type="button"
      :class="{ on: locale === lang }"
      :aria-pressed="locale === lang"
      @click="setLocale(lang)"
    >{{ lang.toUpperCase() }}</button>
  </div>
</template>

<style scoped>
.switch { display: flex; flex: none; border: var(--border-control-1); }
button {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30px;
  min-width: 38px;
  padding: 0 10px;
  border: 0;
  background: transparent;
  color: var(--paper-1);
  font: inherit;
  font-size: var(--text-micro);
  letter-spacing: var(--track-meta);
  cursor: pointer;
  transition: background-color var(--dur-hover), color var(--dur-hover);
}
button.on { background: var(--amber-400); color: var(--ink-0); font-weight: 600; }
.large button { min-height: var(--hit-min); min-width: 52px; padding: 0 12px; }
</style>
