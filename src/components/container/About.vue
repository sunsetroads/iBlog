<template>
  <el-row class="category">
    <el-col :span="5" :offset="5">
      <span>I like:</span>
      <ul>
        <li v-for="(item, index) in skills" :key="index">{{item}}</li>
      </ul>
      <span>Email:</span>
      <ul>
        <li>{{email}}</li>
      </ul>
      <span>Github:</span>
      <ul>
        <li>
          <a :href="github" target="blank">{{github}}</a>
        </li>
      </ul>
    </el-col>
    <el-col :span="5" :offset="4">
      <span>Project</span>
      <ul>
        <li>
          <a>iBlog</a>
        </li>
      </ul>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      skills: [
        "iOS",
        "Node",
        "Web",
        "Swift",
        "Objective-C",
        "JavaScript",
        "ReactiveX",
        "Vue"
      ],
      email: "ningvvy@gmail.com",
      github: "https://github.com/znvy"
    };
  }
};
</script>

<style scoped>
.category {
  padding-top: 100px;
}

img {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-top: 50px;
}

span {
  font-size: 17px;
  font-weight: bold;
}

ul {
  margin-top: 0;
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

a {
  color: black;
}

a:hover {
  color: #900;
}
</style>
