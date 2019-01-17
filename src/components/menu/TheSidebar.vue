<template>
<div id="sidebar">
  <ul>
    <li @click="aboutClick">About</li>
    <li @click="searchClick">Search</li>
    <li class="category">
      <span>Category :</span>
      <ul>
        <li
          v-for="(item, index) of items"
          :key="item.id"
          @click="categorySelect(index)"
        >
          <a>{{item.cateName}}</a>
          <span class="count">  ({{item.count}})</span>
        </li>
    </ul>
    </li>
  </ul>
  
</div>
</template>

<script>
export default {
  name: "TheSidebar",
  data () {
    return {
        items: []
    };
  },
  created() {
      this.$http.get('/api/categories').then((result) => {
        this.items = result.data
      });
  },
  methods: {
    categorySelect(index){
      let select = this.items[index]
      this.$router.push({
        name: 'Category',
        params: {
          alias: select.alias,
          cateName: select.cateName
        }
      })
      this.store.dispatch('category',{
        name: select.cateName,
        id: select.alias
      });
    },
    aboutClick() {
      this.$router.push('/about');
      this.store.dispatch('about');
    },
    searchClick() {
      this.$router.push('/search');
      this.store.dispatch('search');
    }
  }
}
</script>

<style scoped>
#sidebar{
  padding-top: 100px;
  padding-left: 15px;
  color: #eeeded;
  font-size: 15px;
}

.count {
  opacity: 0.7;
}

ul{
  list-style: none;
  margin-top: 0
}

ul li {
cursor: pointer;
padding-top: 15px;
}

ul li li {
  font-size: 13px;
  padding-top: 11px;
}

ul li:first-child {
cursor: pointer;
padding-top: 15px;
}

ul li:not(.category):hover {
  opacity: 0.7;
}

.category ul{
  list-style: initial;
}

a{
  color: #eeeded;
  font-size: small;
  font-weight: sold;
}
</style>
