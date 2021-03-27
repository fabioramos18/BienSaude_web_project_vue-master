<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'ContactUs',

    metaInfo: { title: 'Contactos' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'contacts',
        'keep-in-touch',
        'map',
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
