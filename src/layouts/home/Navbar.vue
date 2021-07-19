<template>
 <div>
        <v-app-bar 
          app 
          elevation="6"
          color="white"
        >
          <v-toolbar-title class="ml-6">
            <router-link to="/biensaude">
              <v-img max-width="230px" src="/logo.png" > </v-img>
            </router-link>
          </v-toolbar-title>
            
          <v-spacer></v-spacer>

          <div class="hidden-xs-only">
          <v-tabs 
           v-model="tabs" 
           optional>
          <v-tab v-for="(name, i) in items"
            :key="i"
             :to="{ name }"
            :ripple="false"
            text class="secondary--text" >
           <span >
           {{ name }}
            </span> 
          </v-tab>
          
          
          <v-tabs-slider color="primary"></v-tabs-slider>
        </v-tabs>
        </div>
        <v-btn to="/login" text class=" ml-8" >
          <v-icon left>account_circle</v-icon>
          <span>Entrar</span> 
        </v-btn>
      
        <v-btn to="/register" class="mr-6" color="primary" >
           Registar
        </v-btn>
        </v-app-bar>
    </div>
</template>

<script>

export default {

    data() {
        return {

            tabs: null,
            snackbar: true,
             items: [
             'Início',
              'Sobre',
              'Serviços',
              'Contactos',
            ],
        }
    },
  }
</script>

