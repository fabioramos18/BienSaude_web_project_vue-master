import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@mdi/font/css/materialdesignicons.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

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

export default new Vuetify({
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
