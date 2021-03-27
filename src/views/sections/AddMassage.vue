<template>
          <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="8">
                    <v-card class="elevation-12">
                        <v-card-text class="pa-7 mt-12">
                            <h2 class="text-center mt-10 mb-5">Adicionar nova massagem</h2>
                            <v-form ref="form" v-model="valid" class="valid">
                                 
                                    <v-text-field
                                        v-model="title"
                                        :rules="fieldRules"
                                        label="Título"
                                        required
                                        outlined
                                    ></v-text-field>
                                
                                    <v-text-field
                                        v-model="shortDescription"
                                        :rules="fieldRules"
                                        label="Breve Descrição"
                                        required
                                        outlined
                                    ></v-text-field>

                                    <v-textarea
                                        v-model="description"
                                        :rules="fieldRules"
                                        outlined
                                        required
                                        name="input-7-4"
                                        label="Descrição Geral"
                                    ></v-textarea>

                                    <v-textarea
                                        v-model="recipients"
                                        :rules="fieldRules"
                                        outlined
                                        required
                                        name="input-7-4"
                                        label="Destinatários"
                                    ></v-textarea>

                                    <v-textarea
                                        v-model="expectation"
                                        :rules="fieldRules"
                                        outlined
                                        required
                                        name="input-7-4"
                                        label="O Que Esperar"
                                    ></v-textarea>

                                    <v-file-input
                                        accept="image/"
                                        label="File input"
                                        v-model="file"
                                        show-size
                                    ></v-file-input>
                                
                            </v-form>
                            <div class="text-center my-7">
                            <v-btn  
                                color="primary" 
                                :disabled="!valid" 
                                id="custom-disabled" 
                                @click="addMassage" 
                                :loading="isLoading"
                            >
                                Adicionar
                            </v-btn>
                            </div>
                        </v-card-text>   
                    </v-card>
                </v-col>
            </v-row>
          </v-container>
</template>

<script>
import{db, storage} from '@/firebase.js';

export default {
    name: 'AddMassage',
    data() {
        return{
            isLoading: false,
            valid: false,
            title:'',
            shortDescription:'',
            description:'',
            recipients:'',
            expectation:'',
            id:'',
            file:null,
            fieldRules: [
                v => !!v || 'campo obrigatório'
            ] ,
       }
    },
    methods:{
        resetForm() {
            this.$refs.form.reset()
        },

        async addMassage() {
            try{
                this.isLoading = false

                //upload file
                const fileRef = 'uploads/massages/' + this.file.name
                storage.ref(fileRef).put(this.file)
 
                let data = {
                        title: this.title,
                        shortDescription: this.shortDescription,
                        description: this.description,
                        recipients: this.recipients,
                        expectation: this.expectation,
                        id: this.id,
                        image: fileRef,
                }

                db.collection("massages").add(data)
                    .then((docRef) => {
                        var washingtonRef = db.collection("massages").doc(docRef.id);


                        return washingtonRef.update({
                        id: docRef.id
                        })
                        .then(function() {
                            console.log("Document successfully updated, Document id :" , docRef.id);

                        })
                        .catch(function(error) {
                            // The document probably doesn't exist.
                            console.error("Error updating document: ", error);
                        });
                    })
                    .catch(function(error) {
                        console.error("Error writing document: ", error);
                    });
                }catch(e){
               console.log(e)
           }
       }
    },
}
</script>