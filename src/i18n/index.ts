import { createI18n, useI18n } from 'vue-i18n'
import en from './en'
import fr from './fr'
import type { Locale } from '../types'

const STORAGE_KEY = 'rx-lang'
const saved: Locale = localStorage.getItem(STORAGE_KEY) === 'fr' ? 'fr' : 'en'

export const i18n = createI18n({
  legacy: false,
  locale: saved,
  fallbackLocale: 'en',
  messages: { en, fr },
})

document.documentElement.lang = saved

export function setLocale(lang: Locale) {
  i18n.global.locale.value = lang
  localStorage.setItem(STORAGE_KEY, lang)
  document.documentElement.lang = lang
}

// t() for strings, list() for message arrays
export function useText() {
  const { t, tm, rt } = useI18n()
  const list = (key: string): string[] => (tm(key) as unknown[]).map((m) => rt(m as Parameters<typeof rt>[0]))
  return { t, list }
}
