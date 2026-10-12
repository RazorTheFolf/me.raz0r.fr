<script setup lang="ts">
import { useText } from '../i18n'
import TreeList from './TreeList.vue'
import type { WatchTopic } from '../types'

const props = defineProps<{ topic: WatchTopic; index: number }>()

const { t, list } = useText()
const key = (field: string) => `parcours.watch.topics.${props.topic}.${field}`
</script>

<template>
  <article class="card card--raised watch">
    <div class="row">
      <span class="num">{{ String(index).padStart(2, '0') }}</span>
      <span class="file">{{ t(key('file')) }}</span>
    </div>
    <h3 class="card-title">{{ t(key('title')) }}</h3>
    <p class="desc">{{ t(key('summary')) }}</p>
    <div class="follow">
      <span class="mini">{{ t('parcours.watch.follow') }}</span>
      <TreeList :items="list(key('follow'))" small />
    </div>
    <div class="take">
      <span class="mini">{{ t('parcours.watch.take') }}</span>
      <span class="take-text">{{ t(key('take')) }}</span>
    </div>
  </article>
</template>

<style scoped>
.watch { padding: 32px 28px 28px; }
.row { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
.file { font-size: var(--text-micro); color: var(--paper-1); letter-spacing: var(--track-mono); }
.desc { flex: none; }
.follow { display: flex; flex-direction: column; gap: 10px; }
.mini {
  font-size: var(--text-10);
  letter-spacing: var(--track-kicker);
  text-transform: uppercase;
  color: var(--amber-400);
}
.take {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: auto;
  padding: 16px 18px;
  border: 1px solid var(--line-amber);
  background: var(--amber-a05);
}
.take-text { font-size: var(--text-body-sm); line-height: var(--leading-tight); color: var(--paper-0); }
</style>
