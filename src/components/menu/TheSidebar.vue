<template>
<div id="sidebar">
  <ul>
    <li>About</li>
    <li>Admin</li>
    <li>Search</li>
    <li>Subscribe</li>
    <ul>
      <li
        v-for="(item, index) of items"
        :key="item.id"
        @click="select(index)"
      >
        {{item.message}}
      </li>
    </ul>
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
        { message: 'Foo', id: 1},
        { message: 'Foo', id: 2 },
        { message: 'Foo', id: 3 },
        { message: 'Foo', id: 4 },
        { message: 'Foo', id: 5 },
        { message: 'Foo', id: 6 },
        { message: 'Foo', id: 7 },
        { message: 'Foo', id: 8 },
        { message: 'Bar', id: 9 }
      ]
    };
  },
  methods: {
    select(index){
      // let select = this.items[index]
    }
  }
}
</script>

<style scoped>
#sidebar{
padding-top: 100px;
padding-left: 15px;
color: #eeeded;
font-size: 16px;
font-weight: 500
}

a{
  text-decoration-style: solid
}

.about {
  margin-bottom: 20px
}

ul{
  list-style: none;
  margin-top: 0
}

ul li {
cursor: pointer;
padding-top: 8px
}

ul li:hover {
  opacity: 0.7;
}
</style>
