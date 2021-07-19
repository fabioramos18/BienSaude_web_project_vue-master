<template>
          <v-container class="fill-height" fluid>
          <v-spacer></v-spacer>
           <div>

             <v-alert
             v-model="cancel"
              color="red"
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
                            <h3 class="text-center ts my-5">Hitórico de Consultas</h3>
                            
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
        <v-toolbar-title>Hitórico de Consultas</v-toolbar-title>
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


        <v-dialog v-model="dialogDelete" max-width="540px">
          <v-card>
            <v-card-title class="headline text-center">Tem a certeza que quer apagar a consulta?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
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
          cancel:false,
          search: '',
tech: null,
            isLoading: false,
            valid: false,
           date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,

           dialog: false,
      dialogDelete: false,
      headers: [
        { text: 'ID Marcação',align: 'start', value: 'id' , sortable: false, width: "500px"},
        
        
        
        { text: 'Data da Consulta', value: 'bookingDate', sortable: false ,width: "200px"},
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
        { text: 'Técnico/a Designado/a', value: 'tech', sortable: false ,width: "200px"},
        { text: 'Estado', value: 'status', sortable: false ,width: "200px"}, 
        { text: 'Ações', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        name:'',
        Contacto: 0,
        birth: 0,
        morada: 0,
        clinica: 0,
        service: 0,
        bookingDate: 0,
        bookingRequests: 0,
        status:'',
        tech: '',
      },
      defaultItem: {
        id: '',
        name: 0,
        Contacto: 0,
        birth: 0,
        morada: 0,
        clinica: 0,
        service: 0,
        bookingRequests: 0,
        bookingDate: 0,
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
    
         initialize () {

    
      try{

           //.orderBy("bookingday", "asc")
        // const current = new Date();
      //const date = current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate();
     // const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    //const dateTime = date ;
       
        db.collection("bookings").where('status', '==', 'Concluido').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          
                this.desserts.push({
                  id:  doc.id,
                  name: doc.data().utenteName +" "+ doc.data().utenteSurname,
                  Contacto: doc.data().utentNumber,
                  birth: doc.data().utenteBirth,
                  clinica: doc.data().center,
                  service: doc.data().service,
                  bookingDate: doc.data().confirmateDay,
                  bookingRequests: doc.data().bookingday,
                  status:doc.data().status,
                  tech: doc.data().tech,
                })
                              
        })
      })
    }catch(e){
      console.log(e)
    }

      },

      
      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {

        db.collection("bookings").doc(this.editedItem.id).delete()
        .then(() => {
    this.cancel=true;
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
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});
        this.close()
      },

      dlt(){
        
      }
    }
}
</script>
<style lang="css">
    
.ts{
    font-size: 29px;
}

</style>