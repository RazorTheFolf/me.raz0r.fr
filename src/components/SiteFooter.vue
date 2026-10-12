<script setup lang="ts">
import SectionHeading from './SectionHeading.vue'

defineProps<{ command: string }>()
</script>

<template>
  <footer id="contact" class="footer">
    <div class="prism edge"></div>
    <div class="glow"></div>
    <div class="container inner">
      <SectionHeading :command="command" />
      <slot />
      <div class="bottom">
        <span>© 2026 Raoul Iftode</span>
        <slot name="meta" />
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  z-index: var(--z-nav);
  margin-top: clamp(40px, 8vh, 90px);
  border-top: var(--border-hair);
  overflow: hidden;
}
.edge { position: absolute; left: 0; right: 0; bottom: 0; height: 2px; z-index: var(--z-overlay); }
.glow {
  position: absolute;
  bottom: -40%;
  left: -15%;
  width: 130%;
  height: 150%;
  pointer-events: none;
  background: var(--glow-strong);
  animation: ember-drift-alt 22s ease-in-out infinite;
}
.inner {
  position: relative;
  z-index: var(--z-content);
  padding-top: clamp(70px, 12vh, 130px);
  padding-bottom: clamp(36px, 5vh, 56px);
}
.bottom {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: clamp(60px, 10vh, 110px);
  padding-top: 22px;
  border-top: 1px solid var(--line-soft);
  font-size: var(--text-label);
  letter-spacing: var(--track-button);
  text-transform: uppercase;
  color: var(--paper-1);
}

@media (max-width: 760px) {
  .glow { background: var(--glow-strong-mobile); }
}
</style>
