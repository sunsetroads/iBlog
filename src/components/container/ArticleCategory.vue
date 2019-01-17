<template>
  <div class="category">
    <el-row>
      <el-col :span="12" :offset="6">
        <h2>Tag Page for the Category "{{cateName}}"</h2>
        <article-title-list
          :articles ="articles"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ArticleTitleList from './ArticleTitleList'

export default {
  name: "ArticleCategory",
  props: ['alias','cateName'],

  data() {
    return {
      articles: []
    };
  },

  created() {
      this.request(this.alias)
  },

  mounted() {

  },

  beforeRouteUpdate (to, from, next) {
      this.request(to.params.alias)
      next()
  },

  methods: {
    request(alias) {
      this.$http.post('/api/articles', {
        categoryAlias: alias
      }).then((result) => {
        this.articles = result.data
      });
    }
  },

  components: {
    ArticleTitleList
  }
};
</script>

<style scoped>
h2 {
  margin-bottom: 40px;
  text-align: center;
  color: #252525;
}
.category {
  padding-top: 90px;
}
</style>
