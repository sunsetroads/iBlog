<template>
  <div class="category">
    <el-row>
      <el-col :span="8" :offset="8" class="search">
        <el-input v-model="searchText" placeholder="请输入" autofocus="true"></el-input>
      </el-col>
      <el-col :span="14" :offset="5">
        <hr>
        <p>
          All articles tagged with emacs
          <span>(sorted by last update, oldest on top)</span>
          :
        </p>
        <ul>
          <li v-for="(item, index) in articles" :key="index">
            <a href>2017-1-2: swift中获取对象类型</a>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "ArticleSearch",
  data() {
    return {
      searchText: "",
      articles: ["a", "b", "c", "c", "c", "c", "c"]
    };
  },
  created() {

  },
  mounted() {

  },
  destroyed() {
    
  }
};
</script>
<style>
.search .el-input__inner:focus{
  border: none
}
.search .el-input__inner{
  background-color: #f9f9f9;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.2);
  border: none
}
</style>


<style scoped>
hr {
  margin: 40px 0 20px;
}

ul li {
  padding-top: 7px;
}

a {
  color: #900;
  font-size: 15px;
}

.category {
  padding-top: 90px;
}
</style>
