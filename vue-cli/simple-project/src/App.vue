<template>
  <div id="app">
    {{ title }}
    <button @click="title += '#'">ALTERAR</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "WELCOME TO VUE.JS",
    };
  },
};
</script>

<style>
#app {
  background-color: crimson;
  color: white;
}
</style>