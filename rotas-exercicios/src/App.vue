<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<router-view name="menu"></router-view>
		<router-view></router-view>
	</div>
</template>

<script>
export default {};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
