<template>
  <v-content class="pl-0">
    <v-fade-transition mode="out-in">
      <router-view />
    </v-fade-transition>
  </v-content>
</template>

<script>
  export default {
    name: 'BaseView',
  }
</script>

