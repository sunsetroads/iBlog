
<template>
	<div class="breadcrumb" v-if="link">
		<span>/</span>
		<a @click="goTo">{{link.name}}</a>
	</div>
</template>

<script>
export default {
  name: "BreadcrumbItem",
  props: {
		link: Object
	},
  data () {
	return {
	};
  },
  methods: {
	goTo() {
		let path = this.link.path
		this.$router.push(path)
	}
  }
}
</script>

<style scoped>
.breadcrumb{
	display: inline-block;
}

span{
	padding-left: 5px;
	color: lightgray;
}

a{
	padding-right: 5px;
	font-size: 90%;
    font-family: Verdana,Geneva,sans-serif;
	cursor: pointer;
}

a:hover{
	opacity: 0.7;
}
</style>