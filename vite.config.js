import { defineConfig } from 'abell';
import { vitePluginMdToHTML } from 'vite-plugin-md-to-html';

export default defineConfig({
  plugins: [
    vitePluginMdToHTML({
      resolveImageLinks: true,
      syntaxHighlighting: true
    }),
  ],
  abell: {
    // This in combination of `resolveImageLinks: true` has an issue where it skips resolving links in pages where transformation was skipped
    optimizedTransformations: false
  }
})