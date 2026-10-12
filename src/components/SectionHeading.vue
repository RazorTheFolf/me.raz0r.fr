<script setup lang="ts">
defineProps<{ command: string }>()
</script>

<template>
  <div class="head">
    <h2 class="title"><span class="accent">$</span> {{ command }}</h2>
    <div v-if="$slots.aside" class="aside"><slot name="aside" /></div>
  </div>
</template>

<style scoped>
.head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 48px;
}
.title {
  font-family: var(--font-display);
  font-size: var(--text-section);
  letter-spacing: var(--track-section);
  font-variation-settings: var(--vf-section-rest);
}
.aside { display: flex; align-items: center; gap: 16px; }

@media (max-width: 760px) {
  .head { margin-bottom: 32px; }
  .title { font-size: var(--text-section-m); }
}
</style>
