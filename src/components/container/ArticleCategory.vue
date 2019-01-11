<template>
  <div class="category">
    <el-row>
      <el-col :span="14" :offset="5">
        <h2>Tag Page for the Category "efficient"</h2>
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
  data() {
    return {
      articles: ["a", "b", "c", "c", "c", "c", "c"]
    };
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
