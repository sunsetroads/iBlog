<template>
  <div class="article">
    <p>{{article}}</p>
  </div>
</template>

<script>
export default {
  name: "ArticleListItem",

  props: ['article'],

  data () {
    return {
    };
  }
}
</script>

<style scoped>
.article {
  background-color: #ffffff;
  box-shadow: 0 3px 9px rgba(0, 0, 0, .2);
  padding-top: 3em;
  padding-left: 2em;
  padding-right: 2em;
  padding-bottom: .5em;
  margin-left: 10em;
  margin-right: 10em;
  margin-bottom: 1.5em;
  border-radius: .2em;
  height: 300px;
}
</style>
