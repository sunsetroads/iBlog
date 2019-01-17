<template>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :xs="24" :sm="18" :md="16" :lg="14" :xl="12" class="content">
      <h2>{{title}}</h2>
      <div v-html="content" class="markdown-body" v-highlight></div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "ArticleDetail",
  props: ["alias"],
  data() {
    return {
      content: "",
      title: ""
    };
  },

  created() {
    this.$http
      .get("/api/articleDetail", {
        params: {
          alias: this.alias
        }
      })
      .then(result => {
        this.content = result.data.Content;
        this.title = result.data.Title;
      });
  }
};
</script>

<style scoped>
@import url("../../assets/github-markdown.css");

h2 {
  text-align: center;
}

.content {
  padding: 90px 20px 20px;
}

@media (min-width: 1500px) {
  .content {
    max-width: 800px;
    /* margin: auto */
  }
}
</style>
