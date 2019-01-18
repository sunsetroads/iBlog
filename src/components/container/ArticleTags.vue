<template>
  <div class="tags">
    <tag-item 
		v-for="(item, index) in tags" 
		:key="index" 
		:name="item"
	/>
  </div>
</template>

<script>
import TagItem from "./TagItem";

export default {
  name: "ArticleTags",
  data() {
    return {};
  },
  props: {
    tags: Array
  },
  components: {
    TagItem
  }
};
</script>

<style scoped>
.tags {
  display: flex;
  justify-content: flex-end;
  padding: 2px 0 0;
}
</style>