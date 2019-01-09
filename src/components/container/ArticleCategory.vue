<template>
  <div class="category">
    <h2>
      Tag Page for the Category "efficient" 
    </h2>
    <div class="article">
      <hr>
      <p>
        All articles tagged with emacs 
        <span> 
          (sorted by last update, oldest on top)
        </span>
        :
      </p>
      <ul>
        <li v-for="(item, index) in articles" :key="index">
          <span>2017-1-2 11:53</span><a href=""> swift中获取对象类型</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleCategory",
  data() {
    return {
      articles: [
        "a",
        "b",
        "c","c","c","c","c"
      ]
    };
  }
};
</script>

<style scoped>
.article {
  padding: 20px 200px;
}

span {
  color: #7e7e7e;
}

li>span {
  font-size: 13px
}

ul li{
  padding-top: 7px;
}

a {
  color: #900;
  font-size: 15px;
}

h2 {
  text-align: center;
  color: #252525;
}

.category {
  padding-top: 90px;
}
</style>
