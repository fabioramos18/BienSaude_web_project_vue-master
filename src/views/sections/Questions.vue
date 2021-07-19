<template>
    <div 
      id="about-page"  
      class="py-10 my-10"
    >
      <v-container>
        
       <h2 
          class="mb-6 mt-4 text-center"
          >
            Perguntas Frequentes (FAQ'S)
        </h2>
        
  <v-col
      cols="12"
      md="12"
      class="pa-2"
    >
      <v-card
    class="mx-auto"
    outlined
    elevation="10"
  >
   <v-expansion-panels focusable popout>
    <v-expansion-panel
    
    >
      <v-expansion-panel-header  class="primary--text"><h3>Como desmarcar uma consulta?</h3></v-expansion-panel-header>
      <v-expansion-panel-content>
         Pode desmarcar ligando para a nossa linha de apoio: 929 293 747 ou 967 656 778. Esta ação é gratuita não lhe será cobrado qualquer taxa. 
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel
    
    >
      <v-expansion-panel-header  class="primary--text"><h3>Quais as massagens mais indicadas para mim?</h3></v-expansion-panel-header>
      <v-expansion-panel-content>
        Nós disponibilizamos todas as informações necessárias dos nossos serviços. Para encontrá-las basta dirigir-se a página serviços, escolher massagens ou reabitações e carregar em "Detalhes".
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel
    
    >
      <v-expansion-panel-header  class="primary--text"><h3>Quais as reabiltações mais indicadas para mim?</h3></v-expansion-panel-header>
      <v-expansion-panel-content>
        Nós disponibilizamos todas as informações necessárias dos nossos serviços. Para encontrá-las basta dirigir-se a página serviços, escolher massagens ou reabitações e carregar em "Detalhes".
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel
    
    >
      <v-expansion-panel-header  class="primary--text"><h3>Todas as pessoas podem receber massagens?</h3></v-expansion-panel-header>
      <v-expansion-panel-content>
        Algumas condições físicas fazem com que seja inviável receber massagens, se se encontrar em alguma destas situações, por favor aconselhe-se com um médico antes de realizar sessões de massagens.
      </v-expansion-panel-content>
    </v-expansion-panel>
    
  </v-expansion-panels>
  
  </v-card>
  </v-col>

      
      </v-container>
    </div>   
  
</template>



<script>
  export default {
    name: 'Questions',
    
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
