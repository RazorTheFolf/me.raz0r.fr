<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import LangSwitch from './LangSwitch.vue'
import type { NavLink } from '../types'

withDefaults(defineProps<{ links?: NavLink[]; current?: string }>(), {
  links: () => [],
  current: '',
})

const { t } = useI18n()
const route = useRoute()
const open = ref(false)

watch(() => route.fullPath, () => (open.value = false))
</script>

<template>
  <header class="nav">
    <div class="container bar">
      <RouterLink :to="{ path: '/', hash: '#home' }" class="brand">
        <span class="dot"></span>raoul.iftode
      </RouterLink>

      <nav class="links">
        <RouterLink
          v-for="link in links"
          :key="link.key"
          :to="link.to"
          class="link"
          :class="{ current: link.key === current }"
        >{{ t(`nav.${link.key}`) }}</RouterLink>
        <LangSwitch class="lang" />
      </nav>

      <button type="button" class="burger" :aria-expanded="open" aria-label="Menu" @click="open = !open">
        <span>{{ open ? t('nav.close') : t('nav.menu') }}</span>
        <span class="lines"><i></i><i></i><i></i></span>
      </button>
    </div>

    <div class="prism line"></div>

    <nav class="menu" :class="{ open }">
      <RouterLink
        v-for="(link, i) in links"
        :key="link.key"
        :to="link.to"
        class="menu-link"
        :style="{ '--i': i }"
        @click="open = false"
      >{{ t(`nav.${link.key}`) }}</RouterLink>
      <div class="menu-lang">
        <span class="meta">{{ t('nav.language') }}</span>
        <LangSwitch large />
      </div>
    </nav>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: var(--z-nav-sticky);
  background: var(--scrim-nav);
  backdrop-filter: var(--blur-nav);
  -webkit-backdrop-filter: var(--blur-nav);
  animation: nav-in var(--dur-reveal) var(--ease-out-expo) 0.15s both;
}
.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--paper-0);
  font-size: var(--text-meta);
  font-weight: 600;
  letter-spacing: var(--track-label);
  text-transform: uppercase;
}
.dot {
  width: var(--dot-size);
  height: var(--dot-size);
  border-radius: var(--radius-round);
  background: var(--amber-400);
  box-shadow: var(--ring-dot);
}
.links { display: flex; align-items: center; gap: 4px; }
.link {
  padding: 8px 12px;
  font-size: var(--text-meta);
  color: var(--paper-1);
  letter-spacing: var(--track-tight-mono);
  transition: color var(--dur-hover), font-weight var(--dur-hover);
}
.link:hover,
.link.current { color: var(--paper-0); font-weight: 600; }
.lang { margin-left: 12px; }

.line { position: relative; height: 1px; opacity: 0.9; }
.line::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 1px;
  height: 16px;
  pointer-events: none;
  opacity: 0.3;
  filter: blur(11px);
  background: var(--prism-sweep);
  background-size: var(--prism-size);
  animation: prism-sweep var(--prism-period) linear infinite;
}

.burger,
.menu { display: none; }

@media (max-width: 760px) {
  .nav { background: var(--scrim-nav-mobile); }
  .bar { padding-top: 14px; padding-bottom: 14px; }
  .brand { gap: 9px; font-size: var(--text-label); }
  .links,
  .line::after { display: none; }

  .burger {
    display: flex;
    align-items: center;
    gap: 9px;
    min-height: var(--hit-min);
    padding: 0 14px;
    border: var(--border-control-1);
    background: var(--surface-hover);
    color: var(--paper-0);
    font: inherit;
    font-size: var(--text-micro);
    letter-spacing: var(--track-label);
    text-transform: uppercase;
    cursor: pointer;
  }
  .lines { display: flex; flex-direction: column; gap: 3px; width: 14px; }
  .lines i { height: 1px; background: var(--amber-400); }

  /* closing is faster and eases in; opening eases out */
  .menu {
    display: block;
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transform: translateY(calc(-1 * var(--menu-link-drift)));
    background: var(--scrim-menu);
    border-bottom: var(--border-hair);
    transition:
      max-height var(--dur-menu-close) var(--ease-menu-close),
      opacity 0.3s ease,
      transform var(--dur-menu-close) var(--ease-menu-close);
  }
  .menu.open {
    max-height: 420px;
    opacity: 1;
    transform: none;
    transition:
      max-height var(--dur-menu-open) var(--ease-menu-open),
      opacity 0.45s ease 0.04s,
      transform var(--dur-menu-open) var(--ease-menu-open);
  }
  .menu-link {
    display: flex;
    align-items: center;
    min-height: var(--bar-h-m);
    padding: 0 var(--gutter-page);
    border-bottom: 1px solid var(--surface-4);
    color: var(--paper-0);
    font-size: var(--text-15);
    letter-spacing: var(--track-tight-mono);
    transform: translateY(calc(-1 * var(--menu-link-drift)));
    transition: transform var(--dur-menu-close) var(--ease-menu-close);
  }
  .menu.open .menu-link {
    transform: none;
    transition: transform var(--dur-menu-open) var(--ease-menu-open) calc(var(--i) * var(--stagger-menu-link));
  }
  .menu-link:last-of-type { color: var(--amber-400); }
  .menu-lang {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    min-height: var(--menu-row-h-m);
    padding: 0 var(--gutter-page);
  }
}
</style>
