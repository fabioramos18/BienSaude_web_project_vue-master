
<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Início',

    metaInfo: { title: 'Início' },

    extends: View,

    mixins: [
      LoadSections([
        'Header-Info',
        'about-us',
        'services',
        'footer-info',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'home',
      },
    },
  }
</script>
