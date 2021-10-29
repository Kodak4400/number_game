<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | SITE_NAME` : `SITE_NAME` }}</template>
  </metainfo>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <OptionButton label="Button" />
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import OptionButton from './components/OptionButton.vue'
import { useMeta } from 'vue-meta'

useMeta({
  title: 'test',
  meta: {
    charset: 'utf-8',
  },
  link: [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/nes.css@latest/css/nes.min.css',
    },
  ],
  // htmlAttrs: { lang: 'en', amp: true },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
