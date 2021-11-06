<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | SITE_NAME` : `SITE_NAME` }}</template>
  </metainfo>
  <router-view></router-view>
</template>

<script lang="ts">
import Main from '@/pages/Main.vue';
import { useMeta } from 'vue-meta';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    Main,
  },
  setup () {
    useMeta({
      title: 'Number Game',
      meta: {
        charset: 'utf-8',
      },
      link: [
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/nes.css@latest/css/nes.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Press+Start+2P',
        },
      ],
      // htmlAttrs: { lang: 'en', amp: true },
    })
  },
})
</script>

<style>
  @font-face {
    font-family: "Nu きなこもち";
    src: url('./assets/fonts/NuKinakoMochi-Reg.otf') format('opentype');
  }
  html, body, pre, code, kbd, samp {
      font-family: "Press Start 2P";
  }
  /* #app {
    font-family: "font-family you want to use";
  } */
</style>
