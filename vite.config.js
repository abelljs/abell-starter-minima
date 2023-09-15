import { defineConfig } from 'abell';
import { vitePluginMdToHTML } from 'vite-plugin-md-to-html';
import inlineSource from 'vite-plugin-inline-source';

export default defineConfig({
  plugins: [
    vitePluginMdToHTML({
      resolveImageLinks: true,
      syntaxHighlighting: true
    }),
    inlineSource()
  ]
})