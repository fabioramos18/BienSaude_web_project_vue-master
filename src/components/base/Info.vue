<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card title="horárioS" />
      <base-title
        size="body-1"
        space="4"
        weight="regular"
      /> 

      <base-body
      class="grey--text">
       <span id="day">Segunda-feira: </span>Das 10h ás 22h <br>
       <span id="day">Terça-feira: </span>Das 10h ás 22h <br>
       <span id="day">Quarta-feira: </span>Das 10h ás 22h<br>
       <span id="day">Quinta-feira: </span>Das 10h ás 22h<br>
       <span id="day">Sexta-feira: </span>Das 10h ás 22h <br>
       <span id="day">Sábado: </span>Das 8h ás 22h <br>
       <span id="day">Domingo: Encerrado</span>
      </base-body>
    </div>
  </v-theme-provider>
</template>

<script>

  export default {
    name: 'BaseInfo',

     components: {
     // BaseTitle: () => import('@/components/base/Title'),
      BaseBody: () => import('@/components/base/Body'),
    },

    props: {
      title: String,
      dark: Boolean,
    },

  }
</script>

<style>
  #day{
    font-weight: bold;
  }
</style>