<script setup lang="ts">
import type { FactRow } from '../types'

defineProps<{ rows: FactRow[]; dark?: boolean }>()
</script>

<template>
  <div class="facts" :class="{ dark }">
    <div v-for="row in rows" :key="row.label" class="row">
      <span class="key">{{ row.label }}</span>
      <span class="val">{{ row.value }}</span>
    </div>
  </div>
</template>

<style scoped>
.facts { display: grid; gap: 1px; background: var(--line-hair); border: var(--border-hair); }
.row {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 18px;
  background: var(--surface-2);
  font-size: var(--text-meta);
}
.dark .row { padding: 13px 16px; background: var(--ink-0); }
.key { color: var(--paper-1); letter-spacing: var(--track-button); text-transform: uppercase; }
.val { color: var(--paper-0); text-align: right; }
</style>
