<template>
  <v-main class="backG pl-0">
    <v-fade-transition mode="out-in">
      <router-view />
    </v-fade-transition>
  </v-main>
</template>

<script>
  export default {
    name: 'BaseView',
  }
</script>

<style lang="css">

.backG{
  background-color: rgb(238 238 238);
}
  
</style>

