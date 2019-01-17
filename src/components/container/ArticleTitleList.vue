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
        <a @click="goToDetail">{{item.CreateTime}}: {{item.Title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
	name: "ArticleTitleList",
	props: ['articles'],
  data() {
    return {};
	},
	methods: {
    goToDetail() {
      this.$router.push('/articledetail/123')
      this.store.dispatch('detail', {
        name: '2018-10-03',
        alias: '123'
      })
    }
  },
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