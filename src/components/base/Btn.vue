<template>
  <v-btn
    class="font-weight-bold ma-2"
      outlined
    x-large
  >
    <slot />
  </v-btn>
</template>

<script>
  export default {
    name: 'BaseBtn',

    props: {
      
    },
  }
</script>
