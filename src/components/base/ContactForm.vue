<template>
  <div>
    <base-info-card
      :title="title"
      :subtitle="subtitle"
      space="4"
      color="primary"
    />

    <base-text-field label="Name" />

    <base-text-field label="Email" />

    <base-text-field label="Subject" />

    <base-textarea
      class="mb-6"
      label="Menssagem"
    />

    <base-btn
    >
      Enviar Menssagem
    </base-btn>
  </div>
</template>

<script>
  export default {
    name: 'BaseContactForm',
    components: {
      //InfoFeatures: () => import('@/components/InfoFeatures'),
      BaseInfoCard: () => import('@/components/base/InfoCard'),
      BaseTextField: () => import('@/components/base/TextField'),
      BaseTextarea: () => import('@/components/base/Textarea'),
      BaseBtn: () => import('@/components/base/Btn')
    },
  

    // Injected from the Vuetify Themeable mixin
    inject: ['theme'],

    props: {
      subtitle: String,
      title: {
        type: String,
        default: 'MAIL US YOUR MESSAGE',
      },
    },
  }
</script>
