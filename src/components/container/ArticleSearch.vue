<template>
  <div class="search">
    <el-row>
      <el-col :span="8" :offset="8" class="vinput">
        <el-input v-model="searchText" placeholder="请输入" autofocus="true"></el-input>
      </el-col>
      <el-col :span="14" :offset="5">
        <article-title-list :articles="articles"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ArticleTitleList from "./ArticleTitleList";

export default {
  name: "ArticleSearch",
  data() {
    return {
      searchText: "",
      articles: []
    };
  },

  watch: {
    searchText(newValue) {
      if (newValue == '') {
        this.articles = []
        return
      }

      this.$http
        .post("/api/articles", {
          searchText: newValue
        })
        .then(result => {
          this.articles = result.data
        });
    }
  },

  components: {
    ArticleTitleList
  }
};
</script>

<style>
.vinput .el-input__inner:focus {
  border: none;
}
.vinput .el-input__inner {
  background-color: #f9f9f9;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.2);
  border: none;
  margin-bottom: 35px;
  margin-top: 15px;
}
</style>


<style scoped>
.search {
  padding-top: 90px;
}
</style>
