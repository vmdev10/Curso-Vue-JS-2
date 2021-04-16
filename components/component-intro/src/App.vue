<template>
  <div>
    <h1>CONTADORES</h1>
    <app-counter />
    <app-counter />
    <app-counter />
  </div>
</template>

<script>
import Counter from './Counter.vue'
export default {
  components: {
    'app-counter': Counter
  }

}
</script>

<style>

</style>
