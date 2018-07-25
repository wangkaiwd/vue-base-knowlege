const mixin = {
  data () {
    return {
      pageKey: {
        pageindex: 1,
        pagesize: 25,
      }
    }
  },
  mounted () {
    console.log('mixin mounted')
  },
  methods: {
    loadMore () {
      console.log('mixin loadMore')
    },
    refresh () {
      console.log('mixin refresh')
    }
  }
}
export default mixin