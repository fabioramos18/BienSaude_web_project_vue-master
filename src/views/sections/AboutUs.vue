<template>
  <section 
    id="about-us"
    class="overflow-hidden mr-5 mt-16"
  >
   <v-container class="fill-height my-16 px-4 py-16">
     
      <v-row no-gutters>
        <v-col
          cols="12"
          md="6"
          
          class="mx-1"
        >
          <v-img
            :src="require('@/assets/fisio3.jpg')"
            height="100%"
            width="100%"
          />
        </v-col>

        <v-col
          class="align-content-space-between layout wrap"
          cols="12"
          md="5"
          :pa-5="$vuetify.breakpoint.smAndDown"
        >
        

          <v-row
            align="center"
            justify="center"
          >
            <v-col
              cols="12"
              md="10"
              class="ml-6"
            >
              <v-heading 
                  :is="tag"
                  class="display-3 v-heading mt-6 mb-3 text-center"
                  >Bem-vindo/a
              </v-heading>
              <p text-center>
                Lorem ipsum dolor sit amet, consectetur ad
                ipiscin elit. Etiam vulputate augue vel felis gra
                vida porta. Lorem ipsum dolor sit amet, cons
                ectetur adipiscing elit.<br>
                Lorem ipsum dolor sit amet, consectetur ad
                ipiscin elit. Etiam vulputate augue vel felis gra
                vida porta. Lorem ipsum dolor sit amet, cons
                ectetur adipiscing elit.
              </p>
              <router-link to="/e/sobre" style="text-decoration: none">
                <base-btn class="mt-4">
                  Saiba mais!
                </base-btn>
              </router-link>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>



<script>
  export default {
    name: 'BaseHeading',
    components:{
      BaseText: () => import('@/components/base/Info'),

    },
    props: {
      tag: {
        type: String,
        default: 'h1',
      },
    },
  }
</script>

<style>
</style>
