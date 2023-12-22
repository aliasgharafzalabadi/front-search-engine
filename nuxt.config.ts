// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({

  css : ['@mdi/font/css/materialdesignicons.min.css'],

  devtools: { enabled: true },
  // modules: ['@pinia/nuxt'],
  

  build :{
    transpile :['vuetify']
  },

  imports: {
    dirs: ['stores'],
  },
  
})
