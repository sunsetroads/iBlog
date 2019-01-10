<template>
  <div class="tag">
    <span>{{name}}</span>
  </div>
</template>

<script>
export default {
  name: "TagItem",
  props: {
    name: String
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.tag {
  position: relative;
  background-color: #869298;
  margin-left: 25px;
  border-radius: 0 4px 4px 0;
}

.tag span {
  display: inline-block;
  padding: 0 10px 0 12px;
  line-height: 24px;
  height: 24px;
  color: white;
  font-size: 13px
}

.tag span:before {
  content: "";
  float: left;
  position: absolute;
  top: 0;
  left: -12px;
  width: 0;
  height: 0;
  border-color: transparent #869298 transparent transparent;
  border-style: solid;
  border-width: 12px 12px 12px 0;
}

.tag span:after {
  content: "";
  position: absolute;
  top: 10px;
  left: 0;
  float: left;
  width: 4px;
  height: 4px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  background: #fff;
  -moz-box-shadow: -1px -1px 2px #004977;
  -webkit-box-shadow: -1px -1px 2px #004977;
  box-shadow: -1px -1px 2px #004977;
}
</style>