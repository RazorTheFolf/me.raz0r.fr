<script setup lang="ts">
defineProps<{ items: string[] }>()
</script>

<template>
  <div class="marquee" aria-hidden="true">
    <!-- two identical copies so the -50% loop is seamless -->
    <div class="track">
      <template v-for="copy in 2" :key="copy">
        <template v-for="item in items" :key="`${copy}-${item}`">
          <span class="item">{{ item }}</span>
          <span class="item accent">✦</span>
        </template>
      </template>
    </div>
  </div>
</template>

<style scoped>
.marquee {
  position: relative;
  overflow: hidden;
  padding: 15px 0;
  border-top: var(--border-hair);
  border-bottom: var(--border-hair);
  background: var(--surface-1);
}
.track { display: flex; width: max-content; animation: marquee 44s linear infinite; }
.item {
  padding: 0 20px;
  font-size: var(--text-label);
  letter-spacing: var(--track-wide);
  text-transform: uppercase;
  color: var(--paper-1);
  white-space: nowrap;
}
</style>
