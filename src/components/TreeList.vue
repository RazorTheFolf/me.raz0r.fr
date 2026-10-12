<script setup lang="ts">
defineProps<{ items: string[]; small?: boolean }>()
</script>

<template>
  <div class="tree" :class="{ small }">
    <span v-for="(item, i) in items" :key="item">{{ i === items.length - 1 ? '└─' : '├─' }} {{ item }}</span>
  </div>
</template>

<style scoped>
.tree { display: flex; flex-direction: column; gap: 12px; font-size: var(--text-body-sm); color: var(--paper-1); }
.small { gap: 8px; font-size: var(--text-12-5); }
</style>
