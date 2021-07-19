<template>
          <v-container class="fill-height" fluid>
            <v-spacer></v-spacer>
           <div>

             <v-alert

             v-model="agendar"
              color="primary"
              dismissible
               elevation="14"
              type="success"
            >

            Consulta agendada com sucesso ! 
            </v-alert>
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
           </div>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="10" md="10">
                    <v-card class="elevation-12">
                        <v-card-text class="pa-7 mt-12">
                            <h3 class="text-center ts my-5">Pedidos de Consultas</h3>
                            
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
        <v-toolbar-title>Pedidos de Consultas</v-toolbar-title>
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
          width="50%"
        >
          
          <v-card>
            <v-card-title>
              <span class="headline mb-3">{{ formTitle }}</span>
            </v-card-title>
              

            <v-card-text>
              <v-container>
                <v-row>

                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                  <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    class="pa-0"
                  >
                  <span class="font-weight-bold">ID Marcação: </span>

                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    class="pa-0"
                  >
                    <span>{{editedItem.id}}</span>
                  </v-col>
                  </v-row>
                  </v-col>


                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                  <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    class="pa-0"
                  >
                  <span class="font-weight-bold">Nome: </span>

                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    class="pa-0"
                  >
                    <span>{{editedItem.name}}</span>
                  </v-col>
                  </v-row>
                  </v-col>


                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                  <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    class="pa-0"
                  >
                  <span class="font-weight-bold">Contacto: </span>

                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    class="pa-0"
                  >
                    <span>{{editedItem.Contacto}}</span>
                  </v-col>
                  </v-row>
                  </v-col>


                  
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >

                  <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    class="pa-0"
                  >
                  <span class="font-weight-bold">Morada: </span>

                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    class="pa-0"
                  >
                    <span>{{editedItem.morada}}</span>
                  </v-col>
                  </v-row>
                  </v-col>




   <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >

                  <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    class="pa-0"
                  >
                  <span class="font-weight-bold">Dias preferidos: </span>

                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    class="pa-0"
                  >
                    <span>{{editedItem.favoriteDays}}</span>
                  </v-col>
                  </v-row>
                  </v-col>



   <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >

                  <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    class="pa-0"
                  >
                  <span class="font-weight-bold">Horas preferidas: </span>

                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    class="pa-0"
                  >
                    <span>{{editedItem.favoriteHours}}</span>
                  </v-col>
                  </v-row>
                  </v-col>






                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >

                   <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    class="pa-0"
                  >
                  <span class="font-weight-bold">Clinica: </span>

                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    class="pa-0"
                  >
                    <span>{{editedItem.clinica}}</span>
                  </v-col>
                  </v-row>
                  </v-col>


                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >

                  <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    class="pa-0"
                  >
                  <span class="font-weight-bold">Serviço: </span>

                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    class="pa-0"
                  >
                    <span>{{editedItem.service}}</span>
                  </v-col>
                  </v-row>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  > 
                          <v-divider class="primary--text mb-4"></v-divider>
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
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Data da consulta"
            prepend-icon="mdi-calendar"
            readonly
                    outlined

            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
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
                    <v-select
                                v-model="tech "
                                :items="tec"
                                  label="Técnico/a designado/a"
                                  outlined
                                >
                                
                                </v-select>
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
                color="blue darken-1"
                text
                @click="save"
              >
                Agendar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="380px">
          <v-card>
            <v-card-title class="headline">Cancelar pedido de consulta?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">Sim</v-btn>
              <v-btn color="blue darken-1" text @click="closeDelete">Não</v-btn>

              <v-spacer></v-spacer>
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
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
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
import{db} from '@/firebase.js';

export default {
    name: 'Requests',
    data() {
        return{
          search: '',
          agendar:false,
          cancel:false,
tec:[],
tech: null,
            isLoading: false,
           date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,

           dialog: false,
      dialogDelete: false,
      headers: [
        { text: 'ID Marcação',align: 'start', value: 'id' , sortable: false, width: "500px"},
        
        
        
        {
          text: 'Nome do Utente',
          align: 'start',
          value: 'name',
          width: "500px", 
          sortable: false
        },
        
        { text: 'Contacto', value: 'Contacto' , sortable: false,width: "300px"},
        { text: 'Data de Nascimento', value: 'birth' , sortable: false,width: "200px"},
        { text: 'Morada', value: 'morada', sortable: false ,width: "200px"},
        { text: 'Clinica', value: 'clinica', sortable: false ,width: "300px"},
        { text: 'Serviço', value: 'service', sortable: false ,width: "200px"},
        { text: 'Data da Consulta', value: 'bookingDate', sortable: false ,width: "200px"},
        { text: 'Técnico/a Designado/a', value: 'tech', sortable: false ,width: "200px"},
        { text: 'Estado', value: 'status', sortable: false ,width: "200px"}, 
        { text: 'Ações', value: 'actions', sortable: false, width: "100px"},
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
        favoriteDays: '',
        favoriteHours:'',
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
        return this.editedIndex === -1 ? 'New Selection' : 'Agendar Consulta'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
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
        db.collection("bookings").where("confirmateDay", "==", "").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          
                this.desserts.push({
                  id:  doc.id,
                  name: doc.data().utenteName +" "+ doc.data().utenteSurname,
                  Contacto: doc.data().utentNumber,
                  birth: doc.data().utenteBirth,
                  clinica: doc.data().center,
                  service: doc.data().service,
                  bookingDate: doc.data().confirmateDay,
                  status:doc.data().status,
                  tech: doc.data().tech,
                  favoriteDays: doc.data().favoriteDays,
                  favoriteHours: doc.data().favoriteHours,

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

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {

      db.collection("bookings").doc(this.editedItem.id).delete().then(() => {
        this.cancel = true;
          console.log("Document successfully deleted!");
      }).catch((error) => {
          console.error("Error removing document: ", error);
      });

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

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
/*if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }*/

        db.collection("bookings").doc(this.editedItem.id).update({
    confirmateDay: this.date,
    technical: this.tech,
    status:"Confirmado",
    
})
.then(() => {
  this.agendar = true,
    console.log("Document successfully written!");
    this.desserts.splice(this.editedIndex, 1)
})
.catch((error) => {
    console.error("Error writing document: ", error);
});
        this.close()
      },

      
    }
}
</script>
<style lang="css">
    
.ts{
    font-size: 29px;
}

</style>