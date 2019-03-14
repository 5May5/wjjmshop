<!--  -->
<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-if="$route.meta.isShowFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components(非路由组件文件夹)/FooterGuide/FooterGuide'
export default {
  data () {
    return {
    };
  },

  components: {FooterGuide},

  computed: {},

  // mounted: {},

  methods: {}
}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
.app
  width 100%
  height 100%
  background #f5f5f5
</style>
