<template>
  <el-row>
    <el-col :span="16" :offset="4">
      <div class="article">
        <article-tags :tags="tags"/>
        <h1>
          <a @click="goToDetail">2018-10-03: Switch Things Faster</a>
        </h1>
        <p>{{article.message}}</p>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import ArticleTags from "./ArticleTags";

export default {
  name: "ArticleListItem",
  props: ["article"],
  data() {
    return {
      tags: ["emcas", "mmm", "vvvv"]
    };
  },
  methods: {
    goToDetail() {
      this.$router.push('/articledetail:' + 'id')
      this.store.dispatch('detail',{
        name: '2018-10-03',
        id: '123'
      })
    }
  },
  components: {
    ArticleTags
  }
};
</script>

<style scoped>
.article {
  background-color: #ffffff;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.2);
  padding: 1em 2em;
  margin-bottom: 1.5em;
  margin-bottom: 1.5em;
  border-radius: 0.2em;
  height: 300px;
}

h1 {
  margin-top: 0px;
}

h1 a {
  color: #ab7272;
  font-size: 17px;
}

p {
  line-height: 1.4em;
}
</style>
