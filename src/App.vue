<template>
  <div id="app">
    <the-nav-bar/>
    <the-menu/>
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavBar from './components/header/TheNavBar'
import TheMenu from './components/menu/TheMenu'

export default {
  name: 'App',
  components: {
    TheMenu,
    TheNavBar
  }
}
</script>

<style>
@import url('./font/font.css');

#app {
  background-color: #e8e8e1;
  height: 100%;
  overflow: scroll
}

body {
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
  font-family: Inconsolata,monospace;
  color: #404040;
  font-size: 1em
}

a {
  text-decoration: none;
  cursor: pointer;
}

html, body{
  height: 100%;
}
</style>
