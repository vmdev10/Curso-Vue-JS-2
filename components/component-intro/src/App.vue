<template>
  <div>
    <h1>CONTADORES</h1>
    <h2>{{ counter }}</h2>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  }
}
</script>

<style>
  button {
    margin-right: 10px;
  }
</style>
