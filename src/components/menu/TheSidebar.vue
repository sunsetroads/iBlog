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
          <a href="">{{item.message}}</a>
          <span class="count">  (11)</span>
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
        about: '',
        items: [
        { message: 'emacs', id: 1},
        { message: 'Swift', id: 2 },
        { message: 'OC', id: 3 },
        { message: 'Note', id: 4 },
        { message: 'emacs', id: 5},
        { message: 'Swift', id: 6 },
        { message: 'OC', id: 7 },
        { message: 'Note', id: 8 }
      ]
    };
  },
  methods: {
    categorySelect(index){
      // let select = this.items[index]
    },
    aboutClick() {

    },
    searchClick() {

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
  font-weight: bold
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
