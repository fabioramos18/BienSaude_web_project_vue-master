<template>
  <v-app>

    <home-nav-bar v-if="showMenu"/>

    <home-view />

    <home-footer />

  </v-app>
</template>

<script>
  export default {
    name: 'UserLayout',

    components: {
      HomeNavBar: () => import('@/layouts/admin/Navbar'),
      HomeFooter: () => import('@/layouts/admin/Footer'),
      HomeView: () => import('@/layouts/admin/View'),
    },
    computed: {
      showMenu() {
    return this.$route.name !== 'register';
}
    }
  }
</script>
<style lang="css">

#backG{
  background-color: aqua;
}
  
</style>