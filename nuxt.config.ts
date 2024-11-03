// https://nuxt.com/docs/api/configuration/nuxt-config
import Lara from '@primevue/themes/lara';
import { definePreset } from '@primevue/themes';

const MyPreset = definePreset(Lara, {
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

  hooks: {
    'prerender:routes' ({ routes }) {
      routes.clear() // Do not generate any routes (except the defaults)
    }
  },
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@primevue/nuxt-module', 'nuxt-auth-sanctum', '@nuxt/icon'], 
  sanctum: {
      baseUrl: process.env.BACKEND_URL,
      redirect: {
        onLogin: '/',
        onLogout: '/',
      },
      globalMiddleware: {
          enabled: true,
      },
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