<template>
  <base-section
    id="info-alt"
    space="56"
  >
    <v-container>
      <v-row justify="space-between">
        <v-col
          cols="12"
          md="5"
        >
          <base-business-info>
            frLorem ipsum dolor, sit amet consectetur adipisicing elit. Illo pariatur quidem, quis modi iure nihil commodi suscipit, corporis dicta adipisci, voluptatum quia cupiditate.
          </base-business-info>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <base-contact-form title="envie-nos a sua menssagem" />
        </v-col>
        
        <v-col
          cols="12"
          md="5"
        >
          <base-info/>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  import section from '@/components/base/Section.vue'
  import BusinessInfo from '@/components/base/BusinessInfo.vue'
  import ContactForm from '@/components/base/ContactForm.vue'
  import Info from '@/components/base/Info.vue'
  export default {
    components: {
      'base-section': section,
      'base-business-info': BusinessInfo,
      'base-contact-form': ContactForm,
      'base-info': Info,
    },
    name: 'SectionKeepInTouch',
  }
</script>
