<template>
  <div id='container'>
    <article-list-item
      v-for="item in items"
      :article="item.message"
      :key="item.id"
    />
  </div>
</template>

<script>
import ArticleListItem from './ArticleListItem.vue'

export default {
  name: "container",
  data () {
    return {
      qwe: "123123",
      items: [
        { message: 'Foo', id: 1},
        { message: 'Foo', id: 2 },
        { message: 'Foo', id: 3 },
        { message: 'Foo', id: 4 },
        { message: 'Foo', id: 5 },
        { message: 'Foo', id: 6 },
        { message: 'Foo', id: 7 },
        { message: 'Foo', id: 8 },
        { message: 'Bar', id: 9 }
      ]
    };
  },

  components: {
    ArticleListItem
  }
}
</script>

<style scoped>
#container {
  padding-top: 5em;
}
</style>
