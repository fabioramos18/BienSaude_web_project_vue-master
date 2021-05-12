
<template>
  <v-app>
      <v-content>
          <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="4" md="4">
                    <v-card class="elevation-12">
                        <v-card-text class="pa-7 mt-12">
                            <v-row>
                                <v-col cols="12" md="8">
                                    <router-link to="/">
                                        <v-img  max-width="230px" src="/logo.png" > </v-img>
                                    </router-link>
                                </v-col>
                            </v-row>
                            <h2 class="text-center mt-10 mb-5">Inicie sessão na sua conta BienSaude</h2>
                            <div class="text-center mb-4">
                                Não tem uma conta? 
                                <router-link to="/register">
                                    <a class="primary--text text-decoration-underline">Registar</a> 
                                </router-link>
                            </div>
                            <v-form v-model="valid" class="valid">
                                <v-text-field
                                v-model="email"
                                label="Email"
                                name="Email"
                                prepend-icon="email"
                                type="text"
                                color="primary"
                                :rules="emailRules"
                                />
                                <v-text-field
                                    v-model="password"
                                    prepend-icon="lock"
                                    :append-icon="show ? 'visibility' : 'visibility_off'"
                                    :rules="[rules.required]"
                                    :type="show ? 'text' : 'password'"
                                    name="password"
                                    label=" Password"
                                    @click:append="show = !show"
                                ></v-text-field>
                            </v-form>
                            <div class="text-center my-7">
                            <v-btn color="primary"  :disabled="!valid" id="custom-disabled" @click="login"> SIGN IN</v-btn>
                            </div>
                            <div>
                                <div class="text-center primary--text text-decoration-underline" href="#four">
                                    <a>Esqueçeu a sua palavra-passe?</a> 
                                </div>
                            </div>
                        </v-card-text>   
                    </v-card>
                </v-col>
            </v-row>
          </v-container>
      </v-content>
  </v-app>
</template>
<script>

//import firebase from '../firebase';
import {fb} from '@/firebase.js';

export default {

    data: () => ({
        step: 1,
        show: false,
        show1: false,
        valid:false,
        password: '',
        email: '',
        emailRules: [
        v => !!v || 'E-mail é obrigatório',
        v => /^(([^<>ºª*+`´!"#$%=&/()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(v) || 'E-mail must be valid',
      ],
      rules: {
        required: (value) => !!value || " Password é obrigatória.",
      },  
    }),

    props: {
        source:String
    },

    methods: {

        login(){
            fb.auth().signInWithEmailAndPassword(this.email, this.password)
           .then(() => {
               
                this.$router.replace('user/inicio')
                
            }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Password incorreta.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
        },
    },
};
</script>
<style>
h2{
    font-size: 19px;
}
#custom-disabled.v-btn--disabled {
    background-color: rgb(231, 231, 231) !important;
}
</style>