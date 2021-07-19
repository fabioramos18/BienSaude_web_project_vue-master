<template>
  <div 
    id="testservice"  
    class="py-10 my-10"
  >
    <v-container >
      <v-tabs id="servicemenu" class="display-3 mb-16">
        <v-tab v-on:click="modal_1=true, modal_2=false, modal_3=false">Massagens</v-tab>
        <v-tab v-on:click="modal_2=true, modal_1=false, modal_3=false">Reabiltação Física</v-tab>
        <v-tab v-on:click="modal_3=true, modal_1=false, modal_2=false">Apoio ao cliente</v-tab>
      </v-tabs>
      <div id="vue">
        <div>
          <div class="c-modal" v-show="modal_1">
          <base-info-card class="mb-6" title="Todas as nossas massagens" />
          <v-row>
            <v-col cols="3" v-for="massage in massages" :key="massage.id">
              <v-card
                class="mx-auto"
                max-width="400"
                min-height="410"
              >
                <v-img
                v-if="massage.upload"
                  class="white--text align-end"
                  height="200px"
                  :src="massage.upload"
                />
                  <v-card-title>{{massage.title}}</v-card-title>
                  <v-card-text class="text--primary">
                    {{massage.shortDescription}}
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="orange"
                      text
                      @click="goTodetail(massage.id)"
                    >
                      Detalhes
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </div>
          <div class="bg" v-show="modal_1" v-on:click="modal_1=!modal_1"></div>
        </div>
        <div>
          <div class="c-modal" v-show="modal_2">
            <base-info-card class="mb-6" title="Todas as nossas reabilitações físicas" />
            <v-row>
              <v-col cols="3" v-for="rehabilitation in rehabilitations" :key="rehabilitation.id">
                <v-card
                  class="mx-auto"
                  max-width="400"
                  min-height="410"
                >
                
                  <v-img
                  v-if="rehabilitation.image"
                    class="white--text align-end"
                    height="200px"
                    :src="rehabilitation.image"
                  />
                  <v-card-title>{{rehabilitation.title}}</v-card-title>
                  <v-card-text class="text--primary" height="200px">
                    <div>{{rehabilitation.shortDescription}}</div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="orange"
                      text
                      @click="goTodetail(rehabilitation.id)"
                    >
                      Detalhes 
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </div>
          <div class="bg" v-show="modal_2" v-on:click="modal_2=!modal_2"></div>
        </div>
        <div>
          <div class="c-modal" v-show="modal_3">
              <!--aqq-->
              <base-business-info>
            frLorem ipsum dolor, sit amet consectetur adipisicing elit. Illo pariatur quidem, quis modi iure nihil commodi suscipit, corporis dicta adipisci, voluptatum quia cupiditate.
          </base-business-info>
          </div>
          <div class="bg" v-show="modal_3" v-on:click="modal_3=!modal_3"></div>
        </div>
      </div>
    </v-container>
  </div>   
</template>


<script>
import{ db, storage} from '@/firebase.js';
import BusinessInfo from '@/components/base/BusinessInfo.vue'
  export default {
    name: 'BaseHeading',

   // massId:this.$route.params.Pid,
   

    components: {
      BaseInfoCard: () => import('@/components/base/InfoCard'),
      'base-business-info': BusinessInfo,
    },
    data() {
      return{
      massages:[],
      rehabilitations:[],
      showmassage: false,
      showrehabilitation: false,
      showsupport: false,
      modal_1: true,
      modal_2: false,
      modal_3: false,

      
      }
    },
    created() {
      try{
        db.collection("massages").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().upload) {
            storage
              .ref()
              .child(doc.data().upload)
              .getDownloadURL()
              .then((url) => {
                this.massages.push({
                  id: doc.id,
                  title: doc.data().title,
                  shortDescription: doc.data().shortDescription,
                  upload: url,
                })
              })
          } else {
            this.massages.push({
              id: doc.id,
              title: doc.data().title,
              shortDescription: doc.data().shortDescription,
            })
          }

          // end pertinent change
        })
      })
    }catch(e){
      console.log(e)
    }
    try{
        db.collection("rehabilitations").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().upload) {
            storage
              .ref ()
              .child(doc.data().upload)
              .getDownloadURL()
              .then((url) => {
                this.rehabilitations.push({
                  id: doc.id,
                  title: doc.data().title,
                  shortDescription: doc.data().shortDescription,
                  image: url,
                })
              })
          } else {
            this.rehabilitations.push({
              id: doc.id,
              title: doc.data().title,
              shortDescription: doc.data().shortDescription,
            })
          }

          // end pertinent change
        })
      })
    }catch(e){
      console.log(e)
    }
    },

    props: {
      tag: {
        type: String,
        default: 'h1',
      },
    },
    methods:{
    goTodetail(massId){
      this.$router.push({name: 'details', params:{Pid:massId} })
    }
  },

  }
</script>

<style>



#Services{
 background-color:WhiteSmoke;
}

</style>
