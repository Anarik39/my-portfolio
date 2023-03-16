import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true })
  ],

  test: {
    environment: 'happy-dom',

    setupFiles: './vitest/vuetify.config.ts',

    deps: {
      inline: ['vuetify']
    },

    globals: true
  }
});