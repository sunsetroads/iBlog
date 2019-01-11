<template>
  <div id="head">
    <a href="/">iBlog</a>
    <breadcrumb-item
      v-for="(item, index) in links" :key="index"
      :link = "item"
    />
  </div>
</template>

<script>
import BreadcrumbItem from './BreadcrumbItem'

export default {
  name: "TheNavBar",
  data () {
    return {
      links: this.store.state.links
    };
  },
  components: {
    BreadcrumbItem
  }
}
</script>

<style scoped>
#head {
  box-shadow: 0 2px 9px 0px rgba(0, 0, 0, .1);
  background-color: #f9f9f9;
  padding: .9em;
  margin-bottom: 20px;
  position: fixed;
  width: 100%;
  font-family: Verdana,Geneva,sans-serif;
  font-size: 17px;
  color: #900;
  z-index: 1000;
}

a {
    font-size: 100%;
    color: #900;
}
</style>
