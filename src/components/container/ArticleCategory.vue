<template>
  <div class="category">
    <el-row>
      <el-col :span="14" :offset="5">
        <h2>Tag Page for the Category "efficient"</h2>
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
  name: "ArticleCategory",
  data() {
    return {
      articles: ["a", "b", "c", "c", "c", "c", "c"]
    };
  }
};
</script>

<style scoped>
h2 {
  margin-bottom: 40px;
   text-align: center;
  color: #252525;
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
