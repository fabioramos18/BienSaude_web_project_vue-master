import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@mdi/font/css/materialdesignicons.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import pt from 'vuetify/es5/locale/pt'


import {
  VCol,
  VRow,
} from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VCol,
    VRow,
  },
})

Vue.component('my-component', {
  methods: {
    changeLocale () {
      this.$vuetify.lang.current = 'pt'
    },
  },
})

export default new Vuetify({
  lang: {
    locales: { pt },
    current: 'pt',
  },
  theme: {
    themes: {
      light: {
        primary: '#91c152',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#b71c1c',
        
      },
      
    },
  },
});
