<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Serviços',
   
    metaInfo: { title: 'Serviços' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'testmassage'
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'serviços',
      },
    },
  }
</script>
