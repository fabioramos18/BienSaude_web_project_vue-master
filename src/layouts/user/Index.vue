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
      HomeNavBar: () => import('@/layouts/user/Navbar'),
      HomeFooter: () => import('@/layouts/user/Footer'),
      HomeView: () => import('@/layouts/user/View'),
    },
    computed: {
      showMenu() {
    return this.$route.name !== 'register';
}
    }
  }
</script>
