import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass'],
  build: {
    transpile: ['vuetify']
  },
  vite: {
    plugins: [
      eslintPlugin()
    ]
  },

  srcDir: 'src/',

  modules: [
    // ...
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore',
          ['defineStore', 'definePiniaStore']
        ]
      }
    ]
  ]
});
