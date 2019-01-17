<template>
  <div id="container">
    <article-list-item v-for="item in articles" :article="item" :key="item.id"/>
  </div>
</template>

<script>
import ArticleListItem from './ArticleListItem.vue'

export default {
  name: "container",
  data () {
    return {
      articles: []
    };
  },

  created() {
    this.$http
        .post("/api/articles", {
          isHome: true
        })
        .then(result => {
          this.articles = result.data
        });
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
