<template>
 <div>
        <v-app-bar 
          app 
          elevation="6"
          color="white"
        >
          <v-toolbar-title class="ml-6">
            <v-img max-width="230px" src="/logo.png" > </v-img>
          </v-toolbar-title>
            
          <v-spacer></v-spacer>

          <div class="hidden-xs-only">
          <v-tabs 
           v-model="tabs" 
           optional>
          <v-tab to='/' class="secondary--text" href="#one">
           <span >
           Início 
            </span> 
          </v-tab>
          <v-tab class="secondary--text" href="#two">
            <span>
              Quem Somos
            </span> 
          </v-tab>
          <v-tab to='/services' class="secondary--text" href="#three">
            <span>
              Serviços 
            </span> 
          </v-tab>
          <v-tab to='/contacts' class="secondary--text" href="#four">
            <span>
              Contactos 
            </span> 
          </v-tab>
          <v-tabs-slider color="primary"></v-tabs-slider>
        </v-tabs>
        </div>
        <v-btn text class=" ml-8" href="#five">
          <v-icon left>account_circle</v-icon>
          <span>Entrar</span> 
        </v-btn>
      
        <v-btn class="mr-6" color="primary" >
           Registar
        </v-btn>
        </v-app-bar>
    </div>
</template>

<script>

export default {

    data() {
        return {

            links:[
                 {icon: 'dashboard', text:'Dashboard', route:'/'},
                 {icon: 'folder', text:'My Projects', route:'/projects'},
                 {icon: 'person', text:'Team', route:'/team'},

            ],
            snackbar: true
        }
    },
  }
</script>

