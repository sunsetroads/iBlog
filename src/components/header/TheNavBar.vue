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
    };
  },
  computed: {
    links () {
      return this.store.state.links
    }
  },
  components: {
    BreadcrumbItem
  }
}
</script>

<style scoped>
#head {
  box-shadow: 0 8px 17px 0px rgba(0, 0, 0, .2);
  background-color: #f9f9f9;
  padding: .9em;
  margin-bottom: 20px;
  position: fixed;
  width: 100%;
  font-family: Verdana,Geneva,sans-serif;
  font-size: 17px;
  color: #900;
}

a {
    font-size: 100%;
    color: #900;
}
</style>
