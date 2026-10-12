import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ParcoursView from '../views/ParcoursView.vue'
import type { NavLink } from '../types'

declare module 'vue-router' {
  interface RouteMeta {
    title: string
    nav: NavLink[]
    current?: string
  }
}

// Each page lists only the sections it actually contains
const homeNav: NavLink[] = [
  { key: 'home', to: { hash: '#home' } },
  { key: 'projects', to: { hash: '#projects' } },
  { key: 'about', to: { hash: '#about' } },
  { key: 'background', to: { hash: '#background' } },
  { key: 'skills', to: { hash: '#skills' } },
  { key: 'contact', to: { hash: '#contact' } },
]

const parcoursNav: NavLink[] = [
  { key: 'home', to: { path: '/', hash: '#home' } },
  { key: 'background', to: { hash: '#education' } },
  { key: 'watch', to: { hash: '#watch' } },
  { key: 'contact', to: { hash: '#contact' } },
]

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: 'meta.home', nav: homeNav } },
    { path: '/parcours', name: 'parcours', component: ParcoursView, meta: { title: 'meta.parcours', nav: parcoursNav, current: 'background' } },
  ],
  scrollBehavior(to, _from, saved) {
    if (saved) return saved
    // top offset keeps the section clear of the sticky nav
    if (to.hash) return { el: to.hash, top: 72, behavior: 'smooth' }
    return { top: 0 }
  },
})
