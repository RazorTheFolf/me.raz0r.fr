<script setup lang="ts">
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import NavBar from './components/NavBar.vue'
import CustomCursor from './components/CustomCursor.vue'

const route = useRoute()
const { t } = useI18n()

watchEffect(() => {
  if (route.meta.title) document.title = t(route.meta.title)
})
</script>

<template>
  <div class="page">
    <NavBar :links="route.meta.nav" :current="route.meta.current" />
    <RouterView />
    <CustomCursor />
  </div>
</template>
