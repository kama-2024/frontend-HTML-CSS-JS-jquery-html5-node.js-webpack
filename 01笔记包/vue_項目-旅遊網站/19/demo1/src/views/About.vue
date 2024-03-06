<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{toRouter}}
  </div>
</template>
<script>
export default{
	computed:{
		toRouter(){
			console.log(this.$route.query.aaa)
		}
	}
}
</script>