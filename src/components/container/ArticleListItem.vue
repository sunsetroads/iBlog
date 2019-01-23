<template>
  <el-row>
    <el-col :span="16" :offset="4">
      <div class="article">
        <article-tags :tags="tags"/>
        <h1>
          <a @click="goToDetail">{{article.CreateTime}}: {{article.Title}}</a>
        </h1>
        <p>{{article.Summary}}</p>
        <a class="whole" @click="goToDetail">阅读全文...</a>
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
    return {};
  },
  computed: {
    tags() {
      return JSON.parse(this.article.Labels).map(item => item.value);
    }
  },
  methods: {
    goToDetail() {
      this.$router.push("/articledetail/" + this.article.Alias);
      this.store.dispatch("detail", {
        name: this.article.CreateTime,
        alias: this.article.Alias
      });
    }
  },
  components: {
    ArticleTags
  }
};
</script>

<style scoped>
.article {
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.2);
  padding: 1em 2em;
  margin-bottom: 1.5em;
  margin-bottom: 1.5em;
  border-radius: 0.2em;
  color: #404040;
  font: 15;
}

.whole {
  color: #900;
  font-size: 15px;
}

h1 {
  margin-top: 0px;
}

h1 a {
  color: #900;
  font-size: 17px;
}

p {
  font-size: 1em;
  margin-bottom: 1.0em;
  line-height: 1.7em;
}
</style>
