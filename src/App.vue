<template>
  <div id="app">
    <Header></Header>
    <ImageProcess></ImageProcess>
  </div>
</template>

<script>


import Header from './components/header.vue'
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


#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */

}

</style>

