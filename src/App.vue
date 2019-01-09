<template>
  <div id="app">
    <the-nav-bar/>
    <the-menu/>
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavBar from './components/header/TheNavBar'
import TheMenu from './components/menu//TheMenu'

export default {
  name: 'App',
  components: {
    TheMenu,
    TheNavBar
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  padding: 0;
  background-color: #e8e8e1;
  /* font-family: Courier, monospace */
}

html, body{
  height: 100%;
}
</style>
