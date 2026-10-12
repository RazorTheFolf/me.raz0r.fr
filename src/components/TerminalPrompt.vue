<script setup lang="ts">
defineProps<{ command: string; result?: string }>()

// Typing speed scales with the text length, one step per character
const typing = (text: string, delay: number) => ({
  '--steps': text.length,
  '--dur': `${(0.3 + text.length * 0.03).toFixed(2)}s`,
  '--d': `${delay}s`,
})
</script>

<template>
  <div class="prompt">
    <span class="accent">&gt;</span>
    <span class="text">
      <span :key="command" class="type" :style="typing(command, 0.35)">{{ command }}</span>
      <template v-if="result">
        <span class="rise arrow" style="--d: 1.15s"> → </span>
        <span class="type result" :style="typing(result, 1.35)">{{ result }}</span>
      </template>
    </span>
    <span class="caret"></span>
  </div>
</template>

<style scoped>
.prompt {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 20px;
  margin-bottom: 34px;
  font-size: var(--text-body-sm);
  color: var(--paper-1);
}
.text { display: inline-flex; align-items: baseline; white-space: pre; letter-spacing: var(--track-mono); }
.type,
.arrow { display: inline-block; }
.type { animation: type-in var(--dur) steps(var(--steps), end) var(--d) both; }
.result { color: var(--paper-0); }
.caret {
  display: inline-block;
  width: 9px;
  height: 16px;
  background: var(--amber-400);
  animation: blink 1.05s steps(1) infinite;
}

@media (max-width: 760px) {
  .prompt { gap: 9px; margin-bottom: 26px; font-size: var(--text-meta); }
  .caret { width: 8px; height: 14px; }
}
</style>
