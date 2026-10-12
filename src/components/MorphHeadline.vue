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

// Each phrase stays on one line when it fits, like before; in char mode it
// can still wrap at its spaces, never inside a word
const phrases = computed(() => {
  let n = 0
  return props.words.map((phrase, i) => ({
    accent: i === props.accent,
    words: (props.by === 'char' ? phrase.split(' ') : [phrase]).map((word, j) => {
      if (j > 0) n++ // the space keeps its beat
      return (props.by === 'char' ? [...word] : [word]).map((text) => ({
        text,
        delay: `${(start.value + n++ * props.stagger).toFixed(3)}s`,
      }))
    }),
  }))
})
</script>

<template>
  <h1 :key="props.words.join(' ')" class="headline" :aria-label="props.words.join(' ')">
    <template v-for="(phrase, i) in phrases" :key="i">
      <span class="phrase" :class="{ accent: phrase.accent }" aria-hidden="true">
        <template v-for="(parts, j) in phrase.words" :key="j">
          <template v-if="j">{{ ' ' }}</template>
          <span class="word">
            <!-- invisible copy at the final weight holds the layout -->
            <span class="ghost">
              <span v-for="(part, k) in parts" :key="k" class="part">{{ part.text }}</span>
            </span>
            <!-- the morph runs on top, out of flow, so it never reflows the headline -->
            <span class="morph">
              <span
                v-for="(part, k) in parts"
                :key="k"
                class="part"
                :style="{ animationDelay: part.delay, animationDuration: `${duration}s` }"
              >{{ part.text }}</span>
            </span>
          </span>
        </template>
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
.phrase { display: inline-block; vertical-align: bottom; }
.word {
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
  white-space: nowrap;
}
.ghost { visibility: hidden; }
.morph { position: absolute; inset: 0; contain: strict; }
.part { display: inline-block; white-space: pre; }
.morph .part {
  animation-name: char-rise, char-weight;
  animation-timing-function: var(--ease-out-expo), step-end;
  animation-fill-mode: both;
}
</style>
