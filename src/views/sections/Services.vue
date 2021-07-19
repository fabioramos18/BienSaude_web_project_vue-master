<template>
    <div 
      id="services"  
      class="py-16 my-16"
    >
      
        <v-heading 
          :is="tag"
          class="display-3 v-heading mb-16 text-center"
          >
            Serviços
        </v-heading>
        <v-row>
          <v-col cols="12" md="4">
            <v-card
               class="mx-auto"
               max-width="344"
            >
              <v-img
                :src="require('@/assets/massage1.jpg')"
                height="200px"
              >
              </v-img>

              <v-card-title>
                SPA e Massagens
              </v-card-title>


              <v-card-actions>
                <v-btn
                  color="orange lighten-2"
                  text
                >
                  Saiba mais
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                  icon
                  @click="showmassage = !showmassage"
                >
                  <v-icon>{{ showmassage ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
               <div v-show="showmassage">
                <v-divider></v-divider>

                 <v-card-text >
                   A massagem é uma troca de energias em que, através de técnicas de deslizamento, fricção e amassamento, 
                   se trabalha o sistema circulatório, linfático, 
                   nervoso e energético, que proporcionam a descontração do corpo e da mente, combatendo a fadiga física e mental.t.                 
                 </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card
               class="mx-auto"
               max-width="344"
            >
              <v-img
                :src="require('@/assets/fisio4.jpg')"
                height="200px"
              >
              </v-img>

              <v-card-title>
                Reabilitação física
              </v-card-title>


              <v-card-actions>
                <v-btn
                  color="orange lighten-2"
                  text
                >
                  Saiba mais
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                  icon
                  @click="showrehabilitation = !showrehabilitation"
                >
                  <v-icon>{{ showrehabilitation ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
               <div v-show="showrehabilitation">
                <v-divider></v-divider>

                  <v-card-text>
                    Ao contrário do que se pensa, os benefícios da reabiiltação são visíveis não somente em um tratamento de lesões e doenças. É possível perceber o impacto positivo em todo o corpo, nas ações do dia a dia e, ainda, em seu comportamento físico e espiritual.

É importante mencionar que a reabilitação não deve ser usada apenas em casos de recuperação, mas, sim, fazer parte da sua rotina de cuidados com a saúde. 
                 </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card
               class="mx-auto"
               max-width="344"
            >
              <v-img
                :src="require('@/assets/support3.jpg')"
                height="200px"
              >
              </v-img>

              <v-card-title>
                Apoio ao cliente
              </v-card-title>

            

              <v-card-actions>
                <v-btn
                  color="orange lighten-2"
                  text
                >
                  Saiba mais
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                  icon
                  @click="showsupport = !showsupport"
                >
                  <v-icon>{{ showsupport ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
               <div v-show="showsupport">
                <v-divider></v-divider>

                 <v-card-text>
                    Para qualquer questão relacionada com um dos nossos serviços, contacte a nossa Linha de Apoio ao Cliente
                 </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
    </div>   
  
</template>



<script>
  export default {
    name: 'BaseHeading',
    
    data: () => ({
      showmassage: false,
      showrehabilitation: false,
      showsupport: false,
    }),

    props: {
      tag: {
        type: String,
        default: 'h1',
      },
    },
  }
</script>

<style>

#Services{
 background-color:WhiteSmoke;
}
</style>
