<template>
  <section id="services">
    <h1 class="subheading grey--text">Services</h1>

   

  <v-container  class=my-5>

    <v-expansion-panels>
    <v-expansion-panel v-for="project in myProjects" :key="project.title">
      <v-expansion-panel-header>
        {{project.title}}
      </v-expansion-panel-header>
      <v-expansion-panel-content class="px-4 grey--text">
        <div class="font-weight-bold">due by {{project.date}}</div>
        <div>{{project.content}}</div>  
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

  </v-container>
 
  </section>
</template>

<script>
import db from '@/fb'
export default {
  name: 'Services',
  data() {
    return {
      projects: []
    }
  },
  computed: {
    myProjects(){
        return this.projects.filter(project => {
          return project.person === 'The Net Ninja'
        })
    }
  },
  created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if(change.type === 'added'){
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  }

}
</script>




