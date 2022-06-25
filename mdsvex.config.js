import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],

  layout: './src/routes/__layout-md.svelte',

  smartypants: {
    dashes: 'oldschool'
  },

  highlight: {
    alias: { yavascript: 'javascript' }
  },

  remarkPlugins: [],
  rehypePlugins: []
});

export default config;
