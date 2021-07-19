<template>
          <v-container class="fill-height" fluid>

<v-spacer></v-spacer>
           <div>

             <v-alert
             v-model="cancel"
              color="primary"
              dismissible
              text
               elevation="14"
              type="success"
            >

            Consulta eliminada com sucesso ! 
            </v-alert>
           </div>

            <v-row align="center" justify="center">
                <v-col cols="12" sm="10" md="10">
                    <v-card class="elevation-12">
                        <v-card-text class="pa-7 mt-12">
                            <h3 class="text-center ts my-5">Consultas Agendadas</h3>
                            
  <v-data-table
    primary
    :headers="headers"
    :items="desserts"
    :search="search"
    sort-by="name"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Consultas Agendadas</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>   

      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Pesquisar"
        single-line
        hide-details
      ></v-text-field>


        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>   



        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
              

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                    readonly
                      v-model="editedItem.id"
                      label="Id de marcação"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Nome"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.Contacto"
                      label="Contacto"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.birth"
                      label="Data de Nascimento"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.morada"
                      label="Morada"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.clinica"
                      label="Clinica"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.service"
                      label="Serviço"
                    ></v-text-field>
                  </v-col>
                  
             <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                            

<v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="editedItem.bookingDate"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="editedItem.bookingDate"
            label="Data da consulta"
            readonly
                    

            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="editedItem.bookingDate"
          no-title
          scrollable
          :min="new Date().toISOString().substr(0, 10)"
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
                            

                    <!--<v-text-field
                    outlined
                      v-model="editedItem.bookingDate"
                      label="Data da consulta"
                    ></v-text-field>-->
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.tech"
                      label="Técnico/a designado/a"
                    ></v-text-field>
                   
                  </v-col>

                       
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Fechar
              </v-btn>
              
              <v-btn
                color="red darken-1"
                text
                @click="dlt"
              >
                Eliminar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
     
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      
    </template>
    
  </v-data-table>


                        </v-card-text>   
                    </v-card>
                </v-col>
            </v-row>
          </v-container>
</template>

<script>
import{db,fb} from '@/firebase.js';

export default {
    name: 'ScheduledAppointments',
    data() {
        return{
          search: '',
          menu: false,
cancel:false,
servicemassage:'',
            isLoading: false,
            valid: false,
           date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
           dialog: false,
            tec:[],
      headers: [
        { text: 'ID Marcação',align: 'start', value: 'id' , sortable: false,width: "500px"},
        {
          text: 'Nome do Utente',
          align: 'start',
          value: 'name',
          width: "500px"
        },
        
        { text: 'Contacto', value: 'Contacto' , sortable: false,width: "300px"},
        { text: 'Data de Nascimento', value: 'birth' , sortable: false,width: "200px"},
        { text: 'Morada', value: 'morada', sortable: false ,width: "200px"},
        { text: 'Clinica', value: 'clinica', sortable: false ,width: "300px"},
        { text: 'Serviço', value: 'service', sortable: false ,width: "200px"},
        { text: 'Data da Consulta', value: 'bookingDate', sortable: false ,width: "200px"},
         { text: 'Técnico/a Designado/a', value: 'tech', sortable: false ,width: "200px"},
        { text: 'Estado', value: 'status', sortable: false ,width: "200px"}, 
        { text: 'Ações', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        name:'',
        Contacto: '',
        birth: '',
        morada: '',
        clinica: '',
        service: '',
        bookingDate: '',
        status:'',
        tech: '',
      },
      defaultItem: {
        id: '',
        name: '',
        Contacto: '',
        birth: '',
        morada: '',
        clinica: '',
        service: '',
        bookingDate: '',
        status:'',
        tech: '',
      },
       }
    },

computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nova Marcação' : 'Agendado'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      
    },

    created () {
      this.initialize()
    },

    methods:{
        resetForm() {
            this.$refs.form.reset()
        },
        
         initialize () {




    
      try{
        //.orderBy("bookingday", "asc")
        // const current = new Date();
      //const date = current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate();
     // const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
      //const dateTime = date ;
      var user = fb.auth().currentUser

        db.collection("bookings").where('status', '==', 'Confirmado').where('userId', '==', user.uid).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          
                this.desserts.push({
                  id:  doc.id,
                  name: doc.data().utenteName +" "+ doc.data().utenteSurname,
                  Contacto: doc.data().utenteNumber,
                  birth: doc.data().utenteBirth,
                 morada: doc.data().morada,
                  clinica: doc.data().center,
                  service: doc.data().service,
                  bookingDate: doc.data().confirmateDay,
                  status:doc.data().status,
                  tech: doc.data().technical,
                })
                              
        })
      })
    }catch(e){
      console.log(e)
    }

  try{
        db.collection("tec").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
                this.tec.push(
                  doc.data().tecName
                )
          }) 
      })
    
      
    }catch(e){
      console.log(e)
    }
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

     

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

    

      save () {
       /* if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }*/


              db.collection("bookings").add({
                confirmateDay: this.date,
                technical: this.tec,
                status:"Confirmado",
                
            })
            .then(() => {
                console.log("Document successfully written!");
                this.desserts.splice(this.editedIndex, 1)
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
                    this.close()
                  },


      dlt(){
        db.collection("bookings").doc(this.editedItem.id).delete().then(() => {
            this.dialog = false;
            this.cancel =true,
          console.log("Document successfully deleted!");
           this.desserts.splice(this.editedIndex, 1);
         
      }).catch((error) => {
        
          console.error("Error removing document: ", error);
      });

       
      }
    }
}
</script>
<style lang="css">
    
.ts{
    font-size: 29px;
}

</style>