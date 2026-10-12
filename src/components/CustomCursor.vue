<script setup lang="ts">
import { onMounted, onUnmounted, reactive } from 'vue'

const cursor = reactive({ x: -50, y: -50, visible: false, over: false })

function move(e: PointerEvent) {
  cursor.x = e.clientX
  cursor.y = e.clientY
  cursor.visible = true
  cursor.over = !!(e.target as Element).closest('a, button, .card')
}
const hide = () => (cursor.visible = false)

onMounted(() => {
  window.addEventListener('pointermove', move)
  document.documentElement.addEventListener('pointerleave', hide)
})
onUnmounted(() => {
  window.removeEventListener('pointermove', move)
  document.documentElement.removeEventListener('pointerleave', hide)
})
</script>

<template>
  <div
    class="cursor"
    :class="{ visible: cursor.visible, over: cursor.over }"
    :style="{ transform: `translate3d(${cursor.x - 7}px, ${cursor.y - 7}px, 0)` }"
    aria-hidden="true"
  >
    <i></i>
  </div>
</template>

<style scoped>
.cursor {
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-cursor);
  pointer-events: none;
  opacity: 0;
  mix-blend-mode: difference;
  transition: transform var(--dur-hover) var(--ease-out-expo), opacity 0.3s;
}
.cursor.visible { opacity: 1; }
.cursor i {
  display: block;
  width: 14px;
  height: 14px;
  border: 1px solid var(--amber-a85);
  transition: transform 0.4s var(--ease-out-expo), background-color 0.4s;
}
.cursor.over i { transform: scale(2.8); background: var(--amber-a18); }

@media (pointer: coarse) {
  .cursor { display: none; }
}
</style>
