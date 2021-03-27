<template>
  <v-theme-provider :dark="dark">
    <div class="ml-1">
      <base-info-card
        :title="title"
        color="primary"
      >
        <slot />
      </base-info-card>

      <template v-for="({ icon, text, title: t }, i) in business">
        <base-avatar-card
          :key="i"
          :icon="icon"
          :outlined="false"
          :title="!dense ? t : undefined"
          color="grey"
          horizontal
          space="0"
        >
          <!-- Do not use v-html for user -->
          <!-- provided values -->
          <div class="pr-20" v-html="text"/>
        </base-avatar-card>

        <v-divider
          v-if="i + 1 !== business.length"
          :key="`divider-${i}`"
          class="my-2"
        />
      </template>
    </div>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'BaseBusinessContact',

    components: {
      BaseInfoCard: () => import('@/components/base/InfoCard'),
      BaseAvatarCard: () => import('@/components/base/AvatarCard'),
      },

    props: {
      dark: Boolean,
      dense: Boolean,
      title: String,
    },

    data: () => ({
      business: [
        {
          icon: 'mdi-map-marker-outline',
          title: 'Address',
          text: 'R. Mal. Gomes da Costa<br> Famões',
        },
        {
          icon: 'mdi-cellphone',
          title: 'Phone',
          text: '(+351) 929 293 747<br>(+351) 967 656 778',
        },
        {
          icon: 'person',
          title: 'Email',
          text: 'biensaude@gmail.com<br>help.biensaude@gmail.com',
        },
      ],
    }),
  }
</script>

<style>
  
</style>