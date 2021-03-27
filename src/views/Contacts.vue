<template>
  <div class="contacts">
    <h1 class="subheading grey--text">Contacts</h1>

    <v-container  class=my-5>
      
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card elevation="2" outlined flat class="overline mb-4 text-md-center ma-3"> 
            <v-responsive class="pt-4">
              <v-avatar>
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{person.role}}</div>
            </v-card-text>
            <v-card-action>
              <v-btn text flat color="grey">
                <v-icon small left> message</v-icon> 
                <span>Message</span>
              </v-btn>
            </v-card-action>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
 
 
  </div>
</template>

<script>


export default {
  name: 'Contacts',

  data() {
    return {
      team: [
        {name: 'Real Madrid', role: 'La Liga', avatar: '/avatar-64.png'},
        {name: 'Paris Saint-Germain', role: 'Ligue 1', avatar:'/avatar-64.png'},
        {name: 'Liverpool', role: 'Premier League', avatar:'/avatar-64.png'},
        {name: 'Benfica', role: 'Primeira Liga', avatar:'/avatar-64.png'},
        {name: 'Juventus', role: 'Serie A', avatar:'/avatar-64.png'},
      ]
    }
  },
}
</script>
