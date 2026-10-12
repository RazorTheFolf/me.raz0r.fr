<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    words: string[]
    accent?: number
    by?: 'char' | 'word'
    delay?: number
    stagger?: number
    duration?: number
  }>(),
  { accent: -1, by: 'char', delay: 0, stagger: 0.022, duration: 1.2 },
)

// Long intro delay on first load only; a language switch replays immediately
const start = ref(props.delay)
watch(() => props.words.join(' '), () => (start.value = 0))

const words = computed(() => {
  let n = 0
  return props.words.map((word, i) => ({
    accent: i === props.accent,
    parts: (props.by === 'char' ? [...word] : [word]).map((text) => ({
      text,
      delay: `${(start.value + n++ * props.stagger).toFixed(3)}s`,
    })),
  }))
})
</script>

<template>
  <h1 :key="props.words.join(' ')" class="headline" :aria-label="props.words.join(' ')">
    <template v-for="(word, i) in words" :key="i">
      <span class="word" :class="{ accent: word.accent }" aria-hidden="true">
        <span
          v-for="(part, j) in word.parts"
          :key="j"
          class="part"
          :style="{ animationDelay: part.delay, animationDuration: `${duration}s` }"
        >{{ part.text }}</span>
      </span>
      {{ ' ' }}
    </template>
  </h1>
</template>

<style scoped>
.headline {
  font-family: var(--font-display);
  line-height: var(--leading-display);
  letter-spacing: var(--track-display);
  color: var(--paper-0);
  font-variation-settings: var(--vf-display-rest);
  text-wrap: balance;
}
.word { display: inline-block; overflow: hidden; vertical-align: bottom; }
.part {
  display: inline-block;
  white-space: pre;
  animation-name: char-morph;
  animation-timing-function: var(--ease-out-expo);
  animation-fill-mode: both;
}
</style>
