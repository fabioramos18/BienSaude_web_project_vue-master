
<template>
  <section id="headerinfo">
    
    <v-img
      height="800px"
      :src="require('@/assets/imgtest1.jpg')"
      class="white--text"
      gradient="to right, rgba(14,12,11,.71), rgba(14,12,11,.71)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center"
          height="100%"
          max-width="780"
          width="100%"
        >
        <h1 class=" display-3"> BIENSAÚDE </h1>
        <h2 class=" display-1 text-uppercase mb-4">Centro de Massagem e Reabilitação Física</h2>
              
          <p>
                            Aproveite os nossos serviços de Massagens relaxantes e Reabilitação Física.

          </p>
          <div
            class="d-flex flex-wrap  align-center"
          >
            
            <v-tab to="/login" class="primary--text text-decoration-underline" >
            <span >ENTRAR</span> 
          </v-tab>

            <span class="font-weight-bold  mr-6 my-4">ou</span>

           <router-link to="/register" style="text-decoration: none">
              <v-btn >
               Registar
            </v-btn>         
           </router-link>

          </div>
        </v-responsive>
      </v-container>
    </v-img>
     
  </section>
</template>



<script>
  import Btn from '@/components/base/Btn.vue'
  export default {

    components: {
      'v-btn': Btn
    },
    name: 'headerinfo',

    provide: {
      theme: { isDark: true },
    },

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '50vh' : '20vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
    props: {
      color: {
        type: String,
        default: 'primary',
      },
      depressed: {
        type: Boolean,
        default: true,
      },
      minWidth: {
        type: [Number, String],
        default: 164,
      },
      tile: {
        type: Boolean,
        default: true,
      },
    },
  }
</script>



<style>
 
  
</style>