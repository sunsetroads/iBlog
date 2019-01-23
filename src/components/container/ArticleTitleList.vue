<template>
  <div>
    <hr>
    <p>
      All articles tagged with emacs
      <span>(sorted by last update, oldest on top)</span>
      :
    </p>
    <ul>
      <li v-for="(item, index) in articles" :key="index">
        <a @click="goToDetail(index)">{{item.CreateTime}}: {{item.Title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ArticleTitleList",
  props: ["articles"],
  data() {
    return {};
  },
  methods: {
    goToDetail(index) {
      let select = this.articles[index];
      this.$router.push("/articledetail/" + select.Alias);
      this.store.dispatch("detail", {
        name: select.CreateTime,
        alias: select.Alias
      });
    }
  }
};
</script>

<style scoped>
ul li {
  padding-top: 7px;
}

a {
  color: #900;
  font-size: 15px;
}
</style>