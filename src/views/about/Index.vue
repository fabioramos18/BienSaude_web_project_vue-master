<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Sobre',

    metaInfo: { title: 'Sobre' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'about-page',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'about',
      },
    },
  }
</script>
