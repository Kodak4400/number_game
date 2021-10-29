// const preprocess = require('svelte-preprocess');

module.exports = {
  // "svelteOptions": {
  //   "preprocess": preprocess({
  //     "typescript": true,
  //   })
  // },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "storybook-builder-vite"
  }
}