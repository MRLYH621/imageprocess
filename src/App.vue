<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <ImageProcess></ImageProcess>
  </div>
</template>

<script>


import Header from './components/header'
import ImageProcess from './views/imageProcess/imageProcess.vue'

export default {
  name: 'App',
  components: {
    ImageProcess ,
    Header
  }
}
</script>

<style lang="less" scoped>




</style>

