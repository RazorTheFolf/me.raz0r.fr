<script setup lang="ts">
import { RouterLink, type RouteLocationRaw } from "vue-router";

withDefaults(
  defineProps<{
    to?: RouteLocationRaw;
    href?: string;
    variant?: "primary" | "ghost" | "download";
    external?: boolean;
  }>(),
  { variant: "primary" },
);
</script>

<template>
  <component
    :is="to ? RouterLink : 'a'"
    :to="to"
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener' : undefined"
    class="btn"
    :class="`btn--${variant}`"
  >
    <span><slot /></span>
  </component>
</template>

<style scoped>
.btn {
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  padding: 16px 26px;
  border: 1px solid;
  font-size: var(--text-meta);
  letter-spacing: var(--track-button);
  text-transform: uppercase;
  transition:
    transform var(--dur-hover) var(--ease-out-expo),
    background-color var(--dur-hover),
    border-color var(--dur-hover),
    color var(--dur-hover);
}
.btn span {
  position: relative;
}

.btn--primary {
  border-color: var(--fill-accent);
  background: var(--fill-accent);
  color: var(--text-on-accent);
  font-weight: 600;
}
.btn--primary:hover {
  background: var(--fill-accent-hover);
  color: var(--text-on-accent);
  transform: translateY(-2px);
}

.btn--ghost {
  border-color: var(--border-control);
  background: var(--surface-hover);
  color: var(--paper-0);
}
.btn--ghost::before {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--fill-accent);
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.55s var(--ease-out-expo);
}
.btn--ghost:hover {
  border-color: var(--fill-accent);
  color: var(--text-on-accent);
}
.btn--ghost:hover::before {
  transform: scaleX(1);
}
</style>
