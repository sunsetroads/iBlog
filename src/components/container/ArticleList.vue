<template>
  <div id='container'>
    <article-list-item
      v-for="item in items"
      :article="item"
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
        { message: 'Talking about buffer switching in emacs in the last post , I said that I have keybindings to switch between the two and three most recent used buffers. And the author of the reddit post chose to use buffer-flip package', id: 1},
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
