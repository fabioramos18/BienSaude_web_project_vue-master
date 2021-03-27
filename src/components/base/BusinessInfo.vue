<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card
        title="Contactos de Apoio ao Cliente"
        pace="6"
      >
        Esclareça dúvidas ou peça informações sobre os seus serviços.
        </base-info-card>

      <base-business-contact dense />
    </div>
  </v-theme-provider>
</template>

<script>
  export default {

    name: 'BaseBusinessInfo',

    components: {
      BaseBusinessContact: () => import('@/components/base/BusinessContact'),
      BaseInfoCard: () => import('@/components/base/InfoCard'),
    },
  

    props: { dark: Boolean },

    data: () => ({
      business: [
        {
          icon: 'mdi-map-marker-outline',
          title: 'Address',
          text: '8553 N. Beach St. Ste. 227<br>Fort Worth, Texas 76137',
        },
        {
          icon: 'mdi-cellphone',
          title: 'Phone',
          text: '01 (800) 433 744<br>01 (800) 433 633',
        },
        {
          icon: 'person',
          title: 'Email',
          text: 'john@vuetifyjs.com<br>heather@vuetifyjs.com',
        },
      ],
    }),
  }
</script>
