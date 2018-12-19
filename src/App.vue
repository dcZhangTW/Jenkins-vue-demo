<template>
  <div id="app">
    <img src="./assets/logo.png">
    <my-tab :tabs="tabs" />
    <router-view/>
  </div>
</template>

<script>
import Tab from './components/Tab'
export default {
  name: 'App',
  components: {
    'my-tab': Tab
  },
  data () {
    return {
      tabs: [{
        name: '首页',
        path: '/index'
      }, {
        name: 'Vue展示',
        path: '/'
      }]
    }
  }
}
</script>

<style src="./style/base.scss"></style>
