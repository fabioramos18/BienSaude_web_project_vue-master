<template>
    <div 
      id="about-page"  
      class="my-10"
    >
     <v-container >
       
        <v-row no-gutters>
            <v-col
                cols="12"
                md="6"
                class="pa-2"
              >
                <v-card
    class="mx-auto"
    outlined
    elevation="10"
  >
  <v-row no-gutters>
    <v-col
      cols="12"
      md="4"
      xs="12"
      class="pa-2"
    >
      <v-img
        src="/fr.jpg"
      ></v-img>
    </v-col>

    <v-col
      cols="12"
      md="8"
      class="pa-2"
    >
      
      <v-list-item-content class="">
        <v-list-item-title class="headline mb-1">
         Fábio Ramos
        </v-list-item-title>
        <v-list-item-subtitle>
          <v-icon> location_on </v-icon>
          Lisboa, Portugal
        </v-list-item-subtitle>
       
        <v-tab class="primary--text my-4 pa-0 text-decoration-underline" >
            <span >Editar perfil</span> 
          </v-tab>

      </v-list-item-content>
    </v-col>

    <v-col
      cols="12"
      md="12"
      class="pa-2"
    >
      
      <v-list-item-content>
        <v-list-item-title class="primary--text subtitle-1 mb-0">
         Dados Pessoais
        </v-list-item-title>
        <v-divider class="primary--text"></v-divider>
        <div class="pt-5">
          <h4 style="text-transform: uppercase" class="py-3 mb-3" >
            Informações de Contacto
          </h4>
          
            <v-row class="email-content" no-gutters>
              <v-col
              cols="12"
              md="4"
              class="pa-2">
                <span class="font-weight-bold">Email:</span>
              </v-col>
              <v-col
              cols="12"
              md="8"
              class="pa-2">
                <span>fabioramos10h@gmail.com</span>
              </v-col>
            </v-row>
            <v-row class="email-content" no-gutters>
              <v-col
              cols="12"
              md="4"
              class="pa-2">
                <span class="font-weight-bold">Endereço:</span>
              </v-col>
              <v-col
              cols="12"
              md="8"
              class="pa-2">
                <span>123, Rajar Goli, South Mugda</span>
              </v-col>
            </v-row>
            <v-row class="email-content" no-gutters>
              <v-col
              cols="12"
              md="4"
              class="pa-2">
                <span class="font-weight-bold">Telemóvel:</span>
              </v-col>
              <v-col
              cols="12"
              md="8"
              class="pa-2">
                <span>963786278</span>
              </v-col>
            </v-row>
        </div>
        

      </v-list-item-content>
    </v-col>

    <v-col
      cols="12"
      md="12"
      class="pa-2"
    >
      
      <v-list-item-content>
        <div>
          <h4 style="text-transform: uppercase" class="py-3 mb-3" >
            Informações Básicas
          </h4>
          
            <v-row class="email-content" no-gutters>
              <v-col
              cols="12"
              md="4"
              class="pa-2 font-weight-bold">
                <span class="font-weight-bold">Data de Nascimento:</span>
              </v-col>
              <v-col
              cols="12"
              md="8"
              class="pa-2">
                <span>January 31, 1990</span>
              </v-col>
            </v-row>
            <v-row class="email-content" no-gutters>
              <v-col
              cols="12"
              md="4"
              class="pa-2">
                <span class="font-weight-bold">Género:</span>
              </v-col>
              <v-col
              cols="12"
              md="8"
              class="pa-2">
                <span>Masculino</span>
              </v-col>
            </v-row>
        </div>
        

      </v-list-item-content>
    </v-col>
  </v-row>
  </v-card>
  </v-col>

  <v-col
      cols="12"
      md="3"
      class="pa-2"
    >
      <v-card
    class="mx-auto"
    outlined
    elevation="10"
  >
  <v-card-title>
    Consultas Agendadas:
  </v-card-title>
  <v-card-text class="display-3 text-center">
      123
  </v-card-text>
  
  </v-card>
  </v-col>

  <v-col
    cols="12"
    md="3"
    class="pa-2"
  >
    <v-card
    class="mx-auto"
    outlined
    elevation="10"
  >
    <v-card-title>
      Consultas Realizadas:
    </v-card-title>
    <v-card-text class="display-3 text-center">
      123
    </v-card-text>  
  </v-card>
  </v-col>

            
          </v-row>
          </v-container>
    </div>   
  
</template>



<script>
  export default {
    name: 'AbouPage',
    
    props: {
      tag: {
        type: String,
        default: 'h1',
      },
    },
  }
</script>

<style>

h2{
  font-size: 35px;
  
}
</style>
