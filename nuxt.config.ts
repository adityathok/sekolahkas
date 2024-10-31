// https://nuxt.com/docs/api/configuration/nuxt-config
import Nora from '@primevue/themes/nora';
import { definePreset } from '@primevue/themes';

const MyPreset = definePreset(Nora, {
  semantic: {
      primary: {
          50: '{blue.50}',
          100: '{blue.100}',
          200: '{blue.200}',
          300: '{blue.300}',
          400: '{blue.400}',
          500: '{blue.500}',
          600: '{blue.600}',
          700: '{blue.700}',
          800: '{blue.800}',
          900: '{blue.900}',
          950: '{blue.950}'
      }
  }
});

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [    
    '@primevue/nuxt-module',
    'nuxt-auth-sanctum'
  ], 
  sanctum: {
      baseUrl: 'http://localhost:8000', // Laravel API
  },
  primevue: {
      options: {
          theme: {
              preset: MyPreset,
              options: {
                  prefix: 'p',
                  darkModeSelector: '.color-scheme-dark',
                  cssLayer: false
              }
          }
      }
  }
})